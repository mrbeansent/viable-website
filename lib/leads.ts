import nodemailer, { type Transporter } from 'nodemailer'
import { CONTACT_EMAIL } from '@/components/links'

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type LeadResult = { ok: true; delivered: string[] } | { ok: false; error: string }

export type OutgoingEmail = { to: string; subject: string; html: string; text: string; from?: string }

const FAIL_MSG = `Could not send your request. Please try again, or email us at ${CONTACT_EMAIL}.`

/*
 * Where a lead goes. Every channel is optional; at least one must succeed or the visitor sees an error,
 * so a lead is never silently dropped behind a success screen.
 *
 * 1. Team alert email (Gmail SMTP). Lands in info@ with Reply-To set to the lead.
 *    SMTP_USER, SMTP_PASS (Google app password), optional SMTP_HOST/SMTP_PORT, LEAD_ALERT_TO, SMTP_FROM.
 * 2. Webhook (n8n later, or GHL). LEAD_WEBHOOK_URL (GHL_WEBHOOK_URL still read), optional LEAD_WEBHOOK_SECRET
 *    sent as the X-Viable-Secret header.
 *
 * Confirmation emails to the lead are best effort and never fail the request.
 */

let transport: Transporter | null | undefined

function mailer() {
  if (transport !== undefined) return transport
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  if (!user || !pass) return (transport = null)
  const port = Number(process.env.SMTP_PORT || 465)
  transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port,
    secure: port === 465,
    auth: { user, pass },
  })
  return transport
}

const defaultFrom = () => process.env.SMTP_FROM || `Viable Works <${process.env.SMTP_USER || CONTACT_EMAIL}>`

export async function sendEmail(mail: OutgoingEmail & { replyTo?: string }): Promise<boolean> {
  const t = mailer()
  if (!t) return false
  try {
    await t.sendMail({
      from: mail.from || defaultFrom(),
      to: mail.to,
      replyTo: mail.replyTo,
      subject: mail.subject,
      html: mail.html,
      text: mail.text,
    })
    return true
  } catch (err) {
    console.error('Email send failed:', mail.subject, err)
    return false
  }
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function flatten(obj: Record<string, unknown>, prefix = ''): [string, string][] {
  const rows: [string, string][] = []
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null || v === '') continue
    const key = prefix ? `${prefix}.${k}` : k
    if (Array.isArray(v)) rows.push([key, v.map(String).join(', ')])
    else if (typeof v === 'object') rows.push(...flatten(v as Record<string, unknown>, key))
    else rows.push([key, String(v)])
  }
  return rows
}

function alertEmail(payload: Record<string, unknown>) {
  const who = [payload.business, payload.name, payload.email].filter(Boolean).join(' · ')
  const subject = `New lead (${payload.type}): ${who}`
  const rows = flatten(payload)
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n') + '\n\nReply to this email to answer the lead directly.'
  const html = `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="color:#666;vertical-align:top">${esc(k)}</td><td>${esc(v)}</td></tr>`)
    .join('')}</table><p style="font-family:Arial,sans-serif;font-size:13px;color:#666">Reply to this email to answer the lead directly.</p>`
  return { subject, text, html }
}

async function postWebhook(payload: Record<string, unknown>): Promise<boolean | null> {
  const url = process.env.LEAD_WEBHOOK_URL || process.env.GHL_WEBHOOK_URL
  if (!url) return null
  try {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' }
    if (process.env.LEAD_WEBHOOK_SECRET) headers['X-Viable-Secret'] = process.env.LEAD_WEBHOOK_SECRET
    const res = await fetch(url, { method: 'POST', headers, body: JSON.stringify(payload), signal: AbortSignal.timeout(8000) })
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`)
    return true
  } catch (err) {
    console.error('Lead webhook failed:', err)
    return false
  }
}

export async function forwardLead(
  payload: Record<string, unknown>,
  opts: { confirmation?: OutgoingEmail } = {},
): Promise<LeadResult> {
  const alert = alertEmail(payload)
  const [hook, alerted] = await Promise.all([
    postWebhook(payload),
    mailer()
      ? sendEmail({ to: process.env.LEAD_ALERT_TO || CONTACT_EMAIL, replyTo: String(payload.email || ''), ...alert })
      : Promise.resolve(null),
  ])

  const delivered: string[] = []
  if (hook) delivered.push('webhook')
  if (alerted) delivered.push('alert-email')

  if (!delivered.length) {
    // Keep the full lead in the server log so it can be recovered by hand.
    console.error('LEAD NOT DELIVERED', JSON.stringify(payload))
    return { ok: false, error: FAIL_MSG }
  }

  if (opts.confirmation && (await sendEmail(opts.confirmation))) delivered.push('confirmation')
  return { ok: true, delivered }
}

export function clean(value: unknown, max = 500): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

// Accepts "example.com" or "https://example.com" and returns a normalised https URL, or '' if invalid.
export function normaliseUrl(value: string): string {
  if (!value) return ''
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`
  try {
    const url = new URL(withProtocol)
    return url.hostname.includes('.') ? url.toString() : ''
  } catch {
    return ''
  }
}

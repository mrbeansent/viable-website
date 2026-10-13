export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type LeadResult = { ok: true; forwarded: boolean } | { ok: false; error: string }

// Leads and tags go to GoHighLevel: point GHL_WEBHOOK_URL at an inbound webhook trigger.
export async function forwardLead(payload: Record<string, unknown>): Promise<LeadResult> {
  const webhook = process.env.GHL_WEBHOOK_URL
  if (!webhook) {
    console.warn('GHL_WEBHOOK_URL is not set. Lead was not forwarded:', JSON.stringify(payload))
    return { ok: true, forwarded: false }
  }

  try {
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`)
    return { ok: true, forwarded: true }
  } catch (err) {
    console.error('Lead webhook failed:', err)
    return { ok: false, error: 'Could not send your request. Please try again.' }
  }
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

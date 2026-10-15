// "Audit request received" confirmation email (Figma 145:638, 600px wide).
// Table-based, inline styles only. No email provider is wired yet: call this and hand { subject, html, text } to whichever sender is chosen.
// Banner/logo images must be absolute URLs in the real email: SITE_URL below.

const SITE_URL = 'https://www.viable-works.com'
const FROM = 'Belle at Viable Works <info@viable-works.com>'

export type AuditReceivedData = {
  name: string
  business: string
  website: string
  problem: string
  /** Optional: date the audit is promised by (defaults to 2 working days from now). */
  deliverBy?: Date
  /** Optional: where the "Book a free call" button goes. */
  bookUrl?: string
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')

function addWorkingDays(from: Date, n: number) {
  const d = new Date(from)
  while (n > 0) {
    d.setDate(d.getDate() + 1)
    if (d.getDay() !== 0 && d.getDay() !== 6) n--
  }
  return d
}

export const auditReceivedFrom = FROM

export function auditReceivedEmail(data: AuditReceivedData): { subject: string; html: string; text: string; from: string } {
  const first = data.name.trim().split(/\s+/)[0] || 'there'
  const by = (data.deliverBy ?? addWorkingDays(new Date(), 2)).toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', timeZone: 'Asia/Manila',
  })
  const book = data.bookUrl || `${SITE_URL}/book`
  const subject = `Got your audit request, ${first}`
  const font = "'Manrope','Helvetica Neue',Arial,sans-serif"
  const p = (extra = '') => `margin:0;font-family:${font};font-size:16px;line-height:1.6;font-weight:300;color:rgba(20,20,43,0.85);${extra}`
  const row = (label: string, value: string) =>
    `<tr><td width="120" valign="top" style="padding:0 12px 8px 0;font-family:${font};font-size:13px;line-height:1.4;letter-spacing:0.26px;color:#7f7f90;">${label}</td><td valign="top" style="padding:0 0 8px 0;font-family:${font};font-size:14px;line-height:1.55;color:#14142b;">${esc(value)}</td></tr>`

  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>${esc(subject)}</title></head>
<body style="margin:0;padding:0;background:#f3f2fa;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">We’ve got your request and will email your audit within 2 working days.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f3f2fa;">
<tr><td align="center" style="padding:32px 24px;">
<table role="presentation" width="552" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:552px;background:#ffffff;border:1px solid #ececf3;border-radius:18px;overflow:hidden;">
  <tr><td background="${SITE_URL}/img/v4/audit/email-banner.png" bgcolor="#0a0a13" style="background:#0a0a13 url('${SITE_URL}/img/v4/audit/email-banner.png') center/cover no-repeat;padding:28px 32px;">
    <img src="${SITE_URL}/img/v4/audit/email-logo.png" width="110" height="34" alt="viable" style="display:block;border:0;width:110px;height:34px;object-fit:contain;">
    <div style="height:14px;line-height:14px;font-size:14px;">&nbsp;</div>
    <div style="font-family:${font};font-size:32px;line-height:1.18;font-weight:200;letter-spacing:-0.64px;color:#ffffff;">Your audit is on its way.</div>
  </td></tr>
  <tr><td style="padding:28px 32px 8px 32px;">
    <p style="${p('color:#14142b;')}">Hi ${esc(first)},</p>
    <p style="${p('padding-top:14px;')}">Thanks for sending over ${esc(data.business)}.<br>We’ve got your request and we’ll email your audit within 2 working days, by ${esc(by)}.</p>
    <p style="${p('padding-top:14px;font-weight:500;color:#14142b;')}">Here’s what you told us:</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:14px;"><tr><td style="background:#f3f2fa;border-radius:12px;padding:16px 16px 8px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        ${row('Website', data.website.replace(/^https?:\/\//i, '').replace(/\/$/, ''))}
        ${row('Biggest problem', data.problem)}
      </table>
    </td></tr></table>
    <p style="${p('padding-top:14px;')}">Want to talk sooner?<br>Reply to this email or book a free 15-minute call.</p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:14px;"><tr><td bgcolor="#a47eed" style="border-radius:999px;background:#a47eed;">
      <a href="${esc(book)}" style="display:inline-block;padding:16px 26px 16px 26px;font-family:${font};font-size:15px;line-height:1.2;font-weight:600;color:#0a0a13;text-decoration:none;border-radius:999px;">Book a free call</a>
    </td></tr></table>
    <p style="${p('padding:14px 0 20px 0;')}">- The Viable Works team</p>
  </td></tr>
  <tr><td style="background:#f3f2fa;padding:18px 32px 22px 32px;">
    <div style="font-family:${font};font-size:14px;line-height:1.55;font-weight:500;color:#7a3fc9;">Built to work, made to grow.</div>
    <div style="padding-top:4px;font-family:${font};font-size:11px;line-height:1.4;letter-spacing:0.22px;color:#7f7f90;">Viable Digital Marketing Services · You’re getting this because you requested a free audit.</div>
  </td></tr>
</table>
</td></tr></table>
</body></html>`

  const text = [
    `Hi ${first},`,
    '',
    `Thanks for sending over ${data.business}.`,
    `We've got your request and we'll email your audit within 2 working days, by ${by}.`,
    '',
    "Here's what you told us:",
    `Website: ${data.website.replace(/^https?:\/\//i, '').replace(/\/$/, '')}`,
    `Biggest problem: ${data.problem}`,
    '',
    'Want to talk sooner?',
    `Reply to this email or book a free 15-minute call: ${book}`,
    '',
    '- The Viable Works team',
    '',
    'Built to work, made to grow.',
    "Viable Digital Marketing Services · You're getting this because you requested a free audit.",
  ].join('\n')

  return { subject, html, text, from: FROM }
}

export default auditReceivedEmail

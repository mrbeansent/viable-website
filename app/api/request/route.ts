import { NextResponse } from 'next/server'
import { EMAIL_RE, clean, forwardLead, normaliseUrl } from '@/lib/leads'

const fail = (error: string, status = 400) => NextResponse.json({ ok: false, error }, { status })

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return fail('Invalid request.')
  }

  // Honeypot: real visitors never fill this in.
  if (clean(body.nickname)) return NextResponse.json({ ok: true })

  const kind = body.kind
  const email = clean(body.email, 200)
  if (!EMAIL_RE.test(email)) return fail('Please enter a valid email address.')

  if (kind === 'audit') {
    const website = normaliseUrl(clean(body.website, 300))
    const problem = clean(body.problem, 600)
    if (!website) return fail('Please enter your website link, for example yourbusiness.com.')
    if (!problem) return fail('Please tell us your biggest problem in one line.')

    const result = await forwardLead({
      source: 'viable-works.com',
      type: 'free-audit',
      tags: ['free-audit'],
      submittedAt: new Date().toISOString(),
      email,
      website,
      problem,
      businessType: clean(body.businessType, 200) || undefined,
    })
    return result.ok ? NextResponse.json(result) : fail(result.error, 502)
  }

  if (kind === 'portfolio') {
    const result = await forwardLead({
      source: 'viable-works.com',
      type: 'portfolio-request',
      tags: ['portfolio-request'],
      submittedAt: new Date().toISOString(),
      email,
      businessType: clean(body.businessType, 200) || undefined,
      projectInterest: clean(body.projectInterest, 300) || undefined,
    })
    return result.ok ? NextResponse.json(result) : fail(result.error, 502)
  }

  return fail('Unknown request type.')
}

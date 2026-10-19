import { NextResponse } from 'next/server'
import { EMAIL_RE, clean, forwardLead, normaliseUrl } from '@/lib/leads'
import { auditReceivedEmail } from '@/lib/emails/auditReceived'

const fail = (error: string, status = 400, field?: string) =>
  NextResponse.json({ ok: false, error, ...(field ? { field } : {}) }, { status })

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
  if (!EMAIL_RE.test(email)) return fail('Please enter a valid email address.', 400, 'email')

  if (kind === 'audit') {
    const name = clean(body.name, 120)
    const business = clean(body.business, 200)
    const website = normaliseUrl(clean(body.website, 300))
    const problem = clean(body.problem, 600)
    if (!name) return fail('Please tell us your name.', 400, 'name')
    if (!business) return fail('Please tell us your business name.', 400, 'business')
    if (!website) return fail('Please enter your website link, for example yourbusiness.com.', 400, 'website')
    if (!problem) return fail('Please tell us your biggest problem in one line.', 400, 'problem')

    // Optional quiz handoff: keep it small and string-only.
    const q = body.quiz && typeof body.quiz === 'object' ? (body.quiz as Record<string, unknown>) : null
    let quiz: Record<string, unknown> | undefined
    if (q) {
      const answers: Record<string, string[]> = {}
      if (q.answers && typeof q.answers === 'object') {
        for (const [k, val] of Object.entries(q.answers as Record<string, unknown>).slice(0, 15)) {
          if (Array.isArray(val)) answers[clean(k, 40)] = val.slice(0, 10).map((x) => clean(x, 80)).filter(Boolean)
        }
      }
      quiz = {
        fix: clean(q.fix, 40) || undefined,
        result: clean(q.result, 40) || undefined,
        then: clean(q.then, 40) || undefined,
        answers,
      }
    }

    const result = await forwardLead({
      source: 'viable-works.com',
      type: 'free-audit',
      tags: quiz ? ['free-audit', 'from-quiz', ...(quiz.fix ? [`fix-${quiz.fix}`] : [])] : ['free-audit'],
      quiz,
      submittedAt: new Date().toISOString(),
      email,
      name,
      business,
      website,
      phone: clean(body.phone, 60) || undefined,
      problem,
      heardAbout: clean(body.source, 120) || undefined,
      businessType: clean(body.businessType, 200) || undefined,
    }, {
      confirmation: { to: email, ...auditReceivedEmail({ name, business, website, problem }) },
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

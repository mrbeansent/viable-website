import { NextResponse } from 'next/server'
import { EMAIL_RE, clean, forwardLead } from '@/lib/leads'

// Called when someone asks for their quiz result by email (the optional last step).
export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 })
  }

  if (clean(body.nickname)) return NextResponse.json({ ok: true })

  const email = clean(body.email, 200)
  if (!EMAIL_RE.test(email) || body.consent !== true) {
    return NextResponse.json({ ok: false, error: 'A valid email and consent are required.' }, { status: 400 })
  }

  const result = await forwardLead({
    source: 'viable-works.com quiz',
    type: 'quiz-result',
    tags: ['quiz-result'],
    submittedAt: new Date().toISOString(),
    name: clean(body.name, 200) || undefined,
    email,
    business: clean(body.business, 200) || undefined,
    phone: clean(body.phone, 60) || undefined,
    answers: body.answers,
    result: body.result,
  })

  return result.ok
    ? NextResponse.json(result)
    : NextResponse.json({ ok: false, error: result.error }, { status: 502 })
}

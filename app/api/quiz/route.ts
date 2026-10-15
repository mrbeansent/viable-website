import { NextResponse } from 'next/server'
import { EMAIL_RE, clean, forwardLead } from '@/lib/leads'
import { QUESTIONS } from '@/components/quiz/data'
import { FIXES, RESULT_IDS } from '@/components/quiz/results'

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

  // Keep only known question ids and option ids, so nothing arbitrary reaches the CRM.
  const raw = (body.answers && typeof body.answers === 'object' ? body.answers : {}) as Record<string, unknown>
  const answers: Record<string, string[]> = {}
  for (const q of QUESTIONS) {
    const picked = Array.isArray(raw[q.id]) ? (raw[q.id] as unknown[]) : []
    const valid = picked
      .filter((v): v is string => typeof v === 'string' && q.options.some((o) => o.id === v))
      .slice(0, q.multi ? (q.max ?? q.options.length) : 1)
    if (valid.length) answers[q.id] = valid
  }

  const r = (body.result && typeof body.result === 'object' ? body.result : {}) as Record<string, unknown>
  const startId = RESULT_IDS.includes(String(r.start)) ? String(r.start) : ''
  const thenId = RESULT_IDS.includes(String(r.then)) ? String(r.then) : ''

  const tags = ['quiz', 'quiz-result']
  if (startId) tags.push(`quiz-result:${startId}`)
  if (answers.type?.[0]) tags.push(`quiz-type:${answers.type[0]}`)

  const result = await forwardLead({
    source: 'viable-works.com quiz',
    type: 'quiz-result',
    tags,
    submittedAt: new Date().toISOString(),
    name: clean(body.name, 200) || undefined,
    email,
    business: clean(body.business, 200) || undefined,
    phone: clean(body.phone, 60) || undefined,
    answers,
    // budget and timing don't change the result; they are saved so the quote can be sized
    budget: answers.budget?.[0],
    timing: answers.timing?.[0],
    result: {
      start: startId ? FIXES[startId].name : undefined,
      startId: startId || undefined,
      then: thenId ? FIXES[thenId].name : undefined,
      thenId: thenId || undefined,
    },
  })

  return result.ok
    ? NextResponse.json(result)
    : NextResponse.json({ ok: false, error: result.error }, { status: 502 })
}

import { NextResponse } from 'next/server'

interface QuizSubmission {
  name: string
  email: string
  business?: string
  phone?: string
  answers: Record<string, string | string[]>
  result: { start: string; then: string | null }
  consent: boolean
  emailResult?: boolean
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: QuizSubmission
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 })
  }

  if (!body.name?.trim() || !EMAIL_RE.test(body.email ?? '') || body.consent !== true) {
    return NextResponse.json({ ok: false, error: 'Name, a valid email and consent are required.' }, { status: 400 })
  }

  const payload = {
    source: 'viable-works.com quiz',
    submittedAt: new Date().toISOString(),
    name: body.name.trim(),
    email: body.email.trim(),
    business: body.business?.trim() || undefined,
    phone: body.phone?.trim() || undefined,
    answers: body.answers,
    result: body.result,
    emailResult: body.emailResult === true,
  }

  // Result and tags go to GoHighLevel: point GHL_WEBHOOK_URL at an inbound webhook trigger.
  const webhook = process.env.GHL_WEBHOOK_URL
  if (!webhook) {
    console.warn('GHL_WEBHOOK_URL is not set. Quiz submission was not forwarded:', JSON.stringify(payload))
    return NextResponse.json({ ok: true, forwarded: false })
  }

  try {
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`)
    return NextResponse.json({ ok: true, forwarded: true })
  } catch (err) {
    console.error('Quiz webhook failed:', err)
    return NextResponse.json({ ok: false, error: 'Could not save your answers.' }, { status: 502 })
  }
}

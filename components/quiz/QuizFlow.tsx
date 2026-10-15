'use client'
import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { BOOK_CALL, FREE_AUDIT } from '../links'
import { QUESTIONS, TOTAL_QUESTIONS, TYPE_IDS, type QuestionId } from './data'
import { computeResult, type Answers } from './results'

type Step = 'intro' | number | 'result' | 'email' | 'sent'

const EMPTY_CONTACT = { name: '', email: '', business: '', phone: '', consent: false }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Background image per screen (Figma uses a different crop on each).
const BG: Record<string, string> = {
  intro: 'bg-intro',
  q1: 'bg-q1',
  q2: 'bg-q2',
  q7: 'bg-q7',
  result: 'bg-result',
  email: 'bg-email',
  sent: 'bg-sent',
}
function bgFor(step: Step) {
  if (typeof step === 'number') {
    if (step === 0) return BG.q1
    if (step === 6) return BG.q7
    return step % 2 === 1 ? BG.q2 : BG.q1
  }
  return BG[step]
}

// Shared frame for every quiz screen: background, shade, grid lines, gradient bar, logo, exit pill.
function Screen({
  bg,
  exitLabel = 'Exit quiz',
  children,
  className = '',
}: {
  bg: string
  exitLabel?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`quiz ${className}`} data-qa="quiz-screen">
      <div className="quiz__bg" aria-hidden>
        <img src={`/img/v4/quiz/${bg}.png`} alt="" />
      </div>
      <div className="quiz__shade" aria-hidden />
      <div className="quiz__grid" aria-hidden>
        <i /><i /><i /><i /><i />
      </div>
      <div className="quiz__bar" aria-hidden />
      <header className="quiz__head">
        <Link href="/" aria-label="Viable Works home">
          <img src="/img/v4/shared/logo.png" alt="Viable" width={120} height={38} />
        </Link>
        <Link href="/" className="quiz__exit">
          <span>{exitLabel}</span>
          <span className="quiz__exit-x" aria-hidden>✕</span>
        </Link>
      </header>
      {children}
    </div>
  )
}

export default function QuizFlow({ initialType }: { initialType?: string }) {
  const presetType = initialType && TYPE_IDS.includes(initialType) ? initialType : null
  // /quiz?type=<id> preselects question 1 and starts at question 2
  const [step, setStep] = useState<Step>(presetType ? 1 : 'intro')
  const [answers, setAnswers] = useState<Answers>(presetType ? { type: [presetType] } : {})
  const [contact, setContact] = useState(EMPTY_CONTACT)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const result = computeResult(answers)
  const firstName = contact.name.trim().split(/\s+/)[0]

  // Free audit link carries the result so the form can attach the answers.
  const auditHref = `${FREE_AUDIT}?from=quiz&fix=${result.start.id}`
  const rememberForAudit = () => {
    try {
      sessionStorage.setItem('viable-quiz', JSON.stringify({ answers, result: result.start.id, then: result.then.id }))
    } catch {}
  }

  const goBack = () => {
    setError('')
    if (typeof step === 'number') setStep(step === 0 ? 'intro' : step - 1)
    else if (step === 'result') setStep(QUESTIONS.length - 1)
    else if (step === 'email') setStep('result')
  }

  const toggle = (qid: QuestionId, optionId: string, multi: boolean, max?: number) => {
    setAnswers((prev) => {
      const current = prev[qid] ?? []
      if (!multi) return { ...prev, [qid]: [optionId] }
      if (current.includes(optionId)) return { ...prev, [qid]: current.filter((o) => o !== optionId) }
      if (max && current.length >= max) return prev
      return { ...prev, [qid]: [...current, optionId] }
    })
  }

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    const honeypot = (new FormData(e.currentTarget).get('nickname') as string) ?? ''
    try {
      const res = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...contact,
          nickname: honeypot,
          answers,
          result: { start: result.start.id, then: result.then.id },
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.')
      setStep('sent')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  // ---- intro ----
  if (step === 'intro') {
    return (
      <Screen bg={bgFor(step)} className="quiz--intro">
        <main className="quiz__main quiz__main--center">
          <p className="quiz__index"><span className="quiz__idx">(00)</span><span className="quiz__label">Find your fix</span></p>
          <h1 className="quiz__display">
            Don’t know what you need?
            <br />
            Tell us what’s wrong.
          </h1>
          <p className="quiz__lede">
            Eight quick taps, about two minutes. We’ll point you to the right fix and show you how to get your free audit.
          </p>
          <ul className="quiz__checks">
            <li><b>✓</b> 8 quick taps</li>
            <li><b>✓</b> About 2 minutes</li>
            <li><b>✓</b> No prices, no pressure</li>
          </ul>
          <button type="button" className="btn btn--primary" onClick={() => setStep(0)}>
            Start the quiz <span className="btn__arrow">→</span>
          </button>
          <p className="quiz__small">
            Your answers stay with Viable Works. We only ask for contact details at the end, and only if you want your
            result sent to you.
          </p>
        </main>
      </Screen>
    )
  }

  // ---- questions ----
  if (typeof step === 'number') {
    const question = QUESTIONS[step]
    const selected = answers[question.id] ?? []
    const n = step + 1
    return (
      <Screen bg={bgFor(step)} className={question.id === 'budget' ? 'quiz--budget' : ''}>
        <main className="quiz__main quiz__main--q">
          <div className="quiz__progress">
            <div className="quiz__progress-row">
              <p className="quiz__index">
                <span className="quiz__idx">({String(n).padStart(2, '0')}/{String(TOTAL_QUESTIONS).padStart(2, '0')})</span>
                <span className="quiz__label">Find your fix</span>
              </p>
              <span className="quiz__pct">{Math.round((n / TOTAL_QUESTIONS) * 100)}%</span>
            </div>
            <div className="quiz__track" role="progressbar" aria-valuenow={Math.round((n / TOTAL_QUESTIONS) * 100)} aria-valuemin={0} aria-valuemax={100}>
              <i style={{ width: `${(n / TOTAL_QUESTIONS) * 100}%` }} />
            </div>
          </div>
          <h1 className="quiz__qtitle">{question.title}</h1>
          <p className="quiz__qhint">{question.hint}</p>
          <div className="quiz__options" role={question.multi ? 'group' : 'radiogroup'} aria-label={question.title}>
            {question.options.map((o) => {
              const on = selected.includes(o.id)
              return (
                <button
                  key={o.id}
                  type="button"
                  role={question.multi ? 'checkbox' : 'radio'}
                  aria-checked={on}
                  className={`quiz__opt${on ? ' is-on' : ''}`}
                  onClick={() => toggle(question.id, o.id, question.multi, question.max)}
                >
                  <span className={`quiz__mark ${question.multi ? 'quiz__mark--box' : 'quiz__mark--dot'}`} aria-hidden>
                    {question.multi && on ? '✓' : ''}
                  </span>
                  <span>{o.label}</span>
                </button>
              )
            })}
          </div>
          <div className="quiz__nav">
            <button type="button" className="quiz__back" onClick={goBack}>← Back</button>
            <button
              type="button"
              className="btn btn--primary"
              disabled={selected.length === 0}
              onClick={() => setStep(step + 1 < QUESTIONS.length ? step + 1 : 'result')}
            >
              Next <span className="btn__arrow">→</span>
            </button>
          </div>
        </main>
      </Screen>
    )
  }

  // ---- result ----
  if (step === 'result') {
    return (
      <Screen bg={bgFor(step)} className="quiz--result">
        <main className="quiz__main quiz__main--result">
          <p className="quiz__index"><span className="quiz__idx quiz__idx--aqua">(✓)</span><span className="quiz__label">Your result</span></p>
          <h1 className="quiz__rtitle">Your best first move is {result.start.name}.</h1>
          <div className="quiz__start">
            <div className="quiz__start-in">
              <div className="quiz__start-main">
                <p className="quiz__start-tag">
                  <img src="/img/v4/quiz/icon-inbox.svg" alt="" width={28} height={28} />
                  <span>Start here</span>
                </p>
                <p className="quiz__start-name">{result.start.name}</p>
                <p className="quiz__start-body">{result.start.body}</p>
              </div>
              {result.because.length > 0 && (
                <div className="quiz__because">
                  <p className="quiz__label quiz__label--dim">Because you told us</p>
                  <ul>
                    {result.because.map((b) => (
                      <li key={b}><b>✓</b> {b}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="quiz__then">
            <img src="/img/v4/quiz/icon-shield.svg" alt="" width={24} height={24} />
            <span className="quiz__label quiz__label--violet">Then add</span>
            <span className="quiz__then-name">{result.then.name}</span>
            <span className="quiz__then-body">{result.then.short}</span>
          </div>
          <div className="quiz__ctas">
            <Link href={auditHref} className="btn btn--primary" onClick={rememberForAudit}>
              Get my free audit <span className="btn__arrow">→</span>
            </Link>
            <Link href={BOOK_CALL} className="btn btn--ghost">Book a free 15-minute call</Link>
          </div>
          <button type="button" className="quiz__mail" onClick={() => setStep('email')}>
            <img src="/img/v4/quiz/icon-mail.svg" alt="" width={16} height={16} />
            Email me this result
          </button>
          <p className="quiz__small">
            Your answers are attached when you ask for the audit, so you won’t have to repeat yourself. No prices here on
            purpose.
          </p>
        </main>
      </Screen>
    )
  }

  // ---- email form ----
  if (step === 'email') {
    const emailReady = EMAIL_RE.test(contact.email) && contact.consent
    return (
      <Screen bg={bgFor(step)} className="quiz--email">
        <main className="quiz__main quiz__main--email">
          <p className="quiz__index"><span className="quiz__idx quiz__idx--aqua">(✓)</span><span className="quiz__label">Optional last step</span></p>
          <h1 className="quiz__rtitle quiz__rtitle--sm">Want this result sent to you?</h1>
          <form className="quiz__form" onSubmit={submit} noValidate>
            <label>
              <span>Your name</span>
              <input autoComplete="name" placeholder="Maria Santos" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} />
            </label>
            <label>
              <span>Email</span>
              <input required type="email" autoComplete="email" placeholder="you@business.com" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
            </label>
            <label>
              <span>Business name (optional)</span>
              <input autoComplete="organization" placeholder="Santos Dental Clinic" value={contact.business} onChange={(e) => setContact({ ...contact, business: e.target.value })} />
            </label>
            <label>
              <span>Mobile or Viber (optional)</span>
              <input type="tel" autoComplete="tel" placeholder="+63 9XX XXX XXXX" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
            </label>
            <input className="sr-only" name="nickname" tabIndex={-1} autoComplete="off" aria-hidden />
            <label className="quiz__consent">
              <input type="checkbox" checked={contact.consent} onChange={(e) => setContact({ ...contact, consent: e.target.checked })} />
              <i aria-hidden>✓</i>
              <span>
                Viable Works may email me this result and follow up about it. Read our{' '}
                <Link href="/privacy" target="_blank">Privacy page</Link>.
              </span>
            </label>
            {error && <p className="quiz__error" role="alert">{error}</p>}
            <div className="quiz__form-cta">
              <button type="submit" className="btn btn--primary" disabled={!emailReady || submitting}>
                {submitting ? 'Sending…' : 'Send me my result'} <span className="btn__arrow">→</span>
              </button>
              <Link href={auditHref} className="quiz__skip" onClick={rememberForAudit}>
                Skip, just show me my free audit options →
              </Link>
              <button type="button" className="quiz__back" onClick={goBack}>← Back to my result</button>
            </div>
          </form>
        </main>
      </Screen>
    )
  }

  // ---- sent ----
  return (
    <Screen bg={bgFor(step)} exitLabel="Back to site" className="quiz--sent">
      <main className="quiz__main quiz__main--center quiz__main--sent">
        <div className="quiz__tick" aria-hidden>✓</div>
        <h1 className="quiz__rtitle quiz__rtitle--lg">Sent. Check your inbox{firstName ? `, ${firstName}` : ''}.</h1>
        <p className="quiz__lede">
          Your result is on its way to {contact.email}. If you’d like us to look at your actual site, the free audit is the
          next step.
        </p>
        <div className="quiz__steps">
          <Link href={auditHref} className="quiz__step quiz__step--hot" onClick={rememberForAudit}>
            <span className="quiz__step-top"><span>01</span><span>→</span></span>
            <span className="quiz__step-title">Get your free audit</span>
            <span className="quiz__step-body">A written review of your site with the top 3 fixes, in 2 working days.</span>
          </Link>
          <Link href={BOOK_CALL} className="quiz__step">
            <span className="quiz__step-top"><span>02</span><span>→</span></span>
            <span className="quiz__step-title">Book a 15-minute call</span>
            <span className="quiz__step-body">Talk it through with your account manager. Totally optional!</span>
          </Link>
          <Link href="/about" className="quiz__step">
            <span className="quiz__step-top"><span>03</span><span>→</span></span>
            <span className="quiz__step-title">See our work</span>
            <span className="quiz__step-body">Websites and brands our team has built.</span>
          </Link>
        </div>
      </main>
    </Screen>
  )
}

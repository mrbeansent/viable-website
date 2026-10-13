'use client'
import { useState, type FormEvent } from 'react'
import { BOOK_CALL } from '../links'
import { QUESTIONS, TOTAL_QUESTIONS } from './data'
import { computeResult } from './results'

type Step = 'intro' | number | 'result' | 'email' | 'sent'
type Answers = Record<string, string[]>

const EMPTY_CONTACT = { name: '', email: '', business: '', phone: '', consent: false }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function QuizFlow() {
  const [step, setStep] = useState<Step>('intro')
  const [answers, setAnswers] = useState<Answers>({})
  const [contact, setContact] = useState(EMPTY_CONTACT)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const result = computeResult(answers.pains ?? [])

  const goBack = () => {
    setError('')
    if (typeof step === 'number') setStep(step === 0 ? 'intro' : step - 1)
    else if (step === 'result') setStep(QUESTIONS.length - 1)
    else if (step === 'email') setStep('result')
  }

  const toggle = (qid: string, optionId: string, multi: boolean, max?: number) => {
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
          result: { start: result.start.name, then: result.then?.name ?? null },
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

  const questionIndex = typeof step === 'number' ? step : null
  const question = questionIndex !== null ? QUESTIONS[questionIndex] : null
  const selected = question ? (answers[question.id] ?? []) : []
  const percent = Math.round((((questionIndex ?? 0) + 1) / TOTAL_QUESTIONS) * 100)
  const emailReady = EMAIL_RE.test(contact.email) && contact.consent

  return (
    <div className="quiz-page">
      <div className="quiz-bar" />
      <header className="quiz-header container">
        <a href="/" aria-label="Viable Works home">
          <img src="/img/logo.png" alt="Viable" width={130} height={40} />
        </a>
        <a href="/" className="quiz-exit">Exit quiz</a>
      </header>
      <div className="quiz-glow" />
      <div className="quiz-body container">
        {step === 'intro' && (
          <div className="quiz-center">
            <p className="eyebrow">Find your fix</p>
            <h1 className="quiz-h1">
              Don&apos;t know what you need?
              <br />
              Tell us your pain.
            </h1>
            <p className="quiz-lede">
              8 quick taps, about 2 minutes. We will point you to the right fix and show you how to book a call. No
              prices, no pressure.
            </p>
            <button type="button" className="btn btn-primary" onClick={() => setStep(0)}>Start the quiz</button>
            <p className="quiz-small">Your answers stay with Viable Works. We only ask for contact details at the end.</p>
          </div>
        )}

        {question && questionIndex !== null && (
          <div className="quiz-col">
            <div className="quiz-progress">
              <div className="quiz-progress-row">
                <span className="eyebrow">Question {questionIndex + 1} of {TOTAL_QUESTIONS}</span>
                <span>{percent}%</span>
              </div>
              <div className="quiz-track" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
                <i style={{ width: `${percent}%` }} />
              </div>
            </div>
            <h1 className="quiz-q-title">{question.title}</h1>
            <p className="quiz-hint">{question.hint}</p>
            <div
              className={`q-options${question.id === 'type' ? ' cap' : ''}`}
              role={question.multi ? 'group' : 'radiogroup'}
              aria-label={question.title}
            >
              {question.options.map((o) => {
                const isOn = selected.includes(o.id)
                return (
                  <button
                    key={o.id}
                    type="button"
                    role={question.multi ? 'checkbox' : 'radio'}
                    aria-checked={isOn}
                    className={`q-option${isOn ? ' on' : ''}`}
                    onClick={() => toggle(question.id, o.id, question.multi, question.max)}
                  >
                    <span className={`q-mark ${question.multi ? 'box' : 'dot'}`} aria-hidden />
                    {o.label}
                  </button>
                )
              })}
            </div>
            <div className="quiz-nav">
              <button type="button" className="btn-text" onClick={goBack}>Back</button>
              <button
                type="button"
                className="btn btn-primary"
                disabled={selected.length === 0}
                onClick={() => setStep(questionIndex + 1 < QUESTIONS.length ? questionIndex + 1 : 'result')}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 'result' && (
          <div className="quiz-col quiz-result">
            <p className="eyebrow">Your result</p>
            <h1 className="quiz-q-title">Your best first move is {result.start.name}.</h1>
            <div className="start-card">
              <p className="start-label">Start here</p>
              <h2>{result.start.name}</h2>
              <p>{result.start.body}</p>
              {result.because && <p className="because">{result.because}</p>}
            </div>
            {result.then && (
              <div className="then-card">
                <span className="then-label">Then add</span>
                <strong>{result.then.name}</strong>
                <span>{result.then.short}</span>
              </div>
            )}
            <div className="result-ctas">
              <a href={BOOK_CALL} className="btn btn-primary">Book a free 15-minute call</a>
              <button type="button" className="btn btn-ghost" onClick={() => setStep('email')}>
                Email me this result
              </button>
            </div>
            <p className="quiz-small">We will review your answers before the call. No prices shown here on purpose.</p>
            <button type="button" className="btn-text" onClick={goBack}>Change my answers</button>
          </div>
        )}

        {step === 'email' && (
          <div className="quiz-col quiz-contact">
            <p className="eyebrow">Optional last step</p>
            <h1 className="quiz-q-title">Want this result sent to you?</h1>
            <form className="quiz-form" onSubmit={submit} noValidate>
              <label>
                Your name (optional)
                <input
                  autoComplete="name"
                  placeholder="Maria Santos"
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                />
              </label>
              <label>
                Email
                <input
                  required
                  type="email"
                  autoComplete="email"
                  placeholder="you@business.com"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                />
              </label>
              <label>
                Business name (optional)
                <input
                  autoComplete="organization"
                  placeholder="Santos Dental Clinic"
                  value={contact.business}
                  onChange={(e) => setContact({ ...contact, business: e.target.value })}
                />
              </label>
              <label>
                Mobile or Viber (optional)
                <input
                  type="tel"
                  autoComplete="tel"
                  placeholder="+63 9XX XXX XXXX"
                  value={contact.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                />
              </label>
              <input className="req-hp" name="nickname" tabIndex={-1} autoComplete="off" aria-hidden />
              <label className="consent">
                <input
                  type="checkbox"
                  checked={contact.consent}
                  onChange={(e) => setContact({ ...contact, consent: e.target.checked })}
                />
                <span>
                  I agree that Viable Works may email me this result. Read our <a href="/privacy" target="_blank">Privacy page</a>.
                </span>
              </label>
              {error && <p className="quiz-error" role="alert">{error}</p>}
              <div className="quiz-nav">
                <button type="button" className="btn-text" onClick={goBack}>Back</button>
                <button type="submit" className="btn btn-primary" disabled={!emailReady || submitting}>
                  {submitting ? 'Sending…' : 'Email me my result'}
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 'sent' && (
          <div className="quiz-center">
            <p className="eyebrow">All set</p>
            <h1 className="quiz-q-title">Your result is on its way.</h1>
            <p className="quiz-lede">
              We will email your result to {contact.email}. If you want to talk it through, a free 15-minute call is
              available.
            </p>
            <a href={BOOK_CALL} className="btn btn-primary">Book a free 15-minute call</a>
            <a href="/" className="btn-text">Back to the site</a>
          </div>
        )}
      </div>
    </div>
  )
}

'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { MESSENGER_URL } from '@/components/links'

type Errors = Partial<Record<'name' | 'business' | 'website' | 'email' | 'problem' | 'form', string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const SOURCES = ['Facebook', 'Instagram', 'Google', 'A friend or referral', 'Founding client offer', 'Other']

export default function AuditForm() {
  const router = useRouter()
  const [errors, setErrors] = useState<Errors>({})
  const [loading, setLoading] = useState(false)
  const [source, setSource] = useState('')

  // "Claim a spot" links can pass ?ref=founding to pre-fill the source
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('ref') === 'founding') setSource('Founding client offer')
  }, [])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (loading) return
    const fd = new FormData(e.currentTarget)
    const v = (k: string) => String(fd.get(k) ?? '').trim()
    const next: Errors = {}
    if (!v('name')) next.name = 'Please tell us your name.'
    if (!v('business')) next.business = 'Please tell us your business name.'
    if (!v('website')) next.website = 'Please enter your website or Facebook page.'
    if (!EMAIL_RE.test(v('email'))) next.email = 'Please enter a valid email address.'
    if (!v('problem')) next.problem = 'Please tell us your biggest problem in one line.'
    setErrors(next)
    if (Object.keys(next).length) {
      e.currentTarget.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
      return
    }

    // quiz handoff: attach the saved quiz answers when we came from /quiz
    let quiz: unknown
    try {
      const q = new URLSearchParams(window.location.search)
      if (q.get('from') === 'quiz') {
        const saved = JSON.parse(sessionStorage.getItem('viable-quiz') || 'null')
        quiz = { ...(saved && typeof saved === 'object' ? saved : {}), fix: q.get('fix') || saved?.result || '' }
      }
    } catch {}

    setLoading(true)
    try {
      const res = await fetch('/api/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kind: 'audit',
          name: v('name'),
          business: v('business'),
          website: v('website'),
          email: v('email'),
          phone: v('phone'),
          problem: v('problem'),
          source: v('source'),
          nickname: v('nickname'),
          quiz,
        }),
      })
      const data = await res.json().catch(() => null)
      if (!res.ok || !data?.ok) {
        const msg: string = data?.error || 'Something went wrong. Please try again.'
        const field = data?.field as keyof Errors | undefined
        setErrors(field ? { [field]: msg } : { form: msg })
        setLoading(false)
        return
      }
      const q = new URLSearchParams({ name: v('name').split(/\s+/)[0], email: v('email') })
      router.push(`/free-audit/thank-you?${q.toString()}`)
    } catch {
      setErrors({ form: 'Could not send your request. Please check your connection and try again.' })
      setLoading(false)
    }
  }

  const field = (id: keyof Errors) => ({
    id: `audit-${id}`,
    'aria-invalid': errors[id] ? (true as const) : undefined,
    'aria-describedby': errors[id] ? `audit-${id}-err` : undefined,
    className: `audit-input${errors[id] ? ' is-error' : ''}`,
  })
  const err = (id: keyof Errors) =>
    errors[id] ? (
      <p className="audit-error" id={`audit-${id}-err`} role="alert">
        {errors[id]}
      </p>
    ) : null

  return (
    <form className="audit-form" onSubmit={onSubmit} noValidate>
      <h2 className="audit-form__title">Tell us about your business</h2>
      <p className="audit-form__hint">Takes about a minute. Fields marked * are required.</p>

      <div className="audit-field">
        <label htmlFor="audit-name">Your name *</label>
        <input {...field('name')} name="name" type="text" autoComplete="name" placeholder="Maria Santos" />
        {err('name')}
      </div>
      <div className="audit-field">
        <label htmlFor="audit-business">Business name *</label>
        <input {...field('business')} name="business" type="text" autoComplete="organization" placeholder="Santos Dental Clinic" />
        {err('business')}
      </div>
      <div className="audit-field">
        <label htmlFor="audit-website">Website or Facebook page *</label>
        <input {...field('website')} name="website" type="text" inputMode="url" autoComplete="url" placeholder="santosdental.ph or facebook.com/santosdental" />
        {err('website')}
      </div>
      <div className="audit-field">
        <label htmlFor="audit-email">Email *</label>
        <input {...field('email')} name="email" type="email" autoComplete="email" placeholder="you@business.com" />
        {err('email')}
      </div>
      <div className="audit-field">
        <label htmlFor="audit-phone">Mobile or Viber</label>
        <input id="audit-phone" className="audit-input" name="phone" type="tel" autoComplete="tel" placeholder="+63 9XX XXX XXXX" />
      </div>
      <div className="audit-field">
        <label htmlFor="audit-problem">What’s the biggest problem right now? *</label>
        <textarea {...field('problem')} name="problem" rows={3} placeholder="e.g. We get messages on Facebook but nobody follows up" />
        {err('problem')}
      </div>
      <div className="audit-field">
        <label htmlFor="audit-source">How did you hear about us?</label>
        <div className="audit-select">
          <select id="audit-source" className={`audit-input${source ? ' has-value' : ''}`} name="source" value={source} onChange={(e) => setSource(e.target.value)}>
            <option value="">Facebook, Google, a friend…</option>
            {SOURCES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <span aria-hidden="true">▾</span>
        </div>
      </div>

      {/* honeypot */}
      <input className="sr-only" name="nickname" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button className="audit-submit" type="submit" disabled={loading}>
        {loading ? 'Sending…' : <>Send my free audit request <span aria-hidden="true">→</span></>}
      </button>
      {errors.form ? (
        <p className="audit-error audit-error--form" role="alert">{errors.form}</p>
      ) : null}
      <p className="audit-form__fine">We’ll only use your details for your audit. No spam, and we never share them.</p>
      <p className="audit-form__chat">
        <span>Prefer to chat?</span>
        <a href={MESSENGER_URL} target="_blank" rel="noopener noreferrer">Message us on Messenger →</a>
      </p>
    </form>
  )
}

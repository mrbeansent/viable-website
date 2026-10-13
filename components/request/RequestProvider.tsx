'use client'
import { createContext, useCallback, useContext, useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'

export type RequestKind = 'audit' | 'portfolio'

const RequestContext = createContext<(kind: RequestKind) => void>(() => {})

export const useRequestModal = () => useContext(RequestContext)

type Status = 'idle' | 'sending' | 'done'

const COPY = {
  audit: {
    title: 'Request your free audit',
    sub: 'Send three things. You get a written audit in 2 working days. No call needed.',
    submit: 'Request my free audit',
    receive: [
      'A short written audit of where inquiries are being lost',
      'The top 3 fixes, in order, with a rough price for each',
      'Delivered to your email within 2 working days',
    ],
    fine: 'A free 15-minute call is optional if you want to talk it through. We use your details only for the audit, in line with the Data Privacy Act.',
    done: 'Thank you. Your audit request is in. Look out for your written audit within 2 working days.',
  },
  portfolio: {
    title: 'Request our portfolio',
    sub: 'Tell us where to send it. Add your business type or project if you want examples that match.',
    submit: 'Send me project examples',
    receive: [
      'Project examples with the problem, what we did and the result',
      'Sent to your email within one working day',
      'No call needed. Nobody will chase you',
    ],
    fine: 'We use your email only to send the portfolio, in line with the Data Privacy Act. Unsubscribe any time.',
    done: 'Thank you. We will send relevant project examples to your email within one working day.',
  },
} as const

export default function RequestProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [kind, setKind] = useState<RequestKind>('audit')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const [formKey, setFormKey] = useState(0)

  const open = useCallback((next: RequestKind) => {
    setKind(next)
    setStatus('idle')
    setError('')
    setFormKey((k) => k + 1)
    dialogRef.current?.showModal()
  }, [])

  const close = () => dialogRef.current?.close()

  // Close when the backdrop (outside the card) is clicked.
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const onClick = (e: MouseEvent) => {
      if (e.target === dialog) dialog.close()
    }
    dialog.addEventListener('click', onClick)
    return () => dialog.removeEventListener('click', onClick)
  }, [])

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setError('')
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    try {
      const res = await fetch('/api/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind, ...data }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json.error || 'Something went wrong. Please try again.')
      setStatus('done')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setStatus('idle')
    }
  }

  const copy = COPY[kind]

  return (
    <RequestContext.Provider value={open}>
      {children}
      <dialog ref={dialogRef} className="req-dialog" aria-labelledby="req-title">
        <div className="req-card">
          <button type="button" className="req-close" onClick={close} aria-label="Close">×</button>
          {status === 'done' ? (
            <div className="req-done">
              <h2 id="req-title">Request sent</h2>
              <p>{copy.done}</p>
              <button type="button" className="btn btn-primary" onClick={close}>Close</button>
            </div>
          ) : (
            <form key={formKey} onSubmit={submit} className="req-form" style={{ display: 'contents' }} noValidate>
              <h2 id="req-title">{copy.title}</h2>
              <p className="req-sub">{copy.sub}</p>

              {kind === 'audit' && (
                <>
                  <div className="req-field">
                    <label htmlFor="req-website">Website link</label>
                    <input id="req-website" name="website" type="text" inputMode="url" autoComplete="url" placeholder="https://" required />
                  </div>
                  <div className="req-field">
                    <label htmlFor="req-email">Email</label>
                    <input id="req-email" name="email" type="email" autoComplete="email" placeholder="you@yourbusiness.com" required />
                  </div>
                  <div className="req-field">
                    <label htmlFor="req-problem">Your biggest problem</label>
                    <input id="req-problem" name="problem" type="text" placeholder="For example: inquiries go unanswered" required />
                  </div>
                  <div className="req-field">
                    <label htmlFor="req-type">Business type <i>(optional)</i></label>
                    <input id="req-type" name="businessType" type="text" placeholder="For example: clinic, real estate, boutique" />
                  </div>
                </>
              )}

              {kind === 'portfolio' && (
                <>
                  <div className="req-field">
                    <label htmlFor="req-email">Email</label>
                    <input id="req-email" name="email" type="email" autoComplete="email" placeholder="you@yourbusiness.com" required />
                  </div>
                  <div className="req-field">
                    <label htmlFor="req-type">Business type <i>(optional)</i></label>
                    <input id="req-type" name="businessType" type="text" placeholder="For example: clinic, real estate, boutique" />
                  </div>
                  <div className="req-field">
                    <label htmlFor="req-interest">Project interest <i>(optional)</i></label>
                    <input id="req-interest" name="projectInterest" type="text" placeholder="For example: new website, faster follow-up" />
                  </div>
                </>
              )}

              <input className="req-hp" name="nickname" tabIndex={-1} autoComplete="off" aria-hidden />
              {error && <p className="req-error" role="alert">{error}</p>}
              <button type="submit" className="req-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : copy.submit}
              </button>

              <div className="req-get">
                <b>WHAT YOU WILL RECEIVE</b>
                <ul>
                  {copy.receive.map((line) => (
                    <li key={line}>
                      <img src="/img/icons/check-plan.svg" alt="" width={16} height={16} />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="req-fine">{copy.fine}</p>
            </form>
          )}
        </div>
      </dialog>
    </RequestContext.Provider>
  )
}

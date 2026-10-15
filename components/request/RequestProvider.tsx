'use client'
import { createContext, useCallback, useContext, useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'

// Portfolio request modal. The free audit has its own page (/free-audit).
const RequestContext = createContext<() => void>(() => {})

export const useRequestModal = () => useContext(RequestContext)

type Status = 'idle' | 'sending' | 'done'

const RECEIVE = [
  'Project examples with the problem, what we did and the result',
  'Sent to your email within one working day',
  'No call needed. Nobody will chase you',
]

export default function RequestProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const [formKey, setFormKey] = useState(0)

  const open = useCallback(() => {
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
        body: JSON.stringify({ kind: 'portfolio', ...data }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json.error || 'Something went wrong. Please try again.')
      setStatus('done')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setStatus('idle')
    }
  }

  return (
    <RequestContext.Provider value={open}>
      {children}
      <dialog ref={dialogRef} className="req-dialog" aria-labelledby="req-title">
        <div className="req-card">
          <button type="button" className="req-close" onClick={close} aria-label="Close">×</button>
          {status === 'done' ? (
            <div className="req-done">
              <h2 id="req-title" className="req-title">Request sent</h2>
              <p className="req-sub">Thank you. We will send relevant project examples to your email within one working day.</p>
              <button type="button" className="btn btn--primary" onClick={close}>Close</button>
            </div>
          ) : (
            <form key={formKey} onSubmit={submit} className="req-form" noValidate>
              <h2 id="req-title" className="req-title">Request our portfolio</h2>
              <p className="req-sub">Tell us where to send it. Add your business type or project if you want examples that match.</p>

              <div className="req-field">
                <label htmlFor="req-email">Email *</label>
                <input id="req-email" name="email" type="email" autoComplete="email" placeholder="you@business.com" required />
              </div>
              <div className="req-field">
                <label htmlFor="req-type">Business type <i>(optional)</i></label>
                <input id="req-type" name="businessType" type="text" placeholder="For example: clinic, real estate, boutique" />
              </div>
              <div className="req-field">
                <label htmlFor="req-interest">Project interest <i>(optional)</i></label>
                <input id="req-interest" name="projectInterest" type="text" placeholder="For example: new website, faster follow-up" />
              </div>

              <input className="req-hp" name="nickname" tabIndex={-1} autoComplete="off" aria-hidden />
              {error && <p className="req-error" role="alert">{error}</p>}
              <button type="submit" className="btn btn--primary req-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send me project examples'}
                {status !== 'sending' && <span className="btn__arrow">→</span>}
              </button>

              <div className="req-get">
                <p className="t-label">What you will receive</p>
                <ul>
                  {RECEIVE.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
              <p className="req-fine">We use your email only to send the portfolio, in line with the Data Privacy Act. Unsubscribe any time.</p>
            </form>
          )}
        </div>
      </dialog>
    </RequestContext.Provider>
  )
}

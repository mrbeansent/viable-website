'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import GridLines from './GridLines'

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// two working days from now (skips weekends)
function addWorkingDays(from: Date, n: number) {
  const d = new Date(from)
  while (n > 0) {
    d.setDate(d.getDate() + 1)
    if (d.getDay() !== 0 && d.getDay() !== 6) n--
  }
  return d
}

const CAL_DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
// static preview of the booking card (Figma: calendar embed placeholder); real booking lives on /book
const ROW1 = [
  ['13', 'off'], ['14', 'off'], ['15', ''], ['16', 'sel'], ['17', ''], ['18', 'off'], ['19', 'off'],
]
const ROW2 = [
  ['20', ''], ['21', ''], ['22', ''], ['23', ''], ['24', ''], ['25', 'off'], ['26', 'off'],
]

export default function ThankYouHero() {
  const [info, setInfo] = useState<{ name: string; email: string }>({ name: '', email: '' })
  const [when, setWhen] = useState<{ received: string; by: string } | null>(null)

  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    setInfo({ name: (q.get('name') || '').slice(0, 60), email: (q.get('email') || '').slice(0, 200) })
    const now = new Date()
    const by = addWorkingDays(now, 2)
    setWhen({
      received: `Today, ${now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`,
      by: `By ${DAYS[by.getDay()]}, ${MONTHS[by.getMonth()]} ${by.getDate()}`,
    })
  }, [])

  const STEPS = [
    { done: true, title: 'Request received', tag: 'Done', sub: when?.received ?? 'Today' },
    { done: false, title: 'We review your site and inquiries', tag: 'Next', sub: 'Belle or Vincent looks at your link, page and messages' },
    { done: false, title: 'Your audit arrives by email', tag: when?.by ?? 'Within 2 working days', sub: 'The top 3 fixes, in order, with rough prices' },
  ]

  return (
    <section className="audit-hero audit-hero--thanks" data-qa="audit-thanks">
      <div className="audit-panel panel">
        <img className="panel__bg" src="/img/v4/audit/thanks-hero.png" alt="" />
        <div className="audit-shade" />
        <GridLines />
        <div className="audit-hero__inner">
          <div className="audit-hero__left">
            <h1 className="audit-hero__title audit-hero__title--thanks">
              {info.name ? `Got it, ${info.name}.` : 'Got it.'}<br />Your audit is on its way.
            </h1>
            <p className="audit-hero__lead">
              We’ll email it to {info.email || 'your inbox'} within 2 working days. A copy of your request just landed in your inbox, so you know it reached us.
            </p>
            <div className="audit-next">
              <p className="t-label c-aqua">What happens next</p>
              <ol>
                {STEPS.map((s, i) => (
                  <li key={s.title}>
                    <span className={`audit-next__dot${s.done ? ' is-done' : ''}`} aria-hidden="true">{s.done ? '✓' : i + 1}</span>
                    <div>
                      <div className="audit-next__row">
                        <p>{s.title}</p>
                        <span className={s.done ? 'is-done' : undefined}>{s.tag}</span>
                      </div>
                      <p className="audit-next__sub">{s.sub}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="audit-thanks__right">
            <div className="audit-book">
              <p className="audit-index audit-index--light"><span>(Optional)</span> <b className="t-label">Talk sooner</b></p>
              <h2 className="audit-book__title">Want to talk it through? <br />Book a free 15-minute call.</h2>
              <p className="audit-book__text">We’ll have looked at your site before the call, so it’s straight to the useful part.</p>
              <div className="audit-cal" aria-hidden="true">
                <div className="audit-cal__head"><b>October 2026</b><span>‹&nbsp;&nbsp;&nbsp;›</span></div>
                <div className="audit-cal__row audit-cal__row--dow">{CAL_DAYS.map((d) => <span key={d}>{d}</span>)}</div>
                {[ROW1, ROW2].map((row, r) => (
                  <div className="audit-cal__row" key={r}>
                    {row.map(([d, k]) => <span key={d} className={`audit-cal__day ${k ? `is-${k}` : 'is-open'}`}>{d}</span>)}
                  </div>
                ))}
                <div className="audit-cal__times"><span>10:00 AM</span><span className="is-sel">1:30 PM</span><span>4:00 PM</span></div>
              </div>
              <Link className="btn btn--primary" href="/book">Book my call <span className="btn__arrow">→</span></Link>
            </div>
            <p className="audit-wait">
              <span>While you wait:</span>
              <Link href="/about">See our work →</Link>
              <Link href="/services#faq">Read the FAQ →</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

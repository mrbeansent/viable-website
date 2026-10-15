'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MESSENGER_URL } from '@/components/links'
import { FAQS } from './data'

// Accordion. All items start open (matches the Figma frame); each toggles on click.
export default function Faq() {
  const [closed, setClosed] = useState<Set<number>>(new Set())
  const toggle = (i: number) =>
    setClosed((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  return (
    <section id="faq" className="svc-sec svc-sec--dark svc-sec--lines svc-faq" data-qa="services-faq">
      <div className="container svc-faq__grid">
        <div className="svc-faq__side">
          <p className="svc-head__label t-label">Questions</p>
          <h2 className="svc-faq__title">Pricing and process questions, answered.</h2>
          <p className="svc-faq__lead">Can’t find yours? Message us on Messenger or Viber and a real person replies.</p>
          <Link href={MESSENGER_URL} className="btn btn--ghost">
            Message us
          </Link>
        </div>
        <div className="svc-faq__list">
          {FAQS.map(([q, a], i) => {
            const open = !closed.has(i)
            return (
              <div key={q} className={`svc-faq__item${open ? ' is-open' : ''}`}>
                <h3>
                  <button type="button" aria-expanded={open} aria-controls={`faq-a-${i}`} onClick={() => toggle(i)}>
                    <span>{q}</span>
                    <span className="svc-faq__plus" aria-hidden="true">+</span>
                  </button>
                </h3>
                <p id={`faq-a-${i}`} hidden={!open}>{a}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


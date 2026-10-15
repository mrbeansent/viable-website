'use client'

import { useState } from 'react'
import { MESSENGER_URL } from '@/components/links'
import { FAQS } from './faqData'

export default function Faq() {
  // Figma shows every answer expanded, so start fully open (each item still toggles).
  const [open, setOpen] = useState<number[]>(FAQS.map((_, i) => i))
  return (
    <section className="home-dark home-faq" id="faq" data-qa="home-faq">
      <div className="container home-faq__wrap">
        <div className="home-faq__left">
          <p className="t-label home-faq__label">Questions</p>
          <h2 className="home-faq__title">Things people ask before they book.</h2>
          <p className="home-faq__lead">Still unsure? Send us a message on Messenger or Viber and a real person replies.</p>
          <a href={MESSENGER_URL} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">Message us</a>
        </div>
        <div className="home-faq__list">
          {FAQS.map((f, i) => {
            const isOpen = open.includes(i)
            return (
              <div className="home-faq__item" key={f.q}>
                <h3>
                  <button type="button" className="home-faq__q" aria-expanded={isOpen} aria-controls={`faq-a-${i}`} onClick={() => setOpen(isOpen ? open.filter((x) => x !== i) : [...open, i])}>
                    <span>{f.q}</span>
                    <span className="home-faq__icon" aria-hidden="true">{isOpen ? '–' : '+'}</span>
                  </button>
                </h3>
                <div id={`faq-a-${i}`} className="home-faq__a" hidden={!isOpen}>
                  <p>{f.a}</p>
                </div>
              </div>
            )
          })}
          <div className="home-faq__end" />
        </div>
      </div>
    </section>
  )
}

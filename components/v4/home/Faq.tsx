'use client'

import { useState } from 'react'
import { MESSENGER_URL } from '@/components/links'

const FAQS = [
  { q: 'How long does a website take?', a: 'Standard builds usually go live in about 14 working days. The clock starts once we have your deposit, content and logins. Bigger projects get their own timeline in the quote.' },
  { q: 'Do I own my domain and website?', a: 'Yes. Your domain and the accounts in your name stay yours, and we hand over every login at launch. If hosting is part of a Care plan, your quote says who holds that account, and we help you move whenever you want. We never hold your accounts or data hostage.' },
  { q: 'Do I need a call?', a: 'No. You can get the free audit or the portfolio without one. If you’d like to talk it through, a free 15-minute call is there.' },
  { q: 'Do you work outside Cebu?', a: 'Yes. We work with businesses across the Philippines and with clients abroad. Calls and projects run online.' },
  { q: 'What if I only need a small fix?', a: 'Start with a free audit or a site fix. You don’t need a full rebuild to get a better result.' },
  { q: 'What does it cost?', a: 'Starting prices are listed above. After the audit you get a fixed quote: 50% to start and 50% before go-live.' },
  { q: 'What is AEO, and do I need it?', a: 'AEO means Answer Engine Optimization. More people now ask ChatGPT or Google AI instead of searching. AEO sets up your site and business details so those tools can find you and name you. If your customers might ask AI for a business like yours, it’s worth having.' },
]

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

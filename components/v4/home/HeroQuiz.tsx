'use client'

import Link from 'next/link'
import { useState } from 'react'
import { QUIZ } from '@/components/links'

const OPTIONS = [
  'Inquiries get slow replies',
  'My website looks dated',
  'People can’t find us on Google or AI',
  'Leads go cold after the first message',
]

// Mini "Find your fix" card. Hover/focus highlights an option; clicking one (or Next) opens the real quiz.
export default function HeroQuiz() {
  const [active, setActive] = useState(0)
  return (
    <div className="home-quiz" data-qa="home-quiz">
      <div className="home-quiz__head">
        <span className="t-label c-aqua">Find your fix</span>
        <span className="t-index home-quiz__count">1 / 8</span>
      </div>
      <p className="home-quiz__q">What is slowing you down right now?</p>
      {OPTIONS.map((label, i) => (
        <Link
          key={label}
          href={QUIZ}
          className={`home-quiz__opt${active === i ? ' is-on' : ''}`}
          onMouseEnter={() => setActive(i)}
          onFocus={() => setActive(i)}
        >
          <img src={`/img/v4/home/quiz-dot-${active === i ? 'on' : 'off'}.svg`} alt="" width={16} height={16} />
          <span>{label}</span>
        </Link>
      ))}
      <div className="home-quiz__foot">
        <span className="home-quiz__note">2 minutes. No prices, no pressure.</span>
        <Link href={QUIZ} className="btn btn--primary">
          Next <span className="btn__arrow">→</span>
        </Link>
      </div>
    </div>
  )
}

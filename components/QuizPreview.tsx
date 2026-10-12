'use client'
import { useState } from 'react'
import { QUIZ } from './links'

const OPTIONS = [
  'Inquiries get slow replies',
  'My website looks dated',
  'People cannot find us on Google',
  'Leads go cold after the first message',
]

export default function QuizPreview() {
  const [selected, setSelected] = useState(0)

  return (
    <div className="quiz-card" id="quiz">
      <p className="eyebrow">Question 1 of 8</p>
      <p className="quiz-q">What is your biggest pain right now?</p>
      <div className="quiz-options" role="radiogroup" aria-label="Biggest pain">
        {OPTIONS.map((option, i) => (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={selected === i}
            className={`quiz-option${selected === i ? ' selected' : ''}`}
            onClick={() => setSelected(i)}
          >
            <span className="radio" aria-hidden />
            {option}
          </button>
        ))}
      </div>
      <div className="quiz-foot">
        <small>Takes 2 minutes. No prices, no pressure.</small>
        <a href={QUIZ} className="quiz-next">Next →</a>
      </div>
      <div className="progress" aria-hidden><i /></div>
    </div>
  )
}

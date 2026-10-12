import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import CalendarEmbed from '@/components/book/CalendarEmbed'
import { QUIZ } from '@/components/links'

export const metadata: Metadata = {
  title: 'Book a free 15-minute call — Viable Works',
  description:
    'We will look at where your inquiries get lost and tell you plainly what we would do first. No pitch deck, no pressure.',
}

const STEPS = [
  'You pick a time that suits you',
  'We review your quiz answers or your site before the call',
  'You leave with a clear next step, even if it is not us',
]

export default function BookPage() {
  return (
    <SiteShell>
      <section className="book">
        <div className="glow" />
        <div className="container">
          <div className="book-row">
            <div className="book-copy">
              <p className="eyebrow">Book</p>
              <h1>
                Book a free
                <br />
                15-minute call.
              </h1>
              <p className="page-sub">
                We will look at where your inquiries get lost and tell you plainly what we would do first. No pitch
                deck, no pressure.
              </p>
              <ol className="book-steps">
                {STEPS.map((s, i) => (
                  <li key={s}>
                    <span className="step-num">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
              <p className="book-quiz">
                Prefer to answer a few questions first? Take the <a href={QUIZ}>Find your fix quiz</a>.
              </p>
            </div>
            <CalendarEmbed />
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

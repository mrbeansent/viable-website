import type { Metadata } from 'next'
import SiteShell from '@/components/v4/shared/SiteShell'
import CalendarEmbed from '@/components/book/CalendarEmbed'
import { QUIZ } from '@/components/links'
import '@/app/styles/v4-book.css'

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

// Not in the v4 Figma: reuses the free-audit hero panel look.
export default function BookPage() {
  return (
    <SiteShell showContactCta={false}>
      <section className="book">
        <div className="book-panel panel">
          <img className="panel__bg" src="/img/v4/audit/thanks-hero.png" alt="" />
          <div className="book-shade" />
          <div className="book-inner">
            <div className="book-copy">
              <p className="eyebrow">Book a call</p>
              <h1 className="book-title">Book a free<br />15-minute call.</h1>
              <p className="t-body-l book-lead">
                We will look at where your inquiries get lost and tell you plainly what we would do first. No pitch
                deck, no pressure.
              </p>
              <ol className="book-steps">
                {STEPS.map((s, i) => (
                  <li key={s}>
                    <span>{i + 1}</span>
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

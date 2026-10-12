import QuizPreview from './QuizPreview'
import { BOOK_CALL } from './links'

export default function Hero() {
  return (
    <section className="hero">
      <div className="glow glow-1" />
      <div className="glow glow-2" />
      <div className="container">
        <div className="hero-row">
          <div className="hero-copy">
            <p className="eyebrow">Websites · Email · Follow-up · Automation</p>
            <h1>
              Your website should bring you customers. <span>We make sure it does.</span>
            </h1>
            <p className="hero-sub">
              We have created success stories across the US, Canada and Australia, in many different industries. Now we
              want to do the same locally.
            </p>
            <div className="hero-buttons">
              <a href={BOOK_CALL} className="btn btn-primary">Book a free 15-minute call</a>
              <a href="/services" className="btn btn-ghost">See our services</a>
            </div>
          </div>
          <QuizPreview />
        </div>
      </div>
    </section>
  )
}

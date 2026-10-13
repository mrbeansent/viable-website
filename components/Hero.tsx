import QuizPreview from './QuizPreview'
import RequestButton from './request/RequestButton'

export default function Hero() {
  return (
    <section className="hero">
      <img className="tex" src="/img/bg/hero.png" alt="" style={{ opacity: 0.3 }} />
      <div className="glow glow-1" />
      <div className="container">
        <div className="hero-row">
          <div className="hero-copy">
            <p className="eyebrow">Websites · Email · Follow-up · Automation · AI search</p>
            <h1>
              Stop doing it all yourself. <span>Start getting customers.</span>
            </h1>
            <p className="hero-sub">
              We build your website, run your email and social media, and make sure every inquiry gets followed up. You
              get hands-on creative and technical support in an instant.
            </p>
            <div className="hero-buttons">
              <RequestButton kind="audit">Request a free audit</RequestButton>
              <RequestButton kind="portfolio" className="btn btn-ghost">Request portfolio</RequestButton>
            </div>
            <a href="/services" className="hero-explore">Explore Services</a>
          </div>
          <QuizPreview />
        </div>
      </div>
    </section>
  )
}

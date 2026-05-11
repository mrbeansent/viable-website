export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-eyebrow">
          <span className="dot" />
          Web Development · Marketing · Design · Automation
        </div>
        <h1>We build websites that <em>grow</em> businesses.</h1>
        <p>
          Viable is a boutique digital agency for small businesses and startups who want a powerful
          online presence — without the big agency price tag. Two specialists, every skill you need.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">Start a Project <span className="arrow">→</span></a>
          <a href="#work" className="btn btn-ghost">See Our Work</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="num">2</span>
            <span className="label">Dedicated specialists</span>
          </div>
          <div className="hero-stat">
            <span className="num">
              100<span style={{ fontSize: '0.55em', color: 'var(--mint-deep)' }}>%</span>
            </span>
            <span className="label">Direct communication</span>
          </div>
          <div className="hero-stat">
            <span className="num">
              24<span style={{ fontSize: '0.55em', color: 'var(--mint-deep)' }}>h</span>
            </span>
            <span className="label">Response time</span>
          </div>
          <div className="hero-stat">
            <span className="num">∞</span>
            <span className="label">Passion per pixel</span>
          </div>
        </div>
      </div>
    </section>
  )
}

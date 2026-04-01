export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-eyebrow">Web Development · Marketing · Design</div>
          <h1>We build websites that <span className="gradient-text">grow businesses.</span></h1>
          <p>Viable is a boutique digital agency for small businesses and startups who want a powerful online presence — without the big agency price tag.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Start a Project →</a>
            <a href="#portfolio" className="btn btn-ghost">See Our Work</a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
      </div>
    </section>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid"></div>
      <div className="container hero-inner">
        <div>
          <span className="eyebrow">Web Development · Marketing · Design · Automation</span>
          <h1>We build websites that <em>grow</em> businesses.</h1>
          <p className="hero-sub">Viable is a boutique digital agency for small businesses and startups who want a powerful online presence — without the big agency price tag. Two specialists, every skill you need.</p>
          <div className="hero-meta">
            <div><span className="num"><em>2</em></span><span className="label">Dedicated specialists</span></div>
            <div><span className="num"><em>100%</em></span><span className="label">Direct communication</span></div>
            <div><span className="num"><em>24h</em></span><span className="label">Response time</span></div>
            <div><span className="num"><em>∞</em></span><span className="label">Passion per pixel</span></div>
          </div>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">Start a project →</a>
            <a href="#work" className="btn btn-secondary">See our work</a>
          </div>
        </div>

        <div className="system-viz">
          <div className="viz-orb"></div>
          <svg className="viz-lines" viewBox="0 0 500 500" fill="none" preserveAspectRatio="xMidYMid meet">
            <path d="M 80 80 Q 250 250 420 90" stroke="rgba(92,224,216,0.25)" strokeWidth="1.5" strokeDasharray="4 4"/>
            <path d="M 90 250 Q 250 200 410 270" stroke="rgba(168,122,224,0.25)" strokeWidth="1.5" strokeDasharray="4 4"/>
            <path d="M 160 460 Q 250 350 400 420" stroke="rgba(92,224,216,0.25)" strokeWidth="1.5" strokeDasharray="4 4"/>
          </svg>
          <div className="viz-card viz-1">
            <div className="dot">
              <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>
            </div>
            Website
          </div>
          <div className="viz-card viz-2 purple">
            <div className="dot">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18"/></svg>
            </div>
            Marketing
          </div>
          <div className="viz-card viz-3">
            <div className="dot">
              <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><polyline points="4 8 12 14 20 8"/></svg>
            </div>
            Email
          </div>
          <div className="viz-card viz-4 purple">
            <div className="dot">
              <svg viewBox="0 0 24 24"><path d="M3 12h4l3-9 4 18 3-9h4"/></svg>
            </div>
            CRM
          </div>
          <div className="viz-card viz-5">
            <div className="dot">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0"/></svg>
            </div>
            Automation
          </div>
        </div>
      </div>
    </section>
  )
}

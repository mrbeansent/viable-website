import Reveal from './Reveal'

const stats = [
  { num: '2', lbl: 'Dedicated Specialists' },
  { num: '100%', lbl: 'Direct Communication' },
  { num: '24hr', lbl: 'Response Time' },
  { num: '∞', lbl: 'Passion per Pixel' },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <div className="section-label">Who We Are</div>
          <h2 className="section-heading">A husband-and-wife team<br />who <span className="gradient-text">actually care.</span></h2>
        </Reveal>
        <div className="about-layout">
          <Reveal className="about-text">
            <p>We&apos;re <strong>Beans</strong> (web development) and <strong>his better half</strong> (design &amp; marketing) — a two-person agency that does things differently.</p>
            <p>No account managers. No layers. When you work with Viable, you work directly with the people building your project. We&apos;re fast, focused, and genuinely invested in your success — because your growth is our growth.</p>
            <p>We specialise in helping <strong>small businesses and startups</strong> across Australia build digital presences that punch well above their weight. Every website we build is designed not just to look good, but to <strong>generate leads, drive sales, and grow your business</strong>.</p>
          </Reveal>
          <Reveal className="about-stats">
            {stats.map(s => (
              <div key={s.lbl} className="about-stat">
                <div className="num">{s.num}</div>
                <div className="lbl">{s.lbl}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

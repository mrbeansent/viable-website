import Reveal from './Reveal'

const projects = [
  {
    bg: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    tag: 'Web Design + SEO',
    title: 'Coastal Café Rebrand',
    desc: 'Complete website redesign and local SEO strategy for a Sydney-based café. Online orders up 140% in the first quarter.',
    svg: (
      <svg className="thumb-pattern" viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
        <circle cx="320" cy="60" r="80" fill="rgba(92,224,216,0.08)" />
        <circle cx="80" cy="190" r="60" fill="rgba(155,125,212,0.06)" />
        <rect x="140" y="80" width="120" height="90" rx="8" fill="rgba(255,255,255,0.04)" />
        <rect x="150" y="90" width="100" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="150" y="104" width="70" height="6" rx="3" fill="rgba(255,255,255,0.04)" />
        <rect x="150" y="130" width="100" height="28" rx="6" fill="rgba(92,224,216,0.1)" />
      </svg>
    ),
  },
  {
    bg: 'linear-gradient(135deg, #1a0a2e, #2d1b4e, #1e3a5f)',
    tag: 'E-Commerce',
    title: 'Artisan Goods Store',
    desc: 'Shopify store with custom product photography integration and automated email marketing. Launched with 200+ products.',
    svg: (
      <svg className="thumb-pattern" viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="40" width="140" height="170" rx="10" fill="rgba(155,125,212,0.08)" />
        <rect x="50" y="50" width="120" height="80" rx="6" fill="rgba(255,255,255,0.03)" />
        <circle cx="110" cy="160" r="20" fill="rgba(92,224,216,0.08)" />
        <rect x="220" y="60" width="140" height="130" rx="10" fill="rgba(255,255,255,0.04)" />
        <rect x="235" y="80" width="80" height="6" rx="3" fill="rgba(92,224,216,0.1)" />
        <rect x="235" y="96" width="110" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
        <rect x="235" y="112" width="90" height="6" rx="3" fill="rgba(255,255,255,0.04)" />
      </svg>
    ),
  },
  {
    bg: 'linear-gradient(135deg, #0a1628, #152238, #1a3050)',
    tag: 'Website + Marketing',
    title: 'Startup Launch Package',
    desc: 'Full brand identity, website, and social media launch strategy for a tech startup. 3,000+ website visitors in month one.',
    svg: (
      <svg className="thumb-pattern" viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="30" width="340" height="190" rx="12" fill="rgba(255,255,255,0.03)" />
        <rect x="50" y="50" width="120" height="8" rx="4" fill="rgba(92,224,216,0.12)" />
        <rect x="50" y="70" width="180" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
        <rect x="50" y="100" width="140" height="100" rx="8" fill="rgba(92,224,216,0.05)" />
        <rect x="210" y="100" width="140" height="45" rx="8" fill="rgba(155,125,212,0.06)" />
        <rect x="210" y="155" width="140" height="45" rx="8" fill="rgba(255,255,255,0.03)" />
      </svg>
    ),
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <Reveal>
          <div className="section-label">Selected Work</div>
          <h2 className="section-heading">Projects that <span className="gradient-text">prove results.</span></h2>
          <p className="section-desc">From local businesses to growing startups — here&apos;s a sample of what we build and the impact it creates.</p>
        </Reveal>
        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="portfolio-card">
              <div className="portfolio-thumb" style={{ background: p.bg }}>
                {p.svg}
              </div>
              <div className="portfolio-info">
                <div className="tag">{p.tag}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

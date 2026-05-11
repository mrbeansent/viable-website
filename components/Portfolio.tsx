import Reveal from './Reveal'

const projects = [
  {
    tags: 'Brand · Marketing',
    title: 'eFlexervices',
    desc: 'Full marketing campaign — social graphics, email design, and on-brand collateral built around a fresh identity system.',
    by: 'Belle',
    svg: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="10" y="10" width="80" height="60" rx="4" />
        <path d="M10 26h80" /><path d="M22 40h36M22 50h26M22 58h44" />
      </svg>
    ),
  },
  {
    tags: 'Brand · Email',
    title: 'EyeCare Educators',
    desc: 'Brand identity and email marketing system for a healthcare education platform — calm green palette, clean iconography.',
    by: 'Belle',
    svg: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="50" cy="40" r="22" /><circle cx="50" cy="40" r="10" />
        <path d="M28 20l-6-4M72 20l6-4" />
      </svg>
    ),
  },
  {
    tags: 'Mobile App · UI',
    title: 'Sunvoy',
    desc: 'Mobile app UI design, onboarding flows, and an Inter-based typography system for a modern fitness platform.',
    by: 'Belle',
    svg: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="34" y="10" width="32" height="60" rx="5" />
        <circle cx="50" cy="62" r="2.5" /><path d="M40 20h20M40 26h12" />
      </svg>
    ),
  },
  {
    tags: 'WooCommerce',
    title: 'Advanced Coupons',
    desc: 'Series of WooCommerce promotional campaigns — landing pages, coupon design, and seasonal email sends that drove conversions.',
    by: 'Belle',
    svg: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="14" y="18" width="48" height="44" rx="3" strokeDasharray="3 3" />
        <rect x="40" y="32" width="46" height="32" rx="3" />
        <path d="M48 42h30M48 50h22" />
      </svg>
    ),
  },
  {
    tags: 'WordPress · CMS',
    title: 'Exploration Sites',
    desc: 'Custom WordPress builds — Elementor layouts, ACF flexible content, performance & security hardening.',
    by: 'Vincent',
    svg: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M14 60l16-22 14 16 14-26 14 18 14-12" />
        <circle cx="30" cy="38" r="2.5" /><circle cx="44" cy="54" r="2.5" />
        <circle cx="58" cy="28" r="2.5" /><circle cx="72" cy="46" r="2.5" />
      </svg>
    ),
  },
  {
    tags: 'Webflow · CMS API',
    title: 'News Release Pipeline',
    desc: 'End-to-end Webflow CMS pipeline for a TSX-listed mining company — bulk-imported 200+ press releases via the Webflow Data API.',
    by: 'Vincent',
    svg: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M14 22h72v36H14z" /><path d="M14 32h72" />
        <circle cx="22" cy="27" r="1.5" fill="currentColor" />
        <circle cx="28" cy="27" r="1.5" fill="currentColor" />
        <path d="M22 42h32M22 48h44" />
      </svg>
    ),
  },
  {
    tags: 'AI · Automation',
    title: 'Self-Hosted AI Lead Engine',
    desc: 'End-to-end AI-powered lead pipeline — Google Maps sourcing, LLM scoring, ranked Slack digests. $0/mo infrastructure cost.',
    by: 'Vincent',
    svg: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="34" cy="40" r="14" /><circle cx="50" cy="40" r="14" /><circle cx="66" cy="40" r="14" />
      </svg>
    ),
  },
  {
    tags: 'Social Media',
    title: 'University of Santo Tomas',
    desc: 'Social media content design — Instagram grid system, story templates, and event-driven graphics for a major institution.',
    by: 'Belle',
    svg: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="20" y="14" width="60" height="52" rx="3" /><path d="M20 26h60" />
        <path d="M30 38l8 8-8 8M52 54h18" />
      </svg>
    ),
  },
  {
    tags: 'Print · Game Design',
    title: 'The Fidget Game',
    desc: 'Product packaging and 2025 print catalog — a tactile, playful brand system extended across physical and digital touchpoints.',
    by: 'Belle',
    svg: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="22" y="22" width="56" height="36" rx="6" />
        <circle cx="38" cy="40" r="4" /><circle cx="62" cy="40" r="4" />
        <path d="M50 30v20" />
      </svg>
    ),
  },
]

export default function Portfolio() {
  return (
    <section id="work">
      <div className="container">
        <Reveal className="section-head">
          <div className="left">
            <div className="section-eyebrow"><span className="plus">+</span> Selected work</div>
            <h2>Projects that <em>prove</em> results.</h2>
          </div>
          <div className="right">
            A snapshot of what we build and the impact it creates — pulled from both founders&apos; portfolios.
          </div>
        </Reveal>
        <div className="work-grid">
          {projects.map((p) => (
            <article key={p.title} className="work-card">
              <div className="work-thumb">{p.svg}</div>
              <div className="work-meta">
                <div className="work-tags">{p.tags}</div>
                <h4>{p.title}</h4>
                <p className="work-desc">{p.desc}</p>
                <div className="work-by">By <b>{p.by}</b></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

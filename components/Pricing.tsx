import Reveal from './Reveal'

const plans = [
  {
    tier: 'Starter',
    badge: null,
    name: 'Starter',
    pitch: 'Perfect for new businesses needing a polished web presence.',
    amount: '2,500',
    meta: 'One-time',
    suffix: '+ tax',
    features: [
      '5–8 page custom website',
      'Mobile-responsive design',
      'Basic SEO setup',
      'Contact form & analytics',
      '30-day post-launch support',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    tier: 'Growth',
    badge: 'Most popular',
    name: 'Growth',
    pitch: 'Full website + brand + marketing for businesses ready to scale.',
    amount: '5,000',
    meta: 'One-time',
    suffix: '+ tax',
    features: [
      '10–20 page site or WooCommerce store',
      'Brand identity & style guide',
      'Advanced SEO & speed optimization',
      'Social media content templates',
      'Email marketing setup',
      '60-day post-launch support',
    ],
    cta: 'Get Started →',
    featured: true,
  },
  {
    tier: 'Partner',
    badge: null,
    name: 'Partner',
    pitch: 'Ongoing marketing, maintenance & growth — your digital team on retainer.',
    amount: '1,250',
    meta: 'Monthly',
    suffix: '/month',
    features: [
      'Website maintenance & updates',
      'Social media management',
      'Monthly content creation',
      'AI & automation upkeep',
      'Priority support',
    ],
    cta: "Let's Talk",
    featured: false,
  },
]

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12l5 5 9-11" />
  </svg>
)

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <Reveal className="section-head">
          <div className="left">
            <div className="section-eyebrow"><span className="plus">+</span> Investment</div>
            <h2>Clear pricing. <em>No</em> surprises.</h2>
          </div>
          <div className="right">
            Whether you need a one-off build or ongoing growth support, there&apos;s a package that fits.
            Every project starts with a free discovery call.
          </div>
        </Reveal>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article key={plan.name} className={`price-card${plan.featured ? ' featured' : ''}`}>
              <div className="price-tier">
                <span>{plan.tier}</span>
                {plan.badge && <span className="price-tag-badge">{plan.badge}</span>}
              </div>
              <div className="price-name">{plan.name}</div>
              <div className="price-pitch">{plan.pitch}</div>
              <div className="price-amount">
                <sup>$</sup>{plan.amount}
                <span style={{
                  fontSize: '14px',
                  color: plan.featured ? 'rgba(255,255,255,0.4)' : 'var(--muted-2)',
                  marginLeft: '4px',
                }}>
                  {plan.suffix}
                </span>
              </div>
              <div className="price-meta">{plan.meta}</div>
              <ul className="price-features">
                {plan.features.map((f) => (
                  <li key={f}><Check />{f}</li>
                ))}
              </ul>
              <a href="#contact" className="price-cta">{plan.cta}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

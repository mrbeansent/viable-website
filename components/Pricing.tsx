import Reveal from './Reveal'

const plans = [
  {
    tier: 'Starter',
    tierColor: undefined,
    amount: '$2,500',
    unit: '– $5,000',
    desc: 'Perfect for new businesses needing a professional web presence',
    features: [
      '5–8 page custom website',
      'Mobile-responsive design',
      'Basic SEO setup',
      'Contact form & analytics',
      '30-day post-launch support',
    ],
    cta: 'Get Started',
    ctaStyle: 'btn-ghost',
    featured: false,
  },
  {
    tier: 'Growth',
    tierColor: 'var(--teal)',
    amount: '$5,000',
    unit: '– $12,000',
    desc: 'Full website + brand package for businesses ready to scale',
    features: [
      '10–20 page site or e-commerce store',
      'Brand identity & style guide',
      'Advanced SEO & speed optimisation',
      'Social media templates',
      'Email marketing setup',
      '60-day post-launch support',
    ],
    cta: 'Get Started',
    ctaStyle: 'btn-primary',
    featured: true,
  },
  {
    tier: 'Partner',
    tierColor: undefined,
    amount: '$1,250',
    unit: '/ month',
    desc: 'Ongoing marketing, maintenance & growth — your digital team on retainer',
    features: [
      'Website maintenance & updates',
      'Social media management',
      'Monthly content creation',
      'SEO monitoring & optimisation',
      'Performance reporting',
      'Priority support',
    ],
    cta: "Let's Talk",
    ctaStyle: 'btn-ghost',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <Reveal>
          <div className="section-label">Investment</div>
          <h2 className="section-heading">Clear pricing.<br /><span className="gradient-text">No surprises.</span></h2>
          <p className="section-desc">Whether you need a one-off build or ongoing support, we have a package that fits. Every project starts with a free discovery call.</p>
        </Reveal>
        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <Reveal key={plan.tier} delay={i * 0.1} className={`price-card${plan.featured ? ' featured' : ''}`}>
              <div className="price-tier" style={plan.tierColor ? { color: plan.tierColor } : undefined}>
                {plan.tier}
              </div>
              <div className="price-amount">
                {plan.amount} <span className="unit">{plan.unit}</span>
              </div>
              <div className="price-desc">{plan.desc}</div>
              <ul className="price-features">
                {plan.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <a href="#contact" className={`btn ${plan.ctaStyle}`}>{plan.cta}</a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

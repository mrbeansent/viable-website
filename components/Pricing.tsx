const plans = [
  {
    tier: 'One-Time',
    name: 'Project',
    desc: 'Best for defined deliverables with a clear start and end — websites, video packs, CRM builds, or automation setups.',
    features: [
      'Scoped and quoted upfront',
      '50% deposit · 50% on delivery',
      'Turnaround agreed before kickoff',
      'Clean handover included',
    ],
    cta: 'Get a quote',
    featured: false,
  },
  {
    tier: 'Ongoing',
    name: 'Monthly Retainer',
    desc: 'For businesses that want a consistent marketing engine — content, email, social, CRM, and more — running every month.',
    features: [
      'Billed monthly in advance',
      '3-month initial engagement',
      'Flexible scope reviewed quarterly',
      'PH &amp; international rates available',
      'Custom quote based on your needs',
    ],
    cta: "Let's talk →",
    featured: true,
  },
  {
    tier: 'Custom',
    name: 'Bundle &amp; Build',
    desc: 'Combine web, content, email, and automation into a bundled system tailored to your growth stage.',
    features: [
      'Mix and match services',
      'Unified team and reporting',
      'Scales as your needs grow',
      'Custom SLA and cadence',
    ],
    cta: 'Tell us your goals',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <span className="section-eyebrow">Engagement Model</span>
        <h2>Flexible pricing. <em>Tailored</em> to your scope.</h2>
        <p className="section-sub">Every business is different — so every engagement is scoped and quoted based on your actual goals, services, and stage of growth. No one-size-fits-all packages.</p>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article key={plan.name} className={`price-card${plan.featured ? ' featured' : ''}`}>
              {plan.featured && <span className="badge">Recommended</span>}
              <div className="tier">{plan.tier}</div>
              <h3>{plan.name}</h3>
              <p className="desc">{plan.desc}</p>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`} style={{ justifyContent: 'center' }}>
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
        <p className="pricing-note">All pricing is customized based on scope, complexity, and market. Start with a <a href="#contact">free discovery call</a> — no obligation.</p>
      </div>
    </section>
  )
}

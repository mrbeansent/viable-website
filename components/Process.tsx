const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'A free call to understand your business, goals, and blockers. We\'ll walk away with a clear scope, timeline, and quote — no obligation.',
  },
  {
    num: '02',
    title: 'Strategy &amp; Plan',
    desc: 'We define the exact deliverables, milestones, and responsibilities — so there\'s no confusion once work starts.',
  },
  {
    num: '03',
    title: 'Build &amp; Execute',
    desc: 'The team builds, designs, writes, and ships. You get review checkpoints at every milestone — no surprises at launch.',
  },
  {
    num: '04',
    title: 'Measure &amp; Grow',
    desc: 'Monthly reporting, performance reviews, and scope refinement — so your marketing engine improves every cycle.',
  },
]

export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <span className="section-eyebrow">How it works</span>
        <h2>A simple <em>4-step</em> process. No surprises.</h2>
        <p className="section-sub">From first call to launch — every project follows the same clear, predictable framework so you always know what&apos;s happening and when.</p>

        <div className="process-list">
          {steps.map((step) => (
            <div key={step.num} className="process-step">
              <span className="step-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

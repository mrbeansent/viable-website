import Reveal from './Reveal'

const steps = [
  {
    num: 'Step 01',
    title: 'Discovery',
    desc: "A free call to understand your business, audience, and goals. We'll walk away with a clear scope, timeline, and quote — no obligation.",
  },
  {
    num: 'Step 02',
    title: 'Design',
    desc: 'Belle handles wireframes and visual mockups in Figma — refined together until it feels exactly right before any code is written.',
  },
  {
    num: 'Step 03',
    title: 'Build',
    desc: "Vincent turns the design into a private staging environment. You get review links at every milestone — no surprises at launch day.",
  },
  {
    num: 'Step 04',
    title: 'Launch & Grow',
    desc: 'Smooth launch, plus optional ongoing marketing, automation, and infrastructure support to keep growth compounding.',
  },
]

export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <Reveal className="section-head">
          <div className="left">
            <div className="section-eyebrow"><span className="plus">+</span> How it works</div>
            <h2>A simple <em>4-step</em> process. No surprises.</h2>
          </div>
          <div className="right">
            From first call to launch — every project follows the same clear, predictable framework so you always know what&apos;s happening and when.
          </div>
        </Reveal>
        <div className="steps">
          {steps.map((step) => (
            <div key={step.num} className="step">
              <div className="step-num">{step.num}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

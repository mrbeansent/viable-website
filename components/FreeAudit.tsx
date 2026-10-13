import { Fragment } from 'react'

const STEPS = [
  { title: 'You send', items: ['Your website link', 'Your email', 'One line on your biggest problem'] },
  { title: 'You receive', items: ['A short written audit', 'Where inquiries are being lost', 'The top 3 fixes, in order, with a rough price for each'] },
  { title: 'When it arrives', items: ['Within 2 working days', 'Sent to your email'] },
  { title: 'Is a call required?', items: ['No. The audit is yours either way', 'Want to talk it through? Book a free 15-minute call'] },
]

export default function FreeAudit() {
  return (
    <section id="free-audit" className="sec sec--dark sec-audit tex-wrap">
      <img className="tex" src="/img/bg/audit.png" alt="" />
      <div className="glow glow-1" />
      <div className="glow glow-2" />
      <div className="container">
        <div className="audit-head">
          <p className="eyebrow">FREE AUDIT · NO PAYMENT · NO CALL NEEDED</p>
          <h2>Your free audit, step by step.</h2>
          <p>Send us three things. Get a written audit in 2 working days.</p>
        </div>
        <div className="audit-steps">
          {STEPS.map((step, i) => (
            <Fragment key={step.title}>
              {i > 0 && (
                <div className="audit-arrow" aria-hidden>
                  <img src="/img/icons2/audit-arrow.svg" alt="" width={18} height={18} />
                </div>
              )}
              <article className="audit-card">
                <h3>{step.title}</h3>
                <ul>
                  {step.items.map((item) => (
                    <li key={item}>
                      <img src="/img/icons2/audit-tick.svg" alt="" width={16} height={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

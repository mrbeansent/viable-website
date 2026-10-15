import AuditForm from './AuditForm'
import GridLines from './GridLines'

const GET = [
  'A short written audit, sent to your email',
  'Where your inquiries are being lost',
  'The top 3 fixes, in order, with a rough price for each',
  'A free 15-minute call, only if you want one',
]
const STEPS = [
  { when: 'Today', what: 'You send the form' },
  { when: 'Within 2 working days', what: 'Your audit arrives' },
  { when: 'Your call', what: 'Fix it with us, or on your own' },
]

export default function AuditHero() {
  return (
    <section className="audit-hero" data-qa="audit-hero">
      <div className="audit-panel panel">
        <img className="panel__bg" src="/img/v4/audit/hero.png" alt="" />
        <div className="audit-shade" />
        <GridLines />
        <div className="audit-hero__inner">
          <div className="audit-hero__left">
            <p className="audit-index"><span>(01)</span> <b className="t-label">Free audit</b></p>
            <h1 className="audit-hero__title">Get your<br />free audit.</h1>
            <p className="audit-hero__lead">
              Send your link and one line about the problem. In 2 working days you’ll know what’s costing you customers, what to fix first, and roughly what it costs.
            </p>
            <div className="audit-get">
              <p className="t-label c-aqua">What you get</p>
              <ul>
                {GET.map((g) => (
                  <li key={g}><span aria-hidden="true">✓</span>{g}</li>
                ))}
              </ul>
            </div>
            <ol className="audit-steps">
              {STEPS.map((s, i) => (
                <li key={s.when} className={i === 0 ? 'is-first' : undefined}>
                  <span>{s.when}</span>
                  <p>{s.what}</p>
                </li>
              ))}
            </ol>
          </div>
          <AuditForm />
        </div>
      </div>
    </section>
  )
}

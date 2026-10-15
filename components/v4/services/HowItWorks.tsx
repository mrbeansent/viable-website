import SvcHeading from './Heading'
import { GOOD_TO_KNOW, STEPS } from './data'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="svc-sec svc-sec--light svc-sec--lines svc-how" data-qa="services-how">
      <div className="container">
        <SvcHeading label="How it works" title={<>What happens after<br />you say hello.</>} note="Six steps, so you always know what comes next and what we need from you." />
        <ol className="svc-steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="svc-step">
              <img className="svc-step__dot" src={`/img/v4/services/${i === 0 ? 'dot-filled' : 'dot-outline'}.svg`} alt="" aria-hidden="true" width={13} height={13} />
              <p className="svc-step__when">{s.when}</p>
              <p className="svc-step__n">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="svc-step__title">{s.title}</h3>
              <p className="svc-step__text">{s.text}</p>
              <p className="svc-step__you">{s.you}</p>
              <span className="svc-chip">{s.chip}</span>
            </li>
          ))}
        </ol>
        <div className="svc-know">
          {GOOD_TO_KNOW.map((g) => (
            <div key={g.title} className="svc-know__card">
              <p className="t-label svc-know__title">{g.title}</p>
              <ul className="svc-checks">
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="svc-pay">
          Payment is 50% to start and 50% before go-live. Standard builds usually go live in about 14 working days, counted from when we have your deposit, content and logins. Bigger projects get their own timeline in the quote.
        </p>
      </div>
    </section>
  )
}

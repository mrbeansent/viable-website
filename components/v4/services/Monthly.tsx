import Link from 'next/link'
import { quoteLink } from '@/components/links'
import { PLANS } from './data'
import SvcHeading from './Heading'

export default function Monthly() {
  return (
    <section id="monthly" className="svc-sec svc-sec--dark svc-sec--lines" data-qa="services-monthly">
      <div className="container">
        <SvcHeading label="Monthly plans" title="Plans that keep working for you every month." note="Billed monthly in advance. Change or stop with 30 days’ notice. No long contracts." />
        <div className="svc-plans">
          {PLANS.map((p) => (
            <article key={p.title} className={`svc-plan${p.featured ? ' svc-plan--featured' : ''}`}>
              <div className="svc-plan__top">
                <h3 className="svc-plan__title">{p.title}</h3>
                {p.featured ? <span className="svc-plan__badge">Most popular</span> : null}
              </div>
              <p className="svc-plan__sub">{p.sub}</p>
              <p className="svc-plan__price">
                <span className="svc-plan__small">From</span>
                <span className="svc-plan__amt">{p.price}</span>
                <span className="svc-plan__small">/ month</span>
              </p>
              <ul className="svc-checks svc-checks--dark">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <Link href={quoteLink(p.title)} className={`btn ${p.featured ? 'btn--ghost' : 'btn--primary'} svc-plan__btn`}>
                Get a quote <span className="btn__arrow">→</span>
              </Link>
            </article>
          ))}
        </div>
        <p className="svc-tip">
          <span className="t-label c-aqua">Tip</span>
          Pair a Launch Site with the Care plan so your site stays fast, updated and safe after launch.
        </p>
      </div>
    </section>
  )
}

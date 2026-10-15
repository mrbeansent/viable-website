import Link from 'next/link'
import { BOOK_CALL, FREE_AUDIT, quoteLink } from '@/components/links'
import { PACKAGES } from './data'
import SvcHeading from './Heading'

export default function OneTime() {
  const href = (p: (typeof PACKAGES)[number]) => (p.href === 'audit' ? FREE_AUDIT : p.href === 'book' ? BOOK_CALL : quoteLink(p.title))
  return (
    <section id="pricing" className="svc-sec svc-sec--light" data-qa="services-one-time">
      <div className="container">
        <SvcHeading
          label="One-time projects"
          title={<>Pay once, and get it fixed<br />or built properly.</>}
          note={<>Small jobs are real jobs.<br />Start with a single fix, or go straight to a new site. Every project starts with the free audit.</>}
        />
        <div className="svc-pkgs">
          {PACKAGES.map((p) => (
            <article key={p.n} className={`svc-pkg svc-pkg--r${p.row}`}>
              <div className="svc-pkg__top">
                <span className="svc-pkg__n">{p.n}</span>
                <span className="svc-chip">{p.chip}</span>
              </div>
              <h3 className="svc-pkg__title">{p.title}</h3>
              <p className="svc-pkg__sub">{p.sub}</p>
              <p className="svc-pkg__price">{p.price}</p>
              <div className="svc-pkg__list">
                <p className="t-label">What you get</p>
                <ul className="svc-checks">
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
              <Link href={href(p)} className="svc-pkg__cta">
                {p.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { TOC } from './data'

// Hero panel: sits at y=42 under the absolutely-positioned nav.
export default function ServicesHero() {
  return (
    <section className="svc-hero panel" data-qa="services-hero">
      <img className="panel__bg" src="/img/v4/services/hero-panel.png" alt="" />
      <div className="svc-hero__shade" />
      {[100, 400, 700, 1000, 1300].map((x) => (
        <span key={x} className="svc-hero__line" style={{ ['--x' as string]: `${x}px` }} />
      ))}
      <div className="svc-hero__copy">
        <p className="svc-hero__eyebrow">Services &amp; pricing</p>
        <h1 className="svc-hero__title">
          Pick a fix.
          <br />
          We’ll tell you
          <br />
          the right size.
        </h1>
        <p className="svc-hero__lead">
          Clear packages with starting prices in pesos. After a free audit you get a written quote, and the price stays
          fixed for the agreed scope.
        </p>
      </div>
      <nav className="svc-toc" aria-label="On this page">
        <p className="t-label">On this page</p>
        <ul>
          {TOC.map(([label, href], i) => (
            <li key={href}>
              <a href={href}>
                <span className="svc-toc__n">{String(i + 1).padStart(2, '0')}</span>
                <span className="svc-toc__l">{label}</span>
                <span className="svc-toc__a" aria-hidden="true">↓</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

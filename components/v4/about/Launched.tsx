const IMG = '/img/v4/about'

const SITES = [
  { src: 'site-phoenix.webp', url: 'phoenixmetalscorp.com', name: 'Phoenix Metals', sub: 'TSX-listed copper-gold explorer, BC' },
  { src: 'site-humangarage.webp', url: 'humangarage.net', name: 'Human Garage', sub: 'Wellness membership and self-care programs' },
  { src: 'site-vanguard.webp', url: 'vanguardoptometricsociety.com', name: 'Vanguard Optometric Society', sub: 'Optometry leadership network' },
  { src: 'site-blackrock.webp', url: 'blackrocksilver.com', name: 'Blackrock Silver', sub: 'TSX-V silver-gold developer, Nevada' },
]

export default function Launched() {
  return (
    <section className="about-launched" data-qa="about-launched">
      <div className="container">
        <div className="about-split">
          <div>
            <p className="t-label about-eyebrow">Recently launched</p>
            <h2 className="about-h2 about-h2--56">Some of our recent works</h2>
          </div>
          <p className="about-split__aside">
            For wellness, healthcare, life-science and mining brands. Each one live, mobile-first, and built to start
            conversations.
          </p>
        </div>
        <div className="about-sites">
          {SITES.map((s) => (
            <article key={s.name} className="about-site">
              <div className="about-site__media">
                <div className="about-site__bar">
                  <span className="about-site__dots">
                    {[0, 1, 2].map((i) => (
                      <img key={i} src={`${IMG}/browser-dot.svg`} alt="" aria-hidden="true" width={8} height={8} />
                    ))}
                  </span>
                  <span className="about-site__url">{s.url}</span>
                </div>
                <img className="about-site__shot" src={`${IMG}/${s.src}`} alt={`${s.name} website`} loading="lazy" />
              </div>
              <div className="about-site__info">
                <p className="about-meta">Website &nbsp;·&nbsp; 2026</p>
                <h3 className="about-site__name">{s.name}</h3>
                <p className="about-site__sub">{s.sub}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

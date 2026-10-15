const SITES = [
  { url: 'kol-360.com', shot: 'work-kol360.png', title: 'KOL360', sub: 'Thought-leader research methodology' },
  { url: 'dryeyecouncil.com', shot: 'work-dryeye.png', title: 'Dry Eye Council', sub: 'Clinical strategy for eye-care brands' },
]

export default function RecentWork() {
  return (
    <section className="home-dark home-work" data-qa="home-work">
      <div className="home-work__bg" aria-hidden="true">
        <img src="/img/v4/home/work-bg.png" alt="" />
        <div />
      </div>
      <div className="container home-stack home-stack--64">
        <div className="home-work__head">
          <div className="home-work__left">
            <p className="t-label home-work__label">Our work</p>
            <h2 className="home-work__title">Recently launched</h2>
          </div>
          <p className="home-work__intro">
            Two of the websites our team designed and built this year for healthcare and life-science brands. Each one live,
            each one built to bring in conversations.
          </p>
        </div>
        <div className="home-work__grid">
          {SITES.map((s) => (
            <article className="home-site" key={s.title}>
              <div className="home-site__media">
                <div className="home-site__bar" />
                <i style={{ left: 14 }} /><i style={{ left: 28 }} /><i style={{ left: 42 }} />
                <div className="home-site__url" />
                <span className="home-site__urltext">{s.url}</span>
                <img className="home-site__shot" src={`/img/v4/home/${s.shot}`} alt={`${s.title} website`} />
              </div>
              <div className="home-site__meta">
                <p className="t-index home-site__kind">Website&nbsp; ·&nbsp; 2026</p>
                <h3 className="home-site__name">{s.title}</h3>
                <p className="home-site__sub">{s.sub}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

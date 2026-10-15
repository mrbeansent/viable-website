const LEADS = [
  {
    name: 'Vincent',
    role: 'Web development & hosting',
    img: '/img/v4/about/team-vincent.jpg',
    imgStyle: { height: '350.23%', left: '-57.06%', top: '-93.41%', width: '233.51%' },
    bg: '#0a0a13',
    facts: [
      '10+ years in WordPress development and web operations',
      '6 years fixing live client sites at Kinsta and WP Engine',
      'Webflow, React and n8n automation',
    ],
    get: 'A website that loads fast, is looked after properly and doesn’t leave you stuck on the technical side.',
  },
  {
    name: 'Belle',
    role: 'Marketing & graphic design',
    img: '/img/v4/about/team-belle.png',
    imgStyle: { left: '-26.36%', top: '-9.52%', width: '131.72%', height: '131.72%' },
    bg: '#0191c8',
    facts: [
      '10+ years as a marketing lead, designer and copywriter',
      'Led marketing for US software and healthcare brands',
      'Email, CRM and GoHighLevel specialist',
    ],
    get: 'Messages that sound like you, look sharp and bring in replies, not only likes.',
  },
]

const TEAMS: [string, React.ReactNode][] = [
  ['Web & hosting', <>Builds, launches and looks <br className="about-br" />after your site.</>],
  ['Email & CRM', 'Lead capture, follow-up and campaigns.'],
  ['Design & content', 'Layouts, graphics and social content.'],
  ['Automation & AI', 'Workflows that save hours every week.'],
]

export default function Team() {
  return (
    <section className="about-team" data-qa="about-team">
      <div className="about-gridlines" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} style={{ left: `calc(50% - 600px + ${i * 300}px)` }} />
        ))}
      </div>
      <div className="container about-team__inner">
        <div className="about-head">
          <p className="t-label about-head__label">Who’s behind it</p>
          <div className="about-head__body">
            <h2 className="about-h2 about-h2--64">Two people lead every project. Specialist teams do the work.</h2>
            <p className="t-body-l about-head__sub about-head__sub--wide">
              You get one point of contact, a clear plan and results you can actually see.
            </p>
          </div>
        </div>

        <div className="about-leads">
          {LEADS.map((l) => (
            <article key={l.name} className="about-lead">
              <div className="about-lead__head">
                <div className="about-lead__photo" style={{ background: l.bg }}>
                  <img src={l.img} alt={l.name} style={l.imgStyle} loading="lazy" />
                </div>
                <div>
                  <h3 className="about-lead__name">{l.name}</h3>
                  <p className="t-label c-aqua">{l.role}</p>
                </div>
              </div>
              <ul className="about-lead__facts">
                {l.facts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="about-lead__get">
                <p className="t-label">What you get</p>
                <p>{l.get}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="about-teams">
          {TEAMS.map(([t, d]) => (
            <div key={t} className="about-teams__item">
              <p className="about-teams__t">{t}</p>
              <p className="about-teams__d">{d}</p>
            </div>
          ))}
        </div>
        <p className="about-teams__note">Our teams grow as our clients do.</p>
      </div>
    </section>
  )
}

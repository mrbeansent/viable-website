import type { CSSProperties } from 'react'
import SectionHead from './SectionHead'

interface Expert {
  name: string
  role: string
  creds: string[]
  get: string
  photo: string
  photoBg: string
  photoStyle: CSSProperties
}

const EXPERTS: Expert[] = [
  {
    name: 'Vincent',
    role: 'Web development & hosting expert',
    creds: [
      '10+ years in WordPress web development and web operations',
      '6 years fixing live client sites at Kinsta and WP Engine',
      'Webflow, React and n8n automation',
    ],
    get: 'A website that loads fast, stays online and never leaves you stuck on the technical side.',
    photo: '/img/people/vincent.jpg',
    photoBg: 'var(--void-navy)',
    photoStyle: { width: '233.51%', height: '350.23%', left: '-57.06%', top: '-93.41%' },
  },
  {
    name: 'Belle',
    role: 'Digital marketing & graphic design expert',
    creds: [
      '10+ years as a marketing lead, graphic designer and copywriter',
      'Led marketing for US software and healthcare brands',
      'Email, CRM and GoHighLevel specialist',
    ],
    get: 'Messages that sound like you, look sharp and bring in replies, not just likes.',
    photo: '/img/people/belle.png',
    photoBg: '#0191c8',
    photoStyle: { width: '131.72%', height: '131.72%', left: '-26.36%', top: '-9.52%' },
  },
]

const TEAMS = [
  { icon: 'code', name: 'Web and hosting team', body: 'Builds, launches and looks after your site.' },
  { icon: 'mail', name: 'Email and CRM team', body: 'Lead capture, follow-up and campaigns.' },
  { icon: 'pen', name: 'Design and content team', body: 'Layouts, graphics and social content.' },
  { icon: 'zap-people', name: 'Automation and AI team', body: 'Workflows that save hours every week.' },
]

export default function People({ showNote = true }: { showNote?: boolean }) {
  return (
    <section id="about" className="sec sec--dark sec-people">
      <div className="glow" />
      <div className="container">
        <SectionHead
          eyebrow="Why Viable Works"
          title="What you get when you work with us"
          lede="Two experts lead every project and specialist teams do the work. You get one point of contact, a clear plan and results you can see."
        />
        <div className="experts">
          {EXPERTS.map((e) => (
            <article key={e.name} className="expert">
              <div className="headshot" style={{ background: e.photoBg }}>
                <img src={e.photo} alt={`${e.name}, ${e.role}`} style={e.photoStyle} />
              </div>
              <div className="expert-text">
                <h3>{e.name}</h3>
                <p className="role">{e.role}</p>
                <ul className="creds">
                  {e.creds.map((c) => (
                    <li key={c}>
                      <img src="/img/icons/check-aqua.svg" alt="" width={18} height={18} />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
                <p className="get-label">WHAT YOU GET</p>
                <p className="get-text">{e.get}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="teams">
          {TEAMS.map((t) => (
            <article key={t.name} className="team">
              <div className="team-top">
                <img src={`/img/icons/${t.icon}.svg`} alt="" width={26} height={26} />
                <img src="/img/icons/people-dots.svg" alt="" width={48} height={20} />
              </div>
              <h3>{t.name}</h3>
              <p>{t.body}</p>
            </article>
          ))}
        </div>
        {showNote && <p className="teams-note">Our teams grow as our clients do.</p>}
      </div>
    </section>
  )
}

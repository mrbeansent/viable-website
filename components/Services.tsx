const services = [
  {
    num: '01',
    label: '/ Build',
    icon: (
      <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="15" y2="21"/></svg>
    ),
    title: 'Web Design &amp; Development',
    desc: 'Clean, conversion-focused websites built on WordPress or Webflow. From landing pages to full business sites — responsive, fast, and built to generate real leads.',
    purple: false,
  },
  {
    num: '02',
    label: '/ Content',
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>
    ),
    title: 'Social Media &amp; Graphics',
    desc: 'Consistent, on-brand content for your social channels. Posts, stories, reels graphics, carousels — planned, designed, and scheduled so you never miss a beat.',
    purple: true,
  },
  {
    num: '03',
    label: '/ Grow',
    icon: (
      <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 14 21 7"/></svg>
    ),
    title: 'Email Marketing &amp; Automation',
    desc: 'Campaigns that nurture, convert, and retain. From weekly newsletters to multi-step automation flows — we set up the system and keep it running consistently.',
    purple: false,
  },
  {
    num: '04',
    label: '/ Automate',
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v5M12 18v5M4.22 4.22l3.54 3.54M16.24 16.24l3.54 3.54M1 12h5M18 12h5M4.22 19.78l3.54-3.54M16.24 7.76l3.54-3.54"/></svg>
    ),
    title: 'CRM Setup &amp; Automation',
    desc: 'Build the system that catches every lead. We set up pipelines, automations, and workflows so your team spends less time chasing and more time closing.',
    purple: true,
  },
  {
    num: '05',
    label: '/ Video',
    icon: (
      <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
    ),
    title: 'Short-Form Video Editing',
    desc: 'Reels, TikToks, and YouTube Shorts that stop the scroll. Hook structure, captions, pacing, music, and branded treatment — edited content that actually performs.',
    purple: false,
  },
  {
    num: '06',
    label: '/ Audio',
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
    ),
    title: 'Podcast Production &amp; Editing',
    desc: 'From raw audio to publish-ready episodes. We handle cleanup, intros, chapter markers, show notes, and audiogram clips — so you just show up and record.',
    purple: true,
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <span className="section-eyebrow">What we do</span>
        <h2>One team. <em>Every</em> skill you need.</h2>
        <p className="section-sub">We bring together web development, design, content, email, CRM, video, and podcast production — the full stack of skills under one roof, built to grow your business.</p>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className={`service-card${s.purple ? ' purple-card' : ''}`}>
              <div className="service-meta">
                <span className="service-num"><span>{s.num}</span>{s.label}</span>
                <div className={`icon-wrap${s.purple ? ' purple' : ''}`}>{s.icon}</div>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

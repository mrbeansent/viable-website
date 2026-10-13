const PROJECTS = [
  { name: 'Lead Leak Audit', body: 'A free review of where your inquiries get lost.', price: 'Free', detail: 'What you get: a short written audit within 2 working days. A call is optional.' },
  { name: 'Site Rescue', body: 'Fix a slow, broken or confusing site without a rebuild.', price: 'Starting at ₱4,500', detail: 'Quick Fix: one issue solved. The full Site Rescue (speed, mobile, forms, tracking) starts at ₱9,500.' },
  { name: 'Launch Site', body: 'A new website that is clear, fast and built to convert.', price: 'Starting at ₱29,500', detail: '3-page site: design, build, hosting setup and launch in 14 working days. AI-search (AEO) basics included. 5+ pages from ₱35,000.' },
  { name: 'Lead Engine', body: 'Capture, reply to and follow up every inquiry automatically.', price: 'Starting at ₱12,000', detail: 'One flow: form, auto-reply and follow-up. A full CRM setup starts at ₱25,000.' },
  { name: 'Freelancer Launch Kit', body: 'Look established from day one with a clean one-page site and brand basics.', price: 'Starting at ₱12,000', detail: 'One-page site, email setup and a starter template pack.' },
  { name: 'AEO Setup', body: 'Get found when people ask AI for a business like yours.', price: 'Quote after a free call', detail: 'We set up your site and business details so AI tools can find and recommend you. Basics are included in Launch Site.' },
]

export default function OneTimeProjects() {
  return (
    <section id="projects" className="sec sec--dark sec-tight">
      <div className="container">
        <h2 className="h2-sm">One-time projects</h2>
        <div className="pkg-grid">
          {PROJECTS.map((p) => (
            <article key={p.name} className="pkg">
              <h3>{p.name}</h3>
              <p className="pkg-body">{p.body}</p>
              <p className="pkg-price">{p.price}</p>
              <p className="pkg-detail">{p.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

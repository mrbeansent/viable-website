const team = [
  {
    initial: 'B',
    name: 'Belle',
    role: 'Design · Marketing · Brand',
    roleLabel: 'Co-founder',
    bio: 'Bachelor of Arts in Applied Linguistics with a specialty in design, social design, and on-brand strategy. Belle has built campaigns and visual systems for clients including eFlexervices, EyeCare Educators, Sunvoy, Advanced Coupons, University of Santo Tomas, and The Fidget Game.',
    tags: ['Web Design', 'WooCommerce', 'Branding', 'Social Media', 'Email Marketing', 'SEO', 'Canva Pro', 'Figma'],
    purple: true,
  },
  {
    initial: 'V',
    name: 'Vincent Cañas',
    role: 'SRE · DevOps · Web Dev',
    roleLabel: 'Co-founder',
    bio: 'Site Reliability Engineer and Web Developer with 7+ years across FinTech, SaaS, and web hosting — including Kinsta and FluentTech. 99.99% uptime achieved, 500+ sites migrated, and a track record of building infrastructure that ships and stays alive.',
    tags: ['Next.js', 'WordPress', 'Webflow', 'Kubernetes', 'n8n', 'GoHighLevel', 'AWS', 'Ollama / AI'],
    purple: false,
  },
]

export default function About() {
  return (
    <section id="team">
      <div className="container">
        <span className="section-eyebrow">Who we are</span>
        <h2>A dedicated team who <em>actually</em> care.</h2>
        <p className="section-sub">No middlemen. No layers. When you work with Viable Works, you work directly with the specialists building your project — covering everything from web and design to content, automation, video, and more.</p>

        <div className="team-grid">
          {team.map((m) => (
            <article key={m.name} className={`team-card${m.purple ? ' purple-team' : ''}`}>
              <div className="avatar">{m.initial}</div>
              <span className="role-label">{m.roleLabel}</span>
              <h3>{m.name}</h3>
              <p className="role">{m.role}</p>
              <p>{m.bio}</p>
              <div className="tags">
                {m.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

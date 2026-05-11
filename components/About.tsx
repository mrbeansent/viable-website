import Reveal from './Reveal'

const team = [
  {
    initial: 'B',
    avatarClass: '',
    name: 'Belle',
    roles: 'Design · Marketing · Brand',
    bio: 'Bachelor of Arts in Applied Linguistics with a specialty in design, social design, and on-brand strategy. Belle has built campaigns and visual systems for clients including eFlexervices, EyeCare Educators, Sunvoy, Advanced Coupons, University of Santo Tomas, and The Fidget Game.',
    tags: ['Web Design', 'WooCommerce', 'Branding', 'Social Media', 'Email Marketing', 'SEO', 'Canva Pro', 'Figma'],
  },
  {
    initial: 'V',
    avatarClass: 'b2',
    name: 'Vincent Cañas',
    roles: 'SRE · DevOps · Web Dev',
    bio: 'Site Reliability Engineer and Web Developer with 7+ years across FinTech, SaaS, and web hosting — including Kinsta and FluentTech. 99.99% uptime achieved, 500+ sites migrated, and a track record of building infrastructure that ships and stays alive.',
    tags: ['Next.js', 'WordPress', 'Webflow', 'Kubernetes', 'n8n', 'GoHighLevel', 'AWS', 'Ollama / AI'],
  },
]

export default function About() {
  return (
    <section id="team">
      <div className="container">
        <Reveal className="section-head">
          <div className="left">
            <div className="section-eyebrow"><span className="plus">+</span> Who we are</div>
            <h2>A dedicated team who <em>actually</em> care.</h2>
          </div>
          <div className="right">
            No middlemen. No layers. When you work with Viable, you work directly with the specialists
            building your project — covering everything from code and infrastructure to design, marketing,
            and automation. Fast, focused, and genuinely invested, because your growth is our growth.
          </div>
        </Reveal>
        <div className="team-grid">
          {team.map((member) => (
            <article key={member.name} className="team-card">
              <div className="team-head">
                <div className={`avatar${member.avatarClass ? ` ${member.avatarClass}` : ''}`}>
                  {member.initial}
                </div>
                <span className="badge-specialist">Co-founder</span>
              </div>
              <h3>{member.name}</h3>
              <div className="team-roles">{member.roles}</div>
              <p className="team-bio">{member.bio}</p>
              <div className="tag-cloud">
                {member.tags.map((tag) => (
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

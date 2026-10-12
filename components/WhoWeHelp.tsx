import SectionHead from './SectionHead'

const WHO = [
  { icon: 'trend', title: 'You want to grow on a tight budget', body: 'You are ready to scale and cannot afford a big agency retainer. We start small and add only what pays for itself.' },
  { icon: 'search', title: 'You do not know where to start', body: 'You know something is off with your website or marketing, but not what. We begin with an audit and tell you plainly.' },
  { icon: 'rocket', title: 'You have the vision and need it built', body: 'You know what you want. You need someone to build it properly and see it through.' },
  { icon: 'spark', title: 'You are a creator who wants to focus on your craft', body: 'You would rather create than troubleshoot. We manage the creative and technical side for you.' },
  { icon: 'users', title: 'You want to grow your business', body: 'If you want more customers and a business that runs smoother, you belong here. We start where you are.' },
]

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="sec sec--light sec-who">
      <div className="container">
        <SectionHead eyebrow="Who we help" title="This is for you if..." />
        <div className="who-grid">
          {WHO.map((w) => (
            <article key={w.title} className="who-card">
              <div className="icon-box">
                <img src={`/img/icons/${w.icon}.svg`} alt="" width={24} height={24} />
              </div>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

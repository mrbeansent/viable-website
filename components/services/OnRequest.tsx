import { BOOK_CALL } from '../links'

const TILES = [
  { icon: 'ai-clock', title: 'Save hours every week', body: 'We find the tasks AI can take off your team.' },
  { icon: 'ai-growth', title: 'Grow faster', body: 'Quicker replies, follow-ups and content that bring in more customers.' },
  { icon: 'ai-bot', title: 'Tools that fit you', body: 'The right AI tools and automations, set up for your business.' },
  { icon: 'ai-shield', title: 'You stay in control', body: 'We train your team so you stay in charge of the results.' },
]

export default function OnRequest() {
  return (
    <section id="ai" className="sec sec--dark sec-ai">
      <img className="tex" src="/img/bg/ai.png" alt="" />
      <div className="glow glow-1" />
      <div className="glow glow-2" />
      <div className="container">
        <div className="ai-layout">
          <div className="ai-copy">
            <span className="ai-chip">
              <img src="/img/icons2/ai-chip.svg" alt="" width={16} height={16} />
              AI-READY CONSULTATION
            </span>
            <h2>
              AI is changing how business grows. Make it <span className="grad-text">work for you.</span>
            </h2>
            <p className="ai-body">
              We know how important AI is right now. Used well, it helps your business grow faster and run more
              efficiently. We help you make the most out of it.
            </p>
            <p className="ai-note">Free 15-minute call, then a quote. No commitment.</p>
            <a href={BOOK_CALL} className="btn btn-primary">Book a free 15-minute call</a>
          </div>
          <div className="ai-tiles">
            {TILES.map((t) => (
              <article key={t.title} className="ai-tile">
                <div className="ai-icon">
                  <img src={`/img/icons2/${t.icon}.svg`} alt="" width={26} height={26} />
                </div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import SectionHead from './SectionHead'
import RequestButton from './request/RequestButton'

const CASES = [
  {
    tag: 'Software company · Website',
    num: '+32%',
    title: 'time on site, and +21% demo inquiries in 90 days',
    problem: 'Visitors browsed but few asked for a demo.',
    did: 'Redesigned key pages and rewrote the copy around one clear next step.',
  },
  {
    tag: 'Professional services · Email',
    num: '+90%',
    title: 'email click-through rate',
    problem: 'Email campaigns were being ignored.',
    did: 'Rebuilt the email program: new design, copy and send structure.',
  },
  {
    tag: 'Healthcare brand · Landing pages',
    num: '+30%',
    title: 'first-touch conversions from search',
    problem: 'Search visitors were not converting on their first visit.',
    did: 'Wrote search-driven content and built focused landing pages.',
  },
]

const INDUSTRIES = [
  { name: 'Mining and natural resources', icon: 'mining' },
  { name: 'Healthcare and life sciences', icon: 'healthcare' },
  { name: 'Energy and solar', icon: 'energy' },
  { name: 'Fintech', icon: 'fintech' },
  { name: 'Cybersecurity', icon: 'cybersecurity' },
  { name: 'Food and beverage', icon: 'food' },
  { name: 'Real estate', icon: 'real-estate' },
  { name: 'Law', icon: 'law' },
  { name: 'Boutiques', icon: 'boutiques' },
  { name: 'Beauty', icon: 'beauty' },
]

export default function TrackRecord({ showTags = false }: { showTags?: boolean }) {
  return (
    <section className="sec sec--dark sec-track tex-wrap">
      <img className="tex" src="/img/bg/track.png" alt="" />
      <div className="container">
        <SectionHead eyebrow="Project examples" title="Problems we have fixed, and what changed." />
        <div className="case-grid">
          {CASES.map((c) => (
            <article key={c.num} className="case">
              {showTags && <span className="case-tag">{c.tag}</span>}
              <p className="case-num grad-text">{c.num}</p>
              <h3>{c.title}</h3>
              <hr />
              <div>
                <span className="case-lbl">THE PROBLEM</span>
                <p className="case-txt">{c.problem}</p>
              </div>
              <div>
                <span className="case-lbl">WHAT WE DID</span>
                <p className="case-txt">{c.did}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="strip">
          <div>
            <h3>Want to see more before we talk?</h3>
            <p>
              Share your email and, if you like, your business type or project. We will send{' '}
              <b>relevant project examples within one working day.</b> No call needed.
            </p>
          </div>
          <RequestButton kind="portfolio">Request portfolio</RequestButton>
        </div>
        <div className="industries">
          <p>Industries we have worked in</p>
          <div className="industry-grid">
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className="industry">
                <div className="industry-icon">
                  <img src={`/img/industries/${ind.icon}.svg`} alt="" width={32} height={32} />
                </div>
                <span>{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="track-note">
          Results are from our work with US, Canadian and Australian companies. Client names are shared on request.
        </p>
      </div>
    </section>
  )
}

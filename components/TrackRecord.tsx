import SectionHead from './SectionHead'

const STATS = [
  { num: '+32%', title: 'website engagement time', body: 'and +21% demo inquiries in 90 days. Software client.' },
  { num: '+90%', title: 'email click-through rate', body: 'after rebuilding the email program. Professional services client.' },
  { num: '+150%', title: 'social media reach', body: 'in 6 months with focused campaigns and creative.' },
  { num: '+30%', title: 'first-touch conversions', body: 'from search-driven content and landing pages.' },
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

export default function TrackRecord() {
  return (
    <section className="sec sec--dark sec-track">
      <div className="container">
        <SectionHead
          eyebrow="Our track record"
          title="We have been fixing these problems for years. Now we are bringing it home."
        />
        <div className="stats">
          {STATS.map((s) => (
            <div key={s.num} className="stat">
              <p className="stat-num grad-text">{s.num}</p>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
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
          Results from our work with <b>US, Canadian and Australian</b> companies.
        </p>
      </div>
    </section>
  )
}

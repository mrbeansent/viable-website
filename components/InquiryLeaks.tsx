import SectionHead from './SectionHead'

const ROWS = [
  {
    signal: '3 days ago',
    problem: 'A customer asked your price. Nobody replied.',
    pkg: 'Lead Engine',
    fix: 'Instant auto-reply, then a person follows up the same day.',
  },
  {
    signal: '6.2 s load',
    problem: 'Your site takes 6 seconds to load on a phone. Visitors leave.',
    pkg: 'Site Rescue',
    fix: 'We speed it up and repair the mobile layout.',
  },
  {
    signal: 'No reply',
    problem: 'You replied once. They never heard from you again.',
    pkg: 'Lead Engine',
    fix: 'Automatic follow-ups over 7 days until they answer.',
  },
  {
    signal: 'Who owns it?',
    problem: 'Nobody knows who looks after the hosting, emails and forms.',
    pkg: 'Care plan',
    fix: 'We own the upkeep and send you a monthly report.',
  },
]

export default function InquiryLeaks() {
  return (
    <section className="sec sec--light sec-leaks">
      <div className="container">
        <SectionHead
          eyebrow="Where inquiries leak"
          title="Is your business quietly losing customers?"
          lede="Here is what it looks like from the inside, and what we do about each one."
        />
        <div className="leak-labels" aria-hidden>
          <span className="see">WHAT YOU SEE</span>
          <span className="fix">WHAT WE FIX</span>
        </div>
        <div className="leak-rows">
          {ROWS.map((row) => (
            <div key={row.signal} className="leak-row">
              <div className="leak-card problem">
                <img src="/img/icons/alert.svg" alt="" width={28} height={28} />
                <div className="leak-text">
                  <span className="chip red">{row.signal}</span>
                  <p>{row.problem}</p>
                </div>
              </div>
              <div className="leak-arrow" aria-hidden>
                <img src="/img/icons/arrow.svg" alt="" width={22} height={22} />
              </div>
              <div className="leak-card fix">
                <img src="/img/icons/check-green.svg" alt="" width={28} height={28} />
                <div className="leak-text">
                  <span className="chip green">{row.pkg}</span>
                  <p>{row.fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

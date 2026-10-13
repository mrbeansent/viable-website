import SectionHead from './SectionHead'

const ROWS = [
  {
    signal: '6.2 s load',
    problem: 'Your site takes 6 seconds to load on a phone. Visitors leave.',
    pkg: 'Website',
    fix: 'We speed it up, repair the mobile layout and make the next step obvious.',
  },
  {
    signal: 'Going unopened',
    problem: 'Your emails go unopened, and past customers never hear from you.',
    pkg: 'Email marketing',
    fix: 'We design and write campaigns people open, and automate the follow-up.',
  },
  {
    signal: 'Posting stopped',
    problem: 'You post when you have time. Nothing is planned, and it brings no leads.',
    pkg: 'Social media',
    fix: 'We plan, design and post for you, with monthly reporting on what works.',
  },
  {
    signal: 'Leads scattered',
    problem: 'Inquiries sit in DMs, email and forms. Nobody follows up the same way twice.',
    pkg: 'CRM and follow-up',
    fix: 'One place for every lead, with a follow-up routine set up for you.',
  },
]

export default function InquiryLeaks() {
  return (
    <section className="sec sec--light sec-leaks">
      <div className="container">
        <SectionHead
          eyebrow="Where customers slip away"
          title="Is your business quietly losing customers?"
          lede="The leak can be your site, your emails, your social media or your follow-up. Here is what we fix."
        />
        <div className="leak-labels" aria-hidden>
          <span className="see">WHAT YOU SEE</span>
          <span className="fix">WHAT WE FIX</span>
        </div>
        <div className="leak-rows">
          {ROWS.map((row) => (
            <div key={row.signal} className="leak-row">
              <div className="leak-card problem">
                <img src="/img/icons2/alert.svg" alt="" width={28} height={28} />
                <div className="leak-text">
                  <span className="chip red">{row.signal}</span>
                  <p>{row.problem}</p>
                </div>
              </div>
              <div className="leak-arrow" aria-hidden>
                <img src="/img/icons2/arrow-white.svg" alt="" width={22} height={22} />
              </div>
              <div className="leak-card fix">
                <img src="/img/icons2/check-leak.svg" alt="" width={28} height={28} />
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

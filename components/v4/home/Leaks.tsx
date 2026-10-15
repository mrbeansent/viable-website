const LEAKS = [
  { n: '01', problem: 'Your site takes six seconds to load on a phone, so visitors leave.', chip: 'Website', fix: 'We speed it up, fix the mobile layout and make the next step obvious.' },
  { n: '02', problem: 'Your emails go unopened, and past customers never hear from you.', chip: 'Email marketing', fix: 'We write and design campaigns people open, then automate the follow-up.' },
  { n: '03', problem: 'You post when you have time, and it brings in nothing.', chip: 'Social media', fix: 'We plan, design and post for you, and show you what worked each month.' },
  { n: '04', problem: 'Inquiries sit in DMs, email and forms. Nobody follows up the same way twice.', chip: 'CRM & follow-up', fix: 'Every lead lands in one place, with a follow-up routine set up for you.' },
]

export default function Leaks() {
  return (
    <section className="home-dark home-leaks" data-qa="home-leaks">
      <div className="home-grid" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      <div className="container home-stack home-stack--72">
        <div className="home-head">
          <p className="t-label home-head__label">Where customers slip away</p>
          <div className="home-head__col home-head__col--24">
            <h2 className="home-h2 home-h2--72">Is your business quietly losing customers?</h2>
            <p className="home-lead">It’s usually one of four things. Here’s what each one looks like from your side, and what we do about it.</p>
          </div>
        </div>
        <div className="home-leaks__list">
          {LEAKS.map((l) => (
            <div className="home-leak" key={l.n}>
              <p className="home-leak__n">{l.n}</p>
              <p className="home-leak__problem">{l.problem}</p>
              <div className="home-leak__fix">
                <div className="home-leak__tag">
                  <span className="home-leak__arrow">→</span>
                  <span className="home-chip">{l.chip}</span>
                </div>
                <p className="home-leak__desc">{l.fix}</p>
              </div>
            </div>
          ))}
          <div className="home-leaks__end" />
        </div>
      </div>
    </section>
  )
}

const ITEMS = [
  { n: '01', title: 'Facebook messages wait 2+ days for a reply', fix: 'Fix: Set up an instant reply and a 7-day follow-up.', tag: 'Lead Engine · from ₱12,000' },
  { n: '02', title: 'The site takes 6 seconds to load on a phone', fix: 'Fix: Compress images, fix the mobile layout, add a clear “Book now”.', tag: 'Site Rescue · from ₱4,500' },
  { n: '03', title: 'Not listed when people ask Google AI for a dentist nearby', fix: 'Fix: Set up business details so AI tools can find and name you.', tag: 'AEO setup · quote after a call' },
]

export default function SampleAudit() {
  return (
    <section className="audit-sample" data-qa="audit-sample">
      <div className="audit-sample__inner">
        <div className="audit-sample__copy">
          <p className="audit-index audit-index--light"><span>(02)</span> <b className="t-label">What you’ll receive</b></p>
          <h2 className="audit-sample__title">A short, plain-language audit.<br />No jargon.</h2>
          <p className="audit-sample__text">
            One page you can read in five minutes. It shows what we found, what to fix first, and roughly what it costs. It’s yours to keep, even if you never work with us.
          </p>
        </div>
        <div className="audit-card">
          <div className="audit-card__head">
            <span>viable works</span>
            <span>Sample · Santos Dental Clinic</span>
          </div>
          <div className="audit-card__bar" />
          <h3 className="audit-card__title">Where you’re losing inquiries</h3>
          {ITEMS.map((it) => (
            <div className="audit-item" key={it.n}>
              <span className="audit-item__n">{it.n}</span>
              <div>
                <p className="audit-item__title">{it.title}</p>
                <p className="audit-item__fix">{it.fix}</p>
                <span className="audit-item__tag">{it.tag}</span>
              </div>
            </div>
          ))}
          <p className="audit-card__note">* Example only. Your audit is written for your business.</p>
        </div>
      </div>
    </section>
  )
}

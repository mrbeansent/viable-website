import SectionHead from './SectionHead'

const STEPS = [
  { title: 'Free 15-minute call', when: 'Day 0', body: 'We listen, look at your site together and say honestly if we are a fit.', you: 'Your website link and your biggest pain.', pay: 'Free' },
  { title: 'Audit and proposal', when: 'Within 2 working days', body: 'A short written audit with a 5-minute video, a fixed scope, a timeline and a price.', you: 'Questions or changes.', pay: 'Free' },
  { title: 'Approve and start', when: 'Day 3', body: 'We send the agreement and invoice.', you: 'Sign and pay the 50% deposit.', pay: '50% to start' },
  { title: 'Onboarding call', when: 'Within 2 days of the deposit', body: 'We collect logins and set up your tools: analytics, CRM, shared folder.', you: 'Logins, logo, photos and content.', pay: 'Included' },
  { title: 'We build', when: '14 working days from your content', body: 'Design and build. A progress update every week and two rounds of revisions.', you: 'Feedback within 2 working days.', pay: 'Included' },
  { title: 'Launch and handover', when: 'End of week 3', body: 'We test, go live, record a training video and hand over every login. A 30-day check-in follows.', you: 'Final approval.', pay: '50% before go-live' },
]

export default function HowItWorks() {
  return (
    <section className="sec sec--dark sec-how">
      <div className="container">
        <SectionHead
          eyebrow="How it works"
          title="What happens after you say hello."
          lede="Six clear steps, so you always know what comes next and what we need from you."
        />
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="step">
              <div className="step-top">
                <span className="step-num">{i + 1}</span>
                <h3>{s.title}</h3>
              </div>
              <span className="pill when">{s.when}</span>
              <p>{s.body}</p>
              <p className="you"><b>You:</b>{s.you}</p>
              <span className="pill pay">{s.pay}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

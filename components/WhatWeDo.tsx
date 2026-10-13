import SectionHead from './SectionHead'
import { quoteLink } from './links'

const SERVICES = [
  {
    icon: 'wrench',
    name: 'Fix my website',
    body: 'Slow, broken or confusing? We fix what is costing you customers.',
    price: 'Starting at ₱4,500',
    items: ['Speed and mobile fixes', 'Working forms and tracking', 'Done without a rebuild'],
  },
  {
    icon: 'rocket',
    name: 'Build my website',
    body: 'A clear, fast site built to turn visitors into customers.',
    price: 'Starting at ₱29,500',
    items: ['3 pages, from design to launch', 'Hosting and AI-search basics set up', 'Live in 14 working days'],
  },
  {
    icon: 'mail',
    name: 'Email marketing',
    body: 'Campaigns your customers open, read and act on.',
    price: 'Starting at ₱10,000 / month',
    items: ['Campaigns designed and written', 'Landing pages built and tested', 'Monthly reporting and strategy call'],
  },
  {
    icon: 'share',
    name: 'Social media',
    body: 'Consistent posts that keep your brand in front of buyers.',
    price: 'Starting at ₱13,000 / month',
    items: ['8 designed posts a month', 'Scheduled and posted for you', 'Strategy and monthly reporting'],
  },
  {
    icon: 'bot',
    name: 'Follow-up and CRM',
    body: 'Every lead in one place, with a follow-up routine that runs.',
    price: 'Starting at ₱12,000',
    items: ['Forms and inboxes connected', 'Follow-up flows and reminders', 'Set up inside your CRM'],
  },
  {
    icon: 'custom',
    name: 'Custom solution',
    body: 'Something specific in mind? We shape a plan around your goal.',
    price: 'Quote after a free call',
    items: ['Tell us what you want to achieve', 'We design a plan around it', 'Fixed quote before we start'],
    cta: 'Tell us your idea',
  },
]

export default function WhatWeDo() {
  return (
    <section id="services" className="sec sec--light sec-services">
      <div className="container">
        <SectionHead eyebrow="Where to start" title="Pick a starting point, or tell us what you need." />
        <div className="service-grid">
          {SERVICES.map((s) => (
            <article key={s.name} className="service-card">
              <div className="icon-box">
                <img src={`/img/icons2/${s.icon}.svg`} alt="" width={24} height={24} />
              </div>
              <h3>{s.name}</h3>
              <p>{s.body}</p>
              <p className="price">{s.price}</p>
              <ul className="incl">
                {s.items.map((item) => (
                  <li key={item}>
                    <img src="/img/icons2/check16.svg" alt="" width={16} height={16} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={quoteLink(s.name)} className="btn btn-ghost-light btn-sm">{s.cta ?? 'Get a quote'}</a>
            </article>
          ))}
        </div>
        <div className="wwd-foot">
          <a href="/services" className="btn btn-ghost-light">See the full package list</a>
          <div className="aeo">
            <img src="/img/icons2/spark.svg" alt="" width={22} height={22} />
            <p>New: AEO setup. Get found when people ask AI for a business like yours.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

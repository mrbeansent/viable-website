import SectionHead from './SectionHead'
import { quoteLink } from './links'

const SERVICES = [
  { icon: 'search', name: 'Lead Leak Audit', body: 'We show you where inquiries get lost.', price: 'Free' },
  { icon: 'wrench', name: 'Site Rescue', body: 'Fix a slow or broken site without a rebuild.', price: 'Starting at ₱4,500' },
  { icon: 'rocket', name: 'Launch Site', body: 'A clear, fast site built to turn visitors into inquiries.', price: 'Starting at ₱29,500' },
  { icon: 'zap', name: 'Lead Engine', body: 'Instant replies and follow-up so no lead goes cold.', price: 'Starting at ₱12,000' },
  { icon: 'shield', name: 'Care plan', body: 'We look after hosting, updates and backups.', price: 'Starting at ₱3,500/mo' },
  { icon: 'trend', name: 'Grow plan', body: 'Campaigns and tweaks that bring in more inquiries.', price: 'Starting at ₱10,000/mo' },
  { icon: 'share', name: 'Social plan', body: 'Planned and posted for you on your platforms.', price: 'Starting at ₱13,000/mo' },
  { icon: 'spark', name: 'AI-ready consultation', body: 'Find where AI can save your team time.', price: 'Free call, then a quote' },
]

export default function WhatWeDo() {
  return (
    <section id="services" className="sec sec--light sec-services">
      <div className="container">
        <SectionHead
          eyebrow="What we do"
          title="Everything you need to get found, get replies and keep it running."
        />
        <div className="service-grid">
          {SERVICES.map((s) => (
            <article key={s.name} className="service-card">
              <div className="icon-box">
                <img src={`/img/icons/${s.icon}.svg`} alt="" width={24} height={24} />
              </div>
              <h3>{s.name}</h3>
              <p>{s.body}</p>
              <p className="price">{s.price}</p>
              <a href={quoteLink(s.name)} className="btn btn-ghost-light btn-sm">Get a quote</a>
            </article>
          ))}
        </div>
        <a href="/services" className="btn btn-ghost-light">See all services</a>
      </div>
    </section>
  )
}

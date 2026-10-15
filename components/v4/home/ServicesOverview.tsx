import Link from 'next/link'
import { FREE_AUDIT } from '@/components/links'

const SERVICES = [
  { icon: 'monitor', price: 'From ₱4,500', title: 'Websites', sub: 'New sites, and fixes for slow or broken ones.', items: ['Mobile-first design and build', 'Messenger, forms and booking connected', 'Usually live in 14 working days'] },
  { icon: 'mail', price: 'From ₱10,000 / month', title: 'Email marketing', sub: 'Campaigns your customers open, read and act on.', items: ['Campaigns written and designed', 'Landing pages built and tested', 'Monthly report and strategy call'] },
  { icon: 'megaphone', price: 'From ₱13,000 / month', title: 'Social media', sub: 'Planned, designed and posted for you.', items: ['8 designed posts a month', 'Posted on up to 3 platforms', 'Monthly report on what worked'] },
  { icon: 'inbox', price: 'From ₱12,000', title: 'Follow-up & CRM', sub: 'Every inquiry in one place, with replies that run on their own.', items: ['Instant auto-reply to every inquiry', 'Follow-ups over 7 days', 'Set up inside your CRM'] },
  { icon: 'sparkles', price: 'Quote after a free call', title: 'AEO / AI search', sub: 'Get named when people ask ChatGPT or Google AI.', items: ['Business details set up for AI tools', 'Content AI can read and quote', 'Basics included in every new site'] },
  { icon: 'shield', price: 'From ₱3,500 / month', title: 'Care plan', sub: 'We keep your site healthy, fast and updated.', items: ['Hosting and uptime monitoring', 'Updates, security and daily backups', 'Monthly check-up report'] },
]

export default function ServicesOverview() {
  return (
    <section className="home-light home-services" data-qa="home-services">
      <div className="container home-stack home-stack--64">
        <div className="home-head home-head--single">
          <div className="home-head__col">
            <h2 className="home-h2 home-h2--ink">Everything you need to get customers online, from one team.</h2>
            <p className="home-lead home-lead--ink">
              Pick one service or combine a few. After a free audit you get a written quote, and the price stays fixed for
              the agreed scope.
            </p>
          </div>
        </div>
        <div className="home-services__grid">
          {SERVICES.map((s) => (
            <article className="home-svc" key={s.title}>
              <div className="home-svc__top">
                <img src={`/img/v4/home/icon-${s.icon}.svg`} alt="" aria-hidden="true" width={36} height={36} />
                <span className="home-svc__price">{s.price}</span>
              </div>
              <div className="home-svc__titles">
                <h3 className="home-svc__title">{s.title}</h3>
                <p className="home-svc__sub">{s.sub}</p>
              </div>
              <ul className="home-checks">
                {s.items.map((it) => (
                  <li key={it}>
                    <b>✓</b>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <Link href={FREE_AUDIT} className="home-svc__quote">
                Get a quote →
              </Link>
            </article>
          ))}
        </div>
        <div className="home-services__foot">
          <Link href="/services#pricing" className="btn btn--outline-light">
            See full pricing
          </Link>
          <p className="home-services__note">
            <img src="/img/v4/home/icon-sparkles-sm.svg" alt="" aria-hidden="true" width={18} height={18} />
            New: AEO setup is now included in every website we build.
          </p>
        </div>
      </div>
    </section>
  )
}

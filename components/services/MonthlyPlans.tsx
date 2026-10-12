import { quoteLink } from '../links'

const PLANS = [
  {
    name: 'Care plan',
    body: 'We keep the site healthy, fast and updated.',
    price: 'Starting at ₱3,500 / month',
    items: ['Hosting and uptime monitoring', 'Updates and security patches', 'Daily backups', 'Monthly check-up report'],
    featured: false,
  },
  {
    name: 'Grow plan',
    body: 'Steady improvements and campaigns that bring in more inquiries.',
    price: 'Starting at ₱10,000 / month',
    items: ['Email campaigns every month', 'Landing pages built and tested', 'Testing and ongoing improvements', 'Monthly reporting you can read', 'Monthly strategy call'],
    featured: true,
  },
  {
    name: 'Social plan',
    body: 'Planned and posted for you on up to 3 platforms.',
    price: 'Starting at ₱13,000 / month',
    items: ['8 designed posts a month', 'Scheduled and posted for you', 'Up to 3 platforms', 'Monthly reporting on what works', 'Content strategy and planning'],
    featured: false,
  },
]

export default function MonthlyPlans() {
  return (
    <section id="plans" className="sec sec--light sec-tight">
      <div className="container">
        <h2 className="h2-sm">Monthly plans that keep working for you</h2>
        <p className="lede plans-lede">
          Pick a plan, we handle the rest. Billed monthly in advance, with 30 days notice to change or stop.
        </p>
        <div className="plan-grid">
          {PLANS.map((p) => (
            <article key={p.name} className={`plan${p.featured ? ' featured' : ''}`}>
              {p.featured && <span className="popular">MOST POPULAR</span>}
              <h3>{p.name}</h3>
              <p className="plan-body">{p.body}</p>
              <p className="plan-price">{p.price}</p>
              <hr />
              <p className="included-label">WHAT IS INCLUDED</p>
              <ul className="inclusions">
                {p.items.map((item) => (
                  <li key={item}>
                    <img src="/img/icons/check-plan.svg" alt="" width={16} height={16} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={quoteLink(p.name)} className="btn btn-ghost-light btn-sm">Get a quote</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

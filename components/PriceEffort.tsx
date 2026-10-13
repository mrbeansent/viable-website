import SectionHead from './SectionHead'

const CARDS = [
  {
    icon: 'pe-check',
    title: 'What is included',
    items: ['Design and build', 'Hosting set up and launch', 'Mobile layout, forms and tracking', 'You own your domain, hosting and logins'],
  },
  {
    icon: 'pe-card',
    title: 'Ongoing costs',
    items: ['Domain and hosting are billed by the provider, in your name', 'Our Care plan (from ₱3,500 a month) is optional', 'No lock-in on projects'],
  },
  {
    icon: 'pe-file',
    title: 'What we need from you',
    items: ['Your logo and brand colors', 'Your text and photos, or a brief for us to write', 'Logins to your domain and current site', 'One person to approve each step'],
  },
  {
    icon: 'pe-pen',
    title: 'Do we help with content?',
    items: ['Yes. Basic copy for a 3-page site is included', 'Extra writing is quoted up front', 'We choose images that fit your brand'],
  },
]

export default function PriceEffort() {
  return (
    <section className="sec sec--light sec-expect">
      <div className="container">
        <SectionHead
          eyebrow="What to expect"
          title="Clear price. Clear effort."
          lede="No surprises on cost, on what we need from you, or on who does the writing."
        />
        <div className="expect-grid">
          {CARDS.map((card) => (
            <article key={card.title} className="expect">
              <div className="ico">
                <img src={`/img/icons2/${card.icon}.svg`} alt="" width={22} height={22} />
              </div>
              <h3>{card.title}</h3>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>
                    <img src="/img/icons2/pe-tick.svg" alt="" width={16} height={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="terms-line">
          <img src="/img/icons2/pe-info.svg" alt="" width={20} height={20} />
          <p>
            Payment is 50% to start and 50% before go-live. Your site is live in 14 working days from the day we receive
            your content and logins, or you get 10% off the final invoice. After the audit you get a fixed quote.
          </p>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'

const BRANDS = ['Sunvoy', 'BioExec', 'Vanguard Optometric Society', 'KOL360', 'Dry Eye Council', 'eFlexervices', 'Advanced Coupons', 'Integria']
const STATS = [
  { src: 'Sunvoy · Solar software, US', value: '+32%', label: 'Time on site' },
  { src: 'Sunvoy · Solar software, US', value: '+21%', label: 'Demo inquiries in 90 days' },
  { src: 'Email program rebuild', value: '+90%', label: 'Email click-through rate' },
  { src: 'Search content & landing pages', value: '+30%', label: 'First-touch conversions' },
]

export default function Results() {
  return (
    <section className="home-dark home-results" data-qa="home-results">
      <div className="home-grid" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      <div className="container home-stack">
        <div className="home-head">
          <p className="t-label home-head__label">Results</p>
          <div className="home-head__col">
            <h2 className="home-h2">
              Our team has helped brands abroad grow online. <br className="home-br" />Now it’s your turn.
            </h2>
            <p className="home-lead">
              Websites, brands, campaigns and follow-up systems for clients in the US, Canada and Australia. Now open to
              businesses here at home.
            </p>
          </div>
        </div>
        <ul className="home-results__brands">
          {BRANDS.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="home-results__stats">
          {STATS.map((s) => (
            <div className="home-results__stat" key={s.value}>
              <p className="t-index home-results__src">{s.src}</p>
              <p className="home-results__value">{s.value}</p>
              <p className="home-results__label">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="home-results__foot">
          <p className="t-index home-results__disclaimer">
            Results are from our team’s work with clients abroad. Past results are examples, not a promise of future ones.
          </p>
          <Link href="/about" className="btn btn--ghost">
            See our work <span className="btn__arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

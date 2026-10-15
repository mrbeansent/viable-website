const WORDS = ['Websites', 'Email', 'Social', 'Follow-up', 'AI search']

// Scrolling service words. Animation is disabled under prefers-reduced-motion (see v4-services.css).
export default function ServicesMarquee() {
  const run = (
    <span className="svc-marquee__run">
      {WORDS.map((w) => (
        <span key={w}>
          {w} <i>—</i>{' '}
        </span>
      ))}
    </span>
  )
  return (
    <section className="svc-marquee" data-qa="services-marquee" aria-label="Websites, Email, Social, Follow-up, AI search">
      <div className="svc-marquee__track" aria-hidden="true">
        {run}
        {run}
      </div>
    </section>
  )
}

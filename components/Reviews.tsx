import SectionHead from './SectionHead'

// Placeholder copy from the Figma design. Replace with real client quotes before launch.
const REVIEWS = [
  { source: 'via LinkedIn recommendation' },
  { source: 'via Google review' },
  { source: 'via Email from client' },
  { source: 'via LinkedIn recommendation' },
].map((r) => ({
  ...r,
  quote: '[Paste a real client quote here: one or two sentences on the result they got.]',
  name: '[Client name]',
  role: '[Role, Company]',
}))

export default function Reviews() {
  return (
    <section className="sec sec--light sec-reviews">
      <div className="container">
        <SectionHead
          eyebrow="Reviews and recommendations"
          title="What people we have worked with say."
          lede="Recommendations from past and current clients, in their own words."
        />
        <div className="reviews">
          {REVIEWS.map((r, i) => (
            <figure key={i} className="review">
              <div className="stars" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, s) => (
                  <img key={s} src="/img/icons/star.svg" alt="" width={18} height={18} />
                ))}
              </div>
              <blockquote>{r.quote}</blockquote>
              <hr />
              <figcaption className="reviewer">
                <span className="avatar" aria-hidden />
                <span>
                  <b>{r.name}</b>
                  <span>{r.role}</span>
                </span>
              </figcaption>
              <p className="via">{r.source}</p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

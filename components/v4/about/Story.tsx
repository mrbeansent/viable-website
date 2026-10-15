const VALUES = [
  ['01', 'Viable', 'Practical, proven ideas that work in the real world.'],
  ['02', 'Clear', 'Plain language, simple pricing, no jargon.'],
  ['03', 'Crafted', 'Every pixel and sentence is intentional.'],
  ['04', 'Reliable', <>We say what we’ll do, <br className="about-br" />then we do it.</>],
] as const

export default function Story() {
  return (
    <section className="about-story" data-qa="about-story">
      <div className="container">
        <div className="about-story__row">
          <div>
            <p className="t-label about-eyebrow">Who we are</p>
            <h2 className="about-h2 about-h2--56">Your local team with big-client experience.</h2>
          </div>
          <div className="about-story__text">
            <p>
              Viable Works is a web design and digital marketing agency based in Cebu City. Two people lead every
              project: Vincent on web development and hosting, Belle on marketing and design. <br className="about-br" />
              Specialist teams handle the rest.
            </p>
            <p className="is-muted">
              We spent years building websites, campaigns and follow-up systems for companies in the US, Canada and
              Australia. <br className="about-br" />
              Now we bring that same standard to Philippine businesses, at prices that make sense locally.
            </p>
          </div>
        </div>
        <div className="about-values">
          {VALUES.map(([n, t, d], i) => (
            <div key={n} className={`about-value${i === 0 ? ' about-value--dark' : ''}`}>
              <p className="about-value__n">{n}</p>
              <h3 className="about-value__t">{t}</h3>
              <p className="about-value__d">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

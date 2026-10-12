const VALUES = [
  { icon: 'value-zap', name: 'Viable', body: 'Practical, proven ideas that work in the real world.' },
  { icon: 'value-eye', name: 'Clear', body: 'Plain language, simple pricing, no jargon.' },
  { icon: 'value-pen', name: 'Crafted', body: 'Every pixel and sentence is intentional.' },
  { icon: 'value-shield', name: 'Reliable', body: 'We say what we will do, then we do it.' },
]

export default function Values() {
  return (
    <section className="sec sec--light sec-values">
      <div className="container">
        <h2 className="h2-md">How we work</h2>
        <div className="values">
          {VALUES.map((v) => (
            <article key={v.name} className="value">
              <div className="icon-box">
                <img src={`/img/icons/${v.icon}.svg`} alt="" width={24} height={24} />
              </div>
              <h3>{v.name}</h3>
              <p>{v.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

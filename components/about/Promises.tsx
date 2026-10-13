const PROMISES = [
  { title: 'A written scope and price', body: 'You know what you get and what it costs before we start. No surprise add-ons.' },
  { title: 'Live in 14 working days', body: 'From the day we receive your content, or 10% off the final invoice.' },
  { title: 'You own it', body: 'Your domain, hosting and logins are always yours. No lock-in on projects.' },
  { title: 'A named expert', body: 'One of us stays accountable from first call to final invoice, and you hear from us every week.' },
]

export default function Promises() {
  return (
    <section className="sec sec--dark sec-promises">
      <div className="glow glow-a" />
      <div className="glow glow-b" />
      <div className="container">
        <p className="eyebrow">OUR PROMISES TO YOU</p>
        <h2>What you can count on</h2>
        <div className="promises">
          {PROMISES.map((p, i) => (
            <article key={p.title} className="promise">
              <p className="pnum">{String(i + 1).padStart(2, '0')}</p>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

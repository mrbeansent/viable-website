import Link from 'next/link'

const STEPS = [
  { n: '01', when: 'Day 0 to 2', title: 'Free audit', text: 'Send your link and one line about the problem. You get a written audit with the top 3 fixes, in order.', tag: 'Free' },
  { n: '02', when: 'Day 3', title: 'Fixed quote', text: 'Approve the scope and the price in pesos. Pay 50% to start. Anything extra is quoted before we do it.', tag: '50% to start' },
  { n: '03', when: '14 working days', title: 'Built and launched', text: 'We build, you get two rounds of feedback, then we launch and hand over every login. Free fixes for 15 days and a 30-day check-in follow.', tag: '50% before go-live', accent: true },
]
const PROMISES = [
  { icon: 'file', title: 'A written scope and price', text: 'You know what you get and what it costs before we start. Anything extra is quoted and approved first.' },
  { icon: 'clock', title: 'Usually live in 14 working days', text: 'For standard builds, counted from when we have your deposit, content and logins. Bigger projects get their own timeline in the quote.' },
  { icon: 'key', title: 'You own everything', text: 'Your domain and accounts in your name stay yours, with every login handed over. No lock-in on projects.' },
  { icon: 'user', title: 'A named expert', text: 'One of us stays accountable from first message to final invoice, with weekly updates.' },
]

export default function HowItWorks() {
  return (
    <section className="home-light home-how" id="how-it-works" data-qa="home-how">
      <div className="container home-stack home-stack--48">
        <div className="home-how__head">
          <p className="t-label home-how__label">How it works</p>
          <h2 className="home-how__title">Three steps from “hello” to a live site.</h2>
        </div>
        <div className="home-how__steps">
          {STEPS.map((s) => (
            <div className={`home-step${s.accent ? ' home-step--accent' : ''}`} key={s.n}>
              <div className="home-step__top">
                <span className="home-step__n">{s.n}</span>
                <span className="home-step__when">{s.when}</span>
              </div>
              <h3 className="home-step__title">{s.title}</h3>
              <p className="home-step__text">{s.text}</p>
              <span className="home-step__tag">{s.tag}</span>
            </div>
          ))}
        </div>
        <Link href="/services#pricing" className="home-how__more">
          See all 6 steps and what we need from you on the Pricing page →
        </Link>
        <div className="home-promises">
          <div className="home-promises__head">
            <div>
              <p className="t-label home-promises__label">What you can count on</p>
              <h3 className="home-promises__title">Four commitments that come with every project.</h3>
            </div>
            <p className="home-promises__note">Big or small, every project starts with these.</p>
          </div>
          <div className="home-promises__grid">
            {PROMISES.map((p) => (
              <div className="home-promise" key={p.title}>
                <img src={`/img/v4/home/icon-${p.icon}.svg`} alt="" aria-hidden="true" width={34} height={34} />
                <h4 className="home-promise__title">{p.title}</h4>
                <p className="home-promise__text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

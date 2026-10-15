import Link from 'next/link'
import { FREE_AUDIT, MESSENGER_URL } from '@/components/links'

const ROWS: [string, string, React.ReactNode][] = [
  ['(a)', 'You want to grow on a tight budget.', 'We start small and add more only when it makes sense.'],
  [
    '(b)',
    'You don’t know where to start.',
    <>
      We begin with an audit and tell you <br className="about-br" />
      plainly what’s wrong.
    </>,
  ],
  ['(c)', 'You know what you want, and need it built.', 'We build it properly and see it through to launch.'],
  ['(d)', 'You’d rather run your business than fix tech.', 'We handle the creative and technical side for you.'],
]

const TYPES = [
  'Clinics & dental practices',
  'Resorts & Airbnbs',
  'Real estate',
  'Restaurants & cafés',
  'Retail & boutiques',
  'Beauty & wellness',
  'Professional services',
  'Freelancers & creators',
  'And more!',
]

export default function WhoWeHelp() {
  return (
    <section className="about-who" data-qa="about-who">
      <div className="about-who__panel">
        <img className="about-who__glow" src="/img/v4/about/who-panel.webp" alt="" aria-hidden="true" />
        <div className="about-who__shade" />
        <div className="about-who__inner">
          <div className="about-who__head">
            <p className="t-label about-eyebrow">Who we help</p>
            <h2 className="about-who__title">This is for you if…</h2>
          </div>
          <div className="about-who__rows">
            {ROWS.map(([i, t, d]) => (
              <div key={i} className="about-who__row">
                <p className="about-who__idx">{i}</p>
                <p className="about-who__t">{t}</p>
                <p className="about-who__d">{d}</p>
              </div>
            ))}
          </div>
          <div className="about-who__types">
            <p className="t-label c-aqua">Built for businesses like yours</p>
            <div className="about-who__pills">
              {TYPES.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
          <div className="about-who__foot">
            <p>
              If one of those sounds like you, send us your link. <br className="about-br" />
              We’ll tell you what we’d fix first.
            </p>
            <div className="btn-row">
              <Link href={FREE_AUDIT} className="btn btn--primary">
                Get a free audit <span className="btn__arrow">→</span>
              </Link>
              <Link href={MESSENGER_URL} className="btn btn--ghost">
                Message us on Messenger
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

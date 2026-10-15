import Link from 'next/link'
import RequestButton from '@/components/request/RequestButton'
import { FREE_AUDIT } from '@/components/links'

const IMG = '/img/v4/about'

// Work mosaic tiles: [left, top, image] inside the 889x1587 rotated board
const TILES: [number, number, string][] = [
  [0, 0, 'mosaic-0.webp'],
  [0, 186, 'proj-sunvoy.webp'],
  [0, 372, 'proj-eflex-a.webp'],
  [0, 558, 'site-vanguard.webp'],
  [0, 744, 'mosaic-4.webp'],
  [256, -120, 'mosaic-5.webp'],
  [256, 66, 'mosaic-6.webp'],
  [256, 252, 'mosaic-7.webp'],
  [256, 438, 'proj-fidget.webp'],
  [256, 624, 'proj-integria-post.webp'],
  [512, -40, 'mosaic-10.webp'],
  [512, 146, 'site-vanguard.webp'],
  [512, 332, 'proj-coupons.webp'],
  [512, 518, 'mosaic-0.webp'],
  [512, 704, 'proj-eflex-a.webp'],
]

const FLOATS = [
  { cls: 'a', dot: 'dot-aqua.svg', title: 'Live: bio-exec.com', sub: 'Website · launched 2026' },
  { cls: 'b', dot: 'dot-violet.svg', title: '+32% time on site', sub: 'Sunvoy · solar software, US' },
  { cls: 'c', dot: 'dot-green.svg', title: '4 sites launched this year', sub: 'Wellness, healthcare & mining' },
]

const STATS = [
  ['Decades', 'in web and marketing'],
  ['50+', 'successful clients'],
  ['10+', 'industries worked in'],
]

export default function Hero() {
  return (
    <section className="about-hero" data-qa="about-hero">
      <div className="panel about-hero__panel">
        <img className="panel__bg" src={`${IMG}/hero-panel.webp`} alt="" aria-hidden="true" />
        <div className="about-hero__shade" />
        <div className="about-hero__mosaic" aria-hidden="true">
          <div className="about-hero__board">
            {TILES.map(([x, y, src], i) => (
              <div key={i} className="about-hero__tile" style={{ left: x, top: y }}>
                <img src={`${IMG}/${src}`} alt="" aria-hidden="true" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <div className="about-hero__fade" />

        {FLOATS.map((f) => (
          <div key={f.cls} className={`about-float about-float--${f.cls}`} aria-hidden="true">
            <img src={`${IMG}/${f.dot}`} alt="" aria-hidden="true" width={8} height={8} />
            <div>
              <p className="about-float__title">{f.title}</p>
              <p className="about-float__sub">{f.sub}</p>
            </div>
          </div>
        ))}

        <div className="about-hero__content">
          <p className="t-label about-hero__label">Work &amp; about</p>
          <h1 className="t-display-l about-hero__title">
            <span>Success stories</span> <span>from abroad, now</span> <span>for local businesses.</span>
          </h1>
          <p className="t-body-l about-hero__lead">
            For years our team has built websites, brands and campaigns for companies in the US, Canada and Australia.
            Our clients grew, and we learned what really works. Now we bring that same playbook home to Philippine
            businesses.
          </p>
          <div className="btn-row about-hero__btns">
            <RequestButton className="btn btn--primary">
              Request the full portfolio
            </RequestButton>
            <Link href={FREE_AUDIT} className="btn btn--ghost">
              Get a free audit <span className="btn__arrow">→</span>
            </Link>
          </div>
          <div className="about-hero__stats">
            {STATS.map(([n, l]) => (
              <div key={n} className="about-hero__stat">
                <p className="about-hero__num">{n}</p>
                <p className="about-hero__stat-label">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

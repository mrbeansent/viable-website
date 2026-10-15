import Link from 'next/link'
import { FREE_AUDIT, MESSENGER_URL } from '@/components/links'
import HeroQuiz from './HeroQuiz'

const STATS = [
  { value: '+32%+', label: 'time on site after relaunches' },
  { value: '~14 days', label: 'typical time from content to a live site' },
  { value: '~₱4,500', label: 'starting price for a site fix' },
]

// Home hero: image panel (nav overlays its top), headline, CTAs, quiz card, stat row.
export default function Hero() {
  return (
    <section className="home-hero" data-qa="home-hero">
      <div className="home-hero__panel">
        <img className="panel__bg" src="/img/v4/home/hero-panel.png" alt="" aria-hidden="true" />
        <div className="home-hero__shade home-hero__shade--left" />
        <div className="home-hero__shade home-hero__shade--bottom" />
        <div className="home-hero__inner">
          <div className="home-hero__copy">
            <h1 className="t-h1 home-hero__title">
              We build your website and run your marketing, so more inquiries turn into customers.
            </h1>
            <p className="t-tagline c-aqua home-hero__tagline">Built to work, made to grow.</p>
            <p className="t-read home-hero__text">
              For years our team has helped companies in the US, Canada and Australia grow online.<br />
              Now we do the same for businesses here at home.
            </p>
            <div className="btn-row home-hero__ctas">
              <Link href={FREE_AUDIT} className="btn btn--primary">
                Get a free audit <span className="btn__arrow">→</span>
              </Link>
              <a href={MESSENGER_URL} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
                Message us on Messenger
              </a>
            </div>
            <p className="t-index home-hero__note">Free&nbsp; ·&nbsp; No call needed&nbsp; ·&nbsp; Written reply in 2 working days</p>
          </div>
          <HeroQuiz />
        </div>
      </div>
      <div className="home-hero__stats">
        {STATS.map((s) => (
          <div className="home-hero__stat" key={s.value}>
            <p className="home-hero__stat-value">{s.value}</p>
            <p className="t-body-s home-hero__stat-label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

import Link from 'next/link'
import { FREE_AUDIT } from '@/components/links'

const DIY = [
  'Nobody owns the result if it doesn’t work',
  'Prices change halfway through the project',
  'Your site, page and ads look like different businesses',
  'Inquiries sit unanswered in DMs',
  'The freelancer holds your logins',
  '“When do we launch?” has no clear answer',
  'You learn Canva and website builders at midnight',
]
const VIABLE = [
  'A named lead owns your project, start to finish',
  'A fixed quote in pesos before you pay',
  'One team on your site, social and email, so it all looks like you',
  'Every inquiry gets an instant reply and follow-ups',
  'Your domain and accounts stay in your name',
  'Standard builds usually live in 14 working days',
  'You run your business. We handle the tech',
]

export default function Compare() {
  return (
    <section className="home-dark home-compare" data-qa="home-compare">
      <div className="container">
        <div className="home-compare__card">
          <div className="home-compare__head">
            <p className="t-label home-compare__label">Compare</p>
            <h2 className="home-compare__title">
              Doing it alone vs. doing it with <span>Viable</span>
            </h2>
            <p className="home-compare__lead">
              Hiring a random freelancer or doing it yourself can work. Here’s what usually happens, and what changes when
              you work with us.
            </p>
          </div>
          <div className="home-compare__cols">
            <div className="home-compare__col">
              <p className="home-compare__colhead">Freelancer or DIY</p>
              {DIY.map((t) => (
                <div className="home-compare__row" key={t}>
                  <span className="home-compare__ic">–</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div className="home-compare__col home-compare__col--viable">
              <div className="home-compare__vhead">
                <span>Working with</span>
                <img src="/img/v4/home/compare-logo.webp" alt="Viable" width={120} height={36} />
                <b>Recommended</b>
              </div>
              {VIABLE.map((t) => (
                <div className="home-compare__row" key={t}>
                  <span className="home-compare__ic">✓</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="btn-row home-compare__btns">
            <Link href={FREE_AUDIT} className="btn btn--primary">Get a free audit <span className="btn__arrow">→</span></Link>
            <Link href="/services#pricing" className="btn btn--outline-light">See pricing</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

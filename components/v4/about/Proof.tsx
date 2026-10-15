import Link from 'next/link'
import RequestButton from '@/components/request/RequestButton'
import { FREE_AUDIT } from '@/components/links'

const IMG = '/img/v4/about'

const CLIENTS = [
  'Sunvoy',
  'BioExec',
  'Vanguard Optometric Society',
  'KOL360',
  'Dry Eye Council',
  'eFlexervices',
  'Advanced Coupons',
  'Integria',
  'EyeCare Educators',
  'The Fidget Game',
  'Ms. Brandi’s Popplers',
  'UST Student Council',
]

const REGIONS = [
  ['United States', 'Software, healthcare, solar, eCommerce'],
  ['Canada', 'Mining and natural resources'],
  ['Australia', 'Brand and digital work'],
]

const RESULTS = [
  { n: '+32%', t: 'Time on site', s: 'Sunvoy · after the website and messaging rebuild', hot: true },
  { n: '+21%', t: 'Demo inquiries in 90 days', s: 'Sunvoy · same project' },
  { n: '+90%', t: 'Email click-through rate', s: 'Email program rebuild · new design, copy and send plan' },
  { n: '+30%', t: 'First-touch conversions from AI search engines', s: 'Search content and focused landing pages' },
]

const MADE = [
  'Websites',
  'Website rescues',
  'Brand identity',
  'Logos & brand guides',
  'Email campaigns',
  'Social media systems',
  'Campaign creative',
  'App onboarding',
  'Packaging',
  'Product catalogs',
  'Print & signage',
  'CRM & follow-up',
  'and more',
]

const PLATFORMS = [
  'WordPress',
  'Webflow',
  'Shopify',
  'WooCommerce',
  'Kinsta',
  'WP Engine',
  'GoHighLevel',
  'HubSpot',
  'Mailchimp',
  'Meta Ads',
  'Google Analytics',
  'n8n',
  'Zapier',
  'Figma',
  'and more',
]

const QUOTES = [
  '[Role, Company] · LinkedIn recommendation',
  '[Role, Company] · Google review',
  '[Role, Company] · Email from a client',
]

function CardLabel({ icon, children }: { icon: string; children: string }) {
  return (
    <div className="about-cardlabel">
      <img src={`${IMG}/${icon}`} alt="" aria-hidden="true" width={24} height={24} />
      <p className="t-label">{children}</p>
    </div>
  )
}

export default function Proof() {
  return (
    <section className="about-proof" data-qa="about-proof">
      <div className="container">
        <div className="about-head">
          <p className="t-label about-head__label">The proof</p>
          <div className="about-head__body">
            <h2 className="about-h2 about-h2--60">Before you trust anyone with your business, you should see proof. Here’s ours.</h2>
            <p className="t-body-l about-head__sub">Real clients, real numbers, real people.</p>
          </div>
        </div>

        <div className="about-proof__row about-proof__row--clients">
          <div className="about-card">
            <CardLabel icon="icon-users.svg">Who our team has worked with</CardLabel>
            <div className="about-clients">
              {CLIENTS.map((c) => (
                <p key={c} className="about-clients__cell">
                  {c}
                </p>
              ))}
            </div>
            <p className="about-note">Brands from our team’s portfolio. Client contacts available on request.</p>
          </div>
          <div className="about-card">
            <CardLabel icon="icon-globe.svg">Where our clients are</CardLabel>
            {REGIONS.map(([n, d]) => (
              <div key={n} className="about-region">
                <p className="about-region__name">{n}</p>
                <p className="about-region__desc">{d}</p>
              </div>
            ))}
            <div className="about-region">
              <p className="about-region__name">Philippines</p>
              <p className="about-region__desc">
                BPO, education, and now: <b>you!</b>
              </p>
            </div>
            <p className="about-note about-note--aqua">Based in Cebu City. Working online nationwide.</p>
          </div>
        </div>

        <div className="about-proof__row about-proof__row--results">
          {RESULTS.map((r) => (
            <div key={r.n} className={`about-result${r.hot ? ' about-result--hot' : ''}`}>
              <div className="about-result__top">
                <img src={`${IMG}/${r.hot ? 'icon-trend-light.svg' : 'icon-trend.svg'}`} alt="" aria-hidden="true" width={20} height={20} />
                <p className="t-label">Results</p>
              </div>
              <p className="about-result__num">{r.n}</p>
              <p className="about-result__title">{r.t}</p>
              <p className="about-result__sub">{r.s}</p>
            </div>
          ))}
        </div>

        <div className="about-proof__row about-proof__row--range">
          <div className="about-card">
            <CardLabel icon="icon-layers.svg">What we’ve made</CardLabel>
            <p className="about-card__text">
              Not only websites. Our team has delivered the whole range of what a growing business needs.
            </p>
            <div className="about-chips">
              {MADE.map((c) => (
                <span key={c} className="about-chip">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="about-card">
            <CardLabel icon="icon-tool.svg">Platforms we work inside</CardLabel>
            <p className="about-card__text">
              Vincent spent 6 years fixing live client sites at Kinsta and WP Engine. Belle runs email and CRM in
              GoHighLevel and HubSpot.
            </p>
            <div className="about-chips">
              {PLATFORMS.map((c) => (
                <span key={c} className="about-chip">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="about-proof__row about-proof__row--quotes">
          {QUOTES.map((q) => (
            <div key={q} className="about-quote">
              <img src={`${IMG}/icon-quote.svg`} alt="" aria-hidden="true" width={28} height={28} />
              <p className="about-quote__text">
                [Paste a real client quote here: one or two sentences on the result they got.]
              </p>
              <div className="about-quote__by">
                <span className="about-quote__avatar" />
                <div>
                  <p className="about-quote__name">[Client name]</p>
                  <p className="about-quote__role">{q}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="about-legit">
          <div className="about-legit__inner">
            <div className="about-legit__left">
              <CardLabel icon="icon-shield.svg">Real people, clear terms</CardLabel>
              <p className="about-legit__title">A real business with real people behind it.</p>
            </div>
            <ul className="about-legit__list">
              <li>
                <b>✓</b>
                <span>Standard builds usually live in 14 working days</span>
              </li>
              <li>
                <b>✓</b>
                <span>One point of contact, with weekly updates</span>
              </li>
              <li>
                <b>✓</b>
                <span>
                  A written scope and fixed price <br className="about-br" />
                  before you pay
                </span>
              </li>
              <li>
                <b>✓</b>
                <span>
                  Your domain and accounts <br className="about-br" />
                  stay in your name
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="about-proof__foot">
          <p>Want to see more before you decide? We’ll send the full portfolio within one working day.</p>
          <div className="btn-row">
            <RequestButton className="btn btn--primary">
              Request the full portfolio
            </RequestButton>
            <Link href={FREE_AUDIT} className="btn btn--ghost">
              Get a free audit <span className="btn__arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

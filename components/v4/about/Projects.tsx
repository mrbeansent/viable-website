import Link from 'next/link'
import RequestButton from '@/components/request/RequestButton'

const IMG = '/img/v4/about'

function Blob({ src, left, top, size, inset }: { src: string; left: number; top: number; size: number; inset: string }) {
  return (
    <span className="about-blob" style={{ left, top, width: size, height: size }}>
      <img src={`${IMG}/${src}`} alt="" aria-hidden="true" style={{ inset }} />
    </span>
  )
}

function Caption({ meta, name, children }: { meta: string; name: string; children: React.ReactNode }) {
  return (
    <div className="about-proj__info">
      <p className="about-meta">{meta}</p>
      <h3 className="about-proj__name">{name}</h3>
      <p className="about-proj__desc">{children}</p>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="about-projects" data-qa="about-projects">
      <div className="container">
        <div className="about-split">
          <div>
            <p className="t-label about-eyebrow">Selected projects</p>
            <h2 className="about-h2 about-h2--56">
              Brand, campaign and <br className="about-br" />
              product work.
            </h2>
          </div>
          <p className="about-split__aside">
            A few highlights from our team’s portfolio. The full catalog is one message away.
          </p>
        </div>

        <article className="about-feature">
          <div className="about-feature__img">
            <img src={`${IMG}/proj-sunvoy.webp`} alt="Sunvoy website" loading="lazy" />
          </div>
          <div className="about-feature__body">
            <p className="about-meta">Brand &amp; marketing overhaul &nbsp;·&nbsp; Solar software, US</p>
            <h3 className="about-feature__name">Sunvoy</h3>
            <p className="about-feature__text">
              Sunvoy’s product had outgrown its marketing. <br className="about-br" />
              Our team rebuilt the website, the messaging, app onboarding, print and email around outcomes buyers can
              measure.
            </p>
            <div className="about-chips">
              {['Website', 'Messaging', 'App onboarding', 'Print', 'Email'].map((c) => (
                <span key={c} className="about-chip">
                  {c}
                </span>
              ))}
            </div>
            <div className="about-feature__stats">
              <div>
                <p>+32%</p>
                <span>time on site</span>
              </div>
              <div>
                <p>+21%</p>
                <span>demo inquiries in 90 days</span>
              </div>
            </div>
          </div>
        </article>

        <div className="about-projgrid">
          {/* Integria: Instagram system */}
          <article className="about-proj">
            <div className="about-proj__visual about-proj__visual--integria">
              <Blob src="blob-integria-1.svg" left={-60} top={60} size={220} inset="-31.82%" />
              <Blob src="blob-integria-2.svg" left={230} top={-40} size={220} inset="-31.82%" />
              <div className="about-ig">
                <div className="about-ig__screen">
                  <div className="about-ig__head">
                    <img src={`${IMG}/ig-avatar.svg`} alt="" aria-hidden="true" width={18} height={18} />
                    <div>
                      <p className="about-ig__user">integriava</p>
                      <p className="about-ig__tag">Virtual staffing</p>
                    </div>
                    <span className="about-ig__more">•••</span>
                  </div>
                  <div className="about-ig__post">
                    <img src={`${IMG}/proj-integria-post.webp`} alt="Integria Instagram post about business mistakes" />
                  </div>
                  <div className="about-ig__actions">
                    <img src={`${IMG}/ig-icon-1.svg`} alt="" aria-hidden="true" width={12} height={12} />
                    <img src={`${IMG}/ig-icon-2.svg`} alt="" aria-hidden="true" width={12} height={12} />
                    <img src={`${IMG}/ig-icon-3.svg`} alt="" aria-hidden="true" width={12} height={12} />
                    <span />
                    <img src={`${IMG}/ig-icon-4.svg`} alt="" aria-hidden="true" width={12} height={12} />
                  </div>
                  <p className="about-ig__cap">integriava&nbsp; Avoid these costly mistakes. Swipe for the fix →</p>
                </div>
              </div>
              <span className="about-pill about-pill--a">Myth vs fact series</span>
              <span className="about-pill about-pill--b">Carousel Posts</span>
            </div>
            <Caption meta="Social media system · Virtual staffing" name="Integria">
              A modular Instagram system: <br className="about-br" />
              campaigns, myth-busting posts and engagement.
            </Caption>
          </article>

          <article className="about-proj">
            <div className="about-proj__visual about-proj__visual--eflex">
              <img src={`${IMG}/proj-eflex-a.webp`} alt="eFlexervices brand collage with tote bag, business cards and color palette" loading="lazy" />
              <img src={`${IMG}/proj-eflex-b.webp`} alt="eFlexervices brand identity" loading="lazy" />
            </div>
            <Caption meta="Brand identity · BPO company" name="eFlexervices">
              Logo, colors, type, business cards, ID and a <br className="about-br" />
              full brand guide.
            </Caption>
          </article>

          <article className="about-proj">
            <div className="about-proj__visual about-proj__visual--crop">
              <img
                src={`${IMG}/proj-fidget.webp`}
                alt="The Fidget Game packaging"
                loading="lazy"
                style={{ height: '109.62%', left: '-89.64%', top: '-4.78%', width: '265.75%' }}
              />
            </div>
            <Caption meta="Packaging & print · Toys" name="The Fidget Game">
              A 2025 product catalog and retail packaging.
            </Caption>
          </article>

          <article className="about-proj">
            <div className="about-proj__visual about-proj__visual--coupons">
              <img src={`${IMG}/proj-coupons.webp`} alt="Advanced Coupons campaign creative" loading="lazy" />
            </div>
            <Caption meta="Campaign creative · WooCommerce" name="Advanced Coupons">
              Seasonal campaign creative, from Black Friday to Halloween, built around a robot mascot.
            </Caption>
          </article>

          <article className="about-proj">
            <div className="about-proj__visual about-proj__visual--crop">
              <img
                src={`${IMG}/proj-eyecare.webp`}
                alt="EyeCare Educators brand identity"
                loading="lazy"
                style={{ height: '142.15%', left: '-25.25%', top: '-13.55%', width: '137.35%' }}
              />
            </div>
            <Caption meta="Brand identity · Ophthalmic education" name="EyeCare Educators">
              A radial mark inspired by the eye, <br className="about-br" />
              built for medical settings.
            </Caption>
          </article>

          {/* Release-to-Inbox: email automation */}
          <article className="about-proj">
            <div className="about-proj__visual about-proj__visual--rti">
              <Blob src="blob-rti-1.svg" left={200} top={120} size={240} inset="-29.17%" />
              <Blob src="blob-rti-2.svg" left={-80} top={-60} size={200} inset="-35%" />
              <div className="about-flow">
                <span>Newswire</span>
                <i>→</i>
                <span>Mailchimp draft</span>
                <i>→</i>
                <span className="about-flow__on">You approve</span>
                <i>→</i>
                <span>Sent</span>
              </div>
              <div className="about-mail">
                <p className="about-mail__title">
                  <img src={`${IMG}/dot-rti.svg`} alt="" aria-hidden="true" width={7} height={7} />
                  Approval needed · Press release
                </p>
                <div className="about-mail__preview">
                  <p>Drill program update</p>
                  <span style={{ width: 222 }} />
                  <span style={{ width: 236 }} />
                  <span style={{ width: 170 }} />
                </div>
                <div className="about-mail__foot">
                  <b>Review and approve</b>
                  <em>Nothing sends without you</em>
                </div>
              </div>
            </div>
            <Caption meta="Email automation · Investor relations" name="Release-to-Inbox">
              Every newswire release becomes a ready Mailchimp campaign, held for one-click human approval.
            </Caption>
          </article>

          {/* Customer finder: lead generation */}
          <article className="about-proj about-proj--wide">
            <div className="about-proj__visual about-proj__visual--finder">
              <Blob src="blob-cf-1.svg" left={-60} top={80} size={260} inset="-26.92%" />
              <Blob src="blob-cf-2.svg" left={560} top={-80} size={280} inset="-25%" />
              <div className="about-pipe">
                <p className="about-pipe__label">EVERY WEEK, FOR YOUR BUSINESS</p>
                {[
                  'Find businesses that fit your ideal customer',
                  'Score who is most likely to buy',
                  'Write a personal intro for each one',
                  'Deliver to Google Sheets or your CRM',
                ].map((t, i) => (
                  <div key={t} className="about-pipe__step">
                    <span className={i === 3 ? 'is-on' : ''}>{i + 1}</span>
                    <p>{t}</p>
                  </div>
                ))}
              </div>
              <div className="about-sheet">
                <div className="about-sheet__head">
                  <p>Your new leads · Google Sheets</p>
                  <span />
                  <em>This week · 24 found</em>
                </div>
                {[
                  ['#1', 'Café chain · Cebu IT Park', 'Opening 2 new branches · intro email ready', 'Score 92', true],
                  ['#2', 'Boutique hotel · Mactan', 'Hiring events staff · intro email ready', 'Score 87', false],
                  ['#3', 'BPO office · Ayala Center', 'Growing team of 200+ · intro email ready', 'Score 81', false],
                ].map(([n, t, s, sc, on]) => (
                  <div key={n as string} className="about-sheet__row">
                    <span className="about-sheet__n">{n}</span>
                    <div>
                      <p>{t}</p>
                      <em>{s}</em>
                    </div>
                    <span className={`about-sheet__score${on ? ' is-on' : ''}`}>{sc}</span>
                  </div>
                ))}
              </div>
            </div>
            <Caption meta="Lead generation · AI-assisted" name="We find your next customers">
              We search for businesses that match your ideal customer, rank who is most likely to buy, and hand you a
              weekly list with intro emails ready to send, straight into your Google Sheet or CRM.
            </Caption>
          </article>

          <article className="about-portfolio">
            <div>
              <p className="t-label">Full portfolio</p>
              <h3>There’s a lot more where this came from.</h3>
              <p>
                Brand identity, social systems, packaging, print, websites and email. We’ll send the full catalog
                within one working day.
              </p>
            </div>
            <RequestButton className="btn btn--ghost">
              Request the full portfolio
            </RequestButton>
          </article>
        </div>
      </div>
    </section>
  )
}

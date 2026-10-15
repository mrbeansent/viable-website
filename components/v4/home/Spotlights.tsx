import Link from 'next/link'
import type { ReactNode } from 'react'
import { FREE_AUDIT } from '@/components/links'

function Pill({ children, className }: { children: ReactNode; className: string }) {
  return (
    <div className={`home-pill ${className}`}>
      <img src="/img/v4/home/dot-live.svg" alt="" width={8} height={8} />
      <span>{children}</span>
    </div>
  )
}

function Media({ src, opacity, shade, children }: { src: string; opacity: number; shade: number; children: ReactNode }) {
  return (
    <div className="home-spot__media">
      <img className="home-spot__bg" src={src} alt="" style={{ opacity }} />
      <div className="home-spot__shade" style={{ background: `rgba(10,10,19,${shade})` }} />
      <div className="home-spot__stage">{children}</div>
    </div>
  )
}

function Copy({
  label, title, tagline, paras, items, price, children,
}: {
  label: string; title: string; tagline: string; paras: string[]; items: string[]; price: ReactNode; children?: ReactNode
}) {
  return (
    <div className="home-spot__copy">
      <p className="t-label home-spot__label">{label}</p>
      <h3 className="home-spot__title">{title}</h3>
      <p className="home-spot__tagline">{tagline}</p>
      {paras.map((p) => (
        <p className="home-spot__para" key={p}>{p}</p>
      ))}
      <p className="t-label home-spot__label home-spot__label--sub">What you get</p>
      <ul className="home-spot__list">
        {items.map((it) => (
          <li key={it}><b>✓</b><span>{it}</span></li>
        ))}
      </ul>
      <div className="home-spot__foot">
        <p className="home-spot__price">{price}</p>
        <div className="home-spot__btns">
          <Link href="/services#pricing" className="btn btn--outline-light">See pricing</Link>
          <Link href={FREE_AUDIT} className="btn btn--primary">Get a quote <span className="btn__arrow">→</span></Link>
        </div>
      </div>
      {children}
    </div>
  )
}

const INBOX = [
  { av: 'M', tone: 'violet', name: 'Maria Santos', time: '9:02 PM', text: 'Inquiry: new website for my clinic', tag: 'New lead' },
  { av: 'V', tone: 'green', name: 'Auto-reply sent', time: '9:02 PM', text: 'Thanks, Maria! Here’s what happens next…', tag: 'Instant' },
  { av: 'V', tone: 'mid', name: 'Follow-up #2', time: 'Day 3', text: 'Still thinking it over? Here’s an example…', tag: 'Scheduled' },
  { av: 'M', tone: 'green', name: 'Maria Santos', time: 'Day 4', text: 'Booked: free audit call, Thu 10:00 AM', tag: 'Booked' },
]

export default function Spotlights() {
  return (
    <section className="home-light home-spots" data-qa="home-spotlights">
      <div className="container home-spots__stack">
        {/* Websites */}
        <article className="home-spot">
          <Media src="/img/v4/home/spot-web-media.png" opacity={0.9} shade={0.35}>
            <div className="home-browser">
              <div className="home-browser__bar" />
              <img className="home-browser__dot" style={{ left: 11 }} src="/img/v4/home/dot-browser.svg" alt="" />
              <img className="home-browser__dot" style={{ left: 23 }} src="/img/v4/home/dot-browser.svg" alt="" />
              <img className="home-browser__dot" style={{ left: 35 }} src="/img/v4/home/dot-browser.svg" alt="" />
              <div className="home-browser__url" />
              <span className="home-browser__urltext">bio-exec.com</span>
              <img className="home-browser__shot" src="/img/v4/home/spot-web-shot.png" alt="" />
            </div>
            <Pill className="home-pill--web">Built and launched by our team</Pill>
          </Media>
          <Copy
            label="Websites"
            title="Fast, clear websites that turn visitors into inquiries."
            tagline="Most visitors decide in seconds whether to stay."
            paras={[
              'We design and build sites that load fast on a phone, explain what you do at a glance, and make it easy to message, call or book you.',
              'Already have a site? We can fix what’s broken without starting over.',
            ]}
            items={['Mobile-first design and build', 'Messenger, forms and booking connected', 'Speed and Google basics set up', 'AI-search (AEO) basics included']}
            price={<>Site fixes from ₱4,500<br />New sites from ₱29,500</>}
          />
        </article>

        {/* Social media */}
        <article className="home-spot home-spot--flip">
          <Copy
            label="Social media"
            title="Consistent posts that keep you in front of buyers."
            tagline="Your page looks active, even when you’re busy."
            paras={[
              'We plan the month, design every post, write the captions and publish for you, so you stay visible without spending your evenings on Canva.',
              'Each month you get a short report on what worked and what we’ll do next.',
            ]}
            items={['8 designed posts a month', 'Captions written for you', 'Up to 3 platforms', 'Monthly report on what worked']}
            price="From ₱13,000 / month"
          />
          <Media src="/img/v4/home/spot-social-media.png" opacity={0.95} shade={0.3}>
            <div className="home-post">
              <div className="home-post__head">
                <img src="/img/v4/home/avatar-social.svg" alt="" width={30} height={30} />
                <div>
                  <p className="home-post__name">yourbusiness.ph</p>
                  <p className="home-post__city">Cebu City</p>
                </div>
              </div>
              <img className="home-post__img" src="/img/v4/home/spot-social-post.png" alt="" />
              <div className="home-post__foot">
                <p className="home-post__icons">♡&nbsp; ◯&nbsp; ➤</p>
                <p className="home-post__likes">1,245 likes</p>
                <p className="home-post__cap">New week, new look.<br />Message us to book your slot before Friday.</p>
              </div>
            </div>
            <div className="home-plan">
              <p className="t-label home-plan__label">This month</p>
              <p className="home-plan__count">8 / 8 posts ready</p>
              <div className="home-plan__bars">
                {Array.from({ length: 8 }, (_, i) => <i key={i} />)}
              </div>
            </div>
            <Pill className="home-pill--sched">Scheduled: Mon · Wed · Fri</Pill>
          </Media>
        </article>

        {/* Email & follow-up */}
        <article className="home-spot">
          <Media src="/img/v4/home/spot-email-media.png" opacity={0.95} shade={0.3}>
            <div className="home-inbox">
              <div className="home-inbox__head">
                <span>Inbox</span>
                <b>4 new</b>
              </div>
              {INBOX.map((r) => (
                <div className="home-inbox__row" key={r.name + r.time}>
                  <span className={`home-inbox__av home-tone--${r.tone}`}>{r.av}</span>
                  <div className="home-inbox__body">
                    <div className="home-inbox__line">
                      <span className="home-inbox__name">{r.name}</span>
                      <span className="home-inbox__time">{r.time}</span>
                    </div>
                    <p className="home-inbox__text">{r.text}</p>
                    <span className={`home-inbox__tag home-tone--${r.tone}`}>{r.tag}</span>
                  </div>
                </div>
              ))}
            </div>
            <Pill className="home-pill--reply">Reply time: under 1 minute</Pill>
          </Media>
          <Copy
            label="Email & follow-up"
            title="Every inquiry gets a reply, even at 11 PM."
            tagline="No more leads lost in DMs and inboxes."
            paras={[
              'Inquiries from your website, Facebook and email land in one place. People get an instant reply, then friendly follow-ups until they book or say no.',
              'Add monthly email campaigns and past customers keep coming back.',
            ]}
            items={['Instant auto-reply', 'Follow-ups over 7 days', 'One inbox for every lead', 'Monthly email campaigns']}
            price={<>Follow-up from ₱12,000<br />Email from ₱10,000 / mo</>}
          />
        </article>
      </div>
    </section>
  )
}

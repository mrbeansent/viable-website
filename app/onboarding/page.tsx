import type { Metadata } from 'next'
import Link from 'next/link'
import TallyEmbed from '@/components/onboarding/TallyEmbed'
import { CONTACT_EMAIL, MESSENGER_URL } from '@/components/links'
import '@/app/styles/v4-onboarding.css'

// Private page for won clients. Not in the nav, sitemap or llms.txt, and blocked in robots.ts.
// Link format (made from the won lead card): /onboarding?lead=VL-0042&biz=Banilad%20Homes
export const metadata: Metadata = {
  title: 'Your onboarding | Viable Works',
  robots: { index: false, follow: false },
}

type Search = Record<string, string | string[] | undefined>

const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? ''

// Lead IDs are short codes like VL-0042. Anything else is treated as a broken link.
function cleanLead(raw: string) {
  const v = raw.trim()
  return /^[A-Za-z0-9-]{3,24}$/.test(v) ? v : ''
}

// Business name is only shown as a greeting and passed to the form. Strip control characters and cap length.
function cleanBiz(raw: string) {
  return raw.replace(/[\u0000-\u001f\u007f<>]/g, '').trim().slice(0, 80)
}

export default async function OnboardingPage({ searchParams }: { searchParams: Promise<Search> }) {
  const params = await searchParams
  const lead = cleanLead(first(params.lead))
  const biz = cleanBiz(first(params.biz))

  return (
    <div className="onb">
      <header className="onb-band">
        <div className="onb-band__inner">
          <img className="onb-band__logo" src="/img/v4/shared/logo.webp" alt="Viable Works" />
        </div>
      </header>

      <main className="onb-main">
        {lead ? (
          <section className="onb-card">
            <p className="onb-eyebrow">Client onboarding</p>
            <h1 className="onb-title">{biz ? `Welcome to Viable Works, ${biz}.` : 'Welcome to Viable Works.'}</h1>
            <p className="onb-lead">
              A few questions so we can start your project. It takes about 10 minutes. If you are not sure about an
              answer, skip it and we will cover it on your kickoff call.
            </p>
            <ul className="onb-notes">
              <li>
                <strong>Never type passwords here.</strong> We set up access with you on the kickoff call.
              </li>
              <li>Have files ready? Share a folder link from Google Drive, Dropbox, OneDrive or iCloud.</li>
              <li>
                Your answers go only to the Viable Works team. See our <Link href="/privacy">Privacy Policy</Link>.
              </li>
            </ul>
            <TallyEmbed lead={lead} biz={biz} />
          </section>
        ) : (
          <section className="onb-card onb-card--short">
            <h1 className="onb-title">This link doesn&rsquo;t look right.</h1>
            <p className="onb-lead">Message Belle on Messenger and she will send you a new one.</p>
            <div className="onb-actions">
              <a className="onb-btn" href={MESSENGER_URL} target="_blank" rel="noopener noreferrer">
                Message Belle on Messenger
              </a>
              <p className="onb-small">
                Or email <span className="onb-select">{CONTACT_EMAIL}</span>
              </p>
            </div>
          </section>
        )}
      </main>

      <footer className="onb-foot">
        <p>Viable Digital Marketing Services · Cebu, Philippines</p>
        <p>
          <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
        </p>
      </footer>
    </div>
  )
}

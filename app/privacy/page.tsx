import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import PageHero from '@/components/PageHero'
import { CONTACT_EMAIL } from '@/components/links'

export const metadata: Metadata = {
  title: 'Privacy — Viable Works',
  description: 'How Viable Works handles your information, including your quiz answers.',
}

const POLICY = [
  { title: 'What we collect', body: 'Your name, email, business name and phone if you give them, plus your quiz answers and any message you send us.' },
  { title: 'Why we collect it', body: 'To show you the right fix, reply to you, and prepare for a call you ask for. We do not sell your details.' },
  { title: 'Who sees it', body: 'Viable Works partners and the specialist teams who work on your project. We use tools such as GoHighLevel, our calendar and email provider to run the service.' },
  { title: 'How long we keep it', body: 'Quiz answers and enquiries are kept for up to 24 months unless you ask us to delete them sooner.' },
  { title: 'Your rights', body: 'Under the Data Privacy Act of 2012 you can ask to see, correct or delete your information, and withdraw consent at any time.' },
  { title: 'Contact', body: `Email ${CONTACT_EMAIL} and we will respond within 5 working days.` },
]

export default function PrivacyPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Legal" title="Privacy">
        <p className="page-sub">How Viable Works handles your information, including your quiz answers.</p>
      </PageHero>
      <section className="privacy-body">
        <div className="container">
          {POLICY.map((p) => (
            <div key={p.title} className="policy-block">
              <h2>{p.title}</h2>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}

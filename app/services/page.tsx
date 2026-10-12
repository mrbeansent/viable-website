import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import PageHero from '@/components/PageHero'
import OneTimeProjects from '@/components/services/OneTimeProjects'
import MonthlyPlans from '@/components/services/MonthlyPlans'
import OnRequest from '@/components/services/OnRequest'
import Options from '@/components/Options'
import HowItWorks from '@/components/HowItWorks'
import FoundingOffer from '@/components/FoundingOffer'
import FinalCta from '@/components/FinalCta'

export const metadata: Metadata = {
  title: 'Services — Viable Works',
  description:
    'One-time projects and monthly plans with clear scopes and starting prices. Book a free 15-minute call and we confirm the right size.',
}

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Services" title="Pick a fix. We will tell you the right size.">
        <p className="page-sub">
          Clear scopes, plain language, and a person who answers. Prices start low because small jobs are real jobs. We
          confirm the exact scope on a free 15-minute call.
        </p>
      </PageHero>
      <OneTimeProjects />
      <MonthlyPlans />
      <OnRequest />
      <Options />
      <HowItWorks />
      <FoundingOffer />
      <FinalCta />
    </SiteShell>
  )
}

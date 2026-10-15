import type { Metadata } from 'next'
import SiteShell from '@/components/v4/shared/SiteShell'
import ServicesHero from '@/components/v4/services/Hero'
import ServicesMarquee from '@/components/v4/services/Marquee'
import OneTime from '@/components/v4/services/OneTime'
import Monthly from '@/components/v4/services/Monthly'
import AiConsult from '@/components/v4/services/AiConsult'
import Compare from '@/components/v4/services/Compare'
import HowItWorks from '@/components/v4/services/HowItWorks'
import Faq from '@/components/v4/services/Faq'
import '../styles/v4-services.css'

export const metadata: Metadata = {
  title: 'Services & Pricing — Viable Works',
  description:
    'One-time projects and monthly plans with clear scopes and starting prices in pesos. Request a free audit and we confirm the right size.',
}

export default function ServicesPage() {
  return (
    <SiteShell navVariant="pill">
      <ServicesHero />
      <ServicesMarquee />
      <OneTime />
      <Monthly />
      <AiConsult />
      <Compare />
      <HowItWorks />
      <Faq />
    </SiteShell>
  )
}

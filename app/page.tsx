import type { Metadata } from 'next'
import SiteShell from '@/components/v4/shared/SiteShell'
import Hero from '@/components/v4/home/Hero'
import Results from '@/components/v4/home/Results'
import ServicesOverview from '@/components/v4/home/ServicesOverview'
import Spotlights from '@/components/v4/home/Spotlights'
import Leaks from '@/components/v4/home/Leaks'
import RecentWork from '@/components/v4/home/RecentWork'
import Compare from '@/components/v4/home/Compare'
import HowItWorks from '@/components/v4/home/HowItWorks'
import Founding from '@/components/v4/home/Founding'
import Faq from '@/components/v4/home/Faq'
import JsonLd from '@/components/v4/shared/JsonLd'
import { FAQS } from '@/components/v4/home/faqData'
import { faqSchema, servicesSchema } from '@/lib/seo'
import '@/app/styles/v4-home.css'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <SiteShell>
      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd data={servicesSchema} />
      <Hero />
      <Results />
      <ServicesOverview />
      <Spotlights />
      <Leaks />
      <RecentWork />
      <Compare />
      <HowItWorks />
      <Founding />
      <Faq />
    </SiteShell>
  )
}

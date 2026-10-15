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
import '@/app/styles/v4-home.css'

export default function Home() {
  return (
    <SiteShell>
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

import SiteShell from '@/components/SiteShell'
import Hero from '@/components/Hero'
import InquiryLeaks from '@/components/InquiryLeaks'
import ToolsCarousel from '@/components/ToolsCarousel'
import TrackRecord from '@/components/TrackRecord'
import WhatWeDo from '@/components/WhatWeDo'
import Options from '@/components/Options'
import HowItWorks from '@/components/HowItWorks'
import PriceEffort from '@/components/PriceEffort'
import FreeAudit from '@/components/FreeAudit'
import WhoWeHelp from '@/components/WhoWeHelp'
import IsThisYou from '@/components/IsThisYou'
import People from '@/components/People'
import FoundingOffer from '@/components/FoundingOffer'
import Faq from '@/components/Faq'
import FinalCta from '@/components/FinalCta'

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <InquiryLeaks />
      <ToolsCarousel />
      <TrackRecord />
      <WhatWeDo />
      <Options />
      <HowItWorks />
      <PriceEffort />
      <FreeAudit />
      <WhoWeHelp />
      <IsThisYou />
      <People />
      <FoundingOffer />
      <Faq />
      <FinalCta />
    </SiteShell>
  )
}

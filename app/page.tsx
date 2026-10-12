import SiteShell from '@/components/SiteShell'
import Hero from '@/components/Hero'
import ToolsCarousel from '@/components/ToolsCarousel'
import TrackRecord from '@/components/TrackRecord'
import WhatWeDo from '@/components/WhatWeDo'
import InquiryLeaks from '@/components/InquiryLeaks'
import Options from '@/components/Options'
import HowItWorks from '@/components/HowItWorks'
import WhoWeHelp from '@/components/WhoWeHelp'
import IsThisYou from '@/components/IsThisYou'
import People from '@/components/People'
import Reviews from '@/components/Reviews'
import FoundingOffer from '@/components/FoundingOffer'
import QuizTeaser from '@/components/QuizTeaser'
import Faq from '@/components/Faq'
import FinalCta from '@/components/FinalCta'

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <ToolsCarousel />
      <TrackRecord />
      <WhatWeDo />
      <InquiryLeaks />
      <Options />
      <HowItWorks />
      <WhoWeHelp />
      <IsThisYou />
      <People />
      <Reviews />
      <FoundingOffer />
      <QuizTeaser />
      <Faq />
      <FinalCta />
    </SiteShell>
  )
}

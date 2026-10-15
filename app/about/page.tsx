import type { Metadata } from 'next'
import SiteShell from '@/components/v4/shared/SiteShell'
import Hero from '@/components/v4/about/Hero'
import Proof from '@/components/v4/about/Proof'
import Launched from '@/components/v4/about/Launched'
import Projects from '@/components/v4/about/Projects'
import WhoWeHelp from '@/components/v4/about/WhoWeHelp'
import Story from '@/components/v4/about/Story'
import Team from '@/components/v4/about/Team'
import '@/app/styles/v4-about.css'

export const metadata: Metadata = {
  title: 'Work & About — Viable Works',
  description:
    'Success stories from abroad, now for local businesses. See our recent work and meet the team behind Viable Works.',
}

export default function AboutPage() {
  return (
    <SiteShell>
      <Hero />
      <Proof />
      <Launched />
      <Projects />
      <WhoWeHelp />
      <Story />
      <Team />
    </SiteShell>
  )
}

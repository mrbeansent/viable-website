import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import PageHero from '@/components/PageHero'
import People from '@/components/People'
import TrackRecord from '@/components/TrackRecord'
import Values from '@/components/about/Values'
import Promises from '@/components/about/Promises'
import Reviews from '@/components/Reviews'
import FoundingOffer from '@/components/FoundingOffer'
import FinalCta from '@/components/FinalCta'

export const metadata: Metadata = {
  title: 'About — Viable Works',
  description:
    'Success stories from abroad, now for local businesses. Meet the experts behind Viable Works and how we work.',
}

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="About" title="Success stories from abroad, now for local businesses.">
        <div className="page-sub">
          <p>
            For years, we have worked with businesses in the US, Canada and Australia, across many different
            industries, fixing what was holding them back.
          </p>
          <p>Our clients grew, and we kept learning what really works.</p>
          <p className="accent">Now we bring that same success story to businesses here at home.</p>
        </div>
      </PageHero>
      <People showNote={false} />
      <TrackRecord />
      <Values />
      <Promises />
      <Reviews />
      <FoundingOffer />
      <FinalCta />
    </SiteShell>
  )
}

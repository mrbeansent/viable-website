import SiteShell from '@/components/v4/shared/SiteShell'
import LegalHero from './LegalHero'
import LegalBody from './LegalBody'
import LegalQuestions from './LegalQuestions'
import type { LegalSection } from './types'
import '@/app/styles/v4-legal.css'

type Props = {
  titleLines: string[]
  intro: string
  updated: string
  otherLabel: string
  otherHref: string
  sections: LegalSection[]
  questionsHeading: string
  questionsText: string
}

// One layout for /terms and /privacy.
export default function LegalPage(p: Props) {
  return (
    <SiteShell showAnnouncement={false} showContactCta={false}>
      <LegalHero titleLines={p.titleLines} intro={p.intro} updated={p.updated} otherLabel={p.otherLabel} otherHref={p.otherHref} />
      <div className="legal-divider"><div /></div>
      <LegalBody sections={p.sections} />
      <LegalQuestions heading={p.questionsHeading} text={p.questionsText} />
    </SiteShell>
  )
}

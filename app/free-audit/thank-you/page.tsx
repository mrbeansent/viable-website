import type { Metadata } from 'next'
import SiteShell from '@/components/v4/shared/SiteShell'
import ThankYouHero from '@/components/v4/audit/ThankYouHero'
import '@/app/styles/v4-audit.css'

export const metadata: Metadata = {
  title: 'Request received | Viable Works',
  robots: { index: false },
}

export default function ThankYouPage() {
  return (
    <SiteShell showContactCta={false}>
      <ThankYouHero />
    </SiteShell>
  )
}

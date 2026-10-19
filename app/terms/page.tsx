import type { Metadata } from 'next'
import { withSocial } from '@/lib/seo'
import LegalPage from '@/components/v4/legal/LegalPage'
import { TERMS_SECTIONS } from '@/components/v4/legal/terms'

export const metadata: Metadata = withSocial({
  title: 'Terms and Conditions | Viable Works',
  description: 'The terms that apply to every quote, service agreement and monthly plan from Viable Works.',
  alternates: { canonical: '/terms' },
})

export default function TermsPage() {
  return (
    <LegalPage
      titleLines={['Terms and', 'Conditions']}
      intro="These Terms apply to every quote, service agreement and monthly plan from Viable Works, and to use of viable-works.com."
      updated="15 October 2026"
      otherLabel="Read our Privacy Policy →"
      otherHref="/privacy"
      sections={TERMS_SECTIONS}
      questionsHeading="Questions about these terms?"
      questionsText="Send them with enough detail for us to look into. We will acknowledge your concern and explain next steps."
    />
  )
}

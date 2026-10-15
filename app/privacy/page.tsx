import type { Metadata } from 'next'
import LegalPage from '@/components/v4/legal/LegalPage'
import { PRIVACY_SECTIONS } from '@/components/v4/legal/privacy'

export const metadata: Metadata = {
  title: 'Privacy Policy — Viable Works',
  description: 'How Viable Works collects, uses and protects personal information, and how to use your rights under the Data Privacy Act of 2012.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <LegalPage
      titleLines={['Privacy', 'Policy']}
      intro="How Viable Works collects, uses and protects personal information, and how to use your rights under the Data Privacy Act of 2012."
      updated="15 October 2026"
      otherLabel="Read our Terms and Conditions →"
      otherHref="/terms"
      sections={PRIVACY_SECTIONS}
      questionsHeading="Questions about your data?"
      questionsText={'Use the subject "Privacy request." Our Data Protection Officer handles every request.'}
    />
  )
}

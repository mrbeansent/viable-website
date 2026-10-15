import type { Metadata } from 'next'
import SiteShell from '@/components/v4/shared/SiteShell'
import AuditHero from '@/components/v4/audit/AuditHero'
import SampleAudit from '@/components/v4/audit/SampleAudit'
import '@/app/styles/v4-audit.css'

export const metadata: Metadata = {
  title: 'Free audit | Viable Works',
  description: 'Send your link and one line about the problem. In 2 working days you’ll know what’s costing you customers, what to fix first, and roughly what it costs.',
  alternates: { canonical: '/free-audit' },
}

export default function FreeAuditPage() {
  return (
    <SiteShell showContactCta={false}>
      <AuditHero />
      <SampleAudit />
    </SiteShell>
  )
}

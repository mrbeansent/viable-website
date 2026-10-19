import Link from 'next/link'
import { FREE_AUDIT } from '@/components/links'

// Top strip above the hero: founding-rate line + link.
export default function AnnouncementBar() {
  return (
    <div className="announce" data-qa="announce">
      <div className="announce__inner">
        <span className="announce__dot" />
        <span>Founding rates for our first five clients, open until Dec 31, 2026</span>
        <Link href={`${FREE_AUDIT}?ref=founding`} className="announce__cta">
          Claim a spot →
        </Link>
      </div>
    </div>
  )
}

import type { ReactNode } from 'react'
import AnnouncementBar from './AnnouncementBar'
import ContactCta from './ContactCta'
import Footer from './Footer'
import Nav, { type NavVariant } from './Nav'

// Page frame: announcement bar, nav (absolute, overlays the top of <main>), main, contact CTA, footer.
export default function SiteShell({
  children,
  showContactCta = true,
  showAnnouncement = true,
  navVariant = 'pill',
}: {
  children?: ReactNode
  showContactCta?: boolean
  showAnnouncement?: boolean
  navVariant?: NavVariant
}) {
  return (
    <div className={`shell${showAnnouncement ? '' : ' shell--no-announce'}`}>
      {showAnnouncement ? <AnnouncementBar /> : null}
      <Nav variant={navVariant} />
      <main className="shell__main">{children}</main>
      {showContactCta ? <ContactCta /> : null}
      <Footer />
    </div>
  )
}

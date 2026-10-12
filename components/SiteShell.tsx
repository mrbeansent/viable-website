import type { ReactNode } from 'react'
import AnnouncementBar from './AnnouncementBar'
import Nav from './Nav'
import Footer from './Footer'

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

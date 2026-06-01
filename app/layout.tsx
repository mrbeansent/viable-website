import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Viable Works — We build websites that grow businesses.',
  description: 'Viable Works is a boutique digital agency for small businesses. Web design, social media, email marketing, CRM, video editing, and podcast production.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="ambient">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        {children}
      </body>
    </html>
  )
}

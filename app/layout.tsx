import type { Metadata } from 'next'
import { Arimo } from 'next/font/google'
import './globals.css'

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-arimo',
  display: 'swap',
})

const title = 'Viable Works — Your website should bring you customers.'
const description =
  'Viable Works builds websites, email and follow-up systems that turn visitors into inquiries. Free 15-minute call, fixed-scope proposals, based in Cebu City.'

// The share image comes from app/opengraph-image.png and app/twitter-image.png (Viable logo).
export const metadata: Metadata = {
  metadataBase: new URL('https://www.viable-works.com'),
  title,
  description,
  openGraph: { type: 'website', siteName: 'Viable Works', title, description, url: '/' },
  twitter: { card: 'summary_large_image', title, description },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={arimo.variable}>
      <body>{children}</body>
    </html>
  )
}

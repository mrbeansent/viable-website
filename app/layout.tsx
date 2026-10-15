import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import RequestProvider from '@/components/request/RequestProvider'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

const title = 'Viable Works — Stop doing it all yourself. Start getting customers.'
const description =
  'Viable Works builds your website, runs your email and social media, and follows up every inquiry. Request a free audit. Based in Cebu City.'

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
    <html lang="en" className={manrope.variable}>
      <body>
        <RequestProvider>{children}</RequestProvider>
      </body>
    </html>
  )
}

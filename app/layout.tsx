import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import RequestProvider from '@/components/request/RequestProvider'
import JsonLd from '@/components/v4/shared/JsonLd'
import { SITE_URL, organizationSchema } from '@/lib/seo'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

// Primary keyword: "web design and digital marketing agency in Cebu".
const title = 'Web Design & Digital Marketing Agency in Cebu | Viable Works'
const description =
  'Web design and digital marketing agency in Cebu City. We build your website, run your email and social media, and follow up every inquiry. Get a free audit.'

// The share image comes from app/opengraph-image.png and app/twitter-image.png (Viable logo).
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: { type: 'website', siteName: 'Viable Works', locale: 'en_PH', title, description },
  twitter: { card: 'summary_large_image', title, description },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <JsonLd data={organizationSchema} />
        <RequestProvider>{children}</RequestProvider>
      </body>
    </html>
  )
}

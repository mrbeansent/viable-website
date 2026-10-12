import type { Metadata } from 'next'
import { Arimo } from 'next/font/google'
import './globals.css'

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-arimo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Viable Works — Your website should bring you customers.',
  description:
    'Viable Works builds websites, email and follow-up systems that turn visitors into inquiries. Free 15-minute call, fixed-scope proposals, based in Cebu City.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={arimo.variable}>
      <body>{children}</body>
    </html>
  )
}

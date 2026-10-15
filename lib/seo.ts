import { CONTACT_EMAIL } from '@/components/links'
import { SERVICES } from '@/components/v4/shared/services'

export const SITE_URL = 'https://www.viable-works.com'

// Pages listed in the sitemap and llms.txt. Thank-you pages and API routes stay out.
export const PAGES = [
  { path: '/', title: 'Home', summary: 'Web design and digital marketing for businesses in Cebu and across the Philippines.' },
  { path: '/services', title: 'Services & Pricing', summary: 'One-time projects and monthly plans with starting prices in pesos.' },
  { path: '/about', title: 'Work & About', summary: 'Client results, recent websites, selected projects and the team.' },
  { path: '/free-audit', title: 'Free audit', summary: 'Request a free written audit of where your inquiries are being lost.' },
  { path: '/quiz', title: 'Find your fix', summary: 'An 8-question quiz that recommends the right first fix.' },
  { path: '/book', title: 'Book a call', summary: 'Book a free 15-minute call.' },
  { path: '/privacy', title: 'Privacy Policy', summary: 'How we collect, use and protect personal information.' },
  { path: '/terms', title: 'Terms and Conditions', summary: 'Terms for every quote, service agreement and monthly plan.' },
]

const ORG_ID = `${SITE_URL}/#organization`

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: 'Viable Works',
  legalName: 'Viable Digital Marketing Services',
  url: SITE_URL,
  logo: `${SITE_URL}/img/v4/shared/logo.webp`,
  image: `${SITE_URL}/opengraph-image.png`,
  email: CONTACT_EMAIL,
  description:
    'Web design and digital marketing agency in Cebu City. We build websites and run email, social media and follow-up for businesses in the Philippines and abroad.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '020 Central Biasong',
    addressLocality: 'Cebu',
    addressCountry: 'PH',
  },
  areaServed: ['PH', 'Worldwide'],
  priceRange: '₱₱',
  founder: [
    { '@type': 'Person', name: 'Amiel Vincent Cañas', jobTitle: 'Web development & hosting lead' },
    { '@type': 'Person', name: 'Belinda Ely Berber', jobTitle: 'Marketing & graphic design lead' },
  ],
  knowsAbout: ['Web design', 'Email marketing', 'Social media marketing', 'CRM and lead follow-up', 'Answer engine optimization (AEO)'],
}

export const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.title,
      description: s.sub,
      provider: { '@id': ORG_ID },
      areaServed: 'PH',
      offers: { '@type': 'Offer', priceCurrency: 'PHP', description: s.price },
    },
  })),
}

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
})

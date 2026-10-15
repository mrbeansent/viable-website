import { CONTACT_EMAIL } from '@/components/links'
import { FAQS as HOME_FAQS } from '@/components/v4/home/faqData'
import { FAQS as SERVICE_FAQS, PACKAGES, PLANS } from '@/components/v4/services/data'
import { PAGES, SITE_URL } from '@/lib/seo'

// Plain-text site guides for AI tools (llmstxt.org). Built from the same data the pages render.
const url = (path: string) => `${SITE_URL}${path === '/' ? '' : path}`

const INTRO = `# Viable Works

> Web design and digital marketing agency in Cebu City, Philippines. We build websites and run email marketing, social media and lead follow-up for businesses in the Philippines and abroad. Every project starts with a free written audit; prices are fixed once the quote is approved.

- Legal name: Viable Digital Marketing Services (general partnership, SEC Philippines)
- Team leads: Amiel Vincent Cañas (web development & hosting) and Belinda Ely Berber (marketing & graphic design)
- Address: 020 Central Biasong, Biasong, Cebu, Philippines
- Email: ${CONTACT_EMAIL}`

const CONTACT = `## Contact

- [Request a free audit](${url('/free-audit')}): send your link and one line about the problem; written reply in 2 working days
- [Book a free 15-minute call](${url('/book')})
- Email: ${CONTACT_EMAIL}`

export function llmsTxt() {
  const pages = PAGES.map((p) => `- [${p.title}](${url(p.path)}): ${p.summary}`).join('\n')
  return `${INTRO}

## Pages

${pages}

${CONTACT}

## Optional

- [Full site guide](${url('/llms-full.txt')}): services, prices and FAQs in one file
`
}

export function llmsFullTxt() {
  const packages = PACKAGES.map((p) => `### ${p.title} (${p.price})\n${p.sub}\n${p.items.map((i) => `- ${i}`).join('\n')}`).join('\n\n')
  const plans = PLANS.map((p) => `### ${p.title} (from ${p.price} / month)\n${p.sub}\n${p.items.map((i) => `- ${i}`).join('\n')}`).join('\n\n')
  const seen = new Set<string>()
  const faqs = [...HOME_FAQS, ...SERVICE_FAQS.map(([q, a]) => ({ q, a }))]
    .filter(({ q }) => !seen.has(q) && seen.add(q))
    .map(({ q, a }) => `### ${q}\n${a}`)
    .join('\n\n')
  return `${INTRO}

## One-time projects

Source: ${url('/services')}

${packages}

## Monthly plans

Billed monthly in advance. Change or stop with 30 days' notice. No long contracts.

${plans}

## How it works

1. Free audit: send your link and biggest problem; you get a written audit with the top 3 fixes in 2 working days.
2. Fixed quote: approve the scope and price in pesos. Pay 50% to start.
3. Built and launched: two rounds of feedback, then launch and handover of every login. 50% before go-live. Standard builds usually go live in about 14 working days.

## Frequently asked questions

${faqs}

${CONTACT}

## Policies

- [Terms and Conditions](${url('/terms')})
- [Privacy Policy](${url('/privacy')})
`
}

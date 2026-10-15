// Copy for the Services & Pricing page (from Figma 123:237).
export type Pkg = {
  n: string
  chip: string
  title: string
  sub: string
  price: string
  items: string[]
  cta: string
  href: 'audit' | 'quote' | 'book'
  row: 1 | 2
}

export const PACKAGES: Pkg[] = [
  { n: '01', chip: '2 working days', title: 'Lead Leak Audit', sub: 'Find out where your inquiries get lost.', price: 'Free', items: ['A short written audit', 'Top 3 fixes, in order, with rough prices', 'A call is optional, never required'], cta: 'Get my free audit →', href: 'audit', row: 1 },
  { n: '02', chip: 'One-time', title: 'Site Rescue', sub: 'Fix a slow, broken or confusing site without a rebuild.', price: 'From ₱4,500', items: ['Quick Fix: one issue solved, from ₱4,500', 'Full Site Rescue from ₱9,500: speed, mobile, forms and tracking', 'Done without a rebuild'], cta: 'Get a quote →', href: 'quote', row: 1 },
  { n: '03', chip: '~14 working days', title: 'Launch Site', sub: 'A new website that’s clear, fast and built to bring inquiries.', price: 'From ₱29,500', items: ['3 pages: design, build, hosting setup and launch', 'AI-search (AEO) basics included', 'Basic copy written for you', '5+ pages from ₱35,000'], cta: 'Get a quote →', href: 'quote', row: 1 },
  { n: '04', chip: 'One-time', title: 'Lead Engine', sub: 'Capture, reply to and follow up every inquiry automatically.', price: 'From ₱12,000', items: ['One flow: form, instant reply and follow-ups', 'Forms and inboxes connected', 'Full CRM setup from ₱25,000'], cta: 'Get a quote →', href: 'quote', row: 2 },
  { n: '05', chip: 'One-time', title: 'Freelancer Launch Kit', sub: 'Look established from day one.', price: 'From ₱12,000', items: ['A clean one-page site', 'Business email set up', 'Starter template pack'], cta: 'Get a quote →', href: 'quote', row: 2 },
  { n: '06', chip: 'One-time', title: 'AEO Setup', sub: 'Get named when people ask ChatGPT or Google AI for a business like yours.', price: 'Quote after a call', items: ['Business details set up so AI tools can find you', 'Pages written so AI can read and quote them', 'Basics already included in Launch Site'], cta: 'Book a free call →', href: 'book', row: 2 },
]

export const PLANS = [
  { title: 'Care plan', sub: 'We keep your site healthy, fast and updated.', price: '₱3,500', items: ['Hosting and uptime monitoring', 'Updates and security patches', 'Daily backups', 'Monthly check-up report'], featured: false },
  { title: 'Grow plan', sub: 'Steady improvements and campaigns that bring in more inquiries.', price: '₱10,000', items: ['Email campaigns every month', 'Landing pages built and tested', 'Testing and ongoing improvements', 'Monthly report you can actually read', 'Monthly strategy call'], featured: true },
  { title: 'Social plan', sub: 'Planned, designed and posted for you.', price: '₱13,000', items: ['8 designed posts a month', 'Scheduled and posted for you', 'Up to 3 platforms', 'Content strategy and planning', 'Monthly report on what works'], featured: false },
]

export const AI_CARDS = [
  ['Save hours every week', 'We find the tasks AI can take off your plate.'],
  ['Grow faster', 'Quicker replies, follow-ups and content that bring in customers.'],
  ['Tools that fit you', 'The right AI tools and automations, set up for your business.'],
  ['You stay in control', 'We train your team so you stay in charge of the results.'],
]

export const COMPARE_ROWS = [
  ['Who’s accountable', 'One person, if they reply', 'You', 'We are. A named lead owns your project'],
  ['What you get', 'One person’s skills', 'Templates and drafts', 'Web, marketing and design specialists'],
  ['Speed to launch', 'Depends on their other clients', 'Fast to start, slow to finish', 'Standard builds usually live in 14 working days'],
  ['Cost to start', 'Low, but scope tends to grow', 'Low, plus a lot of your time', 'A fixed quote before you pay'],
  ['When something breaks', 'Hope they’re still around', 'You figure it out', 'We fix it: free for 15 days after launch, then under a Care plan'],
  ['Who holds the logins', 'Sometimes they do', 'You', 'You, always'],
]

export const STEPS = [
  { when: 'Day 0', title: 'Request your free audit', text: 'Send your link, email and biggest problem. No call needed.', you: 'You: Your link and one line on the problem', chip: 'Free' },
  { when: 'Within 2 working days', title: 'Audit and proposal', text: 'A written audit with the top 3 fixes, a fixed scope, timeline and price.', you: 'You: Questions or changes', chip: 'Free' },
  { when: 'Day 3', title: 'Approve and start', text: 'We send the agreement and invoice.', you: 'You: Sign and pay the 50% deposit', chip: '50% to start' },
  { when: '2 days after deposit', title: 'Onboarding call', text: 'We collect logins and set up analytics, CRM and a shared folder.', you: 'You: Logins, logo, photos and content', chip: 'Included' },
  { when: '~14 working days', title: 'We build', text: 'Design and build, weekly updates and two rounds of revisions.', you: 'You: Feedback within 2 working days', chip: 'Included' },
  { when: 'Around week 3', title: 'Launch and handover', text: 'We test, go live, record a training video and hand over every login. Free fixes for 15 days, then a 30-day check-in.', you: 'You: Final approval', chip: '50% before go-live' },
]

export const GOOD_TO_KNOW = [
  { title: 'What’s included', items: ['Design and build', 'Hosting set up and launch', 'Mobile layout, forms and tracking', 'Your domain and accounts stay in your name'] },
  { title: 'Ongoing costs', items: ['Domain and hosting paid to the provider, or hosting included in a Care plan', 'Care plan from ₱3,500 a month is optional', 'No lock-in on projects'] },
  { title: 'What we need from you', items: ['Your logo and brand colors', 'Your text and photos, or a brief for us to write', 'Logins to your domain and current site', 'One person to approve each step'] },
  { title: 'Help with content?', items: ['Yes. Basic copy for a 3-page site is included', 'Extra writing is quoted up front', 'We pick images that fit your brand'] },
]

export const FAQS = [
  ['What does it cost?', 'Starting prices are listed above. After the free audit you get a fixed quote: 50% to start and 50% before go-live.'],
  ['Are the prices fixed?', 'Yes, once you approve the quote. If you ask for something outside the scope, we quote it separately before doing it.'],
  ['How long does a website take?', 'Standard builds usually go live in about 14 working days. The clock starts once we have your deposit, content and logins. Bigger projects get their own timeline in the quote.'],
  ['Do I own my domain and website?', 'Yes. Your domain and the accounts in your name stay yours, and we hand over every login at launch. If hosting is part of a Care plan, your quote says who holds that account, and we help you move whenever you want.'],
  ['Can I cancel a monthly plan?', 'Yes. Monthly plans are billed in advance and you can change or stop with 30 days’ notice.'],
  ['Do I need a call?', 'No. You can get the free audit or the portfolio without one. A free 15-minute call is there if you want it.'],
  ['What if I only need a small fix?', 'Start with a free audit or a Quick Fix from ₱4,500. You don’t need a full rebuild.'],
  ['What is AEO, and do I need it?', 'AEO means Answer Engine Optimization. More people ask ChatGPT or Google AI instead of searching. AEO sets up your site and business details so those tools can find and name you.'],
]

export const TOC = [
  ['One-time projects', '#pricing'],
  ['Monthly plans', '#monthly'],
  ['AI consultation', '#ai-consult'],
  ['Compare your options', '#compare'],
  ['How it works', '#how-it-works'],
  ['Questions', '#faq'],
]

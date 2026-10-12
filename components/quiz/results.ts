export interface Fix {
  name: string
  body: string
  short: string
}

const FIXES: Record<string, Fix> = {
  'lead-engine': {
    name: 'Lead Engine',
    body: 'Every inquiry lands in one place, gets an instant reply, and is followed up automatically so no lead goes cold.',
    short: 'Instant replies and automatic follow-up.',
  },
  'site-rescue': {
    name: 'Site Rescue',
    body: 'We fix a slow, broken or confusing site without a rebuild, so visitors stay and get in touch.',
    short: 'Speed, mobile layout, forms and tracking.',
  },
  'grow-plan': {
    name: 'Grow plan',
    body: 'Steady improvements and campaigns that bring in more inquiries, with a report you can read.',
    short: 'Campaigns and improvements every month.',
  },
  'care-plan': {
    name: 'Care plan',
    body: 'We own the hosting, updates and backups, and send you a monthly check-up report.',
    short: 'Hosting, updates and monthly check-ups.',
  },
  'ai-consult': {
    name: 'AI-ready consultation',
    body: 'A free call to find where AI can save your team time, then a quote for the parts worth doing.',
    short: 'Find where AI can save your team time.',
  },
}

const PAIN_MAP: Record<string, { fix: keyof typeof FIXES; told: string }> = {
  'slow-replies': { fix: 'lead-engine', told: 'replies take more than a day' },
  'cold-leads': { fix: 'lead-engine', told: 'nothing happens after the first message' },
  dated: { fix: 'site-rescue', told: 'your website looks dated or broken' },
  google: { fix: 'grow-plan', told: 'people cannot find you on Google' },
  unmanaged: { fix: 'care-plan', told: 'nobody manages your emails and hosting' },
  ai: { fix: 'ai-consult', told: 'you want to use AI but do not know where to start' },
}

export interface QuizResult {
  start: Fix
  then: Fix | null
  because: string
}

// "Start here" plus at most one "Then add". No prices.
export function computeResult(pains: string[]): QuizResult {
  const picked = pains.filter((p) => PAIN_MAP[p])
  const fixKeys = [...new Set(picked.map((p) => PAIN_MAP[p].fix as string))]
  const startKey = fixKeys[0] ?? 'lead-engine'
  const thenKey = fixKeys[1] ?? (startKey === 'care-plan' ? 'grow-plan' : 'care-plan')
  const told = picked.map((p) => PAIN_MAP[p].told)

  return {
    start: FIXES[startKey],
    then: FIXES[thenKey],
    because: told.length ? `Because you told us: ${told.join(', and ')}.` : '',
  }
}

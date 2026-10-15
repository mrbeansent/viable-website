import { optionLabel, type QuestionId } from './data'

export interface Fix {
  id: string
  name: string
  body: string // longer line for "Start here"
  short: string // one line for "Then add"
}

// Fix copy: Lead Engine and Care plan are from Figma (screen 09); the rest follows the same voice.
export const FIXES: Record<string, Fix> = {
  'lead-engine': {
    id: 'lead-engine',
    name: 'Lead Engine',
    body: 'Every inquiry lands in one place, gets an instant reply, and is followed up automatically, so no lead goes cold.',
    short: 'Instant replies and automatic follow-up, so no lead goes cold.',
  },
  'launch-site': {
    id: 'launch-site',
    name: 'Launch Site',
    body: 'A fast, mobile-friendly website with a clear inquiry form, so people can find you and get in touch.',
    short: 'A fast, mobile-friendly website with an inquiry form.',
  },
  'site-rescue': {
    id: 'site-rescue',
    name: 'Site Rescue',
    body: 'We fix a slow, broken or confusing site without a rebuild, so visitors stay and get in touch.',
    short: 'Speed, mobile layout, forms and tracking fixed.',
  },
  'aeo-setup': {
    id: 'aeo-setup',
    name: 'AEO setup',
    body: 'We set up your business so Google and AI assistants can find you, understand you and name you in answers.',
    short: 'Get found and named by Google and AI assistants.',
  },
  'social-plan': {
    id: 'social-plan',
    name: 'Social plan',
    body: 'Planned, designed and posted for you every month, so your pages never go quiet.',
    short: 'Planned, designed and posted for you every month.',
  },
  'care-plan': {
    id: 'care-plan',
    name: 'Care plan',
    body: 'We own the hosting, updates and backups, and send you a monthly check-up report.',
    short: 'Hosting, updates and monthly check-ups, so everything keeps running.',
  },
  'grow-plan': {
    id: 'grow-plan',
    name: 'Grow plan',
    body: 'Steady improvements and campaigns that bring in more inquiries, with a report you can read.',
    short: 'Campaigns and improvements every month.',
  },
  'freelancer-kit': {
    id: 'freelancer-kit',
    name: 'Freelancer Launch Kit',
    body: 'A simple site and a ready-to-use set of tools to get a freelancer or solo creator online and booked.',
    short: 'A simple site and starter tools for solo creators.',
  },
  'ai-consult': {
    id: 'ai-consult',
    name: 'AI consultation (free call)',
    body: 'A free call to find where AI can save your team time, then a quote for the parts worth doing.',
    short: 'A free call to find where AI can save you time.',
  },
}

export type Answers = Partial<Record<QuestionId, string[]>>

export interface QuizResult {
  start: Fix
  then: Fix
  because: string[]
}

const has = (answers: Answers, qid: QuestionId, ...ids: string[]) =>
  (answers[qid] ?? []).filter((a) => ids.includes(a))

const told = (answers: Answers, qid: QuestionId, ...ids: string[]) =>
  has(answers, qid, ...ids).map((id) => optionLabel(qid, id))

interface Rule {
  start: string
  then: string
  // returns the "because you told us" lines when the rule matches, otherwise []
  match: (a: Answers) => string[]
}

// First matching rule wins (spec 147:754). Budget and timing never change the result.
const RULES: Rule[] = [
  {
    start: 'lead-engine',
    then: 'care-plan',
    match: (a) => [
      ...told(a, 'pains', 'slow-replies', 'cold-leads'),
      ...told(a, 'reply', 'next-day', 'missed'),
    ],
  },
  // Freelancer kit sits before Launch site: placed after it (as in the spec) it could never match.
  {
    start: 'freelancer-kit',
    then: 'social-plan',
    match: (a) => (has(a, 'type', 'freelancer').length ? told(a, 'web', 'social', 'none') : []),
  },
  { start: 'launch-site', then: 'lead-engine', match: (a) => told(a, 'web', 'social', 'none') },
  {
    start: 'site-rescue',
    then: 'care-plan',
    match: (a) => [...told(a, 'pains', 'dated'), ...told(a, 'web', 'slow')],
  },
  { start: 'aeo-setup', then: 'site-rescue', match: (a) => told(a, 'pains', 'google') },
  { start: 'social-plan', then: 'grow-plan', match: (a) => told(a, 'marketing', 'nobody') },
  { start: 'care-plan', then: 'grow-plan', match: (a) => told(a, 'pains', 'unmanaged') },
  { start: 'ai-consult', then: 'lead-engine', match: (a) => told(a, 'pains', 'ai') },
]

const TYPE_LINES: Record<string, string> = {
  clinic: 'You run a clinic or health practice',
  accommodation: 'You run a resort, Airbnb or accommodation',
  'real-estate': 'You work in real estate',
  restaurant: 'You run a restaurant, café or food business',
  retail: 'You run a retail, boutique or online shop',
  freelancer: 'You’re a freelancer or solo creator',
  professional: 'You run a professional services business',
}

export function computeResult(answers: Answers): QuizResult {
  const typeId = answers.type?.[0]
  const typeLine = typeId && TYPE_LINES[typeId] ? TYPE_LINES[typeId] : ''

  for (const rule of RULES) {
    const lines = rule.match(answers)
    if (lines.length) {
      return {
        start: FIXES[rule.start],
        then: FIXES[rule.then],
        because: [...lines, ...(typeLine ? [typeLine] : [])],
      }
    }
  }
  // No rule matched (e.g. a working site and fast replies): default to the safe first move.
  return { start: FIXES['lead-engine'], then: FIXES['care-plan'], because: typeLine ? [typeLine] : [] }
}

export const RESULT_IDS = Object.keys(FIXES)

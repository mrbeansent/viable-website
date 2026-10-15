// Quiz questions and options. Copy from Figma "Quiz — Questions & result logic (v4)" (147:754).
export const TOTAL_QUESTIONS = 8

export interface QuizOption {
  id: string
  label: string
}

export type QuestionId = 'type' | 'pains' | 'web' | 'source' | 'reply' | 'marketing' | 'budget' | 'timing'

export interface Question {
  id: QuestionId
  title: string
  hint: string
  multi: boolean
  max?: number
  options: QuizOption[]
}

export const QUESTIONS: Question[] = [
  {
    id: 'type',
    title: 'What kind of business do you run?',
    hint: 'Pick one.',
    multi: false,
    options: [
      { id: 'clinic', label: 'Clinic or health practice' },
      { id: 'accommodation', label: 'Resort, Airbnb or accommodation' },
      { id: 'real-estate', label: 'Real estate' },
      { id: 'restaurant', label: 'Restaurant, café or food' },
      { id: 'retail', label: 'Retail, boutique or online shop' },
      { id: 'freelancer', label: 'Freelancer or solo creator' },
      { id: 'professional', label: 'Professional services' },
      { id: 'other', label: 'Something else' },
    ],
  },
  {
    id: 'pains',
    title: 'What’s slowing you down right now?',
    hint: 'Pick up to 2.',
    multi: true,
    max: 2,
    options: [
      { id: 'slow-replies', label: 'Inquiries get slow replies' },
      { id: 'dated', label: 'My website looks dated or broken' },
      { id: 'google', label: 'People can’t find us on Google or AI' },
      { id: 'cold-leads', label: 'Leads go cold after the first message' },
      { id: 'unmanaged', label: 'Nobody manages our emails or hosting' },
      { id: 'ai', label: 'I want to use AI but don’t know how' },
    ],
  },
  {
    id: 'web',
    title: 'Do you have a website right now?',
    hint: 'Pick one.',
    multi: false,
    options: [
      { id: 'works', label: 'Yes, and it works fine' },
      { id: 'slow', label: 'Yes, but it’s slow or dated' },
      { id: 'social', label: 'No, just Facebook or Instagram' },
      { id: 'none', label: 'Nothing online yet' },
    ],
  },
  {
    id: 'source',
    title: 'Where do most of your inquiries come from?',
    hint: 'Pick any.',
    multi: true,
    options: [
      { id: 'messenger', label: 'Facebook or Messenger' },
      { id: 'instagram', label: 'Instagram' },
      { id: 'form', label: 'Website form' },
      { id: 'google', label: 'Google or Google Maps' },
      { id: 'referrals', label: 'Walk-ins and referrals' },
      { id: 'email', label: 'Email' },
    ],
  },
  {
    id: 'reply',
    title: 'How fast do you usually reply to a new inquiry?',
    hint: 'Pick one.',
    multi: false,
    options: [
      { id: 'hour', label: 'Within an hour' },
      { id: 'same-day', label: 'Same day' },
      { id: 'next-day', label: 'Next day or later' },
      { id: 'missed', label: 'Honestly, some get missed' },
    ],
  },
  {
    id: 'marketing',
    title: 'Who handles your marketing now?',
    hint: 'Pick one.',
    multi: false,
    options: [
      { id: 'me', label: 'Me' },
      { id: 'staff', label: 'Someone on my staff' },
      { id: 'freelancer', label: 'A freelancer' },
      { id: 'agency', label: 'An agency' },
      { id: 'nobody', label: 'Nobody right now' },
    ],
  },
  {
    id: 'budget',
    title: 'What’s your monthly marketing budget?',
    hint: 'This only helps us size the right plan. You’ll get a fixed quote later.',
    multi: false,
    options: [
      { id: 'under-10k', label: 'Under ₱10,000' },
      { id: '10-25k', label: '₱10,000 to ₱25,000' },
      { id: '25-50k', label: '₱25,000 to ₱50,000' },
      { id: '50k-plus', label: '₱50,000 or more' },
      { id: 'one-time', label: 'A one-time project only' },
      { id: 'unsure', label: 'Not sure yet' },
    ],
  },
  {
    id: 'timing',
    title: 'When would you like to start?',
    hint: 'Pick one.',
    multi: false,
    options: [
      { id: 'asap', label: 'As soon as possible' },
      { id: 'month', label: 'Within a month' },
      { id: '1-3-months', label: 'In 1 to 3 months' },
      { id: 'exploring', label: 'Just exploring for now' },
    ],
  },
]

export const TYPE_IDS = QUESTIONS[0].options.map((o) => o.id)

export const optionLabel = (qid: QuestionId, optionId: string) =>
  QUESTIONS.find((q) => q.id === qid)?.options.find((o) => o.id === optionId)?.label ?? optionId

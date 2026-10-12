// Display total from the Figma quiz screens ("Question 1 of 8"). Only questions 1 and 2 are designed so far;
// add the rest to QUESTIONS and the flow will pick them up before the contact step.
export const TOTAL_QUESTIONS = 8

export interface QuizOption {
  id: string
  label: string
}

export interface Question {
  id: 'type' | 'pains'
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
      { id: 'freelancer', label: 'Freelancer or solo creator' },
      { id: 'other', label: 'Something else' },
    ],
  },
  {
    id: 'pains',
    title: 'What is your biggest pain right now?',
    hint: 'Pick up to 2.',
    multi: true,
    max: 2,
    options: [
      { id: 'slow-replies', label: 'Inquiries get slow replies' },
      { id: 'dated', label: 'My website looks dated or broken' },
      { id: 'google', label: 'People cannot find us on Google' },
      { id: 'cold-leads', label: 'Leads go cold after the first message' },
      { id: 'unmanaged', label: 'Nobody manages our emails and hosting' },
      { id: 'ai', label: 'I want to use AI but do not know where to start' },
    ],
  },
]

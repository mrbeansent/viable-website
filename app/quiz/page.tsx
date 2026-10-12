import type { Metadata } from 'next'
import QuizFlow from '@/components/quiz/QuizFlow'

export const metadata: Metadata = {
  title: 'Find your fix — Viable Works',
  description: '8 quick taps, about 2 minutes. We point you to the right fix. No prices, no pressure.',
}

export default function QuizPage() {
  return <QuizFlow />
}

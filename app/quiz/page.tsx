import type { Metadata } from 'next'
import QuizFlow from '@/components/quiz/QuizFlow'
import '../styles/v4-quiz.css'

export const metadata: Metadata = {
  title: 'Find your fix — Viable Works',
  description: '8 quick taps, about 2 minutes. We point you to the right fix. No prices, no pressure.',
}

// /quiz?type=<business type id> preselects question 1 and starts at question 2
export default async function QuizPage({ searchParams }: { searchParams: Promise<{ type?: string | string[] }> }) {
  const { type } = await searchParams
  return <QuizFlow initialType={Array.isArray(type) ? type[0] : type} />
}

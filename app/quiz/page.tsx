import type { Metadata } from 'next'
import { withSocial } from '@/lib/seo'
import QuizFlow from '@/components/quiz/QuizFlow'
import '../styles/v4-quiz.css'

export const metadata: Metadata = withSocial({
  title: 'Find Your Fix: 2-Minute Website & Marketing Quiz | Viable Works',
  description: '8 quick taps, about 2 minutes. We point you to the right fix. No prices, no pressure.',
  alternates: { canonical: '/quiz' },
})

// /quiz?type=<business type id> preselects question 1 and starts at question 2
export default async function QuizPage({ searchParams }: { searchParams: Promise<{ type?: string | string[] }> }) {
  const { type } = await searchParams
  return <QuizFlow initialType={Array.isArray(type) ? type[0] : type} />
}

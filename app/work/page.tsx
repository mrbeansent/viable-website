import { redirect } from 'next/navigation'

// Nav says "Work"; the work + about content lives on /about
export default function WorkPage() {
  redirect('/about')
}

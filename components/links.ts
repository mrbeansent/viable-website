export const CONTACT_EMAIL = 'info@viable-works.com'

export const BOOK_CALL = '/book'
export const QUIZ = '/quiz'
export const REQUEST_AUDIT = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Free audit request')}`
export const quoteLink = (service: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Quote request: ${service}`)}`

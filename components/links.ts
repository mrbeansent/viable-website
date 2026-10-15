export const CONTACT_EMAIL = 'info@viable-works.com'

export const BOOK_CALL = '/book'
export const QUIZ = '/quiz'
export const REQUEST_AUDIT = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Free audit request')}`
export const quoteLink = (service: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Quote request: ${service}`)}`

// v4 additions. TODO: replace with the real Messenger / Viber URLs once confirmed.
export const MESSENGER_URL = 'https://m.me/viableworks'
export const VIBER_URL = ''
export const FREE_AUDIT = '/free-audit'

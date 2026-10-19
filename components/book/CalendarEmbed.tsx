'use client'

import { useEffect, useState } from 'react'
import { CONTACT_EMAIL } from '../links'

// Set NEXT_PUBLIC_CALENDAR_URL to the Cal.com event link, e.g. https://cal.com/viableworks/15min
// (any embeddable scheduler URL works). Name and email from the audit thank-you page are prefilled.
const CALENDAR_URL = process.env.NEXT_PUBLIC_CALENDAR_URL

function buildSrc(base: string, search: string) {
  try {
    const url = new URL(base)
    if (/(^|\.)cal\.com$/.test(url.hostname)) {
      url.searchParams.set('embed', 'true')
      url.searchParams.set('theme', 'dark')
      url.searchParams.set('layout', 'month_view')
    }
    const q = new URLSearchParams(search)
    const name = (q.get('name') || '').slice(0, 60)
    const email = (q.get('email') || '').slice(0, 200)
    if (name) url.searchParams.set('name', name)
    if (email) url.searchParams.set('email', email)
    const ref = q.get('ref')
    if (ref) url.searchParams.set('metadata[source]', ref.slice(0, 40))
    return url.toString()
  } catch {
    return base
  }
}

export default function CalendarEmbed() {
  const [src, setSrc] = useState(CALENDAR_URL ? buildSrc(CALENDAR_URL, '') : '')

  useEffect(() => {
    if (CALENDAR_URL) setSrc(buildSrc(CALENDAR_URL, window.location.search))
  }, [])

  if (CALENDAR_URL) {
    return (
      <div className="book-card book-card--embed">
        <iframe src={src} title="Book a free 15-minute call" loading="lazy" />
        <p className="book-card__fallback">
          Calendar not loading? <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">Open it in a new tab</a> or
          email <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Free 15-minute call')}`}>{CONTACT_EMAIL}</a>.
        </p>
      </div>
    )
  }

  return (
    <div className="book-card">
      <h2 className="book-card__title">Pick a time by email</h2>
      <p className="book-card__text">
        Our online calendar is being set up. Email us and we will send you times for a free 15-minute call.
      </p>
      <a
        href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Free 15-minute call')}`}
        className="btn btn--primary"
      >
        Email {CONTACT_EMAIL} <span className="btn__arrow">→</span>
      </a>
    </div>
  )
}

import { CONTACT_EMAIL } from '../links'

// Set NEXT_PUBLIC_CALENDAR_URL to the GoHighLevel "Free call" calendar embed URL to show the live calendar.
const CALENDAR_URL = process.env.NEXT_PUBLIC_CALENDAR_URL

export default function CalendarEmbed() {
  if (CALENDAR_URL) {
    return (
      <div className="book-card book-card--embed">
        <iframe src={CALENDAR_URL} title="Book a free 15-minute call" loading="lazy" />
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

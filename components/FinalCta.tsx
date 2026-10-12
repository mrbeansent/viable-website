import { BOOK_CALL, REQUEST_AUDIT } from './links'

export default function FinalCta() {
  return (
    <section id="book" className="final">
      <div className="glow" />
      <div className="container">
        <p className="urgency">3 of 5 founding spots left</p>
        <h2>Founding rates close December 31, or when 5 clients sign. Do not wait.</h2>
        <p>Book a free 15-minute call or request a free audit. We will tell you plainly what we would do first.</p>
        <div className="buttons">
          <a href={REQUEST_AUDIT} className="btn btn-primary">Request a free audit</a>
          <a href={BOOK_CALL} className="btn btn-ghost">Book a free 15-minute call</a>
        </div>
      </div>
    </section>
  )
}

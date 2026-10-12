import { BOOK_CALL, REQUEST_AUDIT } from './links'

export default function IsThisYou() {
  return (
    <section className="is-you">
      <div className="container">
        <h2>Is this you? Let’s talk.</h2>
        <p>If one of those sounds like you, a 15-minute call tells us both whether we can help.</p>
        <div className="buttons">
          <a href={BOOK_CALL} className="btn btn-dark">Book a free 15-minute call</a>
          <a href={REQUEST_AUDIT} className="btn btn-ghost-dark">Request a free audit</a>
        </div>
      </div>
    </section>
  )
}

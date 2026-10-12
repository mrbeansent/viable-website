import { BOOK_CALL, CONTACT_EMAIL, QUIZ } from './links'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-line" />
        <div className="footer-row">
          <div className="footer-brand">
            <img src="/img/logo-footer.png" alt="Viable" width={160} height={50} />
            <p>Built to work, made to grow.</p>
            <small>Cebu City, Philippines</small>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <a href="/services">Services</a>
            <a href={QUIZ}>Find your fix</a>
            <a href="/about">About</a>
            <a href={BOOK_CALL}>Book a call</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a href="/privacy">Privacy</a>
            <span>Terms</span>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a href="https://viable-works.com">viable-works.com</a>
          </div>
        </div>
        <p className="copyright">© 2026 Viable Works. All rights reserved.</p>
      </div>
    </footer>
  )
}

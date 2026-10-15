import Link from 'next/link'
import { CONTACT_EMAIL, FREE_AUDIT, MESSENGER_URL, QUIZ, VIBER_URL } from '@/components/links'
import { SERVICES, SERVICES_HREF } from './services'

const COMPANY = [
  { label: 'Our work', href: '/about' },
  { label: 'About us', href: '/about' },
  { label: 'Pricing', href: '/services#pricing' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'FAQ', href: '/services#faq' },
  { label: 'Find your fix', href: QUIZ },
]

export default function Footer() {
  return (
    <footer className="footer" data-qa="footer">
      <div className="container">
        <div className="footer__cols">
          <div className="footer__brand">
            <img src="/img/v4/shared/logo.webp" alt="Viable" />
            <p className="footer__tag">Built to work, made to grow.</p>
            <p className="footer__desc">
              Web design and digital marketing for Philippine businesses, and for clients abroad.
            </p>
            <Link href={FREE_AUDIT} className="btn btn--white btn--sm">
              Get a free audit →
            </Link>
          </div>
          <div className="footer__col">
            <p className="footer__head">Services</p>
            {SERVICES.map((s) => (
              <Link key={s.title} href={SERVICES_HREF} className="footer__link">
                {s.title}
              </Link>
            ))}
          </div>
          <div className="footer__col">
            <p className="footer__head">Company</p>
            {COMPANY.map((l) => (
              <Link key={l.label} href={l.href} className="footer__link">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="footer__col">
            <p className="footer__head">Contact</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="footer__link">{CONTACT_EMAIL}</a>
            <a href={MESSENGER_URL} className="footer__link" target="_blank" rel="noopener noreferrer">Messenger</a>
            {VIBER_URL ? (
              <a href={VIBER_URL} className="footer__link">Viber</a>
            ) : (
              <span className="footer__link">Viber</span>
            )}
          </div>
          <div className="footer__col">
            <p className="footer__head">Legal</p>
            <Link href="/privacy" className="footer__link">Privacy</Link>
            <Link href="/terms" className="footer__link">Terms</Link>
          </div>
        </div>
        <div className="footer__word" aria-hidden="true">
          <span>viable</span>
        </div>
        <div className="footer__legal">
          <span>© 2026 Viable Works</span>
          <span>Viable Digital Marketing Services</span>
        </div>
      </div>
    </footer>
  )
}

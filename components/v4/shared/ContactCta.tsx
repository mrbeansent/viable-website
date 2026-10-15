import Link from 'next/link'
import { FREE_AUDIT, MESSENGER_URL } from '@/components/links'

// Closing call-to-action panel (Figma v4/Contact CTA).
export default function ContactCta() {
  return (
    <section className="cta" data-qa="contact-cta">
      <div className="cta__panel">
        <img className="cta__bg" src="/img/v4/shared/cta-panel.jpg" alt="" aria-hidden="true" />
        <div className="cta__shade" />
        <p className="cta__eyebrow">Free audit  ·  No call needed  ·  Written reply in 2 working days</p>
        <h2 className="cta__title">Let’s find what’s costing you customers.</h2>
        <p className="cta__text">
          Send your link and one line about the problem. You’ll know what to fix first, and roughly what it costs.
        </p>
        <div className="btn-row">
          <Link href={FREE_AUDIT} className="btn btn--primary">
            Get a free audit <span className="btn__arrow">→</span>
          </Link>
          <a href={MESSENGER_URL} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
            Message us on Messenger
          </a>
        </div>
      </div>
    </section>
  )
}

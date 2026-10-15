import Link from 'next/link'
import { BOOK_CALL } from '@/components/links'
import { AI_CARDS } from './data'

export default function AiConsult() {
  return (
    <section id="ai-consult" className="svc-ai" data-qa="services-ai">
      <div className="svc-ai__panel panel">
        <img className="panel__bg" src="/img/v4/services/ai-panel.png" alt="" aria-hidden="true" />
        <div className="svc-ai__shade" />
        <div className="svc-ai__inner">
          <div className="svc-ai__top">
            <div className="svc-ai__head">
              <p className="t-label svc-ai__label">AI-ready consultation</p>
              <h2 className="svc-ai__title">AI is changing how businesses grow. Make it work for yours.</h2>
            </div>
            <div className="svc-ai__side">
              <p>Used well, AI helps a small team reply faster, follow up better and create more. We help you pick the right tools and set them up properly.</p>
              <Link href={BOOK_CALL} className="btn btn--primary">
                Book a free 15-minute call <span className="btn__arrow">→</span>
              </Link>
            </div>
          </div>
          <div className="svc-ai__cards">
            {AI_CARDS.map(([t, d]) => (
              <div key={t} className="svc-ai__card">
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <p className="svc-ai__note">Free 15-minute call, then a quote. No commitment.</p>
        </div>
      </div>
    </section>
  )
}

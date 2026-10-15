import { CONTACT_EMAIL } from '@/components/links'

export default function LegalQuestions({ heading, text }: { heading: string; text: string }) {
  return (
    <section className="legal-questions" data-qa="legal-questions">
      <div className="legal-questions__inner">
        <h2 className="legal-questions__title">{heading}</h2>
        <div className="legal-questions__contact">
          <a href={`mailto:${CONTACT_EMAIL}`} className="legal-questions__email">{CONTACT_EMAIL}</a>
          <p className="legal-questions__text">{text}</p>
        </div>
      </div>
    </section>
  )
}

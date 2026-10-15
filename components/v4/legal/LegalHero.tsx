import Link from 'next/link'

type Props = {
  titleLines: string[]
  intro: string
  updated: string
  otherLabel: string
  otherHref: string
}

// Shared hero for Terms and Privacy (no panel: the nav pill overlays the top of this section).
export default function LegalHero({ titleLines, intro, updated, otherLabel, otherHref }: Props) {
  return (
    <section className="legal-hero" data-qa="legal-hero">
      <div className="legal-hero__inner">
        <p className="legal-hero__label">LEGAL</p>
        <h1 className="legal-hero__title">
          {titleLines.map((line, i) => (
            <span key={line}>
              {i > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </h1>
        <div className="legal-hero__row">
          <p className="legal-hero__intro">{intro}</p>
          <div className="legal-hero__meta">
            <p className="legal-hero__meta-label">Last updated</p>
            <p className="legal-hero__meta-date">{updated}</p>
            <Link href={otherHref} className="legal-hero__meta-link">{otherLabel}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

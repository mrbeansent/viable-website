import type { ReactNode } from 'react'

// Section heading: eyebrow label + big title on the left, note on the right.
export default function SvcHeading({ label, title, note, narrow }: { label: string; title: ReactNode; note?: ReactNode; narrow?: boolean }) {
  return (
    <div className={`svc-head${narrow ? ' svc-head--narrow' : ''}`}>
      <div className="svc-head__main">
        <p className="svc-head__label t-label">{label}</p>
        <h2 className="svc-head__title">{title}</h2>
      </div>
      {note ? <p className="svc-head__note">{note}</p> : null}
    </div>
  )
}

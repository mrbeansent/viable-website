import type { ReactNode } from 'react'

interface SectionHeadProps {
  eyebrow: string
  title: ReactNode
  lede?: string
  eyebrowClassName?: string
}

export default function SectionHead({ eyebrow, title, lede, eyebrowClassName = '' }: SectionHeadProps) {
  return (
    <div className="sec-head">
      <p className={`eyebrow ${eyebrowClassName}`}>{eyebrow}</p>
      <h2>{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </div>
  )
}

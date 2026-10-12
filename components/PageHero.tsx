import type { ReactNode } from 'react'

interface PageHeroProps {
  eyebrow: string
  title: string
  children?: ReactNode
}

export default function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="glow" />
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  )
}

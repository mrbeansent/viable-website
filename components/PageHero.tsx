import type { ReactNode } from 'react'

interface PageHeroProps {
  eyebrow: string
  title: string
  texture?: string
  children?: ReactNode
}

export default function PageHero({ eyebrow, title, texture, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      {texture && <img className="tex" src={texture} alt="" />}
      <div className="glow" />
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  )
}

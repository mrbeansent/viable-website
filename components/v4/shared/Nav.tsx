'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { BOOK_CALL, FREE_AUDIT, QUIZ } from '@/components/links'
import ArrowSquare from './ArrowSquare'
import { SERVICES, SERVICES_HREF } from './services'

export type NavVariant = 'pill' | 'floating'

// Labels from Figma, hrefs mapped to the real routes.
const LINKS: Record<NavVariant, { label: string; href: string }[]> = {
  pill: [
    { label: 'Work', href: '/about' },
    { label: 'How it works', href: '/#how-it-works' },
    { label: 'About', href: '/about' },
    { label: 'FAQ', href: '/services#faq' },
  ],
  floating: [
    { label: 'Work', href: '/about' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/services#pricing' },
    { label: 'FAQ', href: '/services#faq' },
  ],
}

// pill = 1100px rounded pill (home hero, terms); floating = 1040px card (v4/Nav component).
export default function Nav({ variant = 'pill' }: { variant?: NavVariant }) {
  const [mega, setMega] = useState(false)
  const [mobile, setMobile] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const open = () => {
    if (timer.current) clearTimeout(timer.current)
    setMega(true)
  }
  const closeSoon = () => {
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setMega(false), 120)
  }
  const closeAll = () => {
    setMega(false)
    setMobile(false)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeAll()
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) closeAll()
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onDoc)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onDoc)
    }
  }, [])

  return (
    <div className="nav-wrap" data-qa="nav-wrap">
      <nav className={`nav nav--${variant}`} ref={ref} aria-label="Primary" data-qa="nav">
        <div className="nav__bar">
          <Link href="/" className="nav__logo" aria-label="Viable Works home" onClick={closeAll}>
            <img src="/img/v4/shared/logo.webp" alt="Viable" />
          </Link>
          <div className="nav__links">
            <div onMouseEnter={open} onMouseLeave={closeSoon}>
              <button
                type="button"
                className="nav__link"
                aria-expanded={mega}
                aria-haspopup="true"
                onClick={() => setMega((v) => !v)}
              >
                Services{variant === 'floating' ? <span className="nav__caret">▾</span> : null}
              </button>
            </div>
            {LINKS[variant].map((l) => (
              <Link key={l.label} href={l.href} className="nav__link">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="nav__actions">
            <Link href={QUIZ} className="nav__fix">
              Find your fix
            </Link>
            <Link href={FREE_AUDIT} className="btn btn--primary nav__cta">
              Free audit
            </Link>
            <Link href={BOOK_CALL} className="nav__talk">
              Talk to us <ArrowSquare />
            </Link>
            <button
              type="button"
              className="nav__burger"
              aria-label="Menu"
              aria-expanded={mobile}
              onClick={() => setMobile((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className="mega" hidden={!mega} onMouseEnter={open} onMouseLeave={closeSoon} data-qa="mega">
          <div className="mega__grid">
            {SERVICES.map((s) => (
              <Link key={s.title} href={SERVICES_HREF} className="mega__card" onClick={closeAll}>
                <span className="mega__title">{s.title}</span>
                <span className="mega__sub">{s.sub}</span>
                <span className="mega__foot">
                  <span className="mega__price">{s.price}</span>
                  <ArrowSquare size={26} />
                </span>
              </Link>
            ))}
          </div>
          <Link href={QUIZ} className="mega__quiz" onClick={closeAll}>
            <span>Not sure what you need? Take the 2-minute quiz and we’ll point you to the right fix.</span>
            <b>Find your fix →</b>
          </Link>
        </div>

        <div className={`mnav${mobile ? ' is-open' : ''}`}>
          <Link href={SERVICES_HREF} onClick={closeAll}>Services</Link>
          <div className="mnav__sub">
            {SERVICES.map((s) => (
              <Link key={s.title} href={SERVICES_HREF} onClick={closeAll}>
                {s.title}
              </Link>
            ))}
          </div>
          {LINKS[variant].map((l) => (
            <Link key={l.label} href={l.href} onClick={closeAll}>
              {l.label}
            </Link>
          ))}
          <Link href={QUIZ} onClick={closeAll}>Find your fix</Link>
          <Link href={FREE_AUDIT} className="btn btn--primary" onClick={closeAll}>
            Free audit
          </Link>
          <Link href={BOOK_CALL} className="btn btn--ghost" onClick={closeAll}>
            Book a call
          </Link>
        </div>
      </nav>
    </div>
  )
}

'use client'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const closeNav = () => setOpen(false)

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <a href="#" className="nav-logo"><span>v</span>iable</a>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          <li><a href="#services" onClick={closeNav}>Services</a></li>
          <li><a href="#portfolio" onClick={closeNav}>Work</a></li>
          <li><a href="#pricing" onClick={closeNav}>Pricing</a></li>
          <li><a href="#about" onClick={closeNav}>About</a></li>
          <li><a href="#contact" className="nav-cta" onClick={closeNav}>Get in Touch</a></li>
        </ul>
        <button className="nav-toggle" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}

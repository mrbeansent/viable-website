'use client'
import { useEffect, useState } from 'react'
import Logo from './Logo'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <a href="#" className="logo">
          <Logo />
        </a>
        <div className="nav-links" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          <a href="#services">Services</a>
          <a href="#team">Who We Are</a>
          <a href="#work">Work</a>
          <a href="#pricing">Engagement</a>
          <a href="#process">Process</a>
          <a href="#contact" className="btn btn-primary">Get in touch →</a>
        </div>
      </div>
    </nav>
  )
}

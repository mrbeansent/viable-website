'use client'

import { useEffect, useState } from 'react'

type Item = { id: string; title: string }

// "On this page" list: anchor links, highlights the section being read.
export default function LegalToc({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '')

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e)
    if (!els.length || typeof IntersectionObserver === 'undefined') return
    const visible = new Set<string>()
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id)
          else visible.delete(e.target.id)
        }
        // topmost visible section (in document order) wins
        const first = items.find((i) => visible.has(i.id))
        if (first) setActive(first.id)
      },
      { rootMargin: '-120px 0px -60% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [items])

  return (
    <nav className="legal-toc" aria-label="On this page">
      <p className="legal-toc__label">ON THIS PAGE</p>
      <ul className="legal-toc__list" role="list">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              className={`legal-toc__link${active === i.id ? ' is-active' : ''}`}
              aria-current={active === i.id ? 'location' : undefined}
              onClick={() => setActive(i.id)}
            >
              {i.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

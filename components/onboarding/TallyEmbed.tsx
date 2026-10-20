'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

// Set NEXT_PUBLIC_TALLY_ONBOARDING_ID to the Tally form ID (the part after tally.so/r/).
// In Tally, add two hidden fields named exactly `lead_id` and `business`. They are filled from the link.
const FORM_ID = process.env.NEXT_PUBLIC_TALLY_ONBOARDING_ID

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void }
  }
}

export default function TallyEmbed({ lead, biz }: { lead: string; biz: string }) {
  const frame = useRef<HTMLIFrameElement>(null)

  // If Tally's script is blocked or slow (some in-app browsers), load the form without auto-height.
  useEffect(() => {
    const t = setTimeout(() => {
      const f = frame.current
      if (f && !f.getAttribute('src') && f.dataset.tallySrc) f.src = f.dataset.tallySrc
    }, 3000)
    return () => clearTimeout(t)
  }, [])

  if (!FORM_ID) {
    return (
      <div className="onb-missing">
        The onboarding form isn&rsquo;t connected yet. Set NEXT_PUBLIC_TALLY_ONBOARDING_ID.
      </div>
    )
  }

  const q = new URLSearchParams({
    alignLeft: '1',
    hideTitle: '1',
    transparentBackground: '1',
    dynamicHeight: '1',
    lead_id: lead,
    business: biz,
  })
  const src = `https://tally.so/embed/${encodeURIComponent(FORM_ID)}?${q.toString()}`

  return (
    <div className="onb-form">
      <iframe
        ref={frame}
        data-tally-src={src}
        title="Viable Works onboarding form"
        loading="lazy"
        width="100%"
        height="640"
      />
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" onLoad={() => window.Tally?.loadEmbeds()} />
    </div>
  )
}

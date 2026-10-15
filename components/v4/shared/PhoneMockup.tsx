import type { ReactNode } from 'react'

// Phone frame (Figma v4/Phone mockup, 280x580). Pass `src` for a screenshot, or children for custom screen content.
export default function PhoneMockup({
  src,
  alt = '',
  children,
  className = '',
}: {
  src?: string
  alt?: string
  children?: ReactNode
  className?: string
}) {
  return (
    <div className={`phone ${className}`.trim()}>
      <div className="phone__screen">
        {src ? <img src={src} alt={alt} /> : null}
        {children}
      </div>
      <div className="phone__island" />
    </div>
  )
}

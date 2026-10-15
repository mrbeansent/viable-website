// Accent square marking something clickable (Figma v4/Arrow square). size: 32 (default) or 26.
export default function ArrowSquare({ size = 32, className = '' }: { size?: 26 | 32; className?: string }) {
  return (
    <span className={`arrow-sq${size === 26 ? ' arrow-sq--sm' : ''} ${className}`.trim()} aria-hidden="true">
      ↗
    </span>
  )
}

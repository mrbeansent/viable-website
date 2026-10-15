'use client'
import type { ReactNode } from 'react'
import { useRequestModal } from './RequestProvider'

interface RequestButtonProps {
  className?: string
  children: ReactNode
}

// Opens the portfolio request modal.
export default function RequestButton({ className = 'btn btn--primary', children }: RequestButtonProps) {
  const open = useRequestModal()
  return (
    <button type="button" className={className} onClick={open}>
      {children}
    </button>
  )
}

'use client'
import type { ReactNode } from 'react'
import { useRequestModal, type RequestKind } from './RequestProvider'

interface RequestButtonProps {
  kind: RequestKind
  className?: string
  children: ReactNode
}

export default function RequestButton({ kind, className = 'btn btn-primary', children }: RequestButtonProps) {
  const open = useRequestModal()
  return (
    <button type="button" className={className} onClick={() => open(kind)}>
      {children}
    </button>
  )
}

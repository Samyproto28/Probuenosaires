"use client"

import { Analytics } from "@vercel/analytics/next"

interface LayoutClientProps {
  children: React.ReactNode
}

export function LayoutClient({ children }: LayoutClientProps) {
  return (
    <>
      {children}
      <Analytics />
    </>
  )
}

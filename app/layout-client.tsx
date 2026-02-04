"use client"

import { Analytics } from "@vercel/analytics/next"
import { PageTransition } from "@/components/page-transition"

interface LayoutClientProps {
  children: React.ReactNode
}

export function LayoutClient({ children }: LayoutClientProps) {
  return (
    <>
      <PageTransition>
        {children}
      </PageTransition>
      <Analytics />
    </>
  )
}

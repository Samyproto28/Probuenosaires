"use client"

import { useHashNavigation } from "@/hooks/use-hash-navigation"

export function HashNavigationHandler() {
  useHashNavigation()
  
  // This component doesn't render anything, it just handles the hash navigation
  return null
}
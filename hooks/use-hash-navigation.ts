"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export function useHashNavigation() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash
    if (hash) {
      // Remove the # character
      const id = hash.substring(1)
      const element = document.getElementById(id)
      
      if (element) {
        // Use setTimeout to ensure the DOM is fully rendered
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          })
        }, 100)
      }
    }
  }, [pathname]) // Re-run when the pathname changes

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }

  const navigateWithHash = (href: string) => {
    const [path, hash] = href.split("#")
    
    if (window.location.pathname === path) {
      // If we're already on the correct page, just scroll to the element
      if (hash) {
        scrollToElement(hash)
      }
    } else {
      // Navigate to the new page, the useEffect will handle the scrolling
      router.push(href)
    }
  }

  return { navigateWithHash, scrollToElement }
}
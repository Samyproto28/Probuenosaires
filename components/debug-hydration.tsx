"use client"

import { useEffect } from "react"

export function DebugHydration() {
  useEffect(() => {
    // Función para detectar atributos bis_skin_checked
    const checkBisAttributes = () => {
      const elements = document.querySelectorAll('[bis_skin_checked]')
      console.log(`DebugHydration: Se encontraron ${elements.length} elementos con bis_skin_checked`)
      
      if (elements.length > 0) {
        console.log("DebugHydration: Elementos con bis_skin_checked:", elements)
        elements.forEach((el, index) => {
          console.log(`Elemento ${index}:`, el.tagName, el.className, el.getAttribute('bis_skin_checked'))
        })
      }
    }

    // Verificar inmediatamente
    checkBisAttributes()
    
    // Verificar después de un delay (por si una extensión los agrega después)
    setTimeout(checkBisAttributes, 1000)
    setTimeout(checkBisAttributes, 3000)
    
    // Verificar si hay mutaciones en el DOM
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'bis_skin_checked') {
          console.log("DebugHydration: Se detectó una mutación en bis_skin_checked", mutation.target)
        }
      })
    })
    
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['bis_skin_checked'],
      subtree: true
    })
    
    return () => observer.disconnect()
  }, [])

  return null
}
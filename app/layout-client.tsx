"use client"

import { useEffect } from "react"
import { Analytics } from "@vercel/analytics/next"

interface LayoutClientProps {
  children: React.ReactNode
}

export function LayoutClient({ children }: LayoutClientProps) {
  useEffect(() => {
    // Función para eliminar atributos problemáticos de forma síncrona
    const removeProblematicAttributes = () => {
      // Usar querySelectorAll con todos los selectores problemáticos
      const elements = document.querySelectorAll('[bis_skin_checked], [bis_register], [__processed_]')
      elements.forEach(el => {
        el.removeAttribute('bis_skin_checked')
        el.removeAttribute('bis_register')
        // Eliminar todos los atributos que comienzan con __processed_
        Array.from(el.attributes).forEach(attr => {
          if (attr.name.startsWith('__processed_')) {
            el.removeAttribute(attr.name)
          }
        })
      })
    }

    // Ejecutar inmediatamente de forma síncrona
    removeProblematicAttributes()

    // Ejecutar en el siguiente tick del event loop
    setTimeout(removeProblematicAttributes, 0)
    
    // Ejecutar en múltiples intervalos
    const timeouts = [1, 10, 50, 100, 500, 1000, 2000]
    timeouts.forEach(delay => setTimeout(removeProblematicAttributes, delay))

    // Observer para detectar y eliminar atributos cuando se agregan
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          const target = mutation.target as Element
          const attrName = mutation.attributeName
          
          if (attrName === 'bis_skin_checked' ||
              attrName === 'bis_register' ||
              (attrName && attrName.startsWith('__processed_'))) {
            target.removeAttribute(attrName!)
          }
        }
      })
    })
    
    observer.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ['bis_skin_checked', 'bis_register', '__processed_']
    })

    // También observer para atributos que comienzan con __processed_
    const processedObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          const target = mutation.target as Element
          Array.from(target.attributes).forEach(attr => {
            if (attr.name.startsWith('__processed_')) {
              target.removeAttribute(attr.name)
            }
          })
        }
      })
    })
    
    processedObserver.observe(document.body, {
      attributes: true,
      subtree: true
    })

    // Limpiar observers al desmontar
    return () => {
      observer.disconnect()
      processedObserver.disconnect()
    }
  }, [])

  return (
    <>
      {children}
      <Analytics />
    </>
  )
}
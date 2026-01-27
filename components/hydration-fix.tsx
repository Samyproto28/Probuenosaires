"use client"

import { useEffect } from "react"

interface HydrationFixProps {
  children: React.ReactNode
}

export function HydrationFix({ children }: HydrationFixProps) {
  useEffect(() => {
    // Eliminar atributos bis_skin_checked que causan errores de hidratación
    const removeBisAttributes = () => {
      const elements = document.querySelectorAll('[bis_skin_checked]')
      elements.forEach((el) => {
        el.removeAttribute('bis_skin_checked')
      })
      
      // También eliminar otros atributos problemáticos
      const bisRegisteredElements = document.querySelectorAll('[bis_register]')
      bisRegisteredElements.forEach((el) => {
        el.removeAttribute('bis_register')
      })
      
      const processedElements = document.querySelectorAll('[__processed_')
      processedElements.forEach((el) => {
        // Eliminar atributos que comienzan con __processed_
        Array.from(el.attributes).forEach(attr => {
          if (attr.name.startsWith('__processed_')) {
            el.removeAttribute(attr.name)
          }
        })
      })
    }

    // Ejecutar inmediatamente y después de un delay
    removeBisAttributes()
    setTimeout(removeBisAttributes, 100)
    setTimeout(removeBisAttributes, 500)
    setTimeout(removeBisAttributes, 1000)
    
    // Observer para detectar y remover atributos cuando se agregan
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          const target = mutation.target as Element
          if (mutation.attributeName === 'bis_skin_checked' || 
              mutation.attributeName === 'bis_register' ||
              (mutation.attributeName && mutation.attributeName.startsWith('__processed_'))) {
            target.removeAttribute(mutation.attributeName!)
          }
        }
      })
    })
    
    observer.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ['bis_skin_checked', 'bis_register']
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
    
    return () => {
      observer.disconnect()
      processedObserver.disconnect()
    }
  }, [])

  return <>{children}</>
}
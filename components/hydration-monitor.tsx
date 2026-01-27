"use client"

import { useEffect } from "react"

export function HydrationMonitor() {
  useEffect(() => {
    console.log("=== MONITOR DE HIDRATACIÓN ===")
    
    // Verificar atributos problemáticos
    const checkProblematicAttributes = () => {
      const problematicAttrs = ['bis_skin_checked', 'bis_register', '__processed_']
      const results: Record<string, number> = {}
      
      problematicAttrs.forEach(attr => {
        if (attr === '__processed_') {
          // Atributos que comienzan con __processed_
          const elements = document.querySelectorAll('[__processed_]')
          results[attr] = elements.length
          if (elements.length > 0) {
            console.log(`Se encontraron ${elements.length} elementos con atributos ${attr}*`)
            elements.forEach((el, i) => {
              Array.from(el.attributes).forEach(attr => {
                if (attr.name.startsWith('__processed_')) {
                  console.log(`  Elemento ${i}: ${attr.name}="${attr.value}"`)
                }
              })
            })
          }
        } else {
          const elements = document.querySelectorAll(`[${attr}]`)
          results[attr] = elements.length
          if (elements.length > 0) {
            console.log(`Se encontraron ${elements.length} elementos con ${attr}`)
            elements.forEach((el, i) => {
              console.log(`  Elemento ${i}: ${el.tagName}.${el.className} ${attr}="${el.getAttribute(attr)}"`)
            })
          }
        }
      })
      
      return results
    }
    
    // Verificar inmediatamente
    const initialResults = checkProblematicAttributes()
    console.log("Resultados iniciales:", initialResults)
    
    // Verificar después de diferentes intervalos
    const timeouts = [100, 500, 1000, 2000, 5000]
    timeouts.forEach(delay => {
      setTimeout(() => {
        console.log(`=== Verificación después de ${delay}ms ===`)
        const results = checkProblematicAttributes()
        console.log("Resultados:", results)
      }, delay)
    })
    
    // Observer para cambios en el DOM
    const observer = new MutationObserver((mutations) => {
      let hasProblematicChanges = false
      
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          const attrName = mutation.attributeName
          if (attrName && (
            attrName === 'bis_skin_checked' || 
            attrName === 'bis_register' || 
            attrName.startsWith('__processed_')
          )) {
            hasProblematicChanges = true
            console.log("Cambio problemático detectado:", {
              element: (mutation.target as Element).tagName + '.' + (mutation.target as Element).className,
              attribute: attrName,
              value: (mutation.target as Element).getAttribute(attrName)
            })
          }
        }
      })
      
      if (hasProblematicChanges) {
        console.log("=== Se detectaron cambios problemáticos ===")
        checkProblematicAttributes()
      }
    })
    
    observer.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ['bis_skin_checked', 'bis_register']
    })
    
    // También observer para atributos __processed_
    const processedObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          const target = mutation.target as Element
          Array.from(target.attributes).forEach(attr => {
            if (attr.name.startsWith('__processed_')) {
              console.log("Atributo __processed_ detectado:", {
                element: target.tagName + '.' + target.className,
                attribute: attr.name,
                value: attr.value
              })
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

  return null
}
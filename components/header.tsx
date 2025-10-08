"use client"

import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "UVT", href: "#uvt" },
    { label: "Equipo", href: "#equipo" },
    { label: "Contacto", href: "#contacto" },
    { label: "Donaciones", href: "#donaciones" },
    { label: "Noticias", href: "#noticias" },
  ]

  return (
    <>
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+541143044266" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="h-4 w-4" />
                <span>(011) 4304-4266</span>
              </a>
              <a
                href="mailto:info@probuenosaires.org"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Mail className="h-4 w-4" />
                <span>info@probuenosaires.org</span>
              </a>
            </div>
            <div className="text-xs">Organización sin fines de lucro | CUIT: 30-70807514-7</div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-3">
              <img
                src="/placeholder.svg?height=50&width=50"
                alt="Fundación Pro Buenos Aires"
                className="w-10 h-10 lg:w-12 lg:h-12"
              />
              <div className="hidden sm:block">
                <div className="text-base lg:text-lg font-bold leading-tight text-balance">
                  <span className="text-primary">Fundación</span>
                  <br />
                  <span className="text-foreground">ProBuenosAires</span>
                </div>
                <div className="text-xs text-muted-foreground">Desde 1998 trabajando por Argentina</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-3 text-base font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  )
}

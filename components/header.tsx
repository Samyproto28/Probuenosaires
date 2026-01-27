"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useHashNavigation } from "@/hooks/use-hash-navigation"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { navigateWithHash } = useHashNavigation()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Inicio", href: "/inicio" },
    { label: "Programas", href: "/programas" },
    { label: "Donaciones", href: "/inicio#donaciones", isHashLink: true },
    { label: "Institucional", href: "/institucional" },
    { label: "Equipo", href: "/equipo" },
    { label: "Contacto", href: "/contacto" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1a2744] text-white py-2.5 relative z-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex items-center gap-6">
              <a
                href="tel:+541143044266"
                className="flex items-center gap-2 hover:text-[#c9a962] transition-colors duration-300"
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="font-medium">(011) 4304-4266</span>
              </a>
              <a
                href="mailto:info@probuenosaires.org"
                className="flex items-center gap-2 hover:text-[#c9a962] transition-colors duration-300"
              >
                <Mail className="h-3.5 w-3.5" />
                <span className="font-medium">info@probuenosaires.org</span>
              </a>
            </div>
            <div className="flex items-center gap-4 text-white/70 text-xs">
              <span>Organización sin fines de lucro</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>CUIT: 30-70807514-7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/[0.03] border-b border-[#e8e4df]"
            : "bg-white/80 backdrop-blur-md border-b border-transparent"
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-18 lg:h-20">
            {/* Logo */}
            <Link href="/inicio" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-[#1a2744] to-[#3d5a80] flex items-center justify-center shadow-lg shadow-[#1a2744]/20 group-hover:shadow-[#1a2744]/30 transition-shadow">
                  <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-playfair)" }}>P</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#c9a962] border-2 border-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-base lg:text-lg font-semibold leading-tight">
                  <span className="text-[#1a2744]">Fundación</span>
                  <br />
                  <span className="text-[#3d5a80]">Pro Buenos Aires</span>
                </div>
                <div className="text-[11px] text-muted-foreground font-medium tracking-wide mt-0.5">
                  Desde 1998 • Argentina
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <div key={item.href}>
                    {item.isHashLink ? (
                      <button
                        onClick={() => navigateWithHash(item.href)}
                        className={cn(
                          "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                          "text-[#1a2744]/70 hover:text-[#1a2744] hover:bg-[#1a2744]/5"
                        )}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative",
                          isActive
                            ? "text-[#1a2744] bg-[#1a2744]/5"
                            : "text-[#1a2744]/70 hover:text-[#1a2744] hover:bg-[#1a2744]/5"
                        )}
                      >
                        {item.label}
                        {isActive && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#c9a962] rounded-full"
                          />
                        )}
                      </Link>
                    )}
                  </div>
                )
              })}


            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-lg hover:bg-[#1a2744]/5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5 text-[#1a2744]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5 text-[#1a2744]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="lg:hidden overflow-hidden"
              >
                <div className="py-4 space-y-1 border-t border-[#e8e4df]">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.isHashLink ? (
                        <button
                          onClick={() => {
                            navigateWithHash(item.href)
                            setIsMenuOpen(false)
                          }}
                          className="block w-full text-left py-3 px-4 text-base font-medium text-[#1a2744]/80 hover:text-[#1a2744] hover:bg-[#1a2744]/5 rounded-lg transition-colors"
                        >
                          {item.label}
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className={cn(
                            "block py-3 px-4 text-base font-medium rounded-lg transition-colors",
                            pathname === item.href
                              ? "text-[#1a2744] bg-[#1a2744]/5"
                              : "text-[#1a2744]/80 hover:text-[#1a2744] hover:bg-[#1a2744]/5"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}

                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  )
}

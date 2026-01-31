"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useHashNavigation } from "@/hooks/use-hash-navigation"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

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
      <div className="bg-[#111269] text-white py-2.5 relative z-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex items-center gap-6">
              <a
                href="tel:+541143044266"
                className="flex items-center gap-2 hover:text-[#8dc2ff] transition-colors duration-300"
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="font-medium">(011) 4304-4266</span>
              </a>
              <a
                href="mailto:info@probuenosaires.org"
                className="flex items-center gap-2 hover:text-[#8dc2ff] transition-colors duration-300"
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
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/[0.03] border-b border-[#e2e8f0]"
            : "bg-white/80 backdrop-blur-md border-b border-transparent"
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-18 lg:h-20">
            {/* Logo */}
            <Link href="/inicio" className="flex items-center gap-3 lg:gap-4 group">
              <div className="relative">
                <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/logo.png"
                    alt="Fundación Pro Buenos Aires"
                    width={200}
                    height={200}
                    className="object-contain w-full h-full"
                    priority
                    sizes="(max-width: 768px) 100px, 200px"
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-base lg:text-lg font-bold leading-tight flex flex-col">
                  <span className="text-[#111269] font-playfair tracking-tight">Fundación</span>
                  <span className="text-[#89abe6] font-playfair tracking-tight">Pro Buenos Aires</span>
                </div>
                <div className="text-[10px] lg:text-[11px] text-muted-foreground font-semibold tracking-[0.1em] uppercase mt-0.5 opacity-80">
                  Desarrollo Sustentable • Arg
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
                          "text-[#111269]/70 hover:text-[#111269] hover:bg-[#111269]/5"
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
                            ? "text-[#111269] bg-[#111269]/5"
                            : "text-[#111269]/70 hover:text-[#111269] hover:bg-[#111269]/5"
                        )}
                      >
                        {item.label}
                        {isActive && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#8dc2ff] rounded-full"
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
              className="lg:hidden rounded-lg hover:bg-[#111269]/5"
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
                    <X className="h-5 w-5 text-[#111269]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5 text-[#111269]" />
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
                <div className="py-4 space-y-1 border-t border-[#e2e8f0]">
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
                          className="block w-full text-left py-3 px-4 text-base font-medium text-[#111269]/80 hover:text-[#111269] hover:bg-[#111269]/5 rounded-lg transition-colors"
                        >
                          {item.label}
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className={cn(
                            "block py-3 px-4 text-base font-medium rounded-lg transition-colors",
                            pathname === item.href
                              ? "text-[#111269] bg-[#111269]/5"
                              : "text-[#111269]/80 hover:text-[#111269] hover:bg-[#111269]/5"
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

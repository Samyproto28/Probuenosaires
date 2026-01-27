"use client"

import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Heart } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: "-50px" })

  const footerLinks = {
    "Sobre Nosotros": [
      { label: "Quiénes somos", href: "#nosotros" },
      { label: "Misión y Visión", href: "#nosotros" },
      { label: "Equipo", href: "/equipo" },
      { label: "Memoria y Balance", href: "#" },
    ],
    Servicios: [
      { label: "Asistencia UVT", href: "#uvt" },
      { label: "Intermediación de Empleo", href: "#empleo" },
      { label: "Capacitación CT4.0", href: "#capacitacion" },
      { label: "Consultoría", href: "#" },
    ],
    Recursos: [
      { label: "Noticias", href: "#noticias" },
      { label: "Eventos", href: "#" },
      { label: "Publicaciones", href: "#" },
      { label: "Preguntas Frecuentes", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/probuenosaires", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/fprobaires/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/fundacion-pro-buenos-aires/", label: "LinkedIn" },
  ]

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#1a2744] text-white overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201, 169, 98, 0.4) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(61, 90, 128, 0.5) 0%, transparent 70%)",
        }}
      />

      {/* Top border gradient */}
      <div className="h-1 bg-gradient-to-r from-[#1a2744] via-[#c9a962] to-[#1a2744]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <div className="flex items-center gap-4 mb-6 group">
                <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center shadow-lg shadow-black/20 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/logo.png"
                    alt="Logo Fundación Pro Buenos Aires"
                    width={100}
                    height={100}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <div
                    className="text-xl font-bold leading-tight"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Fundación
                    <br />
                    Pro Buenos Aires
                  </div>
                </div>
              </div>

              <p className="text-white/60 mb-6 leading-relaxed max-w-sm">
                Organización sin fines de lucro trabajando por el desarrollo sustentable de Argentina desde 1998.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#c9a962]" />
                  <span className="text-white/70">
                    Ruta 36 Nº 1354, entre calles 13 y 14<br />
                    Cruce de Florencio Varela, Berazategui<br />
                    Buenos Aires, Argentina
                  </span>
                </div>
                <a
                  href="tel:+541143044266"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-[#c9a962] transition-colors group"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 text-[#c9a962]" />
                  <span className="group-hover:underline">(011) 4304-4266</span>
                </a>
                <a
                  href="mailto:info@probuenosaires.org"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-[#c9a962] transition-colors group"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 text-[#c9a962]" />
                  <span className="group-hover:underline">info@probuenosaires.org</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    className="w-10 h-10 bg-white/5 hover:bg-[#c9a962]/20 border border-white/10 hover:border-[#c9a962]/30 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-4 h-4 text-white/70 hover:text-[#c9a962]" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links], columnIndex) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + columnIndex * 0.1, duration: 0.6 }}
              >
                <h3 className="font-semibold mb-5 text-lg text-white/90">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/50 hover:text-[#c9a962] transition-colors text-sm flex items-center gap-1 group"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CUIT Badge */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/40">
            <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <strong className="text-white/60">CUIT:</strong> 30-70807514-7
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <span>Personería Jurídica otorgada por la IGJ</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-white/40 flex items-center gap-1">
              © {currentYear} Fundación Pro Buenos Aires. Hecho con
              <Heart className="w-3.5 h-3.5 text-[#c9a962] mx-1" />
              en Argentina.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-white/40 hover:text-[#c9a962] transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                href="#"
                className="text-white/40 hover:text-[#c9a962] transition-colors"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

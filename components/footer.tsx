import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Heart, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MotionViewport } from "@/components/ui/motion-viewport"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    "Sobre Nosotros": [
      { label: "Quiénes somos", href: "/institucional" },
      { label: "Misión y Visión", href: "/institucional" },
      { label: "Equipo", href: "/equipo" },
      { label: "Objetivos e Historia", href: "/institucional" },
    ],
    Programas: [
      { label: "Programa Vinculando", href: "/programas" },
      { label: "Radio Empresaria", href: "/programas" },
      { label: "Encadenar y Comex", href: "/programas" },
      { label: "Gestión Pymes", href: "/programas" },
    ],
    Novedades: [
      { label: "Últimas noticias", href: "/novedades" },
      { label: "Eventos", href: "/novedades" },
      { label: "Publicaciones", href: "/novedades" },
      { label: "Contacto", href: "/contacto" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/probuenosaires", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/fprobaires/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/fundacion-pro-buenos-aires/", label: "LinkedIn" },
  ]

  return (
    <footer className="relative bg-[#111269] text-white overflow-hidden">
      {/* Decorative gradient orbs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(141, 194, 255, 0.4) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(137, 171, 230, 0.5) 0%, transparent 70%)",
        }}
      />

      {/* Top border gradient */}
      <div className="h-1 bg-gradient-to-r from-[#111269] via-[#8dc2ff] to-[#111269]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Column */}
            <MotionViewport className="lg:col-span-2" initial={{ opacity: 0, y: 20 }}>
              {/* Logo */}
              <div className="flex items-center gap-4 mb-6 group">
                <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center shadow-lg shadow-black/20 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/logo.png"
                    alt="Logo Fundación Pro Buenos Aires"
                    width={100}
                    height={100}
                    className="object-contain w-full h-full"
                    sizes="(max-width: 768px) 64px, 100px"
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
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#8dc2ff]" aria-hidden="true" />
                  <span className="text-white/70">
                    Venezuela Nº 2543<br />
                    Quilmes Oeste<br />
                    Buenos Aires, Argentina
                  </span>
                </div>
                <a
                  href="tel:+541143044266"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-[#8dc2ff] transition-colors group"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 text-[#8dc2ff]" aria-hidden="true" />
                  <span className="group-hover:underline">(011) 4304-4266</span>
                </a>
                <a
                  href="https://wa.me/5491141899250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-[#8dc2ff] transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0 text-[#8dc2ff]" aria-hidden="true" />
                  <span className="group-hover:underline">+54 9 11 4189-9250</span>
                </a>
                <a
                  href="mailto:info@probuenosaires.org"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-[#8dc2ff] transition-colors group"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 text-[#8dc2ff]" aria-hidden="true" />
                  <span className="group-hover:underline">info@probuenosaires.org</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <MotionViewport
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    delay={0.3 + index * 0.1}
                    className="w-10 h-10 bg-white/5 hover:bg-[#8dc2ff]/20 border border-white/10 hover:border-[#8dc2ff]/30 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <social.icon className="w-4 h-4 text-white/70 hover:text-[#8dc2ff]" aria-hidden="true" />
                    </a>
                  </MotionViewport>
                ))}
              </div>
            </MotionViewport>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links], columnIndex) => (
              <MotionViewport
                key={title}
                initial={{ opacity: 0, y: 20 }}
                delay={0.2 + columnIndex * 0.1}
                className="flex flex-col"
              >
                <h3 className="font-semibold mb-5 text-lg text-white/90">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/50 hover:text-[#8dc2ff] transition-colors text-sm flex items-center gap-1 group"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </MotionViewport>
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
              <Heart className="w-3.5 h-3.5 text-[#8dc2ff] mx-1" aria-hidden="true" />
              en Argentina.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-white/40 hover:text-[#8dc2ff] transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                href="#"
                className="text-white/40 hover:text-[#8dc2ff] transition-colors"
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

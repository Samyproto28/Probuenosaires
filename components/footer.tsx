import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    "Sobre Nosotros": [
      { label: "Quiénes somos", href: "#nosotros" },
      { label: "Misión y Visión", href: "#nosotros" },
      { label: "Equipo", href: "#equipo" },
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
    <footer className="bg-[#272d64] text-white py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/placeholder.svg?height=48&width=48" alt="Fundación Pro Buenos Aires" className="w-12 h-12" />
              <div className="text-xl font-bold">
                Fundación
                <br />
                Pro Buenos Aires
              </div>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed max-w-sm">
              Organización sin fines de lucro trabajando por el desarrollo sustentable de Argentina desde 1998.
            </p>

            <div className="space-y-3 mb-6 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Ruta 36 Nº 1354, entre calles 13 y 14, Cruce de Florencio Varela, Berazategui, Buenos Aires, Argentina</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+541143044266" className="hover:underline">
                  (011) 4304-4266
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@probuenosaires.org" className="hover:underline">
                  info@probuenosaires.org
                </a>
              </div>
              <div className="pt-2 border-t border-white/20">
                <strong>CUIT:</strong> 30-70807514-7
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-lg transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold mb-4 text-lg">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/80">
          <p>© {currentYear} Fundación Pro Buenos Aires. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send, Building2 } from "lucide-react"
import { motion, useInView } from "framer-motion"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: (
        <>
          Ruta 36 Nº 1354, entre calles 13 y 14<br />
          Cruce de Florencio Varela, Berazategui<br />
          Buenos Aires, Argentina
        </>
      ),
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: (
        <div className="space-y-1">
          <a href="tel:+541143044266" className="block hover:text-[#c9a962] transition-colors">
            (011) 4304-4266
          </a>
          <a href="tel:+541152634256" className="block hover:text-[#c9a962] transition-colors">
            (011) 5263-4256
          </a>
        </div>
      ),
    },
    {
      icon: Mail,
      title: "Email",
      content: (
        <a href="mailto:info@probuenosaires.org" className="hover:text-[#c9a962] transition-colors">
          info@probuenosaires.org
        </a>
      ),
    },
    {
      icon: Clock,
      title: "Horario de Atención",
      content: (
        <>
          Lunes a Viernes: 9:00 - 18:00 hs<br />
          Sábados y Domingos: Cerrado
        </>
      ),
    },
  ]

  return (
    <section id="contacto" className="py-24 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a2744]" />

      {/* Decorative gradient orbs */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] opacity-15"
        style={{ background: "radial-gradient(circle, rgba(61, 90, 128, 0.5) 0%, transparent 60%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-10"
        style={{ background: "radial-gradient(circle, rgba(201, 169, 98, 0.4) 0%, transparent 60%)" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#c9a962] text-sm font-semibold tracking-wide mb-6">
            <Mail className="w-4 h-4" />
            CONTACTO
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Comunicate con{" "}
            <span className="bg-gradient-to-r from-[#c9a962] to-[#e0c77d] bg-clip-text text-transparent">
              Nosotros
            </span>
          </h2>

          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            ¿Tenés un proyecto en mente? ¿Querés ser parte de nuestros programas? Conectemos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <h3
              className="text-2xl font-bold text-white mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Información de contacto
            </h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a962]/20 group-hover:border-[#c9a962]/30 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">{item.title}</div>
                    <div className="text-white/60 text-sm leading-relaxed">
                      {item.content}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Institutional Data Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-8 p-6 bg-white/5 border border-white/10 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-5 h-5 text-[#c9a962]" />
                <h4 className="font-semibold text-white">Datos institucionales</h4>
              </div>
              <div className="space-y-2 text-sm text-white/60">
                <p><strong className="text-white/80">CUIT:</strong> 30-70807514-7</p>
                <p><strong className="text-white/80">Personería Jurídica:</strong> Otorgada por IGJ</p>
                <p><strong className="text-white/80">Organización:</strong> Sin fines de lucro</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl">
              <h3
                className="text-2xl font-bold text-[#1a2744] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Envianos tu consulta
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1a2744]/80 mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 rounded-xl border-[#e8e4df] focus:border-[#c9a962] focus:ring-[#c9a962]/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1a2744]/80 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 rounded-xl border-[#e8e4df] focus:border-[#c9a962] focus:ring-[#c9a962]/20"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#1a2744]/80 mb-2">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+54 11 1234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12 rounded-xl border-[#e8e4df] focus:border-[#c9a962] focus:ring-[#c9a962]/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#1a2744]/80 mb-2">
                      Asunto *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="¿En qué podemos ayudarte?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="h-12 rounded-xl border-[#e8e4df] focus:border-[#c9a962] focus:ring-[#c9a962]/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1a2744]/80 mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Contanos sobre tu consulta o proyecto..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="rounded-xl border-[#e8e4df] focus:border-[#c9a962] focus:ring-[#c9a962]/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 bg-gradient-to-r from-[#1a2744] to-[#3d5a80] hover:from-[#243352] hover:to-[#4a6a9a] text-white rounded-xl font-semibold group transition-all duration-300"
                >
                  <span>Enviar mensaje</span>
                  <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-xs text-[#1a2744]/50 text-center">
                  Al enviar este formulario, aceptás nuestra política de privacidad.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

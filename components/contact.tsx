"use client"

import type React from "react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Building2, MessageCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"

export function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección Principal",
      content: (
        <>
          Piedras 113 piso 5 of 1<br />
          CABA, Argentina
        </>
      ),
    },
    {
      icon: MapPin,
      title: "Sede Quilmes",
      content: (
        <>
          Venezuela Nº 2543<br />
          Quilmes Oeste<br />
          Buenos Aires, Argentina
        </>
      ),
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: (
        <div className="space-y-1">
          <div>(011) 5258-0226</div>
        </div>
      ),
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@probuenosaires.org",
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
      <div className="absolute inset-0 bg-[#111269]" />

      {/* Decorative gradient orbs */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] opacity-15"
        style={{ background: "radial-gradient(circle, rgba(137, 171, 230, 0.5) 0%, transparent 60%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-10"
        style={{ background: "radial-gradient(circle, rgba(141, 194, 255, 0.4) 0%, transparent 60%)" }}
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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#8dc2ff] text-sm font-semibold tracking-wide mb-6">
            <Mail className="w-4 h-4" />
            CONTACTO
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Comunicate con{" "}
            <span className="bg-gradient-to-r from-[#8dc2ff] to-[#ffffff] bg-clip-text text-transparent">
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
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#8dc2ff]/20 group-hover:border-[#8dc2ff]/30 transition-[background-color,border-color] duration-300">
                    <item.icon className="w-5 h-5 text-[#8dc2ff]" aria-hidden="true" />
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
                <Building2 className="w-5 h-5 text-[#8dc2ff]" aria-hidden="true" />
                <h4 className="font-semibold text-white">Datos Institucionales</h4>
              </div>
              <div className="space-y-2 text-sm text-white/60">
                <p><strong className="text-white/80">CUIT:</strong> 30-69894716-7</p>
                <p><strong className="text-white/80">Personería Jurídica:</strong> Otorgada por IGJ (1649721)</p>
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
                className="text-2xl font-bold text-[#111269] mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Envianos tu consulta
              </h3>
              
              <p className="text-[#111269]/80 mb-8 leading-relaxed">
                Elegí el medio que te resulte más cómodo para ponerte en contacto directo con nuestro equipo.
              </p>

              <div className="flex flex-col gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full h-14 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20ba5a] hover:to-[#0e6e62] text-white rounded-xl font-semibold group transition-[background-color,transform] duration-300 shadow-lg shadow-green-500/20"
                >
                  <a href="https://wa.me/5491141899250" target="_blank" rel="noopener noreferrer">
                    <span>Chatear por WhatsApp</span>
                    <MessageCircle className="ml-2 w-5 h-5 transition-transform group-hover:scale-110" aria-hidden="true" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="w-full h-14 bg-[#111269] hover:bg-[#1a2754] text-white rounded-xl font-semibold group transition-[background-color,transform] duration-300"
                >
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@probuenosaires.org" target="_blank" rel="noopener noreferrer">
                    <span>Escribirnos por Correo</span>
                    <Mail className="ml-2 w-5 h-5 transition-transform group-hover:scale-110" aria-hidden="true" />
                  </a>
                </Button>
              </div>

              <p className="text-xs text-[#111269]/50 text-center mt-6">
                Al contactarte, aceptás nuestra{" "}
                <a href="/politica-de-privacidad" className="underline hover:text-[#8dc2ff] transition-colors">
                  política de privacidad
                </a>.
              </p>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  )
}

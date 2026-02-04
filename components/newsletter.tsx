"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, MessageSquare, ArrowRight, Send } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] to-[#f0f7ff]" />

      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e2e8f0] to-transparent"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Newsletter Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#111269] via-[#1a2754] to-[#111269]" />

            {/* Decorative gradient orb */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 opacity-20"
              style={{
                background: "radial-gradient(circle, rgba(141, 194, 255, 0.5) 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10 p-10 lg:p-12">
              <div className="w-14 h-14 bg-gradient-to-br from-[#8dc2ff] to-[#89abe6] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#8dc2ff]/20">
                <Mail className="w-7 h-7 text-[#111269]" aria-hidden="true" />
              </div>

              <h2
                className="text-2xl lg:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Suscribite a nuestro{" "}
                <span className="text-[#8dc2ff]">Newsletter</span>
              </h2>

              <p className="text-white/60 mb-8 leading-relaxed">
                Recibí noticias, videos y novedades sobre nuestro trabajo y cómo podés ser parte del cambio.
              </p>

              <form className="space-y-4">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    aria-label="Correo electrónico para suscripción"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 backdrop-blur-sm text-white placeholder:text-white/40 h-14 border-white/10 focus:border-[#8dc2ff]/50 rounded-xl px-5 pr-12"
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" aria-hidden="true" />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#8dc2ff] to-[#89abe6] text-[#111269] hover:from-[#e0efff] hover:to-[#8dc2ff] h-14 font-semibold rounded-xl group shadow-lg shadow-[#8dc2ff]/20 transition-[background-color,transform,box-shadow] duration-300"
                >
                  <span>Suscribirme</span>
                  <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Button>
              </form>

              <p className="text-white/30 text-xs mt-4">
                No spam. Podés desuscribirte cuando quieras.
              </p>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl bg-white border border-[#e2e8f0] shadow-lg shadow-black/[0.03]"
          >
            {/* Decorative elements */}
            <div
              className="absolute -bottom-20 -right-20 w-64 h-64 opacity-[0.03]"
              style={{
                background: "radial-gradient(circle, #111269 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10 p-10 lg:p-12">
              <div className="w-14 h-14 bg-[#111269]/5 rounded-2xl flex items-center justify-center mb-6">
                <MessageSquare className="w-7 h-7 text-[#111269]" aria-hidden="true" />
              </div>

              <h2
                className="text-2xl lg:text-3xl font-bold mb-4 text-[#111269]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                ¿Tenés alguna{" "}
                <span className="text-[#89abe6]">consulta</span>?
              </h2>

              <p className="text-[#111269]/60 mb-8 leading-relaxed">
                Estamos para ayudarte. Contactanos por teléfono, email o WhatsApp.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-[#111269]/70">
                  <div className="w-10 h-10 rounded-lg bg-[#111269]/5 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#111269]">📞</span>
                  </div>
                  <span className="font-medium">(011) 4304-4266</span>
                </div>
                <div className="flex items-center gap-3 text-[#111269]/70">
                  <div className="w-10 h-10 rounded-lg bg-[#111269]/5 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#111269]">💬</span>
                  </div>
                  <span className="font-medium">WhatsApp disponible</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-[#111269] hover:bg-[#1a2754] text-white h-14 font-semibold rounded-xl group transition-[background-color,transform] duration-300"
              >
                <span>Enviar Mensaje</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

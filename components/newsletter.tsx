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
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7f5f3] to-[#fdfcfb]" />

      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e8e4df] to-transparent"
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
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a2744] via-[#243352] to-[#1a2744]" />

            {/* Decorative gradient orb */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 opacity-20"
              style={{
                background: "radial-gradient(circle, rgba(201, 169, 98, 0.5) 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10 p-10 lg:p-12">
              <div className="w-14 h-14 bg-gradient-to-br from-[#c9a962] to-[#b8963f] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#c9a962]/20">
                <Mail className="w-7 h-7 text-[#1a2744]" />
              </div>

              <h2
                className="text-2xl lg:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Suscribite a nuestro{" "}
                <span className="text-[#c9a962]">Newsletter</span>
              </h2>

              <p className="text-white/60 mb-8 leading-relaxed">
                Recibí noticias, videos y novedades sobre nuestro trabajo y cómo podés ser parte del cambio.
              </p>

              <form className="space-y-4">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 backdrop-blur-sm text-white placeholder:text-white/40 h-14 border-white/10 focus:border-[#c9a962]/50 rounded-xl px-5 pr-12"
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#c9a962] to-[#b8963f] text-[#1a2744] hover:from-[#d4b874] hover:to-[#c9a962] h-14 font-semibold rounded-xl group shadow-lg shadow-[#c9a962]/20 transition-all duration-300"
                >
                  <span>Suscribirme</span>
                  <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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
            className="relative overflow-hidden rounded-2xl bg-white border border-[#e8e4df] shadow-lg shadow-black/[0.03]"
          >
            {/* Decorative elements */}
            <div
              className="absolute -bottom-20 -right-20 w-64 h-64 opacity-[0.03]"
              style={{
                background: "radial-gradient(circle, #1a2744 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10 p-10 lg:p-12">
              <div className="w-14 h-14 bg-[#1a2744]/5 rounded-2xl flex items-center justify-center mb-6">
                <MessageSquare className="w-7 h-7 text-[#1a2744]" />
              </div>

              <h2
                className="text-2xl lg:text-3xl font-bold mb-4 text-[#1a2744]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                ¿Tenés alguna{" "}
                <span className="text-[#3d5a80]">consulta</span>?
              </h2>

              <p className="text-[#1a2744]/60 mb-8 leading-relaxed">
                Estamos para ayudarte. Contactanos por teléfono, email o WhatsApp.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-[#1a2744]/70">
                  <div className="w-10 h-10 rounded-lg bg-[#1a2744]/5 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#1a2744]">📞</span>
                  </div>
                  <span className="font-medium">(011) 4304-4266</span>
                </div>
                <div className="flex items-center gap-3 text-[#1a2744]/70">
                  <div className="w-10 h-10 rounded-lg bg-[#1a2744]/5 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#1a2744]">💬</span>
                  </div>
                  <span className="font-medium">WhatsApp disponible</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-[#1a2744] hover:bg-[#243352] text-white h-14 font-semibold rounded-xl group transition-all duration-300"
              >
                <span>Enviar mensaje</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

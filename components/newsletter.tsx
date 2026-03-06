"use client"

import { Button } from "@/components/ui/button"
import { Mail, Send } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Newsletter() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] to-[#f0f7ff]" />

      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e2e8f0] to-transparent"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex justify-center">
        <div className="max-w-2xl w-full">
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

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#8dc2ff] to-[#89abe6] text-[#111269] hover:from-[#e0efff] hover:to-[#8dc2ff] h-14 font-semibold rounded-xl group shadow-lg shadow-[#8dc2ff]/20 transition-[background-color,transform,box-shadow] duration-300"
                >
                  <a href="mailto:info@probuenosaires.org?subject=Suscripción%20al%20Newsletter&body=Hola%2C%20quisiera%20suscribirme%20al%20newsletter%20de%20la%20fundación.">
                    <span>Suscribirme por Correo</span>
                    <Mail className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#111269] hover:bg-[#1a2754] border border-white/20 text-white h-14 font-semibold rounded-xl group transition-all duration-300"
                >
                  <a href="https://wa.me/5491141899250?text=Hola%2C%20quisiera%20suscribirme%20al%20newsletter." target="_blank" rel="noopener noreferrer">
                    <span>Suscribirme por WhatsApp</span>
                    <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </Button>
              </div>

              <p className="text-white/30 text-xs mt-6">
                No spam. Podés desuscribirte cuando quieras.{" "}
                <a href="/politica-de-privacidad" className="underline hover:text-white/50 transition-colors">
                  Política de privacidad
                </a>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

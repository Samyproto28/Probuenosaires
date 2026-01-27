"use client"

import { Button } from "@/components/ui/button"
import { Handshake, ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Partners() {
  const partners = [
    { name: "SEPYME", abbr: "SEP" },
    { name: "IINCA", abbr: "IIN" },
    { name: "Ministerio de Desarrollo Productivo", abbr: "MDP" },
    { name: "ONU Argentina", abbr: "ONU" },
    { name: "CAC", abbr: "CAC" },
    { name: "CAME", abbr: "CAM" },
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdfcfb] via-[#f7f5f3] to-[#fdfcfb]" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e8e4df] to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a962]/10 text-[#b8963f] text-sm font-semibold tracking-wide mb-6">
            <Handshake className="w-4 h-4" />
            NUESTROS ALIADOS
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Alianzas estratégicas
          </h2>

          <p className="text-lg text-[#1a2744]/60 max-w-2xl mx-auto">
            Empresas y organizaciones que nos acompañan en nuestra misión de desarrollo sustentable
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
              className="group"
            >
              <div className="bg-white p-6 lg:p-8 rounded-2xl border border-[#e8e4df] hover:border-[#c9a962]/30 hover:shadow-lg hover:shadow-[#c9a962]/5 transition-all duration-300 flex flex-col items-center justify-center aspect-square">
                {/* Placeholder logo - using abbreviation */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1a2744]/5 to-[#3d5a80]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold text-[#1a2744]/60 group-hover:text-[#1a2744] transition-colors">
                    {partner.abbr}
                  </span>
                </div>
                <span className="text-xs text-[#1a2744]/50 text-center font-medium">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2744] via-[#243352] to-[#3d5a80]" />

          {/* Decorative elements */}
          <div
            className="absolute top-0 right-0 w-96 h-96 opacity-15"
            style={{ background: "radial-gradient(circle, rgba(201, 169, 98, 0.5) 0%, transparent 60%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 opacity-10"
            style={{ background: "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 60%)" }}
          />

          {/* Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.1) 60%, transparent 60%),
                linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.1) 60%, transparent 60%)
              `,
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3
                className="text-3xl lg:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                ¿Querés ser parte de nuestra{" "}
                <span className="text-[#c9a962]">red de aliados</span>?
              </h3>
              <p className="text-white/60 text-lg max-w-2xl">
                Sumate y ayudanos a construir un futuro mejor para Argentina.
                Juntos podemos generar un impacto positivo en miles de vidas.
              </p>
            </div>

            <Button
              size="lg"
              className="group bg-gradient-to-r from-[#c9a962] to-[#b8963f] text-[#1a2744] hover:from-[#d4b874] hover:to-[#c9a962] h-14 px-10 font-semibold rounded-xl shadow-lg shadow-[#c9a962]/20 transition-all duration-300 hover:scale-[1.02] flex-shrink-0"
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span>Conocé cómo sumarte</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

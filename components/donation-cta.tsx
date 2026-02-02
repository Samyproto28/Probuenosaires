"use client"

import { Button } from "@/components/ui/button"
import { Heart, ArrowRight, Sparkles } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function DonationCTA() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="donaciones" className="py-24 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-[#ffffff]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#111269]/10"
        >
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#111269] via-[#1a2754] to-[#111269]" />

          {/* Decorative elements */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(141, 194, 255, 0.5) 0%, transparent 60%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-15"
            style={{
              background: "radial-gradient(circle, rgba(137, 171, 230, 0.6) 0%, transparent 60%)",
            }}
          />

          {/* Pattern overlay */}
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

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 p-10 lg:p-16">
            {/* Content Side */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-[#8dc2ff] text-sm font-semibold tracking-wide mb-6">
                  <Heart className="w-4 h-4" />
                  <span>HACÉ TU APORTE</span>
                </div>

                <h2
                  className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Tu donación{" "}
                  <span className="bg-gradient-to-r from-[#8dc2ff] to-[#ffffff] bg-clip-text text-transparent">
                    transforma vidas
                  </span>
                </h2>

                <p className="text-lg lg:text-xl text-white/70 mb-4 leading-relaxed max-w-lg">
                  Fortalecemos a toda una generación joven, desarrollando sus habilidades y creando oportunidades reales de crecimiento.
                </p>

                <p className="text-base text-white/50 mb-8">
                  Cada aporte, sin importar el monto, hace la diferencia en la vida de alguien.
                </p>

                {/* Donation options */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {["$1.000", "$5.000", "$10.000", "Otro monto"].map((amount) => (
                    <button
                      key={amount}
                      className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-[#8dc2ff]/40 hover:text-white transition-all duration-300 text-sm font-medium"
                    >
                      {amount}
                    </button>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-[#8dc2ff] to-[#89abe6] text-[#111269] hover:from-[#e0efff] hover:to-[#8dc2ff] h-14 px-10 text-base font-semibold w-fit shadow-lg shadow-[#8dc2ff]/20 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                  asChild
                >
                  <a href="https://link.mercadopago.com.ar/probaires" target="_blank" rel="noopener noreferrer">
                    <Heart className="mr-2 h-5 w-5" />
                    Quiero donar
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Stats/Impact Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-[#8dc2ff]" />
                  <span className="text-white/60 text-sm font-medium">IMPACTO DE TU DONACIÓN</span>
                </div>

                <div className="space-y-6">
                  {[
                    { amount: "$1.000", impact: "Material didáctico para un estudiante" },
                    { amount: "$5.000", impact: "Capacitación completa en habilidades digitales" },
                    { amount: "$10.000", impact: "Apoyo integral a un emprendedor" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-20 text-lg font-bold text-[#8dc2ff]">
                        {item.amount}
                      </div>
                      <div className="flex-1">
                        <div className="w-full h-1.5 bg-white/10 rounded-full mb-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${(i + 1) * 33}%` } : {}}
                            transition={{ delay: 0.6 + i * 0.2, duration: 0.8 }}
                            className="h-full bg-gradient-to-r from-[#8dc2ff] to-[#ffffff] rounded-full"
                          />
                        </div>
                        <p className="text-white/60 text-sm">{item.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white/40 text-xs leading-relaxed">
                    Todas las donaciones son deducibles de impuestos. Recibís un comprobante oficial de la fundación.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

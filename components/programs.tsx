"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Target, TrendingUp, Radio, Globe } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Programs() {
  const programs = [
    {
      icon: TrendingUp,
      title: "Proba Comex",
      description:
        "Programa integral de asistencia en Comercio Exterior y Misiones Comerciales. Brindamos capacitación, asesoramiento técnico y acompañamiento a empresas que buscan expandirse a mercados internacionales.",
      impact: "150+",
      impactLabel: "empresas exportadoras asistidas",
      gradient: "from-[#1a2744] to-[#3d5a80]",
      lightGradient: "from-[#1a2744]/5 to-[#3d5a80]/5",
    },
    {
      icon: Target,
      title: "Pymes Saludables",
      description:
        "Alianza estratégica con IINCA para impulsar el desarrollo productivo y la competitividad de pequeñas y medianas empresas argentinas. Incluye diagnóstico empresarial y planes de mejora.",
      impact: "200+",
      impactLabel: "PyMEs fortalecidas",
      gradient: "from-[#3d5a80] to-[#5a7ca8]",
      lightGradient: "from-[#3d5a80]/5 to-[#5a7ca8]/5",
    },
    {
      icon: Radio,
      title: "Radio Empresaria",
      description:
        "Plataforma de comunicación dedicada a visibilizar la realidad de las Cadenas de Valor argentinas. Un espacio para compartir experiencias y buenas prácticas.",
      impact: "50+",
      impactLabel: "episodios publicados",
      gradient: "from-[#c9a962] to-[#b8963f]",
      lightGradient: "from-[#c9a962]/5 to-[#b8963f]/5",
    },
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="programas" className="relative py-24 lg:py-32 overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7f5f3] via-[#fdfcfb] to-[#f7f5f3]" />

      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e8e4df] to-transparent"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#c9a962]/10 text-[#b8963f] text-sm font-semibold tracking-wide mb-6">
            PROGRAMAS DESTACADOS
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a2744] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Iniciativas que{" "}
            <span className="bg-gradient-to-r from-[#c9a962] to-[#b8963f] bg-clip-text text-transparent">
              transforman
            </span>
          </h2>

          <p className="text-xl text-[#1a2744]/60 max-w-2xl mx-auto font-light">
            Programas especializados que generan impacto sostenible en toda Argentina
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/[0.03] border border-[#e8e4df] hover:shadow-xl hover:shadow-black/[0.06] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                {/* Header with gradient */}
                <div className={`relative h-40 bg-gradient-to-br ${program.gradient} overflow-hidden`}>
                  {/* Pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `
                        linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.1) 60%, transparent 60%),
                        linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.1) 60%, transparent 60%)
                      `,
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Icon container */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white/30">
                      <program.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Decorative circle */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/10" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3
                    className="text-2xl font-bold mb-4 text-[#1a2744] group-hover:text-[#c9a962] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {program.title}
                  </h3>

                  <p className="text-[#1a2744]/60 leading-relaxed mb-6 flex-grow">
                    {program.description}
                  </p>

                  {/* Impact Badge */}
                  <div className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${program.lightGradient} mb-6`}>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`}>
                      {program.impact}
                    </div>
                    <div className="text-sm text-[#1a2744]/60 leading-tight">
                      {program.impactLabel}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    className="w-full border-[#1a2744]/20 text-[#1a2744] hover:bg-[#1a2744] hover:text-white hover:border-[#1a2744] rounded-xl h-12 font-medium group/btn transition-all duration-300"
                  >
                    <span>Conocer más</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ODS Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a962]/10 text-[#b8963f] text-sm font-semibold tracking-wide mb-4">
              <Globe className="w-4 h-4" />
              AGENDA 2030
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2744] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Objetivos de Desarrollo Sostenible
            </h2>
            <p className="text-xl text-[#1a2744]/60 max-w-3xl mx-auto leading-relaxed font-light">
              Nuestros programas contribuyen directamente al cumplimiento de las metas globales de las Naciones Unidas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                num: 8,
                title: "Trabajo Decente y Crecimiento Económico",
                desc: "Promover el crecimiento económico inclusivo y sostenible, el empleo y el trabajo decente para todos.",
                color: "#A21942",
              },
              {
                num: 9,
                title: "Industria, Innovación e Infraestructura",
                desc: "Construir infraestructuras resilientes, promover la industrialización sostenible y fomentar la innovación.",
                color: "#FD6925",
              },
              {
                num: 10,
                title: "Reducción de las Desigualdades",
                desc: "Reducir la desigualdad en y entre los países, garantizando la igualdad de oportunidades.",
                color: "#DD1367",
              },
              {
                num: 11,
                title: "Ciudades y Comunidades Sostenibles",
                desc: "Lograr que las ciudades sean más inclusivas, seguras, resilientes y sostenibles.",
                color: "#FD9D24",
              },
              {
                num: 17,
                title: "Alianzas para lograr los Objetivos",
                desc: "Revitalizar la Alianza Mundial para el Desarrollo Sostenible mediante colaboraciones estratégicas.",
                color: "#19486A",
              },
            ].map((ods, index) => (
              <motion.div
                key={ods.num}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg border border-[#e8e4df] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
              >
                {/* Header Color Bar */}
                <div
                  className="h-2 w-full"
                  style={{ backgroundColor: ods.color }}
                />

                <div className="p-6 flex flex-col flex-grow relative">
                  {/* Background Number */}
                  <div
                    className="absolute -right-4 -top-4 text-9xl font-bold opacity-[0.03] select-none"
                    style={{ color: ods.color }}
                  >
                    {ods.num}
                  </div>

                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md"
                      style={{ backgroundColor: ods.color }}
                    >
                      {ods.num}
                    </div>
                  </div>

                  <h3
                    className="text-lg font-bold mb-3 text-[#1a2744] leading-tight group-hover:text-[#c9a962] transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {ods.title}
                  </h3>

                  <p className="text-sm text-[#1a2744]/60 leading-relaxed flex-grow">
                    {ods.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

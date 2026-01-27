"use client"

import { Users, Briefcase, GraduationCap, TrendingUp } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const StatItem = ({
  icon: Icon,
  number,
  label,
  suffix = "",
  delay,
  accentColor
}: {
  icon: any,
  number: string,
  label: string,
  suffix?: string,
  delay: number,
  accentColor: string
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [count, setCount] = useState(0)

  const target = parseInt(number.replace(/,/g, "").replace(/\+/g, ""), 10)
  const displaySuffix = number.includes("+") ? "+" : suffix

  useEffect(() => {
    if (isInView) {
      const duration = 2500
      const steps = 80
      const stepTime = duration / steps
      const increment = target / steps

      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, stepTime)

      return () => clearInterval(timer)
    }
  }, [isInView, target])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-lg shadow-black/[0.03] border border-[#e8e4df] hover:shadow-xl hover:shadow-black/[0.06] transition-all duration-500 hover:-translate-y-2">
        {/* Accent line */}
        <div
          className="absolute top-0 left-8 right-8 h-1 rounded-b-full opacity-80"
          style={{ background: accentColor }}
        />

        {/* Icon container */}
        <div
          className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
          style={{ background: `${accentColor}15` }}
        >
          <Icon
            className="w-8 h-8 lg:w-10 lg:h-10 transition-colors duration-300"
            style={{ color: accentColor }}
          />
        </div>

        {/* Number */}
        <div className="flex items-baseline gap-1 mb-3">
          <span
            className="text-5xl lg:text-6xl font-bold tabular-nums tracking-tight"
            style={{ fontFamily: "var(--font-playfair)", color: "#1a2744" }}
          >
            {count.toLocaleString()}
          </span>
          <span
            className="text-3xl lg:text-4xl font-bold"
            style={{ color: accentColor }}
          >
            {displaySuffix}
          </span>
        </div>

        {/* Label */}
        <p className="text-[#1a2744]/60 font-medium text-base lg:text-lg leading-snug">
          {label}
        </p>

        {/* Decorative element */}
        <div
          className="absolute bottom-4 right-4 w-24 h-24 rounded-full opacity-[0.03]"
          style={{ background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)` }}
        />
      </div>
    </motion.div>
  )
}

export function ImpactStats() {
  const stats = [
    {
      icon: Users,
      number: "7,513",
      label: "Participantes en nuestros programas",
      accentColor: "#1a2744",
    },
    {
      icon: Briefcase,
      number: "2,411",
      label: "Empresas asistidas y fortalecidas",
      accentColor: "#3d5a80",
    },
    {
      icon: GraduationCap,
      number: "10,000",
      suffix: "+",
      label: "Personas capacitadas",
      accentColor: "#c9a962",
    },
    {
      icon: TrendingUp,
      number: "25",
      label: "Años de trayectoria",
      accentColor: "#1a2744",
    },
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="impacto" className="relative py-24 lg:py-32 overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdfcfb] via-[#f7f5f3] to-[#fdfcfb]" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e8e4df] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e8e4df] to-transparent" />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1a2744 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#c9a962]/10 text-[#b8963f] text-sm font-semibold tracking-wide mb-4">
            NUESTRO IMPACTO
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Resultados que transforman
          </h2>
          <p className="text-lg text-[#1a2744]/60 max-w-2xl mx-auto">
            Desde 1998, trabajamos incansablemente para generar un impacto positivo y duradero en las comunidades argentinas.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} delay={index * 0.15} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-[#1a2744]/50 text-sm">
            Datos actualizados al cierre del año fiscal 2024
          </p>
        </motion.div>
      </div>
    </section>
  )
}

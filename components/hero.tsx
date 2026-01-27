"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Deep gradient background with texture */}
      <div className="absolute inset-0 z-0">
        {/* Primary gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1625] via-[#1a2744] to-[#1e3a5f]" />

        {/* Mesh gradient overlay */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(61, 90, 128, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 60%, rgba(201, 169, 98, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse 100% 80% at 50% 100%, rgba(26, 39, 68, 0.8) 0%, transparent 60%)
            `
          }}
        />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(201, 169, 98, 0.4) 0%, transparent 70%)",
            top: "10%",
            right: "-20%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(61, 90, 128, 0.5) 0%, transparent 70%)",
            bottom: "10%",
            left: "-10%",
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content with parallax effect */}
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 lg:px-8 relative z-10 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9a962] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#c9a962]"></span>
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] text-white/90 text-sm font-medium tracking-wide">
              Desde 1998 trabajando por Argentina
            </span>
          </motion.div>

          {/* Main heading with sophisticated typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-balance leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="text-white">Impulsando el</span>
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#c9a962] via-[#e0c77d] to-[#c9a962] bg-clip-text text-transparent">
                desarrollo sustentable
              </span>
              {/* Decorative underline */}
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
              >
                <motion.path
                  d="M2 8C50 2 100 10 150 6C200 2 250 8 298 4"
                  stroke="url(#gold-gradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#c9a962" />
                    <stop offset="50%" stopColor="#e0c77d" />
                    <stop offset="100%" stopColor="#c9a962" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl sm:text-2xl text-white/70 mb-12 lg:mb-14 text-pretty leading-relaxed max-w-3xl mx-auto font-light"
          >
            Transformamos comunidades a través de programas de capacitación,
            asistencia técnica y generación de <span className="text-white/90 font-medium">empleo genuino</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="group text-lg h-14 px-8 bg-gradient-to-r from-[#c9a962] to-[#b8963f] text-[#1a2744] hover:from-[#d4b874] hover:to-[#c9a962] shadow-xl shadow-[#c9a962]/20 transition-all duration-300 hover:scale-[1.02] font-semibold rounded-xl"
              onClick={() => document.getElementById("programas")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="flex items-center gap-2">
                Conocer nuestros programas
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg h-14 px-8 border-2 border-white/20 bg-white/[0.05] text-white hover:bg-white/[0.1] hover:border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] rounded-xl font-medium"
              onClick={() => document.getElementById("donaciones")?.scrollIntoView({ behavior: "smooth" })}
            >
              Hacer una donación
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-white/40 text-sm mb-4 uppercase tracking-widest">Reconocidos por</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Placeholder for partner logos - you can replace with actual logos */}
              {["ONU", "SEPYME", "Ministerio", "IINCA"].map((partner, i) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + i * 0.1, duration: 0.5 }}
                  className="px-4 py-2 text-white/70 text-sm font-medium tracking-wide"
                >
                  {partner}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => {
            document.getElementById("impacto")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <span className="text-white/40 text-xs uppercase tracking-widest group-hover:text-white/60 transition-colors">
            Descubrir más
          </span>
          <ChevronDown className="w-5 h-5 text-white/40 group-hover:text-[#c9a962] transition-colors" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fdfcfb] to-transparent z-10" />
    </section>
  )
}

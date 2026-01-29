import { Target, Eye, Award, ArrowUpRight } from "lucide-react"
import { MotionViewport } from "@/components/ui/motion-viewport"

export function About() {
  const values = [
    {
      icon: Target,
      title: "Nuestra Misión",
      description:
        "Promover el desarrollo sustentable de Argentina a través de programas de capacitación, asistencia técnica y generación de empleo que fortalezcan las capacidades de personas y organizaciones.",
      accent: "#1a2744",
    },
    {
      icon: Eye,
      title: "Nuestra Visión",
      description:
        "Ser una organización líder en el impulso del desarrollo económico y social sustentable, reconocida por su impacto positivo en las comunidades argentinas.",
      accent: "#3d5a80",
    },
    {
      icon: Award,
      title: "Nuestros Valores",
      description:
        "Compromiso, transparencia, innovación y responsabilidad social guían todas nuestras acciones y decisiones institucionales.",
      accent: "#c9a962",
    },
  ]

  return (
    <section id="nosotros" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#fdfcfb]" />

      {/* Decorative elements */}
      <div
        className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-[0.03] blur-3xl"
        style={{ background: "radial-gradient(circle, #1a2744 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-[0.05] blur-3xl"
        style={{ background: "radial-gradient(circle, #c9a962 0%, transparent 70%)" }}
      />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1a2744 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <MotionViewport className="max-w-4xl mx-auto text-center mb-20" initial={{ opacity: 0, y: 30 }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1a2744]/5 text-[#1a2744] text-sm font-semibold tracking-wide mb-6">
            SOBRE NOSOTROS
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-[#1a2744]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Construyendo un{" "}
            <span className="relative inline-block">
              <span className="relative z-10">futuro mejor</span>
              <div className="absolute bottom-2 left-0 right-0 h-3 bg-[#c9a962]/20 rounded-full -z-0" />
            </span>
          </h2>

          <p className="text-xl text-[#1a2744]/60 leading-relaxed mb-8 font-light">
            Somos una organización sin fines de lucro fundada en 1998, dedicada al desarrollo
            sustentable de Argentina. Trabajamos con responsabilidad, transparencia y compromiso.
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg shadow-black/[0.03] border border-[#e8e4df]">
            <div className="w-2 h-2 rounded-full bg-[#c9a962]" />
            <span className="text-sm text-[#1a2744]/70">
              <strong className="text-[#1a2744]">CUIT: 30-70807514-7</strong> • Personería Jurídica otorgada por la IGJ
            </span>
          </div>
        </MotionViewport>

        {/* Values Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <MotionViewport
              key={index}
              delay={0.2 + index * 0.15}
              initial={{ opacity: 0, y: 40 }}
              className="group h-full"
            >
              <div className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-lg shadow-black/[0.03] border border-[#e8e4df] hover:shadow-xl hover:shadow-black/[0.06] transition-all duration-500 hover:-translate-y-2 h-full">
                {/* Top accent */}
                <div
                  className="absolute top-0 left-8 right-8 h-1 rounded-b-full"
                  style={{ backgroundColor: value.accent }}
                />

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: `${value.accent}10`,
                  }}
                >
                  <value.icon
                    className="w-8 h-8"
                    style={{ color: value.accent }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold mb-4 text-[#1a2744] group-hover:text-[#c9a962] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-[#1a2744]/60 leading-relaxed text-lg">
                  {value.description}
                </p>

                {/* Corner decoration */}
                <div
                  className="absolute bottom-4 right-4 w-20 h-20 rounded-full opacity-[0.03]"
                  style={{ background: `radial-gradient(circle, ${value.accent} 0%, transparent 70%)` }}
                />
              </div>
            </MotionViewport>
          ))}
        </div>

        {/* CTA Section */}
        <MotionViewport className="mt-16 text-center" initial={{ opacity: 0, y: 30 }} delay={0.8}>
          <a
            href="/institucional"
            className="inline-flex items-center gap-2 text-[#1a2744] font-semibold hover:text-[#c9a962] transition-colors group"
          >
            <span>Conocer más sobre nuestra historia</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </MotionViewport>
      </div>
    </section>
  )
}

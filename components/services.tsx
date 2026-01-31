import { Briefcase, Users, GraduationCap, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MotionViewport } from "@/components/ui/motion-viewport"

export function Services() {
  const services = [
    {
      icon: Briefcase,
      title: "Asistencia Financiera UVT",
      description:
        "Brindamos asistencia técnica y financiera a micro, pequeñas y medianas empresas para mejorar su competitividad y sostenibilidad.",
      features: ["Asesoramiento personalizado", "Acceso a créditos", "Planes de mejora"],
      gradient: "from-[#1a2744] to-[#3d5a80]",
      accentColor: "#3d5a80",
      link: "#uvt",
    },
    {
      icon: Users,
      title: "Intermediación de Empleo",
      description:
        "Conectamos personas en búsqueda de empleo con empresas que necesitan talento. Orientación laboral integral.",
      features: ["Bolsa de trabajo", "Capacitación laboral", "Seguimiento continuo"],
      gradient: "from-[#3d5a80] to-[#5a7ca8]",
      accentColor: "#5a7ca8",
      link: "#empleo",
    },
    {
      icon: GraduationCap,
      title: "Centro Tecnológico 4.0",
      description:
        "Programas de formación en competencias digitales y tecnologías 4.0 para la industria del futuro.",
      features: ["Transformación digital", "Automatización", "Análisis de datos"],
      gradient: "from-[#c9a962] to-[#b8963f]",
      accentColor: "#c9a962",
      link: "#capacitacion",
    },
  ]

  return (
    <section id="servicios" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a2744]" />

      {/* Decorative gradient orbs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(201, 169, 98, 0.4) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(61, 90, 128, 0.5) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
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
        <MotionViewport className="text-center mb-16 lg:mb-20" initial={{ opacity: 0, y: 20 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#c9a962] text-sm font-semibold tracking-wide mb-6">
            <Sparkles className="w-4 h-4" />
            NUESTROS SERVICIOS
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Soluciones integrales para el{" "}
            <span className="bg-gradient-to-r from-[#c9a962] to-[#e0c77d] bg-clip-text text-transparent">
              crecimiento
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            Impulsamos el desarrollo sustentable de Argentina a través de programas especializados
          </p>
        </MotionViewport>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <MotionViewport
              key={index}
              delay={index * 0.15}
              initial={{ opacity: 0, y: 40 }}
              className="group relative h-full"
            >
              <div className="relative bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 h-full flex flex-col">
                {/* Top gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${service.gradient}`} />

                <div className="p-8 lg:p-10 flex flex-col flex-grow">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${service.accentColor}20, ${service.accentColor}40)`,
                      boxShadow: `0 4px 20px ${service.accentColor}20`,
                    }}
                  >
                    <service.icon
                      className="w-7 h-7"
                      style={{ color: service.accentColor }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold mb-4 text-white group-hover:text-[#c9a962] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-white/50">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: service.accentColor }}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="ghost"
                    className="w-full justify-between items-center text-white/80 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl h-12 font-medium group/btn"
                    asChild
                  >
                    <a href={service.link}>
                      <span>Más información</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </div>

                {/* Corner decorative element */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-[0.05]"
                  style={{
                    background: `radial-gradient(circle at 100% 0%, ${service.accentColor} 0%, transparent 70%)`,
                  }}
                />
              </div>
            </MotionViewport>
          ))}
        </div>

        {/* Bottom decoration */}
        <MotionViewport
          initial={{ opacity: 0, scaleX: 0 }}
          delay={0.8}
          className="mt-16 flex justify-center"
        >
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-[#c9a962]/40 to-transparent" />
        </MotionViewport>
      </div>
    </section>
  )
}

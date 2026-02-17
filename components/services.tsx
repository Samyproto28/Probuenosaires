import { Briefcase, Users, GraduationCap, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MotionViewport } from "@/components/ui/motion-viewport"
import Link from "next/link"
import Image from "next/image"

export function Services() {
  const services = [
    {
      icon: Briefcase,
      title: "Asistencia Financiera UVT",
      description:
        "Brindamos asistencia técnica y financiera a micro, pequeñas y medianas empresas para mejorar su competitividad y sostenibilidad.",
      features: ["Asesoramiento personalizado", "Acceso a créditos", "Planes de mejora"],
      gradient: "from-black/40 to-black/10",
      accentColor: "#89abe6",
      link: "/uvt",
      image: "", // Espacio para imagen
    },
    {
      icon: Users,
      title: "Intermediación de Empleo",
      description:
        "Conectamos personas en búsqueda de empleo con empresas que necesitan talento. Orientación laboral integral.",
      features: ["Bolsa de trabajo", "Capacitación laboral", "Seguimiento continuo"],
      gradient: "from-black/40 to-black/10",
      accentColor: "#405e8c",
      link: "/programas/intermediacion-laboral",
      image: "", // Espacio para imagen
    },
    {
      icon: GraduationCap,
      title: "Centro Tecnológico 4.0",
      description:
        "Programas de formación en competencias digitales y tecnologías 4.0 para la industria del futuro.",
      features: ["Transformación digital", "Automatización", "Análisis de datos"],
      gradient: "from-black/40 to-black/10",
      accentColor: "#8dc2ff",
      link: "/programas/centro-tecnologico",
      image: "/centro-4-0.webp", // Imagen añadida
    },
  ]

  return (
    <section id="servicios" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#111269]" />

      {/* Decorative gradient orbs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(141, 194, 255, 0.4) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(137, 171, 230, 0.5) 0%, transparent 70%)",
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
        <MotionViewport className="text-center mb-10 lg:mb-12" initial={{ opacity: 0, y: 20 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#8dc2ff] text-sm font-semibold tracking-wide mb-6">
            <Sparkles className="w-4 h-4" />
            NUESTROS SERVICIOS
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Soluciones integrales para el{" "}
            <span className="bg-gradient-to-r from-[#8dc2ff] to-[#89abe6] bg-clip-text text-transparent">
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
              <div className="relative bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/[0.06] hover:border-white/20 transition-[background-color,border-color] duration-500 h-full flex flex-col">
                {/* Header with image/gradient */}
                <div className="relative h-48 overflow-hidden bg-[#111269]/50">
                  {service.image ? (
                    <>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient}`} />
                    </>
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br from-[#111269] to-[#405e8c] opacity-40`}>
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
                    </div>
                  )}

                </div>

                <div className="p-8 lg:p-10 flex flex-col flex-grow">

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold mb-4 text-white group-hover:text-[#8dc2ff] transition-colors duration-300"
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
                    <Link href={service.link}>
                      <span>Más Información</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
                    </Link>
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
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-[#8dc2ff]/40 to-transparent" />
        </MotionViewport>
      </div>
    </section>
  )
}

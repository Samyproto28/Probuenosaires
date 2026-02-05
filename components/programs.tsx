import { Button } from "@/components/ui/button"
import { ArrowRight, Handshake, Network, Globe, HeartPulse, Radio, Cpu, Palette, Flag, Video, Layers, Factory } from "lucide-react"
import { MotionViewport } from "@/components/ui/motion-viewport"
import Image from "next/image"
import Link from "next/link"

interface ProgramsProps {
  limit?: number
}

export function Programs({ limit }: ProgramsProps) {
  const allPrograms = [
    {
      icon: Handshake,
      title: "Programa Vinculando",
      description:
        "Conectamos a estudiantes de escuelas técnicas con empresas para sus 200 horas de prácticas profesionalizantes. Un programa central que impulsa la formación de futuros técnicos y la empleabilidad juvenil en Quilmes, Florencio Varela y Berazategui.",
      impact: "200h",
      impactLabel: "prácticas profesionalizantes por alumno",
      gradient: "from-[#111269] to-[#89abe6]",
      lightGradient: "from-[#111269]/5 to-[#89abe6]/5",
    },
    {
      icon: Network,
      title: "Programa Encadenar",
      description:
        "Fortalecemos los vínculos entre PyMEs promoviendo el trabajo colaborativo mediante rondas de negocios, espacios de networking y articulación entre proveedores y demandantes para impulsar el sector productivo.",
      impact: "Sinergia",
      impactLabel: "rondas de negocios y networking",
      gradient: "from-[#89abe6] to-[#405e8c]",
      lightGradient: "from-[#89abe6]/5 to-[#405e8c]/5",
      href: "/programas/encadenar",
    },
    {
      icon: Globe,
      title: "Programa Proba Comex",
      description:
        "Orientado a PyMEs que buscan iniciarse o fortalecerse en el comercio exterior. Brindamos capacitación en importación/exportación, asesoramiento técnico y acompañamiento en los primeros pasos del camino exportador.",
      impact: "Exportar",
      impactLabel: "apoyo integral al comercio exterior",
      gradient: "from-[#8dc2ff] to-[#89abe6]",
      lightGradient: "from-[#8dc2ff]/5 to-[#89abe6]/5",
      href: "/programas/proba-comex",
    },
    {
      icon: HeartPulse,
      title: "Programa Pyme Saludable",
      description:
        "Promovemos el bienestar integral y la salud laboral en las PyMEs. Trabajamos en ejes de clima organizacional, prevención y concientización para mejorar la calidad de vida y la sostenibilidad de las organizaciones.",
      impact: "Salud",
      impactLabel: "bienestar y productividad organizacional",
      gradient: "from-[#405e8c] to-[#111269]",
      lightGradient: "from-[#405e8c]/5 to-[#111269]/5",
      href: "/programas/pyme-saludable",
    },
    {
      icon: Radio,
      title: "Radio Empresaria",
      description:
        "Nuestra emisora online (RadioEmpresaria.com.ar) brinda visibilidad y posicionamiento para empresas del sector productivo. Un espacio para comunicar la realidad de las cadenas de valor regionales.",
      impact: "Difusión",
      impactLabel: "visibilidad para la cadena de valor",
      gradient: "from-[#89abe6] to-[#8dc2ff]",
      lightGradient: "from-[#89abe6]/5 to-[#8dc2ff]/5",
      href: "/programas/radio-empresaria",
    },
    {
      icon: Cpu,
      title: "Centro Tecnológico 4.0",
      description:
        "Acercamos a las PyMEs a la innovación y la transformación digital. Ofrecemos capacitaciones, charlas técnicas y espacios de actualización para preparar a las empresas ante los desafíos tecnológicos actuales.",
      impact: "4.0",
      impactLabel: "innovación y tecnología aplicada",
      gradient: "from-[#111269] to-[#8dc2ff]",
      lightGradient: "from-[#111269]/5 to-[#8dc2ff]/5",
      href: "/programas/centro-tecnologico",
    },
    {
      icon: Layers,
      title: "Gestión Pymes",
      description:
        "Asistencia integral en productividad: Implementación de 5S, mejora de procesos, planificación estratégica y transformación digital para el fortalecimiento del negocio.",
      impact: "Eficiencia",
      impactLabel: "optimización de procesos productivos",
      gradient: "from-[#405e8c] to-[#89abe6]",
      lightGradient: "from-[#405e8c]/5 to-[#89abe6]/5",
    },
    {
      icon: Palette,
      title: "Industrias Culturales",
      description:
        "Fomentamos el desarrollo de las industrias culturales y creativas como motor de identidad y economía regional, integrando el arte y la creatividad con el sector productivo.",
      impact: "Cultura",
      impactLabel: "impulso a la economía creativa",
      gradient: "from-[#8dc2ff] to-[#111269]",
      lightGradient: "from-[#8dc2ff]/5 to-[#111269]/5",
    },
    {
      icon: Flag,
      title: "Argentina 2050",
      description:
        "Plataforma de pensamiento y acción para el desarrollo sustentable del país a largo plazo, enfocada en la competitividad y la inclusión social.",
      impact: "Futuro",
      impactLabel: "visión estratégica de país",
      gradient: "from-[#111269] to-[#405e8c]",
      lightGradient: "from-[#111269]/5 to-[#405e8c]/5",
      href: "#",
    },
  ]

  const programs = limit ? allPrograms.slice(0, limit) : allPrograms

  return (
    <section id="programas" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f7ff] via-[#ffffff] to-[#f0f7ff]" />

      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e2e8f0] to-transparent"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <MotionViewport className="text-center mb-16 lg:mb-20" initial={{ opacity: 0, y: 20 }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#8dc2ff]/10 text-[#111269] text-sm font-semibold tracking-wide mb-6">
            PROGRAMAS DESTACADOS
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111269] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Iniciativas que{" "}
            <span className="bg-gradient-to-r from-[#8dc2ff] to-[#89abe6] bg-clip-text text-transparent">
              transforman
            </span>
          </h2>

          <p className="text-xl text-[#111269]/60 max-w-2xl mx-auto font-light">
            Programas especializados que generan impacto sostenible en toda Argentina
          </p>
        </MotionViewport>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <MotionViewport
              key={index}
              delay={index * 0.15}
              initial={{ opacity: 0, y: 40 }}
              className="group h-full"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/[0.03] border border-[#e2e8f0] hover:shadow-xl hover:shadow-black/[0.06] transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-2 h-full flex flex-col">
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
                      <program.icon className="w-10 h-10 text-white" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Decorative circle */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/10" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3
                    className="text-2xl font-bold mb-4 text-[#111269] group-hover:text-[#8dc2ff] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {program.title}
                  </h3>

                  <p className="text-[#111269]/60 leading-relaxed mb-6 flex-grow">
                    {program.description}
                  </p>

                  {/* Impact Badge */}
                  <div className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${program.lightGradient} mb-6`}>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`}>
                      {program.impact}
                    </div>
                    <div className="text-sm text-[#111269]/60 leading-tight">
                      {program.impactLabel}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#111269]/20 text-[#111269] hover:bg-[#111269] hover:text-white hover:border-[#111269] rounded-xl h-12 font-medium group/btn transition-[background-color,color,border-color] duration-300"
                  >
                    <Link href={program.href || "#"}>
                      <span>Conocer Más</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </MotionViewport>
          ))}
        </div>

        {limit && (
          <MotionViewport className="mt-12 flex justify-center" initial={{ opacity: 0, y: 20 }}>
            <Link href="/programas">
              <Button
                variant="outline"
                className="border-[#111269]/20 text-[#111269] hover:bg-[#111269] hover:text-white hover:border-[#111269] rounded-xl h-12 px-8 font-medium group transition-all duration-300"
              >
                <span>Ver Todos los Programas</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </MotionViewport>
        )}

        {/* ODS Section */}
        <MotionViewport className="mt-24" initial={{ opacity: 0, y: 30 }} delay={0.6}>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#8dc2ff]/10 text-[#111269] text-sm font-semibold tracking-wide mb-4">
              <Globe className="w-4 h-4" aria-hidden="true" />
              AGENDA 2030
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111269] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Objetivos de Desarrollo Sostenible
            </h2>
            <p className="text-xl text-[#111269]/60 max-w-3xl mx-auto leading-relaxed font-light">
              Nuestros programas contribuyen directamente al cumplimiento de las metas globales de las Naciones Unidas.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mb-16 px-4">
            <div className="relative aspect-[16/9] w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#e2e8f0] group">
              <Image
                src="/ods-goals.png"
                alt="Objetivos de Desarrollo Sostenible"
                fill
                className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
            </div>
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
              <MotionViewport
                key={ods.num}
                initial={{ opacity: 0, y: 20 }}
                delay={0.7 + index * 0.1}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg border border-[#e2e8f0] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
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
                    className="text-lg font-bold mb-3 text-[#111269] leading-tight group-hover:text-[#8dc2ff] transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {ods.title}
                  </h3>

                  <p className="text-sm text-[#111269]/60 leading-relaxed flex-grow">
                    {ods.desc}
                  </p>
                </div>
              </MotionViewport>
            ))}
          </div>
        </MotionViewport>
      </div>
    </section>
  )
}

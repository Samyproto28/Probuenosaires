import { Briefcase, Users, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Services() {
  const services = [
    {
      icon: Briefcase,
      title: "Asistencia Financiera UVT",
      description:
        "Brindamos asistencia técnica y financiera a micro, pequeñas y medianas empresas para mejorar su competitividad y sostenibilidad. Incluye asesoramiento en gestión, acceso a financiamiento y desarrollo de planes de negocio.",
      image: "/placeholder.svg?height=300&width=400",
      link: "#uvt",
    },
    {
      icon: Users,
      title: "Servicio de Intermediación de Empleo",
      description:
        "Conectamos personas en búsqueda de empleo con empresas que necesitan talento. Ofrecemos orientación laboral, capacitación en habilidades blandas y seguimiento post-colocación para asegurar inserciones laborales exitosas.",
      image: "/placeholder.svg?height=300&width=400",
      link: "#empleo",
    },
    {
      icon: GraduationCap,
      title: "Capacitación CT4.0",
      description:
        "Programas de formación en competencias digitales y tecnologías 4.0 para trabajadores y empresas. Incluye cursos de transformación digital, automatización, análisis de datos y nuevas tecnologías aplicadas a la industria.",
      image: "/placeholder.svg?height=300&width=400",
      link: "#capacitacion",
    },
  ]

  return (
    <section id="servicios" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-balance px-8 py-4 border-4 border-[#5979ad] rounded-full">
              Servicios
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mt-6">
            Soluciones integrales para el desarrollo sustentable y el crecimiento económico de Argentina
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg">
                    <service.icon className="w-6 h-6 text-[#272d64]" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#272d64]">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <Button variant="link" className="text-[#272d64] p-0 h-auto font-semibold" asChild>
                  <a href={service.link}>Más información →</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

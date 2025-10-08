import { Button } from "@/components/ui/button"
import { ArrowRight, Target, TrendingUp, Radio } from "lucide-react"

export function Programs() {
  const programs = [
    {
      icon: TrendingUp,
      title: "Proba Comex",
      description:
        "Programa integral de asistencia en Comercio Exterior y Misiones Comerciales. Brindamos capacitación, asesoramiento técnico y acompañamiento a empresas que buscan expandirse a mercados internacionales, facilitando el acceso a nuevos mercados y oportunidades de negocio.",
      image: "/placeholder.svg?height=400&width=600",
      impact: "150+ empresas exportadoras asistidas",
    },
    {
      icon: Target,
      title: "Pymes Saludables",
      description:
        "Alianza estratégica con IINCA para impulsar el desarrollo productivo y la competitividad de pequeñas y medianas empresas argentinas. Incluye diagnóstico empresarial, planes de mejora, acceso a financiamiento y seguimiento continuo para asegurar el crecimiento sostenible.",
      image: "/placeholder.svg?height=400&width=600",
      impact: "200+ PyMEs fortalecidas",
    },
    {
      icon: Radio,
      title: "Radio Empresaria",
      description:
        "Plataforma de comunicación dedicada a visibilizar la realidad de las Cadenas de Valor argentinas. Un espacio para compartir experiencias, buenas prácticas y promover el desarrollo empresarial a través de entrevistas, análisis y contenido especializado para el sector productivo.",
      image: "/placeholder.svg?height=400&width=600",
      impact: "50+ episodios publicados",
    },
  ]

  return (
    <section id="programas" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold px-8 py-4 border-4 border-accent rounded-full">
              Nuestros programas
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mt-6">
            Iniciativas que transforman realidades y generan impacto sostenible en toda Argentina
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <program.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold mb-3 text-primary">{program.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{program.description}</p>
                <div className="bg-accent/20 border-l-4 border-accent px-4 py-3 mb-6">
                  <p className="text-sm font-semibold text-accent-foreground">{program.impact}</p>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group/btn bg-transparent"
                >
                  Conocer más
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8">Alineados con los Objetivos de Desarrollo Sostenible</h3>
          <div className="bg-card border border-border rounded-lg p-8">
            <img
              src="/placeholder.svg?height=200&width=800"
              alt="Objetivos de Desarrollo Sostenible de la ONU"
              className="w-full max-w-4xl mx-auto"
            />
            <p className="text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
              Nuestros programas contribuyen directamente al cumplimiento de los Objetivos de Desarrollo Sostenible de
              las Naciones Unidas, enfocándonos en trabajo decente y crecimiento económico, industria e innovación, y
              reducción de desigualdades.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

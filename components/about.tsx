import { Target, Eye, Award } from "lucide-react"

export function About() {
  const values = [
    {
      icon: Target,
      title: "Nuestra Misión",
      description:
        "Promover el desarrollo sustentable de Argentina a través de programas de capacitación, asistencia técnica y generación de empleo que fortalezcan las capacidades de personas y organizaciones.",
    },
    {
      icon: Eye,
      title: "Nuestra Visión",
      description:
        "Ser una organización líder en el impulso del desarrollo económico y social sustentable, reconocida por su impacto positivo en las comunidades argentinas.",
    },
    {
      icon: Award,
      title: "Nuestros Valores",
      description:
        "Compromiso, transparencia, innovación y responsabilidad social guían todas nuestras acciones y decisiones institucionales.",
    },
  ]

  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Sobre Fundación Pro Buenos Aires
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            Somos una organización sin fines de lucro fundada en 1998, dedicada al desarrollo sustentable de Argentina.
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <strong>CUIT: 30-70807514-7</strong> | Personería Jurídica otorgada por la Inspección General de Justicia
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-background p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-[#272d64]/10 rounded-full flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-[#272d64]" />
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

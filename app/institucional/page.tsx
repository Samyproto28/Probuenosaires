import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Target, Eye, Award, Building, Users, Handshake } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Institucional | Fundación Pro Buenos Aires",
  description: "Conoce nuestra historia, misión, visión y valores como organización sin fines de lucro",
}

export default function InstitucionalPage() {
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

  const institutionalInfo = [
    {
      icon: Building,
      title: "Nuestra Historia",
      description:
        "Fundada en 1998, nuestra organización ha trabajado incansablemente durante más de dos décadas para promover el desarrollo sustentable en Argentina, adaptándonos a los desafíos cambiantes del contexto nacional y regional.",
    },
    {
      icon: Users,
      title: "Nuestra Estructura",
      description:
        "Contamos con un equipo multidisciplinario de profesionales dedicados a diferentes áreas de expertise, asegurando un abordaje integral y especializado para cada uno de nuestros programas y proyectos.",
    },
    {
      icon: Handshake,
      title: "Nuestras Alianzas",
      description:
        "Desarrollamos alianzas estratégicas con organizaciones públicas y privadas, universidades y otras ONGs para maximizar nuestro impacto y alcance en toda la geografía argentina.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Institucional
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
              Somos una organización sin fines de lucro fundada en 1998, dedicada al desarrollo sustentable de Argentina.
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <strong>CUIT: 30-70807514-7</strong> | Personería Jurídica otorgada por la Inspección General de Justicia
            </p>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="bg-secondary p-8 rounded-lg shadow-sm">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Institutional Information */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8">Nuestra Organización</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {institutionalInfo.map((info, index) => (
              <div key={index} className="bg-card border border-border p-8 rounded-lg shadow-sm">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <info.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Institutional Data */}
          <div className="mt-16 bg-secondary border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Datos Institucionales</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="font-bold mb-3 text-primary">Información Legal</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Denominación:</strong> Fundación Pro Buenos Aires</p>
                  <p><strong>Personería Jurídica:</strong> Resolución IGJ N° 123/98</p>
                  <p><strong>CUIT:</strong> 30-70807514-7</p>
                  <p><strong>Tipo de Organización:</strong> Sin fines de lucro</p>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-primary">Domicilio Fiscal</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Dirección:</strong> Ruta 36 Nº 1354, entre calles 13 y 14</p>
                  <p><strong>Localidad:</strong> Cruce de Florencio Varela, Berazategui</p>
                  <p><strong>Provincia:</strong> Buenos Aires</p>
                  <p><strong>País:</strong> Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
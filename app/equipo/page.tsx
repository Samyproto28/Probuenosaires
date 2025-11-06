import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Award, Briefcase, GraduationCap } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Equipo | Fundación Pro Buenos Aires",
  description: "Conoce al equipo de profesionales que trabajan por el desarrollo sustentable de Argentina",
}

export default function EquipoPage() {
  const teamMembers = [
    {
      name: "Facundo galdos",
      position: "Presidente",
      bio: "Empresario",
      image: "/placeholder-user.jpg",
      expertise: ["Economía", "Políticas Públicas", "Desarrollo Sostenible"],
    },
    {
      name: "Marie Eugene",
      position: "Presidenta Focava",
      bio: "Ex Empresaria",
      image: "/placeholder-user.jpg",
      expertise: ["Gestión", "Derecho", "Proyectos Sociales"],
    },
    {
      name: "Florencia",
      position: "Coordinadora",
      bio: "",
      image: "/placeholder-user.jpg",
      expertise: ["Gestión de Proyectos", "Comercio Exterior", "Desarrollo Empresarial"],
    },
    {
      name: "Leila Galdos",
      position: "Coordinadora",
      bio: "",
      image: "/placeholder-user.jpg",
      expertise: ["Finanzas", "Diagnóstico Empresarial", "PyMEs"],
    },
    
  ]

  const teamAreas = [
    {
      icon: Briefcase,
      title: "Área Administrativa",
      description: "Equipo dedicado a la gestión financiera, contable y administrativa de la fundación.",
      members: 3,
    },
    {
      icon: GraduationCap,
      title: "Área de Capacitación",
      description: "Profesionales especializados en diseño e implementación de programas de formación.",
      members: 5,
    },
    {
      icon: Award,
      title: "Área de Proyectos",
      description: "Equipo multidisciplinario responsable de la ejecución y seguimiento de los programas.",
      members: 8,
    },
    {
      icon: Users,
      title: "Área de Desarrollo Comunitario",
      description: "Profesionales trabajando directamente con las comunidades y beneficiarios.",
      members: 6,
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Nuestro Equipo
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Contamos con un equipo de profesionales dedicados, comprometidos con nuestra misión de promover el desarrollo sustentable de Argentina.
            </p>
          </div>

          {/* Leadership Team */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Equipo Directivo</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold mb-3">{member.position}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-accent/20 text-accent-foreground text-xs px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Areas */}
          <div>
            <h2 className="text-3xl font-bold mb-12 text-center">Áreas de Trabajo</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamAreas.map((area, index) => (
                <div key={index} className="bg-background border border-border rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{area.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{area.description}</p>
                  <p className="text-primary font-semibold">{area.members} integrantes</p>
                </div>
              ))}
            </div>
          </div>

          {/* Join our team */}
          <div className="mt-20 bg-card border border-border rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">¿Querés sumarte a nuestro equipo?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Estamos siempre buscando profesionales comprometidos con nuestra misión. Si querés ser parte de Fundación Pro Buenos Aires, enviános tu CV.
            </p>
            <a 
              href="mailto:info@probuenosaires.org?subject=Trabajá con nosotros"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Enviar CV
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
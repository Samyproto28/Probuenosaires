import { Users, Briefcase, GraduationCap } from "lucide-react"

export function ImpactStats() {
  const stats = [
    {
      icon: Users,
      number: "7,513",
      label: "Participantes en Nuestros Programas",
    },
    {
      icon: Briefcase,
      number: "2,411",
      label: "Empresas Asistidas",
    },
    {
      icon: GraduationCap,
      number: "10,000+",
      label: "Personas Capacitadas",
    },
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#272d64]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-10 h-10 lg:w-12 lg:h-12 text-[#272d64]" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-[#272d64] mb-3">{stat.number}</div>
              <div className="text-base lg:text-lg text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

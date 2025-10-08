import { Button } from "@/components/ui/button"

export function Partners() {
  const partners = [
    { name: "Partner 1", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Partner 2", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Partner 3", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Partner 4", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Partner 5", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Partner 6", logo: "/placeholder.svg?height=80&width=160" },
  ]

  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Alianzas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas Amigas SOS nos acompañan en el desarrollo de nuestro trabajo
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mb-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg flex items-center justify-center hover:shadow-md transition-shadow"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="max-w-full h-12 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/placeholder.svg?height=600&width=1400"
            alt="Alianzas y voluntarios de Fundación Pro Buenos Aires"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">¿Querés ser parte?</h3>
              <p className="text-lg mb-6 max-w-2xl">
                Sumate también y ayudanos a construir un futuro mejor para Argentina
              </p>
              <Button size="lg" className="bg-white text-[#272d64] hover:bg-white/90 h-12 px-8">
                Conocé más
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

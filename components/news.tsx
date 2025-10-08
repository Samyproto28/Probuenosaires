import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export function News() {
  const newsItems = [
    {
      title: "ABC de la Importación - Proba Comex",
      date: "Sep 26, 2025",
      category: "Capacitación",
      excerpt:
        "Descargá el programa completo de este taller pensado para importadores. Claves para entender el proceso completo de importación en Argentina.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Pymes Saludables - Alianza estratégica con IINCA",
      date: "Sep 15, 2025",
      category: "Novedades",
      excerpt:
        "Nos enorgullece anunciar esta alianza estratégica que permitirá diseñar e implementar proyectos innovadores para el desarrollo productivo de PyMEs.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "John Maxwell en Argentina: Liderazgo que transforma",
      date: "Sep 3, 2025",
      category: "Eventos",
      excerpt:
        "Fundación Pro Buenos Aires fue aliada estratégica en este evento que reunió a más de 500 líderes y profesionales.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="noticias" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-4">
          <div>
            <div className="inline-block mb-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold px-8 py-4 border-4 border-[#5979ad] rounded-full">
                Últimas noticias
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Mantente informado sobre nuestras últimas actividades e impacto
            </p>
          </div>
          <Button
            variant="outline"
            className="border-[#272d64] text-[#272d64] hover:bg-[#272d64] hover:text-white bg-transparent"
          >
            Ver más noticias
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#272d64] text-white text-xs font-semibold px-3 py-1.5 rounded">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <time>{item.date}</time>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#272d64] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-4">{item.excerpt}</p>
                <Button variant="link" className="text-[#272d64] p-0 h-auto font-semibold" asChild>
                  <a href="#">Leer más →</a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

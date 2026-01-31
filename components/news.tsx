import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, ArrowUpRight, Newspaper } from "lucide-react"
import { MotionViewport } from "@/components/ui/motion-viewport"

export function News() {
  const newsItems = [
    {
      title: "ABC de la Importación - Proba Comex",
      date: "Sep 26, 2025",
      category: "Capacitación",
      categoryColor: "bg-[#8dc2ff]",
      excerpt:
        "Descargá el programa completo de este taller pensado para importadores. Claves para entender el proceso completo de importación en Argentina.",
    },
    {
      title: "Pyme Saludable - Alianza estratégica con IINCA",
      date: "Sep 15, 2025",
      category: "Novedades",
      categoryColor: "bg-[#89abe6]",
      excerpt:
        "Nos enorgullece anunciar esta alianza estratégica que permitirá diseñar e implementar proyectos innovadores para el desarrollo productivo de PyMEs.",
    },
    {
      title: "John Maxwell en Argentina: Liderazgo que transforma",
      date: "Sep 3, 2025",
      category: "Eventos",
      categoryColor: "bg-[#111269]",
      excerpt:
        "Fundación Pro Buenos Aires fue aliada estratégica en este evento que reunió a más de 500 líderes y profesionales.",
    },
  ]

  return (
    <section id="noticias" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#ffffff]" />

      {/* Decorative elements */}
      <div
        className="absolute top-20 right-0 w-96 h-96 opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #111269 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <MotionViewport
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-6"
          initial={{ opacity: 0, y: 20 }}
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#111269]/5 text-[#111269] text-sm font-semibold tracking-wide mb-4">
              <Newspaper className="w-4 h-4 mr-2 inline" />
              NOTICIAS Y EVENTOS
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111269]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Últimas novedades
            </h2>
          </div>

          <Button
            variant="outline"
            className="border-[#111269]/20 text-[#111269] hover:bg-[#111269] hover:text-white hover:border-[#111269] rounded-xl h-12 px-6 font-medium group transition-all duration-300"
          >
            <span>Ver todas las noticias</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </MotionViewport>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {newsItems.map((item, index) => (
            <MotionViewport
              key={index}
              delay={index * 0.15}
              initial={{ opacity: 0, y: 40 }}
              className="group h-full"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/[0.03] border border-[#e2e8f0] hover:shadow-xl hover:shadow-black/[0.06] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                {/* Placeholder image/gradient header */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#111269]/5 to-[#89abe6]/10">
                  {/* Abstract decoration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-32 h-32 rounded-full opacity-20"
                      style={{
                        background: `radial-gradient(circle, ${index === 0 ? "#8dc2ff" : index === 1 ? "#89abe6" : "#111269"} 0%, transparent 70%)`,
                      }}
                    />
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`${item.categoryColor} text-white text-xs font-semibold px-3 py-1.5 rounded-lg`}>
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-sm text-[#111269]/50 mb-4">
                    <Calendar className="w-4 h-4" />
                    <time>{item.date}</time>
                  </div>

                  <h3
                    className="text-xl font-bold mb-4 text-[#111269] group-hover:text-[#8dc2ff] transition-colors duration-300 line-clamp-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-[#111269]/60 leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {item.excerpt}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-[#111269] font-semibold hover:text-[#8dc2ff] transition-colors group/link"
                  >
                    <span>Leer más</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </MotionViewport>
          ))}
        </div>
      </div>
    </section>
  )
}

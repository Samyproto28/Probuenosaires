import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Niños en programas de Fundación Pro Buenos Aires"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-balance leading-tight text-white drop-shadow-lg">
            Desde 1998 trabajando por el desarrollo sustentable de Argentina
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 lg:mb-12 text-pretty leading-relaxed max-w-3xl mx-auto drop-shadow">
            Impulsamos proyectos que transforman comunidades, generan empleo y crean oportunidades para un futuro mejor
            en toda Argentina
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base h-14 px-10 bg-[#272d64] hover:bg-[#1f2350] text-white shadow-lg">
              Conocer nuestros programas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" className="text-base h-14 px-10 bg-[#5979ad] hover:bg-[#4a6594] text-white shadow-lg">
              Doná hoy
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/80 rounded-full" />
        </div>
      </div>
    </section>
  )
}

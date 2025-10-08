import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export function DonationCTA() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl shadow-xl">
          <div className="bg-[#272d64] text-white p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Doná hoy</h2>
            <p className="text-lg lg:text-xl mb-4 leading-relaxed text-white/95">
              Fortalecemos a todas una generacion Joven a fortalecer sus habilidades
            </p>
            <p className="text-base mb-8 leading-relaxed text-white/90">Tu aporte hace la diferencia.</p>
            <Button
              size="lg"
              className="bg-white text-[#272d64] hover:bg-white/90 h-14 px-10 text-base font-semibold w-fit"
            >
              <Heart className="mr-2 h-5 w-5" />
              Quiero donar
            </Button>
          </div>

          <div className="relative h-80 lg:h-auto">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Niños sonriendo en programas de la fundación"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

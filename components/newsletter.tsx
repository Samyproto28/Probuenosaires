import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-[#272d64] text-white p-10 lg:p-12 rounded-2xl">
            <Mail className="w-12 h-12 mb-6" />
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Suscribite a nuestro Newsletter</h2>
            <p className="text-white/90 mb-8 leading-relaxed">
              Te enviaremos noticias, videos y novedades sobre nuestro trabajo y cómo podés ayudar.
            </p>
            <form className="space-y-4">
              <Input type="email" placeholder="Ingresá tu email" className="bg-white text-foreground h-12 border-0" />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-white text-[#272d64] hover:bg-white/90 h-12 font-semibold"
              >
                Suscribirme
              </Button>
            </form>
          </div>

          <div className="bg-secondary p-10 lg:p-12 rounded-2xl border border-border">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Comunicate con nosotros</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Por dudas, consultas y comentarios llamanos al (011) 4304-4266 o escribinos a nuestro WhatsApp
            </p>
            <Button size="lg" className="bg-[#5979ad] hover:bg-[#4a6594] text-white h-12 px-8">
              Enviar mensaje
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

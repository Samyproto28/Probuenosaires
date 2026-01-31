import { Button } from "@/components/ui/button"
import { Handshake, ArrowRight } from "lucide-react"
import { MotionViewport } from "@/components/ui/motion-viewport"

export function Partners() {
  const partners = [
    { name: "SEPYME", abbr: "SEP" },
    { name: "IINCA", abbr: "IIN" },
    { name: "Ministerio de Desarrollo Productivo", abbr: "MDP" },
    { name: "ONU Argentina", abbr: "ONU" },
    { name: "CAC", abbr: "CAC" },
    { name: "CAME", abbr: "CAM" },
  ]

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#f0f7ff] to-[#ffffff]" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e2e8f0] to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <MotionViewport className="text-center mb-16" initial={{ opacity: 0, y: 20 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8dc2ff]/10 text-[#111269] text-sm font-semibold tracking-wide mb-6">
            <Handshake className="w-4 h-4" />
            NUESTROS ALIADOS
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111269] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Alianzas estratégicas
          </h2>

          <p className="text-lg text-[#111269]/60 max-w-2xl mx-auto">
            Empresas y organizaciones que nos acompañan en nuestra misión de desarrollo sustentable
          </p>
        </MotionViewport>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-16">
          {partners.map((partner, index) => (
            <MotionViewport
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              delay={0.3 + index * 0.05}
              transition={{ duration: 0.4 }}
              className="group"
            >
              <div className="bg-white p-6 lg:p-8 rounded-2xl border border-[#e2e8f0] hover:border-[#8dc2ff]/30 hover:shadow-lg hover:shadow-[#8dc2ff]/5 transition-all duration-300 flex flex-col items-center justify-center aspect-square">
                {/* Placeholder logo - using abbreviation */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#111269]/5 to-[#89abe6]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold text-[#111269]/60 group-hover:text-[#111269] transition-colors">
                    {partner.abbr}
                  </span>
                </div>
                <span className="text-xs text-[#111269]/50 text-center font-medium">
                  {partner.name}
                </span>
              </div>
            </MotionViewport>
          ))}
        </div>

        {/* Join CTA Card */}
        <MotionViewport
          initial={{ opacity: 0, y: 30 }}
          delay={0.5}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#111269] via-[#1a2754] to-[#89abe6]" />

          {/* Decorative elements */}
          <div
            className="absolute top-0 right-0 w-96 h-96 opacity-15"
            style={{ background: "radial-gradient(circle, rgba(141, 194, 255, 0.5) 0%, transparent 60%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 opacity-10"
            style={{ background: "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 60%)" }}
          />

          {/* Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.1) 60%, transparent 60%),
                linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.1) 60%, transparent 60%)
              `,
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3
                className="text-3xl lg:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                ¿Querés ser parte de nuestra{" "}
                <span className="text-[#8dc2ff]">red de aliados</span>?
              </h3>
              <p className="text-white/60 text-lg max-w-2xl">
                Sumate y ayudanos a construir un futuro mejor para Argentina.
                Juntos podemos generar un impacto positivo en miles de vidas.
              </p>
            </div>

            <Button
              size="lg"
              className="group bg-gradient-to-r from-[#8dc2ff] to-[#89abe6] text-[#111269] hover:from-[#e0efff] hover:to-[#8dc2ff] h-14 px-10 font-semibold rounded-xl shadow-lg shadow-[#8dc2ff]/20 transition-all duration-300 hover:scale-[1.02] flex-shrink-0"
              asChild
            >
              <a href="#contacto">
                <span>Conocé cómo sumarte</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </MotionViewport>
      </div>
    </section>
  )
}

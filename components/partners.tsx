"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { MotionViewport } from "@/components/ui/motion-viewport"
import Image from "next/image"
import { motion } from "framer-motion"

const redLogos = [
  { name: "RACI", src: "/Redes/raci-logo.png" },
  { name: "FOCAVA", src: "/Redes/FOCAVA-400x400.gif" },
  { name: "CEPBA", src: "/Redes/WhatsApp-Image-2023-07-27-at-09.11.49-768x220.jpeg" },
  { name: "VINTECAR 4.0", src: "/Redes/Vintecar-4.0.png" },
  { name: "Círculo de Periodistas", src: "/Redes/Circulo-de-Periodistas-480x480.jpg" },
]

const supportLogos = [
  { name: "AMIA", src: "/Alianzas/Servicio-de-Empleo-AMIA-fondo-transparente.png" },
  { name: "ENCADENAR", src: "/Alianzas/WhatsApp-Image-2024-04-22-at-11.04.05-980x980.jpeg" },
  { name: "RUBIO BRITOS", src: "/Alianzas/logobritos-300x68.png" },
  { name: "ABIZ", src: "/Alianzas/logo-ABS.png" },
  { name: "RE92.5", src: "/Alianzas/logo-principal-980x564.png" },
  { name: "Impactos Ambientales", src: "/Alianzas/logo-Basura-CERO.jpg" },
  { name: "Grupo Founders", src: "/Alianzas/1517269487024.jpg" },
  { name: "Aliado", src: "/Alianzas/1650294436848.jpg" },
  { name: "Dos Vagones", src: "/Alianzas/2-480x480.png" },
  { name: "WEG", src: "/Alianzas/2560px-WEG_Equipamentos_Eletricos.svg_-2048x1437.png" },
  { name: "Centro Comercial", src: "/Alianzas/302240863_579055067311244_298514406941690006_n-980x980.jpg" },
  { name: "Conexión con Futuro", src: "/Alianzas/315986445_100474029566665_2168239295716529853_n.jpg" },
  { name: "InvestBA", src: "/Alianzas/326526035_1354568142047273_8984838584705020621_n.jpg" },
  { name: "Cámara Arg-Israeli", src: "/Alianzas/Camara-arg-israeli.png" },
  { name: "Cambre", src: "/Alianzas/Cambre-300x138.jpg" },
  { name: "Aliado", src: "/Alianzas/Captura-de-pantalla-2023-07-26-064017-768x761.jpg" },
  { name: "Dieger", src: "/Alianzas/DIEGERlogo.png" },
  { name: "Escudo", src: "/Alianzas/ESCUDO-238x300-1.jpg" },
  { name: "Fagua", src: "/Alianzas/Fagua20anos.jpg" },
  { name: "Grupo Mayo", src: "/Alianzas/Grupo-MAyo.png" },
  { name: "Ingesa", src: "/Alianzas/Ingesa-logo-480x480.jpg" },
  { name: "Limpiolux", src: "/Alianzas/Limpiolux-Logo-02-scaled.jpg" },
  { name: "Balcarce", src: "/Alianzas/Logo-BC-jpg.jpg" },
  { name: "Kosc", src: "/Alianzas/Logo-Kosc.png" },
  { name: "Quilmes", src: "/Alianzas/Logo-Mun-Quilmes.png" },
  { name: "Ogus", src: "/Alianzas/Logo-Ogus.webp" },
  { name: "UNQ", src: "/Alianzas/Logo-UNQ-RGB.png" },
  { name: "Min. Capital Humano", src: "/Alianzas/Logo_min_capital_humano.png" },
  { name: "Lopez Comendador", src: "/Alianzas/LopezConmemador.png" },
  { name: "Selsa", src: "/Alianzas/Mesa-de-trabajo-189selsa.webp" },
  { name: "Pampa Marketing", src: "/Alianzas/Mp25M.jpg" },
  { name: "OEI", src: "/Alianzas/OEI_marca_rgb_negativo_esmeralda.jpg" },
  { name: "Aliado", src: "/Alianzas/WhatsApp-Image-2018-768x180.jpg" },
  { name: "Aliado", src: "/Alianzas/WhatsApp-Image-2023-10-03-at-09.43.47.jpeg" },
  { name: "LHR", src: "/Alianzas/WhatsApp-Image-2024-01-20-at-10.09.15.jpeg" },
  { name: "Uniplast", src: "/Alianzas/WhatsApp-Image-2024-01-20-at-10.09.17-1.jpeg" },
  { name: "Aliado", src: "/Alianzas/WhatsApp-Image-2024-02-23-at-08.56.46.jpeg" },
  { name: "Aliado", src: "/Alianzas/WhatsApp-Image-2024-04-24-at-16.35.02.jpeg" },
  { name: "Quintela", src: "/Alianzas/WhatsApp-Image-2024-09-18-at-06.26.59-300x130.jpeg" },
  { name: "Acerías Berisso", src: "/Alianzas/WhatsApp-Image-2024-10-17-at-05.32.16-300x110.jpeg" },
  { name: "EJ Solari", src: "/Alianzas/WhatsApp-Image-2024-11-07-at-13.32.33.jpeg" },
  { name: "Postal+", src: "/Alianzas/WhatsApp-Image-2024-12-09-at-11.07.32.jpeg" },
  { name: "TEM-FLOR", src: "/Alianzas/WhatsApp-Image-2024-12-10-at-10.03.06.jpeg" },
  { name: "Romy", src: "/Alianzas/WhatsApp-Image-2024-12-18-at-13.28.36.jpeg" },
  { name: "Sergio Cerullo", src: "/Alianzas/WhatsApp-Image-2024-12-18-at-15.19.53-480x102.jpeg" },
  { name: "Bolsas Ecológicas", src: "/Alianzas/WhatsApp-Image-2024-12-26-at-11.44.48.jpeg" },
  { name: "LH", src: "/Alianzas/WhatsApp-Image-2024-12-26-at-11.46.12-980x980.jpeg" },
  { name: "JLF", src: "/Alianzas/WhatsApp-Image-2025-01-20-at-11.27.33.jpeg" },
  { name: "Alimentos Santa Cruz", src: "/Alianzas/WhatsApp-Image-2025-01-20-at-14.10.32.jpeg" },
  { name: "Bloque Grafico", src: "/Alianzas/WhatsApp-Image-2025-01-21-at-10.16.02.jpeg" },
  { name: "EcoTec", src: "/Alianzas/WhatsApp-Image-2025-01-23-at-16.37.10.jpeg" },
  { name: "Berisys", src: "/Alianzas/WhatsApp-Image-2025-01-23-at-16.47.59-980x643.jpeg" },
  { name: "Pallet PRO", src: "/Alianzas/WhatsApp-Image-2025-01-23-at-16.49.24-480x480.jpeg" },
  { name: "PLP", src: "/Alianzas/WhatsApp-Image-2025-01-23-at-16.50.21.jpeg" },
  { name: "Walker", src: "/Alianzas/WhatsApp-Image-2025-01-23-at-16.51.50.jpeg" },
  { name: "Autopartes Nitt", src: "/Alianzas/WhatsApp-Image-2025-01-23-at-16.52.21.jpeg" },
  { name: "Graphipack", src: "/Alianzas/WhatsApp-Image-2025-01-23-at-16.52.57.jpeg" },
  { name: "Starting Point", src: "/Alianzas/WhatsApp-Image-2025-02-14-at-15.36.19.jpeg" },
  { name: "Realpaint", src: "/Alianzas/WhatsApp-Image-2025-02-26-at-15.12.38.jpeg" },
  { name: "Fibran Sur", src: "/Alianzas/WhatsApp-Image-2025-02-26-at-15.12.39.jpeg" },
  { name: "Banco Columbia", src: "/Alianzas/WhatsApp-Image-2025-02-28-at-10.55.20-980x963.jpeg" },
  { name: "PL", src: "/Alianzas/WhatsApp-Image-2025-04-09-at-15.10.05.jpeg" },
  { name: "Molinaro", src: "/Alianzas/WhatsApp-Image-2025-05-27-at-16.44.30-1.jpeg" },
  { name: "Gestion Parque", src: "/Alianzas/WhatsApp-Image-2025-05-30-at-15.49.59-980x821.jpeg" },
  { name: "Mante-Baires", src: "/Alianzas/WhatsApp-Image-2025-05-30-at-15.50.00.jpeg" },
  { name: "Eco Friendly", src: "/Alianzas/WhatsApp-Image-2025-07-10-at-08.55.40-980x980.jpeg" },
  { name: "PCCP", src: "/Alianzas/WhatsApp-Image-2025-10-21-at-13.28.29-480x297.jpeg" },
  { name: "130 AMIA", src: "/Alianzas/WhatsApp-Image-2025-12-19-at-13.09.29.jpeg" },
  { name: "Aliado", src: "/Alianzas/YJTNFWEJHVALJLCNMZSUAZKHSA-980x490.png" },
  { name: "Center Box", src: "/Alianzas/center-box-logo.jpg" },
  { name: "Download", src: "/Alianzas/descarga-1.jpg" },
  { name: "Download", src: "/Alianzas/descarga-1.png" },
  { name: "Download", src: "/Alianzas/descarga-2.jpg" },
  { name: "Images", src: "/Alianzas/images.png" },
  { name: "Micro Control", src: "/Alianzas/isologo-microcontrol-180x80-1.png" },
  { name: "Fundalat", src: "/Alianzas/logo-Fundalat.png" },
  { name: "Asoleb", src: "/Alianzas/logo-asoleb-colores-400x140-1.png" },
  { name: "Banco de Comercio", src: "/Alianzas/logo-bco-de-comercio-480x133.png" },
  { name: "Work", src: "/Alianzas/logo-work.jpg" },
  { name: "Aconcagua", src: "/Alianzas/logoAconcagua-energia-e1666377870629-980x219.png" },
  { name: "FonoEmpresa", src: "/Alianzas/logoFonoEmpresa.png" },
  { name: "M&S", src: "/Alianzas/mys.png" },
  { name: "RDS", src: "/Alianzas/rdsMontaje.jpg" },
  { name: "Sasson", src: "/Alianzas/sason-comercial-980x551.jpg" },
  { name: "SICA", src: "/Alianzas/sica.png" },
  { name: "Sinarplast", src: "/Alianzas/sinarplast.png" },
  { name: "Sinergia", src: "/Alianzas/sinergiaempresarialok_logo.jpg" },
]

// Split support logos into two rows for the marquee
const firstRow = supportLogos.slice(0, Math.ceil(supportLogos.length / 2))
const secondRow = supportLogos.slice(Math.ceil(supportLogos.length / 2))

function LogoMarquee({ logos, reverse = false, speed = 40 }: { logos: typeof supportLogos, reverse?: boolean, speed?: number }) {
  return (
    <div className="flex overflow-hidden select-none gap-0 group/marquee py-4">
      <motion.div
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: logos.length * (speed / 10),
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
        className="flex flex-nowrap gap-12 px-6"
      >
        {/* Render logos once */}
        {logos.map((logo, index) => (
          <div
            key={`${logo.src}-${index}`}
            className="relative h-16 md:h-20 w-40 md:w-48 flex-shrink-0 transition-transform duration-300 hover:scale-110"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              sizes="(max-width: 768px) 160px, 192px"
              className="object-contain"
              priority={index < 8}
            />
          </div>
        ))}
        {/* Duplicate logos for seamless loop */}
        {logos.map((logo, index) => (
          <div
            key={`${logo.src}-clone-${index}`}
            className="relative h-16 md:h-20 w-40 md:w-48 flex-shrink-0 transition-transform duration-300 hover:scale-110"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              sizes="(max-width: 768px) 160px, 192px"
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function Partners() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#f0f7ff]/30 to-[#ffffff] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        {/* Network Section */}
        <div className="mb-24">
          <MotionViewport
            initial={{ opacity: 0, y: 20 }}
            className="flex justify-center mb-16"
          >
            <div className="relative group max-w-3xl w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8dc2ff]/20 via-[#111269]/10 to-[#8dc2ff]/20 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition duration-1000"></div>

              <div className="relative px-8 py-4 bg-white/90 backdrop-blur-sm border border-[#8dc2ff]/30 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(141,194,255,0.15)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8dc2ff]/5 to-transparent animate-pulse" />
                <h3 className="text-xl md:text-3xl font-bold text-[#111269] relative z-10 text-center tracking-tight">
                  Integramos las siguientes redes
                </h3>
              </div>
            </div>
          </MotionViewport>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-16 items-center max-w-5xl mx-auto">
            {redLogos.map((logo, index) => (
              <MotionViewport
                key={logo.src}
                initial={{ opacity: 0, scale: 0.9 }}
                delay={index * 0.05} // Reduced delay
                className="group relative h-20 md:h-24 w-full"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-contain transition-transform duration-300 hover:scale-110"
                  aria-hidden="true"
                />
              </MotionViewport>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="mb-24 overflow-hidden">
          <MotionViewport
            initial={{ opacity: 0, y: 20 }}
            className="flex justify-center mb-16"
          >
            <div className="relative group max-w-3xl w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8dc2ff]/20 via-[#111269]/10 to-[#8dc2ff]/20 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition duration-1000"></div>

              <div className="relative px-8 py-4 bg-white/90 backdrop-blur-sm border border-[#8dc2ff]/30 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(141,194,255,0.15)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8dc2ff]/5 to-transparent animate-pulse" />
                <h3 className="text-xl md:text-3xl font-bold text-[#111269] relative z-10 text-center tracking-tight">
                  Apoyan o acompañan nuestro proyecto
                </h3>
              </div>
            </div>
          </MotionViewport>

          <div className="relative space-y-8">
            {/* Added subtle edge fades */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <LogoMarquee logos={firstRow} speed={50} />
            <LogoMarquee logos={secondRow} reverse speed={50} />
          </div>
        </div>

        {/* Join CTA Card */}
        <MotionViewport
          initial={{ opacity: 0, y: 30 }}
          delay={0.2}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#111269]/10"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#111269] via-[#1a2754] to-[#111269]" />

          {/* Decorative elements */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20"
            style={{ background: "radial-gradient(circle, #8dc2ff 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10"
            style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
          />

          <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <h3
                className="text-3xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                ¿Querés Ser Parte De Nuestra{" "}
                <span className="text-[#8dc2ff]">Red De Aliados</span>?
              </h3>
              <p className="text-white/70 text-lg lg:text-xl max-w-2xl leading-relaxed">
                Sumate y ayudanos a construir un futuro mejor para Argentina.
                Juntos podemos generar un impacto positivo en miles de vidas.
              </p>
            </div>

            <Button
              size="lg"
              className="group bg-[#8dc2ff] text-[#111269] hover:bg-white hover:text-[#111269] h-16 px-12 text-lg font-bold rounded-2xl shadow-xl shadow-[#8dc2ff]/20 transition-all duration-300 hover:scale-[1.05] flex-shrink-0"
              asChild
            >
              <a href="#contacto">
                <span>Conocé Cómo Sumarte</span>
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </MotionViewport>
      </div>
    </section>
  )
}

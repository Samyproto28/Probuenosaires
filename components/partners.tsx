import { client } from "@/sanity/lib/client"
import { redLogosQuery, alianzaLogosQuery } from "@/sanity/lib/queries"
import { PartnersClient, LogoItem } from "./partners-client"

// Hardcoded fallback data — used when Sanity has no logos yet
const fallbackRedLogos: LogoItem[] = [
  { _id: "fallback-1", name: "RACI", src: "/Redes/raci-logo.png", tier: "red" },
  { _id: "fallback-2", name: "FOCAVA", src: "/Redes/FOCAVA-400x400.gif", tier: "red" },
  { _id: "fallback-3", name: "CEPBA", src: "/Redes/WhatsApp-Image-2023-07-27-at-09.11.49-768x220.jpeg", tier: "red" },
  { _id: "fallback-4", name: "VINTECAR 4.0", src: "/Redes/Vintecar-4.0.png", tier: "red" },
  { _id: "fallback-5", name: "Círculo de Periodistas", src: "/Redes/Circulo-de-Periodistas-480x480.jpg", tier: "red" },
]

const fallbackSupportLogos: LogoItem[] = [
  { _id: "fs-1", name: "AMIA", src: "/Alianzas/Servicio-de-Empleo-AMIA-fondo-transparente.png", tier: "alianza" },
  { _id: "fs-2", name: "ENCADENAR", src: "/Alianzas/WhatsApp-Image-2024-04-22-at-11.04.05-980x980.jpeg", tier: "alianza" },
  { _id: "fs-3", name: "RUBIO BRITOS", src: "/Alianzas/logobritos-300x68.png", tier: "alianza" },
  { _id: "fs-4", name: "ABIZ", src: "/Alianzas/logo-ABS.png", tier: "alianza" },
  { _id: "fs-5", name: "RE92.5", src: "/Alianzas/logo-principal-980x564.png", tier: "alianza" },
  { _id: "fs-6", name: "Impactos Ambientales", src: "/Alianzas/logo-Basura-CERO.jpg", tier: "alianza" },
  { _id: "fs-7", name: "Grupo Founders", src: "/Alianzas/1517269487024.jpg", tier: "alianza" },
  { _id: "fs-8", name: "Aliado", src: "/Alianzas/1650294436848.jpg", tier: "alianza" },
  { _id: "fs-9", name: "Dos Vagones", src: "/Alianzas/2-480x480.png", tier: "alianza" },
  { _id: "fs-10", name: "WEG", src: "/Alianzas/2560px-WEG_Equipamentos_Eletricos.svg_-2048x1437.png", tier: "alianza" },
  { _id: "fs-11", name: "Centro Comercial", src: "/Alianzas/302240863_579055067311244_298514406941690006_n-980x980.jpg", tier: "alianza" },
  { _id: "fs-12", name: "Conexión con Futuro", src: "/Alianzas/315986445_100474029566665_2168239295716529853_n.jpg", tier: "alianza" },
  { _id: "fs-13", name: "InvestBA", src: "/Alianzas/326526035_1354568142047273_8984838584705020621_n.jpg", tier: "alianza" },
  { _id: "fs-14", name: "Cámara Arg-Israeli", src: "/Alianzas/Camara-arg-israeli.png", tier: "alianza" },
  { _id: "fs-15", name: "Cambre", src: "/Alianzas/Cambre-300x138.jpg", tier: "alianza" },
  { _id: "fs-16", name: "Aliado", src: "/Alianzas/Captura-de-pantalla-2023-07-26-064017-768x761.jpg", tier: "alianza" },
  { _id: "fs-17", name: "Dieger", src: "/Alianzas/DIEGERlogo.png", tier: "alianza" },
  { _id: "fs-18", name: "Escudo", src: "/Alianzas/ESCUDO-238x300-1.jpg", tier: "alianza" },
  { _id: "fs-19", name: "Fagua", src: "/Alianzas/Fagua20anos.jpg", tier: "alianza" },
  { _id: "fs-20", name: "Grupo Mayo", src: "/Alianzas/Grupo-MAyo.png", tier: "alianza" },
  { _id: "fs-21", name: "Ingesa", src: "/Alianzas/Ingesa-logo-480x480.jpg", tier: "alianza" },
  { _id: "fs-22", name: "Limpiolux", src: "/Alianzas/Limpiolux-Logo-02-scaled.jpg", tier: "alianza" },
  { _id: "fs-23", name: "Balcarce", src: "/Alianzas/Logo-BC-jpg.jpg", tier: "alianza" },
  { _id: "fs-24", name: "Kosc", src: "/Alianzas/Logo-Kosc.png", tier: "alianza" },
  { _id: "fs-25", name: "Quilmes", src: "/Alianzas/Logo-Mun-Quilmes.png", tier: "alianza" },
  { _id: "fs-26", name: "Ogus", src: "/Alianzas/Logo-Ogus.webp", tier: "alianza" },
  { _id: "fs-27", name: "UNQ", src: "/Alianzas/Logo-UNQ-RGB.png", tier: "alianza" },
  { _id: "fs-28", name: "Min. Capital Humano", src: "/Alianzas/Logo_min_capital_humano.png", tier: "alianza" },
  { _id: "fs-29", name: "Lopez Comendador", src: "/Alianzas/LopezConmemador.png", tier: "alianza" },
  { _id: "fs-30", name: "Selsa", src: "/Alianzas/Mesa-de-trabajo-189selsa.webp", tier: "alianza" },
  { _id: "fs-31", name: "Pampa Marketing", src: "/Alianzas/Mp25M.jpg", tier: "alianza" },
  { _id: "fs-32", name: "OEI", src: "/Alianzas/OEI_marca_rgb_negativo_esmeralda.jpg", tier: "alianza" },
  { _id: "fs-33", name: "Aliado", src: "/Alianzas/WhatsApp-Image-2018-768x180.jpg", tier: "alianza" },
  { _id: "fs-34", name: "Aliado", src: "/Alianzas/WhatsApp-Image-2023-10-03-at-09.43.47.jpeg", tier: "alianza" },
  { _id: "fs-35", name: "LHR", src: "/Alianzas/WhatsApp-Image-2024-01-20-at-10.09.15.jpeg", tier: "alianza" },
  { _id: "fs-36", name: "Uniplast", src: "/Alianzas/WhatsApp-Image-2024-01-20-at-10.09.17-1.jpeg", tier: "alianza" },
  { _id: "fs-37", name: "Aliado", src: "/Alianzas/WhatsApp-Image-2024-02-23-at-08.56.46.jpeg", tier: "alianza" },
  { _id: "fs-38", name: "Aliado", src: "/Alianzas/WhatsApp-Image-2024-04-24-at-16.35.02.jpeg", tier: "alianza" },
  { _id: "fs-39", name: "Quintela", src: "/Alianzas/WhatsApp-Image-2024-09-18-at-06.26.59-300x130.jpeg", tier: "alianza" },
  { _id: "fs-40", name: "Acerías Berisso", src: "/Alianzas/WhatsApp-Image-2024-10-17-at-05.32.16-300x110.jpeg", tier: "alianza" },
  { _id: "fs-41", name: "EJ Solari", src: "/Alianzas/WhatsApp-Image-2024-11-07-at-13.32.33.jpeg", tier: "alianza" },
  { _id: "fs-42", name: "Postal+", src: "/Alianzas/WhatsApp-Image-2024-12-09-at-11.07.32.jpeg", tier: "alianza" },
  { _id: "fs-43", name: "TEM-FLOR", src: "/Alianzas/WhatsApp-Image-2024-12-10-at-10.03.06.jpeg", tier: "alianza" },
  { _id: "fs-44", name: "Romy", src: "/Alianzas/WhatsApp-Image-2024-12-18-at-13.28.36.jpeg", tier: "alianza" },
  { _id: "fs-45", name: "Sergio Cerullo", src: "/Alianzas/WhatsApp-Image-2024-12-18-at-15.19.53-480x102.jpeg", tier: "alianza" },
  { _id: "fs-46", name: "Bolsas Ecológicas", src: "/Alianzas/WhatsApp-Image-2024-12-26-at-11.44.48.jpeg", tier: "alianza" },
  { _id: "fs-47", name: "LH", src: "/Alianzas/WhatsApp-Image-2024-12-26-at-11.46.12-980x980.jpeg", tier: "alianza" },
  { _id: "fs-48", name: "JLF", src: "/Alianzas/WhatsApp-Image-2025-01-20-at-11.27.33.jpeg", tier: "alianza" },
  { _id: "fs-49", name: "Alimentos Santa Cruz", src: "/Alianzas/WhatsApp-Image-2025-01-20-at-14.10.32.jpeg", tier: "alianza" },
  { _id: "fs-50", name: "Bloque Grafico", src: "/Alianzas/WhatsApp-Image-2025-01-21-at-10.16.02.jpeg", tier: "alianza" },
  { _id: "fs-51", name: "EcoTec", src: "/Alianzas/WhatsApp-Image-2025-01-23-at-16.37.10.jpeg", tier: "alianza" },
  { _id: "fs-52", name: "Berisys", src: "/Alianzas/WhatsApp-Image-2025-01-23-at-16.47.59-980x643.jpeg", tier: "alianza" },
  { _id: "fs-53", name: "Pallet PRO", src: "/Alianzas/WhatsApp-Image-2025-01-23-at-16.49.24-480x480.jpeg", tier: "alianza" },
  { _id: "fs-54", name: "PLP", src: "/Alianzas/WhatsApp-Image-2025-01-23-at-16.50.21.jpeg", tier: "alianza" },
  { _id: "fs-55", name: "Walker", src: "/Alianzas/WhatsApp-Image-2025-01-23-at-16.51.50.jpeg", tier: "alianza" },
  { _id: "fs-56", name: "Autopartes Nitt", src: "/Alianzas/WhatsApp-Image-2025-01-23-at-16.52.21.jpeg", tier: "alianza" },
  { _id: "fs-57", name: "Graphipack", src: "/Alianzas/WhatsApp-Image-2025-01-23-at-16.52.57.jpeg", tier: "alianza" },
  { _id: "fs-58", name: "Starting Point", src: "/Alianzas/WhatsApp-Image-2025-02-14-at-15.36.19.jpeg", tier: "alianza" },
  { _id: "fs-59", name: "Realpaint", src: "/Alianzas/WhatsApp-Image-2025-02-26-at-15.12.38.jpeg", tier: "alianza" },
  { _id: "fs-60", name: "Fibran Sur", src: "/Alianzas/WhatsApp-Image-2025-02-26-at-15.12.39.jpeg", tier: "alianza" },
  { _id: "fs-61", name: "Banco Columbia", src: "/Alianzas/WhatsApp-Image-2025-02-28-at-10.55.20-980x963.jpeg", tier: "alianza" },
  { _id: "fs-62", name: "PL", src: "/Alianzas/WhatsApp-Image-2025-04-09-at-15.10.05.jpeg", tier: "alianza" },
  { _id: "fs-63", name: "Molinaro", src: "/Alianzas/WhatsApp-Image-2025-05-27-at-16.44.30-1.jpeg", tier: "alianza" },
  { _id: "fs-64", name: "Gestion Parque", src: "/Alianzas/WhatsApp-Image-2025-05-30-at-15.49.59-980x821.jpeg", tier: "alianza" },
  { _id: "fs-65", name: "Mante-Baires", src: "/Alianzas/WhatsApp-Image-2025-05-30-at-15.50.00.jpeg", tier: "alianza" },
  { _id: "fs-66", name: "Eco Friendly", src: "/Alianzas/WhatsApp-Image-2025-07-10-at-08.55.40-980x980.jpeg", tier: "alianza" },
  { _id: "fs-67", name: "PCCP", src: "/Alianzas/WhatsApp-Image-2025-10-21-at-13.28.29-480x297.jpeg", tier: "alianza" },
  { _id: "fs-68", name: "130 AMIA", src: "/Alianzas/WhatsApp-Image-2025-12-19-at-13.09.29.jpeg", tier: "alianza" },
  { _id: "fs-69", name: "Aliado", src: "/Alianzas/YJTNFWEJHVALJLCNMZSUAZKHSA-980x490.png", tier: "alianza" },
  { _id: "fs-70", name: "Center Box", src: "/Alianzas/center-box-logo.jpg", tier: "alianza" },
  { _id: "fs-71", name: "Download", src: "/Alianzas/descarga-1.jpg", tier: "alianza" },
  { _id: "fs-72", name: "Download", src: "/Alianzas/descarga-1.png", tier: "alianza" },
  { _id: "fs-73", name: "Download", src: "/Alianzas/descarga-2.jpg", tier: "alianza" },
  { _id: "fs-74", name: "Images", src: "/Alianzas/images.png", tier: "alianza" },
  { _id: "fs-75", name: "Micro Control", src: "/Alianzas/isologo-microcontrol-180x80-1.png", tier: "alianza" },
  { _id: "fs-76", name: "Fundalat", src: "/Alianzas/logo-Fundalat.png", tier: "alianza" },
  { _id: "fs-77", name: "Asoleb", src: "/Alianzas/logo-asoleb-colores-400x140-1.png", tier: "alianza" },
  { _id: "fs-78", name: "Banco de Comercio", src: "/Alianzas/logo-bco-de-comercio-480x133.png", tier: "alianza" },
  { _id: "fs-79", name: "Work", src: "/Alianzas/logo-work.jpg", tier: "alianza" },
  { _id: "fs-80", name: "Aconcagua", src: "/Alianzas/logoAconcagua-energia-e1666377870629-980x219.png", tier: "alianza" },
  { _id: "fs-81", name: "FonoEmpresa", src: "/Alianzas/logoFonoEmpresa.png", tier: "alianza" },
  { _id: "fs-82", name: "M&S", src: "/Alianzas/mys.png", tier: "alianza" },
  { _id: "fs-83", name: "RDS", src: "/Alianzas/rdsMontaje.jpg", tier: "alianza" },
  { _id: "fs-84", name: "Sasson", src: "/Alianzas/sason-comercial-980x551.jpg", tier: "alianza" },
  { _id: "fs-85", name: "SICA", src: "/Alianzas/sica.png", tier: "alianza" },
  { _id: "fs-86", name: "Sinarplast", src: "/Alianzas/sinarplast.png", tier: "alianza" },
  { _id: "fs-87", name: "Sinergia", src: "/Alianzas/sinergiaempresarialok_logo.jpg", tier: "alianza" },
]

/**
 * Server Component wrapper for Partners section.
 * Fetches logo data from Sanity, falls back to hardcoded data if Sanity is empty.
 * Following Next.js best practice: data fetching in Server Components, no API needed.
 */
export async function Partners() {
  let redLogos: LogoItem[] = fallbackRedLogos
  let supportLogos: LogoItem[] = fallbackSupportLogos

  try {
    const [sanityRedLogos, sanityAlianzaLogos] = await Promise.all([
      client.fetch<LogoItem[]>(redLogosQuery),
      client.fetch<LogoItem[]>(alianzaLogosQuery),
    ])

    // Only use Sanity data if it has content
    if (sanityRedLogos && sanityRedLogos.length > 0) {
      redLogos = sanityRedLogos
    }
    if (sanityAlianzaLogos && sanityAlianzaLogos.length > 0) {
      supportLogos = sanityAlianzaLogos
    }
  } catch (error) {
    // If Sanity fetch fails, use fallback data — the site still works
    console.error("Error fetching logos from Sanity:", error)
  }

  return <PartnersClient redLogos={redLogos} supportLogos={supportLogos} />
}

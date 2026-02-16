import { client } from "@/sanity/lib/client"
import { latestNewsQuery } from "@/sanity/lib/queries"
import { NewsClient, NewsItem } from "./news-client"

// Hardcoded fallback data
const fallbackNewsItems: NewsItem[] = [
  {
    _id: "fallback-n1",
    title: "Reconocimiento a mujeres con compromiso social en Florencio Varela",
    slug: "reconocimiento-mujeres",
    publishedAt: "2026-01-30T00:00:00Z",
    category: "Institucional",
    excerpt:
      "En el marco del 135° aniversario de Florencio Varela, participamos del reconocimiento a mujeres que transforman la comunidad con su labor diaria.",
  },
  {
    _id: "fallback-n2",
    title: "Inauguramos nueva sede en Quilmes Oeste",
    slug: "nueva-sede-quilmes",
    publishedAt: "2025-12-24T00:00:00Z",
    category: "Novedades",
    excerpt:
      "¡Comenzamos una nueva etapa! Abrimos las puertas de nuestra nueva sede para ampliar el impacto de nuestros programas en la región sur.",
  },
  {
    _id: "fallback-n3",
    title: "Convenio clave para impulsar la economía verde",
    slug: "convenio-economia-verde",
    publishedAt: "2026-01-15T00:00:00Z",
    category: "Sustentabilidad",
    excerpt:
      "Firmamos un acuerdo estratégico para promover prácticas sustentables en el sector industrial y fortalecer el compromiso ambiental.",
  },
]

/**
 * Server Component for News section on the homepage.
 * Fetches latest 3 news from Sanity, falls back to hardcoded data.
 */
export async function News() {
  let newsItems: NewsItem[] = fallbackNewsItems

  try {
    const sanityNews = await client.fetch<NewsItem[]>(latestNewsQuery, { limit: 3 })

    if (sanityNews && sanityNews.length > 0) {
      newsItems = sanityNews
    }
  } catch (error) {
    console.error("Error fetching news from Sanity:", error)
  }

  return <NewsClient newsItems={newsItems} />
}

import { client } from "@/sanity/lib/client"
import { allNewsQuery } from "@/sanity/lib/queries"
import { NovedadesContentClient, NovedadesNewsItem } from "./novedades-content-client"

// Hardcoded fallback data
const fallbackPosts: NovedadesNewsItem[] = [
    {
        _id: "fb-1",
        slug: "reconocimiento-mujeres",
        title: "Reconocimiento a mujeres con compromiso social en Florencio Varela",
        publishedAt: "2026-01-30T00:00:00Z",
        category: "Institucional",
        excerpt: "En el marco del 135° aniversario de Florencio Varela, participamos del reconocimiento a mujeres que transforman la comunidad con su labor diaria.",
        author: "Fundación Pro Buenos Aires",
        readTime: "4 min lectura"
    },
    {
        _id: "fb-2",
        slug: "nueva-sede-quilmes",
        title: "Inauguramos nueva sede en Quilmes Oeste",
        publishedAt: "2025-12-24T00:00:00Z",
        category: "Novedades",
        excerpt: "¡Comenzamos una nueva etapa! Abrimos las puertas de nuestra nueva sede para ampliar el impacto de nuestros programas en toda la región sur del conurbano.",
        author: "Prensa Fundación",
        readTime: "3 min lectura"
    },
    {
        _id: "fb-3",
        slug: "convenio-economia-verde",
        title: "Convenio clave para impulsar la economía verde",
        publishedAt: "2026-01-15T00:00:00Z",
        category: "Novedades",
        excerpt: "Firmamos un acuerdo estratégico para promover prácticas sustentables en el sector industrial, acompañando a las pymes en su transición hacia la economía circular.",
        author: "Área Sustentabilidad",
        readTime: "5 min lectura"
    },
    {
        _id: "fb-4",
        slug: "colaboracion-arcor",
        title: "Colaboración estratégica con Grupo Arcor",
        publishedAt: "2025-11-27T00:00:00Z",
        category: "Alianzas",
        excerpt: "Avanzamos en una valiosa colaboración para fortalecer las cadenas de valor y potenciar el desarrollo de proveedores locales.",
        author: "Relaciones Institucionales",
        readTime: "4 min lectura"
    },
    {
        _id: "fb-5",
        slug: "alianza-oracle",
        title: "Oracle y Fundación: Aliados para potenciar el Programa Vinculando",
        publishedAt: "2026-01-05T00:00:00Z",
        category: "Institucional",
        excerpt: "Compartimos una visión de futuro con Oracle para acercar la tecnología y el conocimiento técnico a los jóvenes de escuelas técnicas.",
        author: "Programa Vinculando",
        readTime: "6 min lectura"
    },
    {
        _id: "fb-6",
        slug: "visita-neuroidentify",
        title: "Visita de Gleyson Santos (NeuroIdentify)",
        publishedAt: "2025-11-27T00:00:00Z",
        category: "Novedades",
        excerpt: "Recibimos al creador de NeuroIdentify para potenciar la inclusión educativa y laboral en Argentina a través de herramientas tecnológicas innovadoras.",
        author: "Inclusión Laboral",
        readTime: "5 min lectura"
    }
]

/**
 * Server Component for the /novedades blog listing page.
 * Fetches all news from Sanity, falls back to hardcoded data.
 */
export async function NovedadesContent() {
    let blogPosts: NovedadesNewsItem[] = fallbackPosts

    try {
        const sanityPosts = await client.fetch<NovedadesNewsItem[]>(allNewsQuery)

        if (sanityPosts && sanityPosts.length > 0) {
            blogPosts = sanityPosts
        }
    } catch (error) {
        console.error("Error fetching novedades from Sanity:", error)
    }

    return <NovedadesContentClient blogPosts={blogPosts} />
}

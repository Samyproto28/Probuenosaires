/** Re-fetch Sanity data every 30 seconds (ISR) */
export const revalidate = 30

import { Metadata } from "next"
import { notFound } from "next/navigation"
import { client } from "@/sanity/lib/client"
import { programaBySlugQuery, allProgramaSlugsQuery } from "@/sanity/lib/queries"
import { ArticleLayout } from "@/components/article-layout"
import { PortableTextRenderer } from "@/components/portable-text-renderer"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface ProgramaData {
    _id: string
    title: string
    slug: string
    icon: string
    description: string
    impact: string
    impactLabel: string
    mainImageUrl?: string
    localImage?: string
    gradient: string
    href?: string
    publishedAt?: string
    author?: string
    readTime?: string
    summary?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body?: any[]
}

interface PageProps {
    params: Promise<{ slug: string }>
}

// ---------------------------------------------------------------------------
// generateStaticParams
// Pre-genera las rutas de todos los programas activos en Sanity en tiempo de build.
// Nuevos programas creados después del build se generan on-demand via ISR.
// ---------------------------------------------------------------------------
export async function generateStaticParams() {
    const slugs = await client.fetch<{ slug: string }[]>(allProgramaSlugsQuery)
    return slugs.map((item) => ({ slug: item.slug }))
}

// ---------------------------------------------------------------------------
// generateMetadata — SEO dinámico por programa
// ---------------------------------------------------------------------------
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const programa = await client.fetch<ProgramaData>(programaBySlugQuery, { slug })

    if (!programa) {
        return {
            title: "Programa no encontrado | Fundación Pro Buenos Aires",
        }
    }

    return {
        title: `${programa.title} | Fundación Pro Buenos Aires`,
        description: programa.summary || programa.description,
        openGraph: {
            title: programa.title,
            description: programa.summary || programa.description,
            ...(programa.mainImageUrl || programa.localImage
                ? { images: [{ url: programa.mainImageUrl || programa.localImage! }] }
                : {}),
        },
    }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function formatDate(dateString?: string): string {
    if (!dateString) return ""
    try {
        return new Date(dateString).toLocaleDateString("es-AR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        })
    } catch {
        return dateString
    }
}

// ---------------------------------------------------------------------------
// Página del programa individual
// ---------------------------------------------------------------------------
export default async function ProgramaPage({ params }: PageProps) {
    const { slug } = await params
    const programa = await client.fetch<ProgramaData>(programaBySlugQuery, { slug })

    // Si no existe el programa en Sanity → 404
    if (!programa) {
        notFound()
    }

    // La imagen a mostrar en el hero: prioridad Sanity > local > nada
    const heroImage = programa.mainImageUrl || programa.localImage || undefined

    return (
        <ArticleLayout
            title={programa.title}
            category="Programas"
            date={formatDate(programa.publishedAt)}
            readTime={programa.readTime || "5 min"}
            summary={programa.summary || programa.description}
            heroImage={heroImage}
        >
            {programa.body && programa.body.length > 0 ? (
                // Si hay contenido rico editado en Sanity, se renderiza con Portable Text
                <PortableTextRenderer value={programa.body} />
            ) : (
                // Si no hay body todavía, muestra la descripción como contenido mínimo
                <div className="text-lg text-[#111269]/70 leading-relaxed">
                    <p>{programa.description}</p>
                </div>
            )}
        </ArticleLayout>
    )
}

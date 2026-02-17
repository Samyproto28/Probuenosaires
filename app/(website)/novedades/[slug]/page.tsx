/** Re-fetch Sanity data every 30 seconds (ISR) */
export const revalidate = 30

import { Metadata } from "next"
import { notFound } from "next/navigation"
import { client } from "@/sanity/lib/client"
import { noticiaBySlugQuery, allNoticiaSlugsQuery } from "@/sanity/lib/queries"
import { ArticleLayout } from "@/components/article-layout"
import { PortableTextRenderer } from "@/components/portable-text-renderer"

// Types
interface NoticiaData {
    _id: string
    title: string
    slug: string
    publishedAt: string
    category: string
    excerpt: string
    summary?: string
    mainImageUrl?: string
    author?: string
    readTime?: string
    body?: any[]
}

interface PageProps {
    params: Promise<{ slug: string }>
}

/**
 * Generate static paths for all existing news articles.
 * New articles created in Sanity will be rendered on-demand
 * and cached via ISR (dynamicParams is true by default).
 */
export async function generateStaticParams() {
    const slugs = await client.fetch<{ slug: string }[]>(allNoticiaSlugsQuery)
    return slugs.map((item) => ({ slug: item.slug }))
}

/**
 * Dynamic metadata for SEO — each news article gets its own title and description.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const noticia = await client.fetch<NoticiaData>(noticiaBySlugQuery, { slug })

    if (!noticia) {
        return {
            title: "Noticia no encontrada | Fundación Pro Buenos Aires",
        }
    }

    return {
        title: `${noticia.title} | Fundación Pro Buenos Aires`,
        description: noticia.excerpt,
    }
}

function formatDate(dateString: string): string {
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

export default async function NoticiaPage({ params }: PageProps) {
    const { slug } = await params
    const noticia = await client.fetch<NoticiaData>(noticiaBySlugQuery, { slug })

    if (!noticia) {
        notFound()
    }

    return (
        <ArticleLayout
            title={noticia.title}
            category={noticia.category}
            date={formatDate(noticia.publishedAt)}
            readTime={noticia.readTime || "5 min"}
            summary={noticia.summary || noticia.excerpt}
            heroImage={noticia.mainImageUrl}
        >
            {noticia.body ? (
                <PortableTextRenderer value={noticia.body} />
            ) : (
                <div className="text-lg text-[#111269]/70 leading-relaxed">
                    <p>{noticia.excerpt}</p>
                </div>
            )}
        </ArticleLayout>
    )
}

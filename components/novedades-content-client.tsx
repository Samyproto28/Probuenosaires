"use client"

import { Button } from "@/components/ui/button"
import { Calendar, ArrowUpRight, Newspaper, Tag, ChevronRight } from "lucide-react"
import { MotionViewport } from "@/components/ui/motion-viewport"
import Link from "next/link"
import Image from "next/image"

export interface NovedadesNewsItem {
    _id: string
    title: string
    slug: string
    publishedAt: string
    category: string
    excerpt: string
    mainImageUrl?: string
    author?: string
    readTime?: string
}

const categoryColorMap: Record<string, string> = {
    Institucional: "bg-[#111269]",
    Novedades: "bg-[#8dc2ff]",
    Sustentabilidad: "bg-[#89abe6]",
    Alianzas: "bg-[#111269]",
}

function formatDate(dateString: string): string {
    try {
        return new Date(dateString).toLocaleDateString("es-AR", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        })
    } catch {
        return dateString
    }
}

interface NovedadesContentClientProps {
    blogPosts: NovedadesNewsItem[]
}

export function NovedadesContentClient({ blogPosts }: NovedadesContentClientProps) {
    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header Section */}
                <div className="max-w-4xl mb-16">
                    <MotionViewport initial={{ opacity: 0, y: 20 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#111269]/5 text-[#111269] text-sm font-semibold tracking-wide mb-6">
                            <Newspaper className="w-4 h-4 mr-2 inline" />
                            BLOG DE LA FUNDACIÓN
                        </span>
                        <h1
                            className="text-5xl lg:text-7xl font-bold text-[#111269] mb-6 leading-tight"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Novedades y Actualidad <br />
                            <span className="text-[#8dc2ff]">Productiva</span>
                        </h1>
                        <p className="text-xl text-[#111269]/60 max-w-2xl leading-relaxed">
                            Descubrí las últimas noticias sobre capacitación, programas industriales,
                            eventos y todo lo relacionado con el desarrollo productivo en Buenos Aires.
                        </p>
                    </MotionViewport>
                </div>

                {/* Content Grid */}
                <div className="space-y-16">
                    {/* Featured Post */}
                    {blogPosts.length > 0 && (
                        <MotionViewport
                            className="mb-16 group"
                            initial={{ opacity: 0, scale: 0.98 }}
                        >
                            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                {blogPosts[0].mainImageUrl ? (
                                    <Image
                                        src={blogPosts[0].mainImageUrl}
                                        alt={blogPosts[0].title}
                                        fill
                                        className="object-cover"
                                        sizes="100vw"
                                        priority
                                    />
                                ) : null}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111269] via-[#111269]/70 to-[#111269]/30" />

                                <div className="absolute inset-0 p-8 lg:p-16 flex flex-col justify-end">
                                    <div className="max-w-3xl">
                                        <div className="flex items-center gap-4 text-white/80 mb-6 text-sm">
                                            <span className="bg-[#8dc2ff] text-[#111269] px-3 py-1 rounded-lg font-bold">DESTACADO</span>
                                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {formatDate(blogPosts[0].publishedAt)}</span>
                                            <span className="flex items-center gap-1"><Tag className="w-4 h-4" /> {blogPosts[0].category}</span>
                                        </div>
                                        <h2
                                            className="text-3xl lg:text-5xl font-bold text-white mb-6 group-hover:text-[#8dc2ff] transition-colors"
                                            style={{ fontFamily: "var(--font-playfair)" }}
                                        >
                                            {blogPosts[0].title}
                                        </h2>
                                        <p className="text-lg text-white/70 mb-8 line-clamp-2">
                                            {blogPosts[0].excerpt}
                                        </p>
                                        <Button className="bg-[#8dc2ff] hover:bg-white text-[#111269] font-bold rounded-xl px-8 h-12 transition-all group/btn" asChild>
                                            <Link href={`/novedades/${blogPosts[0].slug}`}>
                                                Leer artículo completo
                                                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </MotionViewport>
                    )}

                    {/* Posts Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.slice(1).map((post, index) => (
                            <MotionViewport
                                key={post._id}
                                delay={index * 0.1}
                                initial={{ opacity: 0, y: 30 }}
                                className="group"
                            >
                                <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden hover:shadow-2xl hover:shadow-[#111269]/10 transition-all duration-500 h-full flex flex-col">
                                    <div className="relative h-56 overflow-hidden">
                                        {post.mainImageUrl ? (
                                            <Image
                                                src={post.mainImageUrl}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        ) : (
                                            <div className={`absolute inset-0 bg-gradient-to-br from-[#111269]/5 to-[#89abe6]/20 transition-transform duration-700 group-hover:scale-110`} />
                                        )}
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className={`${categoryColorMap[post.category] || "bg-[#111269]"} text-white text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider`}>
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-3 text-sm text-[#111269]/50 mb-4">
                                            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#8dc2ff]" /> {formatDate(post.publishedAt)}</span>
                                            <span className="w-1 h-1 rounded-full bg-[#e2e8f0]" />
                                            <span>{post.readTime || "5 min lectura"}</span>
                                        </div>

                                        <h3
                                            className="text-xl font-bold text-[#111269] mb-4 group-hover:text-[#8dc2ff] transition-colors line-clamp-2"
                                            style={{ fontFamily: "var(--font-playfair)" }}
                                        >
                                            {post.title}
                                        </h3>

                                        <p className="text-[#111269]/60 mb-8 line-clamp-3 leading-relaxed flex-grow">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between pt-6 border-t border-[#e2e8f0]">
                                            <span className="text-sm font-semibold text-[#111269]/40">{post.author || "Fundación Pro Buenos Aires"}</span>
                                            <Link
                                                href={`/novedades/${post.slug}`}
                                                className="inline-flex items-center gap-2 text-[#111269] font-bold hover:text-[#8dc2ff] transition-colors group/link"
                                            >
                                                Leer más
                                                <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </MotionViewport>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

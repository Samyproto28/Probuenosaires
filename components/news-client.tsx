"use client"

import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, ArrowUpRight, Newspaper } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MotionViewport } from "@/components/ui/motion-viewport"

export interface NewsItem {
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

interface NewsClientProps {
    newsItems: NewsItem[]
}

export function NewsClient({ newsItems }: NewsClientProps) {
    return (
        <section id="noticias" className="py-24 lg:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#ffffff]" />

            {/* Decorative elements */}
            <div
                className="absolute top-20 right-0 w-96 h-96 opacity-[0.03]"
                style={{ background: "radial-gradient(circle, #111269 0%, transparent 70%)" }}
            />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header */}
                <MotionViewport
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                >
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#111269]/5 text-[#111269] text-sm font-semibold tracking-wide mb-4">
                            <Newspaper className="w-4 h-4 mr-2 inline" />
                            NOTICIAS Y EVENTOS
                        </span>
                        <h2
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111269]"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Novedades
                        </h2>
                    </div>

                    <Link href="/novedades">
                        <Button
                            variant="outline"
                            className="border-[#111269]/20 text-[#111269] hover:bg-[#111269] hover:text-white hover:border-[#111269] rounded-xl h-12 px-6 font-medium group transition-[background-color,color,border-color] duration-300"
                        >
                            <span>Ver Todas Las Novedades</span>
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </Button>
                    </Link>
                </MotionViewport>

                {/* News Grid */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {newsItems.map((item, index) => (
                        <MotionViewport
                            key={item._id}
                            delay={index * 0.15}
                            initial={{ opacity: 0, y: 40 }}
                            className="group h-full"
                        >
                            <div className="relative bg-white rounded-2xl p-0 overflow-hidden shadow-lg shadow-black/[0.03] border border-[#e2e8f0] hover:shadow-xl hover:shadow-black/[0.06] transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-2 h-full flex flex-col">
                                {/* Image / gradient header */}
                                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#111269]/5 to-[#89abe6]/10">
                                    {item.mainImageUrl ? (
                                        <Image
                                            src={item.mainImageUrl}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div
                                                className="w-32 h-32 rounded-full opacity-20"
                                                style={{
                                                    background: `radial-gradient(circle, ${index === 0 ? "#8dc2ff" : index === 1 ? "#89abe6" : "#111269"} 0%, transparent 70%)`,
                                                }}
                                            />
                                        </div>
                                    )}

                                    {/* Category badge */}
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className={`${categoryColorMap[item.category] || "bg-[#111269]"} text-white text-xs font-semibold px-3 py-1.5 rounded-lg`}>
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 lg:p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-sm text-[#111269]/50 mb-4">
                                        <Calendar className="w-4 h-4" aria-hidden="true" />
                                        <time>{formatDate(item.publishedAt)}</time>
                                    </div>

                                    <h3
                                        className="text-xl font-bold mb-4 text-[#111269] group-hover:text-[#8dc2ff] transition-colors duration-300 line-clamp-2"
                                        style={{ fontFamily: "var(--font-playfair)" }}
                                    >
                                        {item.title}
                                    </h3>

                                    <p className="text-[#111269]/60 leading-relaxed line-clamp-3 mb-6 flex-grow">
                                        {item.excerpt}
                                    </p>

                                    <Link
                                        href={`/novedades/${item.slug}`}
                                        className="inline-flex items-center gap-1 text-[#111269] font-semibold hover:text-[#8dc2ff] transition-colors group/link"
                                    >
                                        <span>Leer Más</span>
                                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden="true" />
                                    </Link>
                                </div>
                            </div>
                        </MotionViewport>
                    ))}
                </div>
            </div>
        </section>
    )
}

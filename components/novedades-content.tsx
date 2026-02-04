"use client"

import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, ArrowUpRight, Newspaper, Search, Tag, ChevronRight } from "lucide-react"
import { MotionViewport } from "@/components/ui/motion-viewport"
import { useState } from "react"
import Link from "next/link"

export function NovedadesContent() {
    const [activeCategory, setActiveCategory] = useState("Todas")

    const categories = ["Todas", "Capacitación", "Novedades", "Eventos", "Institucional", "Pyme"]

    const blogPosts = [
        {
            id: 1,
            title: "Reconocimiento a mujeres con compromiso social en Florencio Varela",
            date: "30 Ene, 2026",
            category: "Institucional",
            categoryColor: "bg-[#111269]",
            excerpt: "En el marco del 135° aniversario de Florencio Varela, participamos del reconocimiento a mujeres que transforman la comunidad con su labor diaria.",
            image: "/placeholder.jpg",
            author: "Fundación Pro Buenos Aires",
            readTime: "4 min lectura"
        },
        {
            id: 2,
            title: "Inauguramos nueva sede en Quilmes Oeste",
            date: "25 Ene, 2026",
            category: "Novedades",
            categoryColor: "bg-[#8dc2ff]",
            excerpt: "¡Comenzamos una nueva etapa! Abrimos las puertas de nuestra nueva sede para ampliar el impacto de nuestros programas en toda la región sur del conurbano.",
            image: "/placeholder.jpg",
            author: "Prensa Fundación",
            readTime: "3 min lectura"
        },
        {
            id: 3,
            title: "Convenio clave para impulsar la economía verde",
            date: "15 Ene, 2026",
            category: "Novedades",
            categoryColor: "bg-[#89abe6]",
            excerpt: "Firmamos un acuerdo estratégico para promover prácticas sustentables en el sector industrial, acompañando a las pymes en su transición hacia la economía circular.",
            image: "/placeholder.jpg",
            author: "Área Sustentabilidad",
            readTime: "5 min lectura"
        },
        {
            id: 4,
            title: "Colaboración estratégica con Grupo Arcor",
            date: "10 Ene, 2026",
            category: "Alianzas",
            categoryColor: "bg-[#111269]",
            excerpt: "Avanzamos en una valiosa colaboración para fortalecer las cadenas de valor y potenciar el desarrollo de proveedores locales.",
            image: "/placeholder.jpg",
            author: "Relaciones Institucionales",
            readTime: "4 min lectura"
        },
        {
            id: 5,
            title: "Oracle y Fundación: Aliados para potenciar el Programa Vinculando",
            date: "05 Ene, 2026",
            category: "Institucional",
            categoryColor: "bg-[#8dc2ff]",
            excerpt: "Compartimos una visión de futuro con Oracle para acercar la tecnología y el conocimiento técnico a los jóvenes de escuelas técnicas.",
            image: "/placeholder.jpg",
            author: "Programa Vinculando",
            readTime: "6 min lectura"
        },
        {
            id: 6,
            title: "Visita de Gleyson Santos (NeuroIdentify)",
            date: "20 Dic, 2025",
            category: "Novedades",
            categoryColor: "bg-[#89abe6]",
            excerpt: "Recibimos al creador de NeuroIdentify para potenciar la inclusión educativa y laboral en Argentina a través de herramientas tecnológicas innovadoras.",
            image: "/placeholder.jpg",
            author: "Inclusión Laboral",
            readTime: "5 min lectura"
        }
    ]

    const filteredPosts = activeCategory === "Todas"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory)

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

                {/* Filters & Search */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 border-b border-[#e2e8f0] pb-8">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? "bg-[#111269] text-white shadow-lg shadow-[#111269]/20"
                                    : "bg-[#111269]/5 text-[#111269] hover:bg-[#111269]/10"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full lg:w-80 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#111269]/40 group-focus-within:text-[#111269] transition-colors" />
                        <input
                            type="text"
                            placeholder="Buscar publicaciones..."
                            className="w-full pl-12 pr-4 py-3 bg-[#111269]/5 border-transparent focus:border-[#8dc2ff] focus:bg-white focus:ring-4 focus:ring-[#8dc2ff]/10 rounded-xl transition-all outline-none text-[#111269]"
                        />
                    </div>
                </div>

                {/* Featured Post (Optional, could be the first post) */}
                {activeCategory === "Todas" && filteredPosts.length > 0 && (
                    <MotionViewport
                        className="mb-16 group"
                        initial={{ opacity: 0, scale: 0.98 }}
                    >
                        <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            {/* Background with abstract gradient if image not available */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#111269] via-[#111269]/90 to-[#89abe6]/50" />

                            <div className="absolute inset-0 p-8 lg:p-16 flex flex-col justify-end">
                                <div className="max-w-3xl">
                                    <div className="flex items-center gap-4 text-white/80 mb-6 text-sm">
                                        <span className="bg-[#8dc2ff] text-[#111269] px-3 py-1 rounded-lg font-bold">DESTACADO</span>
                                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {filteredPosts[0].date}</span>
                                        <span className="flex items-center gap-1"><Tag className="w-4 h-4" /> {filteredPosts[0].category}</span>
                                    </div>
                                    <h2
                                        className="text-3xl lg:text-5xl font-bold text-white mb-6 group-hover:text-[#8dc2ff] transition-colors"
                                        style={{ fontFamily: "var(--font-playfair)" }}
                                    >
                                        {filteredPosts[0].title}
                                    </h2>
                                    <p className="text-lg text-white/70 mb-8 line-clamp-2">
                                        {filteredPosts[0].excerpt}
                                    </p>
                                    <Button className="bg-[#8dc2ff] hover:bg-white text-[#111269] font-bold rounded-xl px-8 h-12 transition-all group/btn">
                                        Leer artículo completo
                                        <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </MotionViewport>
                )}

                {/* Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.slice(activeCategory === "Todas" ? 1 : 0).map((post, index) => (
                        <MotionViewport
                            key={post.id}
                            delay={index * 0.1}
                            initial={{ opacity: 0, y: 30 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden hover:shadow-2xl hover:shadow-[#111269]/10 transition-all duration-500 h-full flex flex-col">
                                <div className="relative h-56 overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br from-[#111269]/5 to-[#89abe6]/20 transition-transform duration-700 group-hover:scale-110`} />
                                    <div className="absolute top-4 left-4">
                                        <span className={`${post.categoryColor} text-white text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider`}>
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 text-sm text-[#111269]/50 mb-4">
                                        <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#8dc2ff]" /> {post.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-[#e2e8f0]" />
                                        <span>{post.readTime}</span>
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
                                        <span className="text-sm font-semibold text-[#111269]/40">{post.author}</span>
                                        <Link
                                            href={`/novedades/${post.id}`}
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

                {/* Pagination placeholder */}
                <div className="mt-20 flex justify-center">
                    <nav className="flex items-center gap-2">
                        <Button variant="ghost" className="w-10 h-10 p-0 rounded-lg">1</Button>
                        <Button variant="ghost" className="w-10 h-10 p-0 rounded-lg text-[#111269]/40 hover:text-[#111269]">2</Button>
                        <Button variant="ghost" className="w-10 h-10 p-0 rounded-lg text-[#111269]/40 hover:text-[#111269]">3</Button>
                        <div className="px-2">...</div>
                        <Button variant="ghost" className="w-10 h-10 p-0 rounded-lg text-[#111269]/40 hover:text-[#111269]">12</Button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

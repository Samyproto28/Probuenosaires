"use client"

import { ReactNode, useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clock, ChevronRight, Share2, Printer, ArrowUp, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface TableOfContentsItem {
    id: string
    label: string
}

interface ArticleLayoutProps {
    children: ReactNode
    title: string
    category: string
    summary?: string
    toc?: TableOfContentsItem[]
    readTime?: string
    date?: string
    heroImage?: string
}

export function ArticleLayout({
    children,
    title,
    category,
    summary,
    toc,
    readTime = "5 min",
    date,
    heroImage,
}: ArticleLayoutProps) {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const [activeSection, setActiveSection] = useState<string>("")
    const [isMobileTocOpen, setIsMobileTocOpen] = useState(false)

    // Handle scroll spy for TOC
    useEffect(() => {
        if (!toc) return

        const observers = toc.map((item) => {
            const element = document.getElementById(item.id)
            if (!element) return null

            return new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSection(item.id)
                        }
                    })
                },
                { rootMargin: "-20% 0px -60% 0px" }
            )
        })

        observers.forEach((observer, index) => {
            const element = document.getElementById(toc[index].id)
            if (element && observer) observer.observe(element)
        })

        return () => {
            observers.forEach((observer) => observer?.disconnect())
        }
    }, [toc])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const offset = 100 // Header height offset
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
            setIsMobileTocOpen(false)
        }
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#8dc2ff] origin-left z-50"
                style={{ scaleX }}
            />

            <Header />

            {/* Hero Section */}
            <header className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-[#fafafa]">
                {/* Abstract Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>

                {/* Decorative Gradients */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8dc2ff]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#111269]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        {/* Breadcrumbs */}
                        <motion.nav
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 text-sm text-[#111269]/60 mb-8 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide"
                        >
                            <Link href="/" className="hover:text-[#111269] transition-colors">Inicio</Link>
                            <ChevronRight className="w-4 h-4 flex-shrink-0" />
                            <span className="text-[#111269] font-medium">{category}</span>
                        </motion.nav>

                        {/* Article Header Content */}
                        <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                {/* Metadata badges */}
                                <div className="flex flex-wrap items-center gap-4 mb-6">
                                    <span className="px-3 py-1 rounded-full bg-[#111269] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-[#111269]/20">
                                        {category}
                                    </span>
                                    {date && (
                                        <span className="text-sm text-[#111269]/60 font-medium bg-white px-3 py-1 rounded-full border border-[#e2e8f0]">
                                            Actualizado: {date}
                                        </span>
                                    )}
                                    <span className="flex items-center gap-1.5 text-sm text-[#111269]/60 font-medium bg-white px-3 py-1 rounded-full border border-[#e2e8f0]">
                                        <Clock className="w-3.5 h-3.5" />
                                        {readTime} lectura
                                    </span>
                                </div>

                                <h1
                                    className="text-4xl lg:text-6xl font-bold text-[#111269] mb-8 leading-[1.1]"
                                    style={{ fontFamily: "var(--font-playfair)" }}
                                >
                                    {title}
                                </h1>

                                {summary && (
                                    <p className="text-xl lg:text-2xl text-[#111269]/70 font-light leading-relaxed border-l-4 border-[#8dc2ff] pl-6">
                                        {summary}
                                    </p>
                                )}
                                {heroImage && (
                                    <div className="mt-8 relative rounded-2xl overflow-hidden shadow-xl aspect-video w-full border border-[#e2e8f0]">
                                        <Image
                                            src={heroImage}
                                            alt={title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                )}
                            </motion.div>

                            {/* Desktop Actions Sidebar (Optional for Header) */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="hidden lg:flex flex-col gap-4 sticky top-32"
                            >
                                <Button variant="outline" className="w-full justify-start gap-2 border-[#111269]/10 hover:bg-[#111269]/5 hover:text-[#111269]">
                                    <Share2 className="w-4 h-4" />
                                    Compartir
                                </Button>
                                <Button variant="outline" className="w-full justify-start gap-2 border-[#111269]/10 hover:bg-[#111269]/5 hover:text-[#111269]" onClick={() => window.print()}>
                                    <Printer className="w-4 h-4" />
                                    Imprimir
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </header >

            {/* Main Content Layout */}
            < div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative" >
                <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_280px] gap-16 relative">

                    {/* Content Column */}
                    <main className="min-w-0">
                        {children}
                    </main>

                    {/* Sidebar Column */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-32 space-y-8">
                            {/* Table of Contents */}
                            {toc && toc.length > 0 && (
                                <div className="bg-[#fafafa] rounded-2xl p-6 border border-[#e2e8f0]">
                                    <h3
                                        className="text-[#111269] font-bold mb-4 flex items-center gap-2"
                                        style={{ fontFamily: "var(--font-playfair)" }}
                                    >
                                        <Menu className="w-4 h-4" />
                                        Contenido
                                    </h3>
                                    <nav className="flex flex-col space-y-1 relative">
                                        {/* Vertical line track */}
                                        <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#e2e8f0]" />

                                        {toc.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => scrollToSection(item.id)}
                                                className={cn(
                                                    "relative pl-6 py-2 text-sm text-left transition-all duration-300 border-l-2 -ml-[1px]",
                                                    activeSection === item.id
                                                        ? "text-[#111269] font-bold border-[#8dc2ff]"
                                                        : "text-[#111269]/50 font-medium hover:text-[#111269]/80 border-transparent"
                                                )}
                                            >
                                                {item.label}
                                            </button>
                                        ))}
                                    </nav>
                                </div>
                            )}

                            {/* Contact Box */}
                            <div className="bg-[#111269] text-white rounded-2xl p-6 shadow-xl shadow-[#111269]/20">
                                <h3 className="font-bold text-xl mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                                    ¿Necesitas ayuda?
                                </h3>
                                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                                    Nuestro equipo de profesionales está disponible para asesorarte.
                                </p>
                                <Button
                                    className="w-full bg-white text-[#111269] hover:bg-[#8dc2ff] hover:text-white font-bold transition-all"
                                    asChild
                                >
                                    <Link href="/contacto">Contactar Ahora</Link>
                                </Button>
                            </div>

                            {/* Back to Top */}
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={scrollToTop}
                                className="w-full text-[#111269]/40 hover:text-[#111269] hover:bg-transparent"
                            >
                                <ArrowUp className="w-4 h-4 mr-2" />
                                Volver arriba
                            </Button>
                        </div>
                    </aside>
                </div>
            </div >

            {/* Mobile TOC Fab */}
            {
                toc && toc.length > 0 && (
                    <div className="fixed bottom-6 right-6 lg:hidden z-40">
                        <Button
                            size="icon"
                            className="rounded-full h-14 w-14 bg-[#111269] hover:bg-[#1a2754] text-white shadow-2xl"
                            onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
                        >
                            <Menu className="w-6 h-6" />
                        </Button>
                    </div>
                )
            }

            {/* Mobile TOC Drawer (Simplified) */}
            {
                isMobileTocOpen && toc && (
                    <div className="fixed inset-0 z-50 lg:hidden flex items-end sm:items-center justify-center p-4">
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileTocOpen(false)} />
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white w-full max-w-sm rounded-3xl p-6 shadow-2xl relative z-10 mx-auto"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-[#111269]" style={{ fontFamily: "var(--font-playfair)" }}>Indice</h3>
                                <Button variant="ghost" size="sm" onClick={() => setIsMobileTocOpen(false)}>Cerrar</Button>
                            </div>
                            <nav className="flex flex-col gap-2">
                                {toc.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className="w-full text-left p-3 rounded-xl hover:bg-[#efefef] text-[#111269] font-medium transition-colors"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </nav>
                        </motion.div>
                    </div>
                )
            }

            <Footer />
        </div >
    )
}

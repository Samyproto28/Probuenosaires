"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { MotionViewport } from "@/components/ui/motion-viewport"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface LogoItem {
    _id: string
    name: string
    src: string
    tier: string
}

function LogoMarquee({ logos, reverse = false, speed = 0.6 }: { logos: LogoItem[], reverse?: boolean, speed?: number }) {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isPaused, setIsPaused] = useState(false)
    const [isManual, setIsManual] = useState(false)

    const handleManualScroll = useCallback((direction: 'left' | 'right') => {
        if (!scrollRef.current) return
        setIsManual(true)
        const container = scrollRef.current
        const amount = 300
        container.scrollBy({
            left: direction === 'left' ? -amount : amount,
            behavior: 'smooth'
        })
    }, [])

    useEffect(() => {
        const container = scrollRef.current
        if (!container || isManual) return

        let frameId: number
        const move = () => {
            if (!isPaused) {
                if (reverse) {
                    container.scrollLeft -= speed
                    if (container.scrollLeft <= 0) {
                        container.scrollLeft = container.scrollWidth / 2
                    }
                } else {
                    container.scrollLeft += speed
                    if (container.scrollLeft >= container.scrollWidth / 2) {
                        container.scrollLeft = 0
                    }
                }
            }
            frameId = requestAnimationFrame(move)
        }

        frameId = requestAnimationFrame(move)
        return () => cancelAnimationFrame(frameId)
    }, [isPaused, isManual, reverse, speed])

    return (
        <div className="group/marquee relative w-full overflow-visible py-4">
            <div
                ref={scrollRef}
                className="flex overflow-hidden select-none cursor-grab active:cursor-grabbing no-scrollbar"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
            >
                <div className="flex flex-nowrap gap-12 px-6">
                    {logos.map((logo, index) => (
                        <div
                            key={`${logo._id}-${index}`}
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
                    {logos.map((logo, index) => (
                        <div
                            key={`${logo._id}-clone-${index}`}
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
                </div>
            </div>

            <div className="absolute inset-y-0 left-2 md:left-4 flex items-center z-50">
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white/90 backdrop-blur-md border-[#8dc2ff] text-[#111269] shadow-[0_0_20px_rgba(141,194,255,0.3)] hover:bg-[#111269] hover:text-white transition-all duration-300 h-10 w-10 md:h-12 md:w-12 border-2"
                    onClick={() => handleManualScroll('left')}
                    aria-label="Anterior"
                >
                    <ChevronLeft className="h-6 w-6 stroke-[3px]" />
                </Button>
            </div>

            <div className="absolute inset-y-0 right-2 md:right-4 flex items-center z-50">
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white/90 backdrop-blur-md border-[#8dc2ff] text-[#111269] shadow-[0_0_20px_rgba(141,194,255,0.3)] hover:bg-[#111269] hover:text-white transition-all duration-300 h-10 w-10 md:h-12 md:w-12 border-2"
                    onClick={() => handleManualScroll('right')}
                    aria-label="Siguiente"
                >
                    <ChevronRight className="h-6 w-6 stroke-[3px]" />
                </Button>
            </div>
        </div>
    )
}

interface PartnersClientProps {
    redLogos: LogoItem[]
    supportLogos: LogoItem[]
}

export function PartnersClient({ redLogos, supportLogos }: PartnersClientProps) {
    const firstRow = supportLogos.slice(0, Math.ceil(supportLogos.length / 2))
    const secondRow = supportLogos.slice(Math.ceil(supportLogos.length / 2))

    return (
        <section className="py-16 lg:py-24 relative overflow-hidden bg-white">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#f0f7ff]/30 to-[#ffffff] pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">

                {/* Network Section */}
                <div className="mb-16">
                    <MotionViewport
                        initial={{ opacity: 0, y: 20 }}
                        className="flex justify-center mb-10"
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
                                key={logo._id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                delay={index * 0.05}
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
                <div className="mb-16 overflow-hidden">
                    <MotionViewport
                        initial={{ opacity: 0, y: 20 }}
                        className="flex justify-center mb-10"
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
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                        <LogoMarquee logos={firstRow} speed={0.6} />
                        <LogoMarquee logos={secondRow} reverse speed={0.6} />
                    </div>
                </div>

                {/* Join CTA Card */}
                <MotionViewport
                    initial={{ opacity: 0, y: 30 }}
                    delay={0.2}
                    className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#111269]/10"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#111269] via-[#1a2754] to-[#111269]" />

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
                            <a href="/contacto">
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

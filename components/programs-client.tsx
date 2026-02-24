"use client"

import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    Handshake,
    Network,
    Globe,
    HeartPulse,
    Radio,
    Cpu,
    Palette,
    Flag,
    Layers,
    Factory,
    Star,
    Target,
    type LucideIcon,
} from "lucide-react"
import { MotionViewport } from "@/components/ui/motion-viewport"
import Image from "next/image"
import Link from "next/link"

// --- Tipos ---

export interface ProgramItem {
    _id: string
    title: string
    slug?: string
    icon: string
    description: string
    impact: string
    impactLabel: string
    mainImageUrl?: string
    gradient: string
    isActive?: boolean
}

// --- Mapa de íconos: string → componente Lucide ---
const iconMap: Record<string, LucideIcon> = {
    Handshake,
    Network,
    Globe,
    HeartPulse,
    Radio,
    Cpu,
    Palette,
    Flag,
    Layers,
    Factory,
    Star,
    Target,
}

// --- Gradientes claros para el impact badge (derivados del gradiente oscuro) ---
const lightGradientMap: Record<string, string> = {
    "from-black/40 to-black/10": "from-[#111269]/5 to-[#89abe6]/5",
    "from-[#8dc2ff] to-[#89abe6]": "from-[#8dc2ff]/5 to-[#89abe6]/5",
    "from-[#405e8c] to-[#111269]": "from-[#405e8c]/5 to-[#111269]/5",
    "from-[#405e8c] to-[#89abe6]": "from-[#405e8c]/5 to-[#89abe6]/5",
    "from-[#8dc2ff] to-[#111269]": "from-[#8dc2ff]/5 to-[#111269]/5",
    "from-[#111269] to-[#405e8c]": "from-[#111269]/5 to-[#405e8c]/5",
}

function getLightGradient(gradient: string): string {
    return lightGradientMap[gradient] ?? "from-[#111269]/5 to-[#89abe6]/5"
}

// --- Props del componente ---
interface ProgramsClientProps {
    programs: ProgramItem[]
    limit?: number
}

export function ProgramsClient({ programs, limit }: ProgramsClientProps) {
    const displayedPrograms = limit ? programs.slice(0, limit) : programs

    return (
        <section id="programas" className="relative py-16 lg:py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#f0f7ff] via-[#ffffff] to-[#f0f7ff]" />

            {/* Decorative top line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e2e8f0] to-transparent" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header */}
                <MotionViewport className="text-center mb-10 lg:mb-12" initial={{ opacity: 0, y: 20 }}>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#8dc2ff]/10 text-[#111269] text-sm font-semibold tracking-wide mb-6">
                        PROGRAMAS DESTACADOS
                    </span>

                    <h2
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111269] mb-6"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        Iniciativas que{" "}
                        <span className="bg-gradient-to-r from-[#8dc2ff] to-[#89abe6] bg-clip-text text-transparent">
                            transforman
                        </span>
                    </h2>

                    <p className="text-xl text-[#111269]/60 max-w-2xl mx-auto font-light">
                        Programas especializados que generan impacto sostenible en toda Argentina
                    </p>
                </MotionViewport>

                {/* Programs Grid */}
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                    {displayedPrograms.map((program, index) => {
                        const IconComponent = iconMap[program.icon] ?? Star
                        const lightGradient = getLightGradient(program.gradient)
                        // Imagen desde Sanity CDN — si no hay, usa el gradiente de color
                        const imageToShow = program.mainImageUrl || null

                        return (
                            <MotionViewport
                                key={program._id}
                                delay={index * 0.15}
                                initial={{ opacity: 0, y: 40 }}
                                className="group h-full"
                            >
                                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/[0.03] border border-[#e2e8f0] hover:shadow-xl hover:shadow-black/[0.06] transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-2 h-full flex flex-col">

                                    {/* Header: imagen o gradiente */}
                                    <div className="relative h-48 overflow-hidden">
                                        {imageToShow ? (
                                            <>
                                                <Image
                                                    src={imageToShow}
                                                    alt={program.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                />
                                                <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-black/10`} />
                                            </>
                                        ) : (
                                            <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient}`}>
                                                {/* Pattern overlay */}
                                                <div
                                                    className="absolute inset-0 opacity-10"
                                                    style={{
                                                        backgroundImage: `
                              linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.1) 60%, transparent 60%),
                              linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.1) 60%, transparent 60%)
                            `,
                                                        backgroundSize: "20px 20px",
                                                    }}
                                                />
                                            </div>
                                        )}

                                        {/* Ícono flotante */}
                                        <div className="absolute top-4 left-4 z-10">
                                            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                                                <IconComponent className="w-5 h-5 text-white" />
                                            </div>
                                        </div>

                                        {/* Decorative circle */}
                                        <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/10" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3
                                            className="text-2xl font-bold mb-4 text-[#111269] group-hover:text-[#8dc2ff] transition-colors duration-300"
                                            style={{ fontFamily: "var(--font-playfair)" }}
                                        >
                                            {program.title}
                                        </h3>

                                        <p className="text-[#111269]/60 leading-relaxed mb-6 flex-grow">
                                            {program.description}
                                        </p>

                                        {/* Impact Badge */}
                                        <div className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${lightGradient} mb-6`}>
                                            <div className={`text-3xl font-bold bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`}>
                                                {program.impact}
                                            </div>
                                            <div className="text-sm text-[#111269]/60 leading-tight">
                                                {program.impactLabel}
                                            </div>
                                        </div>

                                        {/* CTA Button — siempre usa /programas/[slug] */}
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="w-full border-[#111269]/20 text-[#111269] hover:bg-[#111269] hover:text-white hover:border-[#111269] rounded-xl h-12 font-medium group/btn transition-[background-color,color,border-color] duration-300"
                                        >
                                            <Link href={program.slug ? `/programas/${program.slug}` : "#"}>
                                                <span>Conocer Más</span>
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </MotionViewport>
                        )
                    })}
                </div>

                {/* Ver Todos button — solo en el home (cuando se pasa limit) */}
                {limit && (
                    <MotionViewport className="mt-12 flex justify-center" initial={{ opacity: 0, y: 20 }}>
                        <Link href="/programas">
                            <Button
                                variant="outline"
                                className="border-[#111269]/20 text-[#111269] hover:bg-[#111269] hover:text-white hover:border-[#111269] rounded-xl h-12 px-8 font-medium group transition-all duration-300"
                            >
                                <span>Ver Todos los Programas</span>
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </MotionViewport>
                )}
            </div>
        </section>
    )
}

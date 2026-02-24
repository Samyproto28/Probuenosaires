"use client"

import { Users } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

// --- Tipos exportados ---

export interface MiembroItem {
    _id: string
    name: string
    position: string
    bio: string
    photoUrl: string | null
    expertise: string[]
    accent: string
    section: "directiva" | "coordinacion" | "profesional" | "internacional"
}

// --- Tarjeta de miembro (exactamente igual al diseño original) ---

function MemberCard({ member, index, isInView }: { member: MiembroItem; index: number; isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-[#e2e8f0] flex flex-col h-full"
        >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#111269]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#111269] to-[#89abe6] opacity-80" />
                {member.photoUrl ? (
                    <Image
                        src={member.photoUrl}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        quality={85}
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Users className="w-24 h-24 text-white/10 group-hover:text-white/20 transition-colors duration-500" />
                    </div>
                )}
                <div
                    className="absolute bottom-0 left-0 w-full h-1"
                    style={{ backgroundColor: member.accent }}
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#111269] mb-1 group-hover:text-[#8dc2ff] transition-colors">
                    {member.name}
                </h3>
                <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: member.accent }}>
                    {member.position}
                </p>

                <p className="text-[#111269]/70 text-sm leading-relaxed mb-6 flex-grow">
                    {member.bio}
                </p>

                {member.expertise && member.expertise.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {member.expertise.map((skill, i) => (
                            <span
                                key={i}
                                className="text-[10px] uppercase font-bold px-2 py-1 rounded bg-[#f0f7ff] text-[#111269]/60 border border-[#e2e8f0]"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    )
}

// --- Componente de sección reutilizable ---

interface TeamSectionProps {
    title: string
    members: MiembroItem[]
    bgColor: "white" | "light"
    isInView: boolean
    centered?: boolean
}

function TeamSection({ title, members, bgColor, isInView, centered }: TeamSectionProps) {
    if (members.length === 0) return null

    const bg = bgColor === "light" ? "bg-[#f0f7ff]" : "bg-white"

    return (
        <section className={`py-24 ${bg} relative`}>
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2
                        className="text-3xl lg:text-4xl font-bold text-[#111269] mb-4"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        {title}
                    </h2>
                    <div className="w-20 h-1 bg-[#8dc2ff] mx-auto rounded-full" />
                </div>

                {centered ? (
                    <div className="flex flex-wrap justify-center gap-8">
                        {members.map((member, index) => (
                            <div key={member._id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
                                <MemberCard member={member} index={index} isInView={isInView} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {members.map((member, index) => (
                            <MemberCard key={member._id} member={member} index={index} isInView={isInView} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

// --- Componente principal ---

interface EquipoContentProps {
    members: MiembroItem[]
}

export function EquipoContent({ members }: EquipoContentProps) {
    // Agrupar miembros por sección
    const directiva = members.filter((m) => m.section === "directiva")
    const coordinacion = members.filter((m) => m.section === "coordinacion")
    const profesional = members.filter((m) => m.section === "profesional")
    const internacional = members.filter((m) => m.section === "internacional")

    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <div className="overflow-hidden" ref={sectionRef}>
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-[#111269] text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#111269]" />
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#89abe6] opacity-10 blur-[100px] rounded-full translate-y-1/4" />
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8dc2ff] opacity-10 blur-[100px] rounded-full -translate-y-1/4" />
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                            backgroundSize: "30px 30px",
                        }}
                    />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#8dc2ff] text-sm font-semibold tracking-wide mb-6 backdrop-blur-sm border border-white/10">
                            NUESTRO CAPITAL HUMANO
                        </span>
                        <h1
                            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Líderes que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8dc2ff] to-[#ffffff]">inspiran</span>
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed font-light max-w-2xl mx-auto">
                            Un equipo multidisciplinario unido por la pasión de transformar realidades y construir un futuro sustentable.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Secciones dinámicas */}
            <TeamSection title="Comisión Directiva" members={directiva} bgColor="light" isInView={isInView} />
            <TeamSection title="Coordinación Operativa" members={coordinacion} bgColor="white" isInView={isInView} centered />
            <TeamSection title="Equipo Profesional de Trabajo" members={profesional} bgColor="light" isInView={isInView} />
            <TeamSection title="Institutos - Oficinas Internacionales" members={internacional} bgColor="white" isInView={isInView} centered />
        </div>
    )
}

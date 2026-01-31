"use client"

import { Users, Award, Briefcase, GraduationCap, Mail, ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function EquipoContent() {
    const teamMembers = [
        {
            name: "Facundo Galdos",
            position: "Presidente",
            bio: "Empresario comprometido con el desarrollo productivo y la innovación social. Lidera la visión estratégica de la fundación.",
            image: "/placeholder-user.jpg",
            expertise: ["Economía", "Políticas Públicas", "Desarrollo Sostenible"],
            socials: { linkedin: "#", twitter: "#" },
            accent: "#111269"
        },
        {
            name: "Marie Eugene",
            position: "Presidenta FOCAVA",
            bio: "Trayectoria en gestión empresarial y liderazgo de proyectos con impacto social directo en comunidades vulnerables.",
            image: "/placeholder-user.jpg",
            expertise: ["Gestión", "Derecho", "Proyectos Sociales"],
            socials: { linkedin: "#" },
            accent: "#89abe6"
        },
        {
            name: "Florencia",
            position: "Coordinadora",
            bio: "Especialista en articulación de programas y gestión eficiente de recursos para maximizar el alcance de nuestras iniciativas.",
            image: "/placeholder-user.jpg",
            expertise: ["Gestión de Proyectos", "Comercio Exterior", "Desarrollo Empresarial"],
            socials: { linkedin: "#" },
            accent: "#8dc2ff"
        },
        {
            name: "Leila Galdos",
            position: "Coordinadora",
            bio: "Experta en análisis financiero y diagnóstico empresarial para el fortalecimiento de PyMEs.",
            image: "/placeholder-user.jpg",
            expertise: ["Finanzas", "Diagnóstico Empresarial", "PyMEs"],
            socials: { linkedin: "#" },
            accent: "#405e8c"
        },
    ]

    const teamAreas = [
        {
            icon: Briefcase,
            title: "Área Administrativa",
            description: "Gestión financiera, contable y administrativa transparente y eficiente.",
            members: 3,
            color: "#111269"
        },
        {
            icon: GraduationCap,
            title: "Área de Capacitación",
            description: "Diseño e implementación de programas de formación innovadores CT4.0.",
            members: 5,
            color: "#8dc2ff"
        },
        {
            icon: Award,
            title: "Área de Proyectos",
            description: "Ejecución y seguimiento técnico de programas nacionales e internacionales.",
            members: 8,
            color: "#89abe6"
        },
        {
            icon: Users,
            title: "Desarrollo Comunitario",
            description: "Articulación territorial y trabajo directo con beneficiarios.",
            members: 6,
            color: "#405e8c"
        },
    ]

    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <div className="overflow-hidden" ref={sectionRef}>
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-[#111269] text-white overflow-hidden">
                {/* Abstract Shapes */}
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

            {/* Leadership Team Grid */}
            <section className="py-24 bg-[#f0f7ff] relative">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2
                            className="text-3xl lg:text-4xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Equipo Directivo
                        </h2>
                        <div className="w-20 h-1 bg-[#8dc2ff] mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-[#e2e8f0] flex flex-col h-full"
                            >
                                {/* Image Container with Overlay */}
                                <div className="relative h-64 overflow-hidden bg-[#111269]">
                                    {/* Placeholder Gradient if image fails or for loading */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#111269] to-[#89abe6] opacity-80" />

                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    />

                                    {/* Color Accent Bar */}
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
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Areas Grid */}
            <section className="py-24 bg-white relative">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(#111269 1px, transparent 1px)`,
                        backgroundSize: "20px 20px"
                    }}
                />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2
                                className="text-3xl lg:text-4xl font-bold text-[#111269] mb-4"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                Áreas de Trabajo
                            </h2>
                            <p className="text-[#111269]/60 max-w-xl">
                                Estructura organizacional diseñada para la excelencia operativa y el impacto real.
                            </p>
                        </div>
                        <Button variant="outline" className="border-[#111269] text-[#111269] hover:bg-[#111269] hover:text-white transition-all">
                            Ver Organigrama Completo <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamAreas.map((area, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                                className="bg-[#f0f7ff] border border-[#e2e8f0] p-8 rounded-2xl hover:border-[#8dc2ff]/50 hover:shadow-lg transition-all duration-300 group"
                            >
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#111269] group-hover:text-white"
                                    style={{ backgroundColor: `${area.color}15`, color: area.color }}
                                >
                                    <area.icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-lg font-bold text-[#111269] mb-3 group-hover:text-[#8dc2ff] transition-colors">
                                    {area.title}
                                </h3>

                                <p className="text-[#111269]/60 text-sm leading-relaxed mb-6">
                                    {area.description}
                                </p>

                                <div className="flex items-center gap-2 text-xs font-semibold text-[#111269]/40">
                                    <Users className="w-3 h-3" />
                                    {area.members} integrantes
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="bg-[#111269] rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
                        {/* Background Effects */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-20">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-[#8dc2ff] blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#89abe6] blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
                        </div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2
                                className="text-3xl lg:text-5xl font-bold text-white mb-6"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                ¿Querés sumarte a nuestro equipo?
                            </h2>
                            <p className="text-white/70 text-lg mb-10 leading-relaxed">
                                Estamos siempre buscando profesionales comprometidos con nuestra misión. Si querés ser parte de Fundación Pro Buenos Aires y dejar tu huella, enviános tu CV.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-[#8dc2ff] text-[#111269] hover:bg-[#e0efff] font-bold text-base px-8 h-12 rounded-xl"
                                    asChild
                                >
                                    <a href="mailto:info@probuenosaires.org?subject=Trabajá con nosotros">
                                        <Mail className="mr-2 h-5 w-5" />
                                        Enviar Curriculum
                                    </a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white/20 text-white hover:bg-white/10 hover:text-white h-12 px-8 rounded-xl font-medium"
                                >
                                    Ver Búsquedas Activas
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

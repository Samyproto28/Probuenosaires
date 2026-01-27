"use client"

import { Target, Eye, Award, Building, Users, Handshake, CheckCircle2 } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

export function InstitucionalContent() {
    const values = [
        {
            icon: Target,
            title: "Nuestra Misión",
            description:
                "Promover el desarrollo sustentable de Argentina a través de programas de capacitación, asistencia técnica y generación de empleo que fortalezcan las capacidades de personas y organizaciones.",
            color: "#1a2744",
        },
        {
            icon: Eye,
            title: "Nuestra Visión",
            description:
                "Ser una organización líder en el impulso del desarrollo económico y social sustentable, reconocida por su impacto positivo en las comunidades argentinas.",
            color: "#3d5a80",
        },
        {
            icon: Award,
            title: "Nuestros Valores",
            description:
                "Compromiso, transparencia, innovación y responsabilidad social guían todas nuestras acciones y decisiones institucionales.",
            color: "#c9a962",
        },
    ]

    const institutionalInfo = [
        {
            icon: Building,
            title: "Nuestra Historia",
            description:
                "Fundada en 1998, nuestra organización ha trabajado incansablemente durante más de dos décadas para promover el desarrollo sustentable en Argentina, adaptándonos a los desafíos cambiantes del contexto nacional y regional.",
        },
        {
            icon: Users,
            title: "Nuestra Estructura",
            description:
                "Contamos con un equipo multidisciplinario de profesionales dedicados a diferentes áreas de expertise, asegurando un abordaje integral y especializado para cada uno de nuestros programas y proyectos.",
        },
        {
            icon: Handshake,
            title: "Nuestras Alianzas",
            description:
                "Desarrollamos alianzas estratégicas con organizaciones públicas y privadas, universidades y otras ONGs para maximizar nuestro impacto y alcance en toda la geografía argentina.",
        },
    ]

    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <div className="overflow-hidden" ref={sectionRef}>
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-[#1a2744] text-white overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#1a2744]" />
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c9a962] opacity-10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#3d5a80] opacity-10 blur-3xl rounded-full -translate-x-1/3 translate-y-1/3" />
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                            backgroundSize: "40px 40px",
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
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#c9a962] text-sm font-semibold tracking-wide mb-6 backdrop-blur-sm border border-white/10">
                            INSTITUCIONAL
                        </span>
                        <h1
                            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Nuestra <span className="text-[#c9a962]">Identidad</span>
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed font-light">
                            Somos una organización sin fines de lucro fundada en 1998, dedicada al desarrollo sustentable de Argentina con transparencia y compromiso profesional.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission, Vision, Values Grid */}
            <section className="py-24 bg-[#fdfcfb] relative">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-3 gap-8 -mt-32">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                                className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl shadow-black/[0.05] border border-[#e8e4df] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
                            >
                                <div
                                    className="absolute top-0 left-0 w-full h-1.5"
                                    style={{ backgroundColor: value.color }}
                                />
                                <div className="relative z-10">
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                                        style={{ backgroundColor: `${value.color}15` }}
                                    >
                                        <value.icon className="w-8 h-8" style={{ color: value.color }} />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold mb-4 text-[#1a2744]"
                                        style={{ fontFamily: "var(--font-playfair)" }}
                                    >
                                        {value.title}
                                    </h3>
                                    <p className="text-[#1a2744]/70 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                                {/* Decorative Pattern */}
                                <div
                                    className="absolute bottom-0 right-0 w-32 h-32 opacity-[0.03] -mr-8 -mb-8 rounded-full"
                                    style={{ backgroundColor: value.color }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Info Grid */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(#1a2744 1px, transparent 1px), linear-gradient(90deg, #1a2744 1px, transparent 1px)`,
                        backgroundSize: "60px 60px"
                    }}
                />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                        {institutionalInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group text-center"
                            >
                                <div className="w-20 h-20 mx-auto rounded-full bg-[#fdfcfb] border border-[#e8e4df] shadow-lg flex items-center justify-center mb-6 group-hover:border-[#c9a962] transition-colors duration-300">
                                    <info.icon className="w-8 h-8 text-[#1a2744] group-hover:text-[#c9a962] transition-colors duration-300" />
                                </div>
                                <h3
                                    className="text-2xl font-bold mb-4 text-[#1a2744]"
                                    style={{ fontFamily: "var(--font-playfair)" }}
                                >
                                    {info.title}
                                </h3>
                                <p className="text-[#1a2744]/60 leading-relaxed">
                                    {info.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Institutional Data Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mt-24 max-w-4xl mx-auto"
                    >
                        <div className="bg-[#1a2744] text-white rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl">
                            {/* Background Accents */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a962] opacity-10 blur-[80px] rounded-full" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3d5a80] opacity-10 blur-[80px] rounded-full" />

                            <div className="relative z-10 text-center mb-10">
                                <h3
                                    className="text-3xl font-bold mb-2"
                                    style={{ fontFamily: "var(--font-playfair)" }}
                                >
                                    Datos Institucionales
                                </h3>
                                <div className="w-24 h-1 bg-[#c9a962] mx-auto rounded-full" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
                                <div className="space-y-6">
                                    <h4 className="flex items-center gap-2 text-[#c9a962] font-semibold tracking-wide uppercase text-sm">
                                        <Building className="w-4 h-4" /> Información Legal
                                    </h4>
                                    <ul className="space-y-4">
                                        <li className="flex gap-3 text-white/80">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a962] mt-2 shrink-0" />
                                            <div>
                                                <strong className="block text-white text-sm opacity-60">Denominación</strong>
                                                Fundación Pro Buenos Aires
                                            </div>
                                        </li>
                                        <li className="flex gap-3 text-white/80">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a962] mt-2 shrink-0" />
                                            <div>
                                                <strong className="block text-white text-sm opacity-60">Personería Jurídica</strong>
                                                Resolución IGJ N° 123/98
                                            </div>
                                        </li>
                                        <li className="flex gap-3 text-white/80">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a962] mt-2 shrink-0" />
                                            <div>
                                                <strong className="block text-white text-sm opacity-60">CUIT</strong>
                                                30-70807514-7
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-6">
                                    <h4 className="flex items-center gap-2 text-[#c9a962] font-semibold tracking-wide uppercase text-sm">
                                        <CheckCircle2 className="w-4 h-4" /> Domicilio Fiscal
                                    </h4>
                                    <ul className="space-y-4">
                                        <li className="flex gap-3 text-white/80">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a962] mt-2 shrink-0" />
                                            <div>
                                                <strong className="block text-white text-sm opacity-60">Dirección</strong>
                                                Ruta 36 Nº 1354, entre calles 13 y 14
                                            </div>
                                        </li>
                                        <li className="flex gap-3 text-white/80">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a962] mt-2 shrink-0" />
                                            <div>
                                                <strong className="block text-white text-sm opacity-60">Localidad</strong>
                                                Cruce de Florencio Varela, Berazategui
                                            </div>
                                        </li>
                                        <li className="flex gap-3 text-white/80">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a962] mt-2 shrink-0" />
                                            <div>
                                                <strong className="block text-white text-sm opacity-60">Provincia</strong>
                                                Buenos Aires, Argentina
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

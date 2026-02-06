"use client"

import { Users, Award, Briefcase, GraduationCap, Mail, ArrowRight, Globe, Facebook, Linkedin, Twitter } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Member {
    name: string
    position: string
    bio: string
    image: string
    expertise: string[]
    accent: string
}

function MemberCard({ member, index, isInView }: { member: Member, index: number, isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-[#e2e8f0] flex flex-col h-full"
        >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#111269]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#111269] to-[#89abe6] opacity-80" />
                {member.image ? (
                    <Image
                        src={member.image}
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

                {member.expertise.length > 0 && (
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

export function EquipoContent() {
    const directiveTeam: Member[] = [
        {
            name: "Facundo Galdós",
            position: "Presidente",
            bio: "Empresario pyme desde 1992, dirigente gremial. Desde 2007 desempeñó funciones en Cámaras Empresarias nacionales, provinciales y regionales (CGERA, CGERA Regional Sur, CEPBA, FOCAVA). Preside Mutual 2050 mandato cumplido.",
            image: "/Facundo Galdós.jpg",
            expertise: ["Gestión Gremial", "PyMEs", "Mutualismo"],
            accent: "#111269"
        },
        {
            name: "María Eugenia Ruiz",
            position: "Vicepresidenta",
            bio: "Presidenta de la Cámara de Comerciantes y amigos del cruce de Florencio Varela. Presidenta de la Cámara de Empresarios Bonaerenses para el Fortalecimiento de las Cadenas de Valor. Secretaria de la Mujer en CEPBA.",
            image: "/María Eugenia Ruiz.jpg",
            expertise: ["Cadenas de Valor", "Género", "Comercio"],
            accent: "#89abe6"
        },
        {
            name: "Mariano Diaz",
            position: "Secretario",
            bio: "Comerciante desde el año 1998, también cumplió tareas como funcionario público en diferentes áreas relacionadas con seguridad, tránsito y fiscalización.",
            image: "/Mariano Diaz.jpg",
            expertise: ["Seguridad", "Fiscalización", "Comercio"],
            accent: "#8dc2ff"
        },
        {
            name: "Lic. Leandro Clavero",
            position: "Tesorero",
            bio: "Profesional de la comunicación especializado en el desarrollo de productos digitales. Ha trabajado para el sector público, ONG y startups. Más de 10 años como docente en marketing y estrategia.",
            image: "/Lic.Leandro Clavero.jpeg",
            expertise: ["Estrategia Digital", "Marketing", "Docencia"],
            accent: "#405e8c"
        },
    ]

    const coordinationTeam: Member[] = [
        {
            name: "Luis",
            position: "Vendedor",
            bio: "Integrante del equipo de ventas y promoción de los programas institucionales de la Fundación.",
            image: "",
            expertise: ["Ventas", "Atención al Cliente", "Promoción"],
            accent: "#111269"
        },
        {
            name: "Florencia Vega",
            position: "Coordinadora Vinculando",
            bio: "Responsable de la dirección comercial de acciones sociales y la coordinación operativa del programa de prácticas profesionalizantes Vinculando.",
            image: "/Florencia Vega.jpeg",
            expertise: ["Coordinación", "Acción Social", "Comercial"],
            accent: "#89abe6"
        },
        {
            name: "Alejandro Soria",
            position: "Voluntario",
            bio: "Colaborador voluntario en las acciones sociales y operativas de los diversos programas de la Fundación.",
            image: "",
            expertise: ["Voluntariado", "Acción Social", "Logística"],
            accent: "#8dc2ff"
        },
    ]

    const professionalTeam: Member[] = [
        {
            name: "Lic. Gustavo Pons",
            position: "Economista Asesor Financiero",
            bio: "Consultoría financiera especializada y análisis económico para el desarrollo de proyectos industriales.",
            image: "/Lic. Gustavo Pons.jpeg",
            expertise: ["Finanzas", "Economía"],
            accent: "#111269"
        },
        {
            name: "Dra. Cynthia Abal",
            position: "Abogada",
            bio: "Asesoramiento legal institucional y normativo para el fortalecimiento de las organizaciones.",
            image: "/Dra. Cynthia Abal.jpeg",
            expertise: ["Legal", "Institucional"],
            accent: "#89abe6"
        },
        {
            name: "Dr. Joaquin Britos",
            position: "Contador",
            bio: "Gestión contable y auditoría de procesos financieros para asegurar la transparencia institucional.",
            image: "/Dr. Joaquin Britos.jpeg",
            expertise: ["Contabilidad", "Auditoría"],
            accent: "#8dc2ff"
        },
        {
            name: "Ing. Sergio Dominguez",
            position: "Ingeniero",
            bio: "Asesor técnico en procesos industriales y optimización de recursos energéticos.",
            image: "/Ing. Sergio Dominguez.jpg",
            expertise: ["Ingeniería", "Industria"],
            accent: "#405e8c"
        },
        {
            name: "Rodrigo González",
            position: "Especialista en Relaciones Internacionales",
            bio: "Gestión de vínculos internacionales y programas de cooperación para el desarrollo regional.",
            image: "/Rodrigo González.jpeg",
            expertise: ["Relaciones Internacionales", "Cooperación"],
            accent: "#111269"
        },
        {
            name: "Ing. Mariano Santos",
            position: "Ingeniero",
            bio: "Soporte técnico especializado en infraestructura y modernización tecnológica.",
            image: "/Ing. Mariano Santos.jpeg",
            expertise: ["Tecnología", "Infraestructura"],
            accent: "#89abe6"
        },
        {
            name: "Prof. Romina Damiani Ameri",
            position: "Profesora",
            bio: "Docencia y desarrollo de contenidos educativos para los programas de capacitación de la Fundación.",
            image: "/Prof. Romina Damiani Ameri.jpeg",
            expertise: ["Educación", "Capacitación"],
            accent: "#8dc2ff"
        },
        {
            name: "Prof. Marcela Crespo",
            position: "Profesora",
            bio: "Especialista en formación profesional y diseño pedagógico para la inserción laboral.",
            image: "/Prof. Marcela Crespo.jpeg",
            expertise: ["Educación", "Inserción Laboral"],
            accent: "#405e8c"
        },
    ]

    const internationalTeam: Member[] = [
        {
            name: "Wang Chan Can",
            position: "Director - Oficina en Shangai, China",
            bio: "Liderazgo de la representation internacional en Asia, facilitando vínculos comerciales y tecnológicos.",
            image: "/Wang Chan can.jpeg",
            expertise: ["China", "Comercio Exterior"],
            accent: "#111269"
        },
        {
            name: "Ing. Gerardo Fernandez",
            position: "Director - Oficina Valencia, España",
            bio: "Coordinación de la oficina europea de la Fundación, promoviendo el intercambio con la red de Pymes de España.",
            image: "/Ing. Gerardo Fernandez.jpg",
            expertise: ["España", "Innovación Europea"],
            accent: "#89abe6"
        },
    ]

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

            {/* Comisión Directiva */}
            <section className="py-24 bg-[#f0f7ff] relative">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2
                            className="text-3xl lg:text-4xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Comisión Directiva
                        </h2>
                        <div className="w-20 h-1 bg-[#8dc2ff] mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {directiveTeam.map((member, index) => (
                            <MemberCard key={index} member={member} index={index} isInView={isInView} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Coordinación */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2
                            className="text-3xl lg:text-4xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Coordinación Operativa
                        </h2>
                        <div className="w-20 h-1 bg-[#8dc2ff] mx-auto rounded-full" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {coordinationTeam.map((member, index) => (
                            <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
                                <MemberCard member={member} index={index} isInView={isInView} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Equipo Profesional */}
            <section className="py-24 bg-[#f0f7ff] relative">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2
                            className="text-3xl lg:text-4xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Equipo Profesional de Trabajo
                        </h2>
                        <div className="w-20 h-1 bg-[#8dc2ff] mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {professionalTeam.map((member, index) => (
                            <MemberCard key={index} member={member} index={index} isInView={isInView} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Internacional */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2
                            className="text-3xl lg:text-4xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Institutos - Oficinas Internacionales
                        </h2>
                        <div className="w-20 h-1 bg-[#8dc2ff] mx-auto rounded-full" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {internationalTeam.map((member, index) => (
                            <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
                                <MemberCard member={member} index={index} isInView={isInView} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    )
}

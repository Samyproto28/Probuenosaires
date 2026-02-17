"use client"

import { ArticleLayout } from "@/components/article-layout"
import { ArticleSection, ProcessSteps, CheckList, InfoBox, ContentCard } from "@/components/article-components"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"

export default function UVTPage() {
    // Data structures for the components
    const processSteps = [
        {
            number: "01",
            title: "Evaluación y Formulación",
            description: "Evaluamos la viabilidad y luego formulamos el proyecto buscando el financiamiento adecuado (ANR, Financiamiento Bancario, Financiamiento con inversores privados)."
        },
        {
            number: "02",
            title: "Administración de Fondos",
            description: "Una vez tu empresa recibe financiamiento, asistimos en la correcta administración de los fondos."
        },
        {
            number: "03",
            title: "Monitoreo del Proyecto",
            description: "Monitoreamos la ejecución del proyecto, asistiendo a la empresa en cumplir con las bases y condiciones establecidas por quien brindó el financiamiento."
        },
        {
            number: "04",
            title: "Rendición de Cuentas",
            description: "Asistimos a la empresa en el armado de la documentación necesaria para realizar la rendición del proyecto ante el organismo."
        }
    ]

    const experiencePoints = [
        "Nuestro equipo posee competencias para resolver una gran variedad de necesidades sobre diferentes procesos productivos e integración con Universidades y otros centros tecnológicos.",
        <span key="vintecar">Somos integrantes de <strong className="text-[#111269]">Vintecar 4.0</strong>, el Primer Polo Tecnológico Virtual de asistencia colaborativa de la Argentina.</span>,
        <span key="uvt">Somos <strong className="text-[#111269]">Unidad de Vinculación Tecnológica (UVT)</strong> aprobada por la Agencia de I+D+i dependiente del Ministerio de Ciencia y Tecnología de la Nación (RESOL-2021-91-APN-DANPIDTYI#ANPIDTYI). El objetivo es asistir a las pymes, cooperativas y emprendedores, a presentar proyectos y administrarlos.</span>
    ]

    const relatedPrograms = [
        "Programas de Industria y Desarrollo Productivo del Ministerio de Economía de la Nación",
        "Programas del Ministerio de Desarrollo Social de la Nación",
        "Créditos del Banco BICE",
        "Herramientas de financiamiento de Banco de la Nación Argentina y Banco de la Provincia de Buenos Aires",
        "Articulación con SGR (Sociedad de Garantía Recíproca)"
    ]

    const toc = [
        { id: "proceso", label: "Etapas de Trabajo" },
        { id: "experiencia", label: "Nuestra Experiencia" },
        { id: "costos", label: "Costos y Condiciones" },
        { id: "documentacion", label: "Documentación Oficial" },
        { id: "contacto", label: "Contacto Directo" }
    ]

    return (
        <ArticleLayout
            title="Asistencia Financiera UVT"
            category="Financiamiento"
            summary="Somos Unidad de Vinculación Tecnológica (UVT) aprobada por la Agencia de I+D+i. Asistimos a pymes, cooperativas y emprendedores en la formulación, presentación y administración de proyectos de financiamiento."
            readTime="4 min"
            toc={toc}
        >
            {/* 1. Intro */}
            <ArticleSection id="intro" className="mb-12">
                <p className="text-xl text-[#111269]/70 leading-relaxed font-light first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px] first-letter:font-heading first-letter:text-[#111269]">
                    Nuestro equipo técnico especializado lleva adelante tareas fundamentales a la hora de presentar una idea proyecto, asegurando el cumplimiento de todos los requisitos técnicos y administrativos solicitados por los organismos de crédito ofreciendo un acompañamiento integral.
                </p>
            </ArticleSection>

            {/* 2. Process */}
            <ArticleSection id="proceso" title="Etapas del Proceso">
                <ProcessSteps steps={processSteps} />
            </ArticleSection>

            {/* 3. Experience */}
            <ArticleSection id="experiencia" title="Nuestra Experiencia">
                <div className="space-y-8">
                    <CheckList items={experiencePoints} />

                    <ContentCard title="Trayectoria en Gestión">
                        <p className="mb-4">También contamos con amplia experiencia en presentación de proyectos ante:</p>
                        <ul className="space-y-3">
                            {relatedPrograms.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#8dc2ff] flex-shrink-0 mt-2.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </ContentCard>
                </div>
            </ArticleSection>

            {/* 4. Costs */}
            <ArticleSection id="costos" title="Costos y Condiciones">
                <InfoBox
                    type="cost"
                    title="Anticipo de Gestión"
                >
                    <p className="text-lg leading-relaxed">
                        Si elegimos en conjunto iniciar el proceso de formulación del proyecto, desde el 1 de Agosto de 2023 propusimos un anticipo de <strong>$ 100.000</strong> ( Socios de FOCAVA <strong>$ 80.000</strong> ) el que se descuenta del canon acordado, luego del desembolso del crédito o ANR solicitado, acorde al servicio de asistencia que brinda nuestra Fundación.
                    </p>
                </InfoBox>
            </ArticleSection>

            {/* 5. Documentation */}
            <ArticleSection id="documentacion" title="Documentación Oficial">
                <ContentCard className="bg-[#f8faff] border-none">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h4 className="font-bold text-[#111269] text-lg mb-2">Resolución Oficial</h4>
                            <p className="text-[#111269]/60 max-w-lg">
                                Adjuntamos resolución RESOL-2021-91-APN-DANPIDTYI#ANPIDTYI del Ministerio aprobando nuestra UVT.
                            </p>
                        </div>
                        <Button
                            className="bg-[#111269] text-white hover:bg-[#1a2754] px-6 h-12 rounded-xl flex-shrink-0"
                            asChild
                        >
                            <a href="https://probuenosaires.org/wp-content/uploads/2021/06/NO-2021-53699326-APN-DEPTANPIDTYI.pdf" target="_blank" rel="noopener noreferrer">
                                <Download className="mr-2 h-4 w-4" />
                                Descargar PDF
                            </a>
                        </Button>
                    </div>
                </ContentCard>
            </ArticleSection>

            {/* 6. Contact */}
            <ArticleSection id="contacto" title="¿Tenés una Idea Proyecto?">
                <ContentCard className="bg-gradient-to-br from-[#f0f7ff] to-white border-[#8dc2ff]/20">
                    <p className="text-lg text-[#111269]/70 leading-relaxed mb-8">
                        No dudes en contactarnos y coordinamos una reunión por Zoom. Llamá de Lunes a Viernes de 9 a 17 h.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                        <div>
                            <h4 className="text-sm font-bold text-[#111269]/50 uppercase tracking-wider mb-1">Teléfono</h4>
                            <p className="text-2xl font-bold text-[#111269]">5258-0226</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-[#111269]/50 uppercase tracking-wider mb-1">Email</h4>
                            <a href="mailto:info@probuenosaires.org" className="text-xl font-medium text-[#111269] hover:text-[#8dc2ff] transition-colors">
                                info@probuenosaires.org
                            </a>
                        </div>
                    </div>
                    <Button
                        size="lg"
                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-12 rounded-xl"
                        asChild
                    >
                        <a href="https://wa.me/5491141899250" target="_blank" rel="noopener noreferrer">
                            Contactar por WhatsApp
                        </a>
                    </Button>
                </ContentCard>
            </ArticleSection>

        </ArticleLayout>
    )
}

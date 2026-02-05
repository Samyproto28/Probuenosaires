"use client"

import { ArticleLayout } from "@/components/article-layout"
import { ArticleSection, ContentCard, InfoBox } from "@/components/article-components"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink, Mail, Phone } from "lucide-react"

export default function IntermediacionLaboralPage() {
    const toc = [
        { id: "buscas-trabajo", label: "¿Buscas trabajo?" },
        { id: "buscas-personal", label: "¿Buscas personal?" }
    ]

    return (
        <ArticleLayout
            title="Intermediación de Empleo"
            category="Programas"
            summary="Herramientas para la búsqueda laboral y selección de personal. Brindamos soporte integral para conectar la oferta y demanda de empleo en la región, facilitando la inserción laboral de profesionales y técnicos en empresas que requieren talento calificado."
            toc={toc}
            readTime="3 min"
            date="Octubre 2024"
        >
            <ArticleSection id="buscas-trabajo" title="¿Buscas trabajo?">
                <ContentCard className="mb-6">
                    <p className="mb-6">
                        Si te encuentras en la búsqueda de nuevas oportunidades laborales, te invitamos a ingresar tu Curriculum Vitae en nuestra plataforma asociada para formar parte de nuestra base de datos de talento.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild className="bg-[#111269] hover:bg-[#1a2754] text-white">
                            <Link href="https://empleos.amia.org.ar/busco-empleo/mi-curriculum/" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Ingresa tu CV
                            </Link>
                        </Button>
                    </div>
                </ContentCard>
            </ArticleSection>

            <ArticleSection id="buscas-personal" title="¿Buscas personal?">
                <ContentCard className="mb-8">
                    <h4 className="text-lg font-bold text-[#111269] mb-4">Servicio para Empresas</h4>
                    <p className="mb-4">
                        La oficina inició sus actividades en Octubre de 2024. Actualmente estamos invitando a alumnos por egresar y egresados de escuelas técnicas de la región integrada por los municipios de <strong>Berazategui, Florencio Varela y Quilmes</strong> a registrar su perfil profesional en nuestro sistema.
                    </p>
                    <p className="mb-6">
                        Invitamos a las empresas interesadas en incorporar personal a que nos consulten para recibir asesoramiento personalizado sobre nuestro servicio de búsqueda y selección.
                    </p>

                    <div className="flex flex-col gap-4 p-6 bg-[#f8faff] rounded-xl border border-[#e2e8f0]">
                        <div className="flex items-center gap-3 text-[#111269]">
                            <Mail className="w-5 h-5 text-[#8dc2ff]" />
                            <a href="mailto:info@probuenosaires.org" className="hover:underline font-medium">
                                info@probuenosaires.org
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-[#111269]">
                            <Phone className="w-5 h-5 text-[#8dc2ff]" />
                            <span className="font-medium">
                                5258-0226 (Lunes a Viernes de 9 a 13 hs)
                            </span>
                        </div>
                    </div>
                </ContentCard>

                <InfoBox type="info" title="Información sobre el servicio">
                    El servicio de búsqueda y selección de personal tiene costo para las empresas. Durante los próximos días iremos informando a los interesados en adquirirlo.
                </InfoBox>
            </ArticleSection>
        </ArticleLayout>
    )
}

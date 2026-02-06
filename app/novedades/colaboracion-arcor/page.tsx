"use client"

import { ArticleLayout } from "@/components/article-layout"
import { ArticleSection, CheckList, InfoBox, ContentCard } from "@/components/article-components"
import { Users, Target, Briefcase, GraduationCap, Laptop, Share2 } from "lucide-react"

export default function ColaboracionArcorPage() {
    const toc = [
        { id: "reunion", label: "Reunión Estratégica" },
        { id: "ejes", label: "Ejes de Colaboración" },
        { id: "vinculacion", label: "Vinculación Empresa-Escuela" },
        { id: "impacto", label: "Impacto Social" },
    ]

    return (
        <ArticleLayout
            title="Avanzamos en una valiosa colaboración con Grupo Arcor"
            category="Novedades"
            date="27 de noviembre, 2025"
            readTime="4 min"
            summary="Fundación Pro Buenos Aires y Grupo Arcor se unen para fortalecer el desarrollo comunitario, integrando pasantías, rondas de negocios y donaciones de equipamiento tecnológico."
            toc={toc}
        >
            <ArticleSection id="reunion" title="Una Alianza para el Desarrollo Comunitario">
                <div className="space-y-6">
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        Estamos muy contentos de compartir los frutos de una productiva reunión virtual que mantuvimos con el <strong>Grupo Arcor</strong>, una empresa con la que compartimos la visión de impulsar el desarrollo de nuestra comunidad.
                    </p>
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        Durante el encuentro, tuvimos la oportunidad de contar la trayectoria de la Fundación y detallar nuestros programas bandera como <strong>Encadenar</strong> (negocios en ronda), <strong>Radio Empresaria</strong>, <strong>ProbaComex</strong> para el comercio internacional y <strong>Pymes Saludables</strong> para el bienestar organizacional.
                    </p>
                    <InfoBox type="success">
                        También compartimos los excelentes resultados de <strong>Vinculando</strong>, nuestro programa que ya conecta a más de <strong>1.250 alumnos</strong> con prácticas profesionalizantes en empresas.
                    </InfoBox>
                </div>
            </ArticleSection>

            <ArticleSection id="ejes" title="Ejes Clave de Colaboración">
                <p className="text-lg text-[#111269]/70 mb-10 leading-relaxed">
                    En este encuentro, propusimos fortalecer nuestra colaboración para el próximo año, enfocándonos en dos pilares fundamentales:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <ContentCard className="bg-gradient-to-br from-white to-[#f0f7ff]">
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="bg-[#111269]/10 p-4 rounded-2xl mb-6">
                                <Users className="w-10 h-10 text-[#111269]" />
                            </div>
                            <h4 className="text-xl font-bold text-[#111269] mb-4">Pasantías Profesionales</h4>
                            <p className="text-[#111269]/60">
                                El acompañamiento de pasantes de nuestros programas en las diferentes plantas de Arcor.
                            </p>
                        </div>
                    </ContentCard>

                    <ContentCard className="bg-gradient-to-br from-white to-[#f0f7ff]">
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="bg-[#111269]/10 p-4 rounded-2xl mb-6">
                                <Target className="w-10 h-10 text-[#111269]" />
                            </div>
                            <h4 className="text-xl font-bold text-[#111269] mb-4">Cadenas de Valor</h4>
                            <p className="text-[#111269]/60">
                                La participación conjunta en rondas de negocios para potenciar y fortalecer el desarrollo de proveedores.
                            </p>
                        </div>
                    </ContentCard>
                </div>
            </ArticleSection>

            <ArticleSection id="vinculacion" title="Vinculación Empresa-Escuela">
                <div className="space-y-6">
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        Agradecemos a <strong>Laura Alday</strong>, quien nos presentó su nuevo rol de coordinación regional en Arcor, por la receptividad y el interés en alinear las iniciativas sociales de sus plantas con nuestras estrategias.
                    </p>

                    <ContentCard className="border-l-[6px] border-l-[#8dc2ff]">
                        <p className="text-lg text-[#111269]/80 leading-relaxed">
                            Juntos, exploramos cómo nuestra experiencia en vinculación empresa-escuela puede complementar sus sólidos programas de prácticas y orientación vocacional, con planes de aumentar las visitas a sus plantas en la <strong>Zona Sur</strong>.
                        </p>
                    </ContentCard>
                </div>
            </ArticleSection>

            <ArticleSection id="impacto" title="Propuestas de Impacto Social">
                <p className="text-lg text-[#111269]/70 mb-8 leading-relaxed">
                    Además, trabajamos en propuestas concretas para generar un cambio positivo en el ecosistema educativo:
                </p>

                <CheckList
                    items={[
                        <span key="1"><strong>Capacitación docente:</strong> Implementación de programas junto a <strong>Oracle</strong> para fortalecer la formación técnica.</span>,
                        <span key="2"><strong>Equipamiento informático:</strong> Donación de tecnología a escuelas para reducir la brecha digital.</span>,
                        <span key="3"><strong>Mapeo de necesidades:</strong> Trabajo conjunto para identificar prioridades en la Zona Sur y agilizar donaciones.</span>,
                        <span key="4"><strong>Sinergia tecnológica:</strong> Unión de esfuerzos y expertise para un mayor impacto en el ecosistema regional.</span>,
                    ]}
                />

                <div className="mt-12">
                    <InfoBox type="info" title="Conclusión">
                        Fue una sesión donde confirmamos que, uniendo esfuerzos y expertise, podemos generar un impacto aún mayor en el ecosistema empresarial y educativo de la región. ¡Seguimos trabajando para construir más puentes!
                    </InfoBox>
                </div>

                <div className="mt-12 flex flex-wrap gap-2">
                    {["#FundaciónProBuenosAires", "#GrupoArcor", "#Collaboración", "#RSE", "#Vinculación", "#Educación", "#DesarrolloEmpresarial"].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-[#111269]/5 text-[#111269]/60 text-sm rounded-full font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
            </ArticleSection>
        </ArticleLayout>
    )
}

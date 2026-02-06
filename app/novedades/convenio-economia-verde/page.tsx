"use client"

import { ArticleLayout } from "@/components/article-layout"
import { ArticleSection, CheckList, InfoBox, ContentCard, ProcessSteps } from "@/components/article-components"
import { Leaf, Recycle, Briefcase, Globe, Target } from "lucide-react"

export default function ConvenioEconomiaVerdePage() {
    const toc = [
        { id: "alianza", label: "Alianza Estratégica" },
        { id: "objetivos", label: "Foco y Objetivos" },
        { id: "voces", label: "Voces de la Alianza" },
        { id: "acciones", label: "Próximas Acciones" },
        { id: "ods", label: "Compromiso ODS" },
    ]

    return (
        <ArticleLayout
            title="Firmamos convenio clave para impulsar la economía verde"
            category="Novedades"
            date="19 de diciembre, 2025"
            readTime="5 min"
            summary="Fundación Pro Buenos Aires e Impactos Ambientales sellan una alianza estratégica para transformar la gestión de residuos, remediar basurales y promover el empleo verde en el territorio bonaerense."
            toc={toc}
        >
            <ArticleSection id="alianza" title="Una Alianza por el Futuro Sostenible">
                <div className="space-y-6">
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        En un acto celebrado en las oficinas de la empresa <strong>Impactos Ambientales</strong>, en la ciudad de Buenos Aires, se concretó la firma de un Convenio Marco de Colaboración entre la compañía y la <strong>Fundación Pro Buenos Aires</strong>.
                    </p>
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        Este acuerdo representa un paso significativo en el compromiso de la compañía por apoyar acciones concretas de sostenibilidad, compensación de huella de carbono y desarrollo con doble materialidad, alineándose con los más altos estándares de responsabilidad ambiental y social.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mt-12 text-center">
                    <div className="p-8 bg-[#f0f7ff] rounded-2xl border border-[#8dc2ff]/20 flex flex-col items-center">
                        <Leaf className="w-12 h-12 text-[#111269] mb-4" />
                        <h4 className="font-bold text-[#111269] text-xl mb-2">Impactos Ambientales</h4>
                        <p className="text-[#111269]/60">Expertise técnico y gestión</p>
                    </div>
                    <div className="p-8 bg-[#f0f7ff] rounded-2xl border border-[#8dc2ff]/20 flex flex-col items-center">
                        <Globe className="w-12 h-12 text-[#111269] mb-4" />
                        <h4 className="font-bold text-[#111269] text-xl mb-2">Fundación Pro Buenos Aires</h4>
                        <p className="text-[#111269]/60">Articulación y red productiva</p>
                    </div>
                </div>
            </ArticleSection>

            <ArticleSection id="objetivos" title="Foco y Objetivos del Convenio">
                <p className="text-lg text-[#111269]/70 mb-10 leading-relaxed">
                    El convenio establece un marco de trabajo conjunto para el desarrollo de proyectos ambientales estratégicos, enfocándose en tres pilares fundamentales que transformarán la realidad productiva y ambiental local:
                </p>

                <div className="grid gap-6">
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm">
                        <div className="bg-[#8dc2ff]/20 p-3 rounded-xl">
                            <Recycle className="w-6 h-6 text-[#111269]" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-[#111269] mb-2">Remediación de basurales</h4>
                            <p className="text-[#111269]/60">Abordaje técnico para el cierre y saneamiento de basurales a cielo abierto.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm">
                        <div className="bg-[#8dc2ff]/20 p-3 rounded-xl">
                            <Target className="w-6 h-6 text-[#111269]" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-[#111269] mb-2">Articulación con municipios</h4>
                            <p className="text-[#111269]/60">Diseño de planes de saneamiento junto a los gobiernos locales.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm">
                        <div className="bg-[#8dc2ff]/20 p-3 rounded-xl">
                            <Briefcase className="w-6 h-6 text-[#111269]" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-[#111269] mb-2">Promoción del empleo verde</h4>
                            <p className="text-[#111269]/60">Creación de puestos de trabajo calificados en el sector de la economía circular.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <InfoBox type="info">
                        La alianza aprovechará las capacidades únicas de ambas instituciones. <strong>Impactos Ambientales</strong> aportará su expertise técnico en estudios de impacto y remediación, mientras que la <strong>Fundación Pro Buenos Aires</strong> movilizará sus seis programas principales y su vasta red de más de 3.300 PyMEs, cámaras empresariales, universidades y municipios.
                    </InfoBox>
                </div>
            </ArticleSection>

            <ArticleSection id="voces" title="Voces de la Alianza">
                <div className="space-y-8">
                    <ContentCard className="border-l-[6px] border-l-[#8dc2ff]">
                        <blockquote className="space-y-4">
                            <p className="text-xl text-[#111269] font-medium italic leading-relaxed">
                                «Esta alianza va en el corazón de nuestra estrategia de sostenibilidad. No basta con medir nuestra huella, debemos actuar con decisión para compensarla y generar un impacto neto positivo. Apoyar a la Fundación Pro Buenos Aires nos permite canalizar este compromiso a través de proyectos estructurados, escalables y con un profundo arraigo local.»
                            </p>
                            <footer className="pt-4 border-t border-[#e2e8f0]">
                                <cite className="not-italic">
                                    <span className="block font-bold text-[#111269]">Dra. Lucía Barcia</span>
                                    <span className="text-[#111269]/60 text-sm">Presidente de Impactos Ambientales</span>
                                </cite>
                            </footer>
                        </blockquote>
                    </ContentCard>

                    <ContentCard className="border-l-[6px] border-l-[#111269]">
                        <blockquote className="space-y-4">
                            <p className="text-xl text-[#111269] font-medium italic leading-relaxed">
                                «Este convenio es un ejemplo virtuoso de cómo el sector privado puede aliarse con la sociedad civil para generar soluciones transformadoras. Celebramos iniciativas que fortalecen las cadenas de valor con criterios de sostenibilidad y crean oportunidades económicas reales a partir de la resolución de problemas ambientales.»
                            </p>
                            <footer className="pt-4 border-t border-[#e2e8f0]">
                                <cite className="not-italic">
                                    <span className="block font-bold text-[#111269]">María Eugenia Ruiz</span>
                                    <span className="text-[#111269]/60 text-sm">Presidente de FOCAVA</span>
                                </cite>
                            </footer>
                        </blockquote>
                    </ContentCard>

                    <ContentCard className="border-l-[6px] border-l-[#8dc2ff]">
                        <blockquote className="space-y-4">
                            <p className="text-xl text-[#111269] font-medium italic leading-relaxed">
                                «Para nuestra fundación, este apoyo es fundamental. Permite profesionalizar y escalar nuestro trabajo en territorio. Los fondos iniciales aportados son una clara muestra de compromiso y serán destinados precisamente a activar esta maquinaria de articulación: conectar problemas concretos con soluciones técnicas y capital humano capacitado.»
                            </p>
                            <footer className="pt-4 border-t border-[#e2e8f0]">
                                <cite className="not-italic">
                                    <span className="block font-bold text-[#111269]">Facundo Galdós</span>
                                    <span className="text-[#111269]/60 text-sm">Presidente de Fundación Pro Buenos Aires</span>
                                </cite>
                            </footer>
                        </blockquote>
                    </ContentCard>
                </div>
            </ArticleSection>

            <ArticleSection id="acciones" title="Primeras Acciones Demarcadas">
                <p className="text-lg text-[#111269]/70 mb-8">
                    El convenio ya cuenta con una hoja de ruta clara para los primeros meses de implementación:
                </p>
                <CheckList
                    items={[
                        <span key="1"><strong>Identificación y articulación:</strong> Primeros municipios para el diseño de planes de saneamiento.</span>,
                        <span key="2"><strong>Proyectos específicos:</strong> Integración de tecnología y unidades productivas verdes asociadas al saneamiento.</span>,
                        <span key="3"><strong>Certificación:</strong> formación de empresas locales como proveedores sostenibles en las nuevas cadenas de valor.</span>,
                        <span key="4"><strong>Financiamiento:</strong> Presentación conjunta a fondos nacionales e internacionales para maximizar el alcance.</span>,
                    ]}
                />
            </ArticleSection>

            <ArticleSection id="ods" title="Contribución a los ODS">
                <p className="text-lg text-[#111269]/70 mb-10 leading-relaxed">
                    Con esta alianza, ambas instituciones refuerzan su contribución a los Objetivos de Desarrollo Sostenible (ODS) de Naciones Unidas, impactando directamente en:
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {[
                        { num: "8", label: "Trabajo Decente" },
                        { num: "9", label: "Industria e Innovación" },
                        { num: "10", label: "Reducción Desigualdad" },
                        { num: "11", label: "Ciudades Sostenibles" },
                        { num: "13", label: "Acción por el Clima" },
                    ].map((ods) => (
                        <div key={ods.num} className="bg-white border border-[#e2e8f0] p-4 rounded-xl text-center hover:shadow-md transition-shadow">
                            <span className="block text-3xl font-bold text-[#111269] mb-1">ODS {ods.num}</span>
                            <span className="text-xs text-[#111269]/60 font-bold uppercase tracking-wider">{ods.label}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-8 bg-[#111269] rounded-2xl text-white">
                    <h4 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Acerca de Impactos Ambientales</h4>
                    <p className="text-white/80 leading-relaxed">
                        Empresa líder en estudios de impacto ambiental, consultoría y gestión integral de residuos. Con un enfoque en la doble materialidad y la innovación tecnológica, acompaña a organizaciones públicas y privadas en su transición hacia la sostenibilidad.
                    </p>
                    <a
                        href="http://www.impactosambientales.com.ar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 text-[#8dc2ff] font-bold hover:underline"
                    >
                        Visitar sitio web <Globe className="w-4 h-4" />
                    </a>
                </div>
            </ArticleSection>
        </ArticleLayout>
    )
}

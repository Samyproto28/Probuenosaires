"use client"

import { ArticleLayout } from "@/components/article-layout"
import { ArticleSection, CheckList, ContentCard, InfoBox } from "@/components/article-components"
import { Mic, Radio, Users, Calendar, Award } from "lucide-react"

export default function RadioEmpresariaPage() {
    const toc = [
        { id: "mision", label: "Nuestra Misión" },
        { id: "programacion", label: "Programación" },
        { id: "comunidad", label: "Compromiso Comunitario" },
        { id: "plataforma", label: "Plataforma Abierta" },
        { id: "entrevistas", label: "Entrevistas Destacadas" },
    ]

    return (
        <ArticleLayout
            title="Radio Empresaria: Un Espacio para Comunicar la Realidad de las Cadenas de Valor Regionales"
            category="Programas"
            summary="Fundada en 2014, Radio Empresaria se ha consolidado como una plataforma vital para comunicar la realidad de las cadenas de valor regionales, conectando pymes, cooperativas y emprendedores."
            toc={toc}
            readTime="6 min"
            heroImage="/radio-empresaria-hero.jpg"

        >
            <ArticleSection id="mision" title="Nuestra Misión">
                <p className="text-lg text-[#111269]/70 leading-relaxed mb-6">
                    Desde su creación, <strong>Radio Empresaria</strong> se ha dedicado a fomentar la sostenibilidad y la innovación,
                    proporcionando contenido relevante que impulsa el desarrollo económico y social.
                </p>
                <p className="text-lg text-[#111269]/70 leading-relaxed mb-8">
                    A través de nuestros programas, buscamos conectar ideas y personas, generando un impacto positivo en el
                    entorno empresarial y comunitario. Brindamos espacio a emprendedores, pymes, cooperativas, ONGs y
                    escuelas técnicas para que puedan expresarse libremente a diario.
                </p>
            </ArticleSection>

            <ArticleSection id="programacion" title="Programación Diversificada">
                <div className="grid gap-6 md:grid-cols-2">
                    <ContentCard className="h-full">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-[#8dc2ff]/10 text-[#111269]">
                                <Radio className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#111269] mb-2">Noticias Económicas</h4>
                                <p className="text-sm text-[#111269]/70">
                                    Mantente al día con las últimas novedades que afectan a la industria y a los mercados locales, nacionales e internacionales.
                                </p>
                            </div>
                        </div>
                    </ContentCard>

                    <ContentCard className="h-full">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-[#8dc2ff]/10 text-[#111269]">
                                <Users className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#111269] mb-2">Diálogos con Líderes</h4>
                                <p className="text-sm text-[#111269]/70">
                                    Escucha a los expertos y líderes de opinión discutir sobre innovación, sostenibilidad, y estrategias empresariales exitosas.
                                </p>
                            </div>
                        </div>
                    </ContentCard>

                    <ContentCard className="h-full">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-[#8dc2ff]/10 text-[#111269]">
                                <Award className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#111269] mb-2">Espacios para el Emprendimiento</h4>
                                <p className="text-sm text-[#111269]/70">
                                    Ofrecemos plataformas para que emprendedores compartan sus experiencias y aprendizajes, inspirando a otros a seguir sus pasos.
                                </p>
                            </div>
                        </div>
                    </ContentCard>

                    <ContentCard className="h-full">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-[#8dc2ff]/10 text-[#111269]">
                                <Mic className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#111269] mb-2">Área de Deportes</h4>
                                <p className="text-sm text-[#111269]/70">
                                    Liderada por Claudio Blanco, con cobertura apasionante de Defensa y Justicia y otras disciplinas deportivas.
                                </p>
                            </div>
                        </div>
                    </ContentCard>
                </div>
            </ArticleSection>

            <ArticleSection id="comunidad" title="Compromiso con la Comunidad">
                <InfoBox type="success" title="Impacto Social">
                    En Radio Empresaria, creemos en el poder transformador de la comunicación para el bien común.
                    Nuestras iniciativas no solo informan, sino que también educan y motivan cambios positivos,
                    alineándose con los Objetivos de Desarrollo Sostenible (ODS).
                </InfoBox>
            </ArticleSection>

            <ArticleSection id="plataforma" title="Plataforma Abierta">
                <p className="text-lg text-[#111269]/70 leading-relaxed mb-6">
                    Con la mirada puesta en el futuro, Radio Empresaria está completamente conectada al mundo digital,
                    ofreciendo streaming en línea para que nuestra programación sea accesible desde cualquier lugar y en cualquier momento.
                    Desde 2014, nuestro objetivo ha sido llegar más allá de las ondas radiales tradicionales.
                </p>

                <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e2e8f0] mb-8">
                    <h3 className="text-xl font-bold text-[#111269] mb-6 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <Calendar className="w-5 h-5 text-[#8dc2ff]" />
                        Horarios y Equipo
                    </h3>
                    <div className="space-y-4 text-[#111269]/80">
                        <p>
                            <strong>Emisión:</strong> Todos los jueves de 11:00 a 13:00 horas.
                        </p>
                        <p>
                            <strong>Conducción:</strong> Facundo Galdós, Maria Eugenia Ruiz y Claudio Blanco.
                        </p>
                        <p>
                            <strong>Producción:</strong> Leila Galdós.
                        </p>
                        <p>
                            <strong>Operación Técnica:</strong> Eliana Herrera y Leonel Blanco.
                        </p>
                    </div>
                </div>

                <p className="text-lg text-[#111269]/70 leading-relaxed mb-6">
                    Facundo Galdós remarcó la importancia de Reporte Regional:
                    <span className="italic block pl-4 border-l-4 border-[#8dc2ff] my-4 text-[#111269]/80">
                        «Gracias a Reporte Regional en el año 2013 logramos recaudar los fondos para alquilar el primer espacio físico
                        y luego crear <strong>Radio Empresaria</strong>. Es una herramienta para las pymes, cooperativas, industrias,
                        instituciones y ONGs locales, dado que se constituyó en un lugar de encuentro comunicacional donde pueden
                        contar sus acciones periódicamente.»
                    </span>
                </p>

                <div className="mb-8">
                    <h4 className="font-bold text-[#111269] mb-4">Participaron del primer programa:</h4>
                    <CheckList items={[
                        "Lic. Gustavo Pons",
                        "Maria Eugenia Ruiz (Presidente de FOCAVA)",
                        "Daniel Coral (Presidente de Seyta S.A. y vicepresidente de FOCAVA)",
                        "Dr. Guillermo Siro (Presidente de CEPBA)"
                    ]} />
                </div>

                <div className="mt-8 bg-[#f0f7ff] p-6 rounded-xl border border-[#8dc2ff]/20">
                    <p className="text-[#111269] font-medium mb-2">
                        Para más información, sintonice <strong>Radio Empresaria</strong> o contáctenos:
                    </p>
                    <ul className="list-disc list-inside text-[#111269]/70 space-y-1">
                        <li>Portal: <a href="http://www.radioempresaria.com.ar" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.radioempresaria.com.ar</a></li>
                        <li>Email: <a href="mailto:info@probuenosaires.org" className="text-blue-600 hover:underline">info@probuenosaires.org</a></li>
                        <li>Teléfono: 5258-0226 (Lunes a Viernes 9 a 13 hs)</li>
                    </ul>
                </div>
            </ArticleSection>

            <ArticleSection id="entrevistas" title="Entrevistas Destacadas">
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="space-y-3">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/XhYb1P-PQms?si=Z8YV34z7F_wdWs4U"
                                title="Entrevista Lic Gustavo Pons"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="absolute inset-0"
                            ></iframe>
                        </div>
                        <p className="font-medium text-[#111269] text-center text-sm">Entrevista Lic. Gustavo Pons</p>
                    </div>

                    <div className="space-y-3">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/HZsFLmTPwDk?si=ave4pouJxozvW1Mx"
                                title="Entrevista a Daniel Coral"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="absolute inset-0"
                            ></iframe>
                        </div>
                        <p className="font-medium text-[#111269] text-center text-sm">Entrevista a Daniel Coral (Seyta S.A.)</p>
                    </div>

                    <div className="space-y-3 lg:col-span-2 lg:w-1/2 lg:mx-auto">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/ju80WtN1c-M?si=vh6EigX76ebNtLtj"
                                title="Entrevista Dr. Guillermo Siro"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="absolute inset-0"
                            ></iframe>
                        </div>
                        <p className="font-medium text-[#111269] text-center text-sm">Entrevista Dr. Guillermo Siro (CEPBA)</p>
                    </div>
                </div>
            </ArticleSection>
        </ArticleLayout>
    )
}

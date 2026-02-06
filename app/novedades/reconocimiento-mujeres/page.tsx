"use client"

import { ArticleLayout } from "@/components/article-layout"
import { ArticleSection, CheckList, InfoBox, ContentCard } from "@/components/article-components"
import { Users, Award, MapPin, Calendar as CalendarIcon } from "lucide-react"

export default function ReconocimientoMujeresPage() {
    const toc = [
        { id: "contexto", label: "El Evento" },
        { id: "destacadas", label: "Mujeres Destacadas" },
        { id: "listado", label: "Listado Completo" },
    ]

    return (
        <ArticleLayout
            title="Reconocimiento a mujeres con compromiso social en el 135° aniversario de Florencio Varela"
            category="Institucional"
            date="30 de Enero, 2026"
            readTime="4 min"
            summary="En el marco del 135° aniversario de Florencio Varela, se realizó un emotivo acto para visibilizar trayectorias femeninas destacadas en el ámbito social, profesional, educativo y deportivo del distrito."
            toc={toc}
        >
            <ArticleSection id="contexto" title="Un Homenaje a la Trayectoria Social">
                <div className="space-y-6">
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        En el marco del 135° aniversario de la fundación del partido de Florencio Varela, se llevó a cabo un emotivo acto de <strong>Reconocimiento a Mujeres con Compromiso Social</strong>. Esta iniciativa buscó visibilizar trayectorias femeninas destacadas en diversos ámbitos de la vida comunitaria, social, profesional, educativa, deportiva y productiva del distrito.
                    </p>
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        La actividad, desarrollada en el Complejo Naturaleza Viva, fue organizada por la <strong>Fundación para el Fortalecimiento Familiar "Julieta Lanteri"</strong>. Las distinciones, otorgadas por la Fundación Naturaleza Viva, La Voz del Conurbano y Diario Vespertino, honraron a mujeres cuyos valores reflejan el legado de Julieta Lanteri: compromiso con la igualdad, el cuidado y la dignidad humana.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mt-12">
                    <div className="flex items-center gap-4 p-6 bg-[#f0f7ff] rounded-2xl border border-[#8dc2ff]/20">
                        <MapPin className="w-8 h-8 text-[#111269]" />
                        <div>
                            <h4 className="font-bold text-[#111269]">Ubicación</h4>
                            <p className="text-[#111269]/60">Complejo Naturaleza Viva</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-6 bg-[#f0f7ff] rounded-2xl border border-[#8dc2ff]/20">
                        <CalendarIcon className="w-8 h-8 text-[#111269]" />
                        <div>
                            <h4 className="font-bold text-[#111269]">Fecha</h4>
                            <p className="text-[#111269]/60">30 de Enero, 2026</p>
                        </div>
                    </div>
                </div>
            </ArticleSection>

            <ArticleSection id="destacadas" title="Nuestras Representantes">
                <ContentCard>
                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#111269] flex items-center justify-center text-white">
                                <Users className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#111269] mb-2">María Eugenia Ruiz</h3>
                                <p className="text-[#111269]/70 italic mb-4">
                                    Vicepresidente de la Fundación Pro Buenos Aires y Presidenta de FOCAVA (Cámara Empresaria Bonaerense para el Fortalecimiento de las Cadenas de Valor).
                                </p>
                                <p className="text-sm text-[#111269]/60">
                                    Su labor ha sido fundamental en la articulación de las cadenas de valor regionales y el fortalecimiento institucional de las pymes bonaerenses.
                                </p>
                            </div>
                        </div>

                        <div className="h-px bg-[#e2e8f0]" />

                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#8dc2ff] flex items-center justify-center text-[#111269]">
                                <Award className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#111269] mb-2">María Elisa Cortiñas</h3>
                                <p className="text-[#111269]/70 italic mb-4">
                                    Empresaria pyme socia de FOCAVA y directora de la empresa TEMFLOR SRL.
                                </p>
                                <p className="text-sm text-[#111269]/60">
                                    Reconocida por su compromiso en el sector productivo y su rol activo en la comunidad empresarial de la región.
                                </p>
                            </div>
                        </div>
                    </div>
                </ContentCard>

                <div className="mt-12">
                    <InfoBox type="info" title="Compromiso Institucional">
                        Fundación Pro Buenos Aires se enorgullece de que su Vicepresidente, María Eugenia Ruiz, y una empresaria pyme socia de FOCAVA, María Elisa Cortiñas, sean parte de este grupo de mujeres ejemplares, cuyo compromiso social y profesional contribuye al crecimiento y fortalecimiento de nuestro distrito.
                    </InfoBox>
                </div>
            </ArticleSection>

            <ArticleSection id="listado" title="Listado completo de mujeres homenajeadas">
                <p className="text-lg text-[#111269]/70 mb-8">
                    El reconocimiento celebró la pluralidad de aportes femeninos que fortalecen la comunidad, destacando el trabajo en áreas como la salud, la educación, la justicia y el deporte.
                </p>
                <CheckList
                    items={[
                        <span key="1"><strong>Dra. Ana Bo:</strong> médica generalista.</span>,
                        <span key="2"><strong>Lic. Ana Ferra:</strong> obstetra.</span>,
                        <span key="3"><strong>Karina Albarerenga:</strong> madre y activista por la justicia.</span>,
                        <span key="4"><strong>Antonella Vallejos:</strong> referenta de la diversidad.</span>,
                        <span key="5"><strong>Prof. Samanta Bovelli:</strong> docente de Berazategui.</span>,
                        <span key="6"><strong>Dra. Etel Mattesich:</strong> abogada y docente universitaria (UCA).</span>,
                        <span key="7"><strong>Dra. Mariana Graña:</strong> psicóloga y abogada.</span>,
                        <span key="8"><strong>Dra. Nancy Cristaldo:</strong> abogada.</span>,
                        <span key="9"><strong>Dra. Vanessa Petto:</strong> abogada.</span>,
                        <span key="10"><strong>Vanesa Quilisis:</strong> referente de familias con síndrome de Angelman.</span>,
                        <span key="11"><strong>Gabriela Salinas:</strong> referente de personas electrodependientes.</span>,
                        <span key="12"><strong>Juana Rosa Valdéz Aguirre:</strong> docente y directora de escuela.</span>,
                        <span key="13"><strong>Leticia Torrilla:</strong> promotora de género.</span>,
                        <span key="14"><strong>Deportistas de Taekwondo ITF:</strong> Luana Ávila Matrella, Natalia Matrella, Micaela Violante, Celena Pereyra (Campeonas y medallistas mundiales).</span>,
                        <span key="15"><strong>Silvia Riedel:</strong> presidenta de la Biblioteca Popular "Martín Torres Riede" e impulsora de "Estrellas Amarillas".</span>,
                        <span key="16"><strong>Dra. Ximena Sánchez:</strong> abogada y especialista en Derecho de Familia.</span>,
                    ]}
                />
            </ArticleSection>
        </ArticleLayout>
    )
}

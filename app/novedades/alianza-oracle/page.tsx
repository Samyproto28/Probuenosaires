"use client"

import { ArticleLayout } from "@/components/article-layout"
import { ArticleSection, CheckList, InfoBox, ContentCard, ProcessSteps } from "@/components/article-components"
import { Laptop, Users, GraduationCap, Target, Cpu, BookOpen } from "lucide-react"

export default function AlianzaOraclePage() {
    const toc = [
        { id: "introduccion", label: "Colaboración Estratégica" },
        { id: "trayectoria", label: "Programa Vinculando" },
        { id: "capacitacion", label: "Ejes de Formación" },
        { id: "acciones", label: "Acciones Concretas" },
    ]

    return (
        <ArticleLayout
            title="Oracle y Fundación: Aliados para potenciar el Programa Vinculando"
            category="Institucional"
            date="27 de noviembre, 2025"
            readTime="6 min"
            summary="Fundación Pro Buenos Aires y Oracle establecen una alianza estratégica para fortalecer la formación técnica y acercar el mundo corporativo a las escuelas técnicas bonaerenses."
            toc={toc}
        >
            <ArticleSection id="introduccion" title="Un Salto Hacia la Innovación Educativa">
                <div className="space-y-6">
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        En un nuevo paso hacia la innovación educativa y la vinculación real con el sector productivo, la <strong>Fundación Pro Buenos Aires</strong> avanzó en una colaboración estratégica con <strong>Oracle</strong>, una de las empresas líderes a nivel global en tecnología.
                    </p>
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        El encuentro, enmarcado en el <strong>Programa Vinculando</strong>, busca fortalecer la formación técnica de estudiantes y docentes, acercándolos aún más a las demandas del mundo corporativo.
                    </p>
                    <InfoBox type="info" title="Visión Compartida">
                        Esta alianza refuerza el compromiso de seguir mejorando la formación técnica desde la raíz, incorporando tecnología, experiencias reales y miradas innovadoras.
                    </InfoBox>
                </div>
            </ArticleSection>

            <ArticleSection id="trayectoria" title="El Impacto del Programa Vinculando">
                <div className="space-y-6">
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        Durante la reunión, los representantes de la Fundación presentaron la trayectoria institucional, destacando que desde el 2013 el <strong>Programa Vinculando</strong> ha establecido un puente sostenido entre las escuelas técnicas y el ecosistema productivo.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        <ContentCard className="bg-gradient-to-br from-white to-[#f0f7ff]">
                            <div className="flex flex-col items-center text-center p-4">
                                <div className="bg-[#111269]/10 p-4 rounded-2xl mb-6">
                                    <Target className="w-10 h-10 text-[#111269]" />
                                </div>
                                <h4 className="text-xl font-bold text-[#111269] mb-4">Competencias B2B</h4>
                                <p className="text-[#111269]/60">
                                    Formación integral en liderazgo y gestión emocional para superar el miedo al rechazo en ventas corporativas.
                                </p>
                            </div>
                        </ContentCard>
                        <ContentCard className="bg-gradient-to-br from-white to-[#f0f7ff]">
                            <div className="flex flex-col items-center text-center p-4">
                                <div className="bg-[#111269]/10 p-4 rounded-2xl mb-6">
                                    <Cpu className="w-10 h-10 text-[#111269]" />
                                </div>
                                <h4 className="text-xl font-bold text-[#111269] mb-4">Nuevas Tecnicaturas</h4>
                                <p className="text-[#111269]/60">
                                    Impulso a especialidades como Energías Alternativas y articulación con empresas líderes como Huawei y WEG.
                                </p>
                            </div>
                        </ContentCard>
                    </div>
                </div>
            </ArticleSection>

            <ArticleSection id="capacitacion" title="Ejes de Formación y Networking">
                <div className="space-y-6">
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        Florencia Corsi, representante de <strong>Oracle</strong>, propuso enriquecer las instancias de formación estudiantil con charlas motivacionales y técnicas. Se acordó la planificación de dos encuentros clave:
                    </p>
                    <ProcessSteps
                        steps={[
                            {
                                title: "Charla para Estudiantes",
                                description: "Una jornada inspiracional enfocada en tecnología, networking y habilidades corporativas necesarias para el mercado actual.",
                                number: "01"
                            },
                            {
                                title: "Taller para Docentes",
                                description: "Capacitación sobre Inteligencia Artificial en febrero de 2026, dirigida a actualizar conocimientos en esta área estratégica.",
                                number: "02"
                            }
                        ]}
                    />
                </div>
            </ArticleSection>

            <ArticleSection id="acciones" title="Compromisos y Acciones Concretas">
                <div className="space-y-8">
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        Para llevar adelante esta colaboración, se definieron líneas de trabajo inmediatas que aseguran la operatividad del acuerdo:
                    </p>

                    <CheckList
                        items={[
                            <span key="1"><strong>Registro Institucional:</strong> Oracle registrará a la Fundación Pro Buenos Aires como ONG oficial en su sistema global.</span>,
                            <span key="2"><strong>Capacitación IA:</strong> La charla para docentes contará con un cupo inicial para 50 participantes.</span>,
                            <span key="3"><strong>Gestión Logística:</strong> La Fundación coordinará las consultas, disponibilidad y listas de asistentes.</span>,
                            <span key="4"><strong>Aval Institucional:</strong> Trabajo conjunto con la Dirección Provincial de Educación Técnica para asegurar los lineamientos comunicacionales.</span>,
                        ]}
                    />

                    <div className="mt-12">
                        <InfoBox type="success" title="Conclusión">
                            Juntos, seguimos construyendo un puente sólido entre la educación y el empleo, formando a los profesionales que nuestro país necesita para los desafíos tecnológicos del mañana.
                        </InfoBox>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-8">
                        {["#Oracle", "#FundaciónProBuenos Aires", "#Vinculando", "#EducaciónTécnica", "#InteligenciaArtificial", "#FormaciónProfesional"].map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-[#111269]/5 text-[#111269]/60 text-sm rounded-full font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </ArticleSection>
        </ArticleLayout>
    )
}

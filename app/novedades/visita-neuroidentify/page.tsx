"use client"

import { ArticleLayout } from "@/components/article-layout"
import { ArticleSection, CheckList, InfoBox, ContentCard, ProcessSteps } from "@/components/article-components"
import { Brain, Users, Lightbulb, Target, Rocket, Globe } from "lucide-react"

export default function VisitaNeuroIdentifyPage() {
    const toc = [
        { id: "introduccion", label: "Innovación y Encuentro" },
        { id: "plataforma", label: "Sobre NeuroIdentify" },
        { id: "corporativo", label: "Articulación Corporativa" },
        { id: "vision", label: "Visión del Futuro" },
        { id: "proximos-pasos", label: "Próximos Pasos" },
    ]

    return (
        <ArticleLayout
            title="Gleyson Santos, creador de NeuroIdentify, visitó la Fundación para potenciar la inclusión educativa y laboral en Argentina"
            category="Novedades"
            date="27 de noviembre, 2025"
            readTime="5 min"
            summary="En una jornada significativa para la innovación educativa y laboral en Argentina, Gleyson Santos, cofundador de la startup brasileña NeuroIdentify, visitó nuestras instalaciones para evaluar la oportunidad de presentar su solución tecnológica al sistema educativo y productivo local."
            toc={toc}
        >
            <ArticleSection id="introduccion" title="Un Encuentro Estratégico">
                <div className="space-y-6">
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        El pasado martes 26 de noviembre, la <strong>Fundación Pro Buenos Aires</strong> recibió la visita de <strong>Gleyson Santos</strong>, cofundador de la startup brasileña <strong>NeuroIdentify</strong>. El encuentro tuvo lugar en nuestra sede de la calle Piedras 113, en la Ciudad Autónoma de Buenos Aires.
                    </p>
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        La reunión, encabezada por nuestro presidente <strong>Facundo Galdós</strong>, fue articulada estratégicamente a través del acuerdo de colaboración que mantenemos con <strong>Puentes a Brasil</strong>, coordinado por Gustavo Miguelez desde Río de Janeiro.
                    </p>
                    <InfoBox type="info" title="Objetivo Central">
                        Evaluar la oportunidad de presentar la solución de NeuroIdentify en Argentina para facilitar la inclusión educativa y laboral, adaptando la enseñanza a las necesidades cognitivas de cada estudiante.
                    </InfoBox>
                </div>
            </ArticleSection>

            <ArticleSection id="plataforma" title="Tecnología al Servicio de la Inclusión">
                <div className="space-y-6">
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        NeuroIdentify es una herramienta tecnológica diseñada para apoyar a los docentes en la <strong>identificación temprana de neurodivergencias</strong>, tales como el autismo y el Trastorno por Déficit de Atención e Hiperactividad (TDAH).
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        <ContentCard className="bg-gradient-to-br from-white to-[#f0f7ff]">
                            <div className="flex flex-col items-center text-center p-4">
                                <div className="bg-[#111269]/10 p-4 rounded-2xl mb-6">
                                    <Brain className="w-10 h-10 text-[#111269]" />
                                </div>
                                <h4 className="text-xl font-bold text-[#111269] mb-4">Detección Temprana</h4>
                                <p className="text-[#111269]/60">
                                    Facilita a los docentes la identificación de necesidades cognitivas, motoras y sociales.
                                </p>
                            </div>
                        </ContentCard>
                        <ContentCard className="bg-gradient-to-br from-white to-[#f0f7ff]">
                            <div className="flex flex-col items-center text-center p-4">
                                <div className="bg-[#111269]/10 p-4 rounded-2xl mb-6">
                                    <Lightbulb className="w-10 h-10 text-[#111269]" />
                                </div>
                                <h4 className="text-xl font-bold text-[#111269] mb-4">Adaptabilidad</h4>
                                <p className="text-[#111269]/60">
                                    Permite adaptar la enseñanza a la realidad de cada alumno para garantizar su pleno desarrollo.
                                </p>
                            </div>
                        </ContentCard>
                    </div>
                </div>
            </ArticleSection>

            <ArticleSection id="corporativo" title="Articulación Pionera con el Sector Privado">
                <div className="space-y-6">
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        Un aspecto destacado del encuentro fue la exploración de una articulación con empresas que ya cuentan con personas con neurodivergencias incorporadas en sus plantillas a través de programas de <strong>Sostenibilidad y ESG</strong>.
                    </p>
                    <ProcessSteps
                        steps={[
                            {
                                title: "Incorporación y Gestión",
                                description: "Uso de la herramienta para asistir en los procesos de selección y adaptación de talentos neurodivergentes.",
                                number: "01"
                            },
                            {
                                title: "Potenciación de Capacidades",
                                description: "Garantizar el pleno desarrollo de las habilidades de los trabajadores dentro del entorno laboral.",
                                number: "02"
                            },
                            {
                                title: "Cultura Inclusiva",
                                description: "Fomentar un ecosistema donde la diversidad cognitiva sea reconocida y valorada en las empresas.",
                                number: "03"
                            }
                        ]}
                    />
                </div>
            </ArticleSection>

            <ArticleSection id="vision" title="Voz de los Protagonistas">
                <div className="space-y-8">
                    <div className="relative p-8 bg-[#111269]/5 rounded-2xl border-l-[6px] border-[#111269]">
                        <p className="italic text-xl text-[#111269] leading-relaxed mb-4">
                            "Trabajamos para facilitar el desarrollo del alumnado y apoyar al profesorado y a las escuelas en el proceso de inclusión. Extender este apoyo al ámbito laboral es un paso natural y esencial para construir una sociedad verdaderamente inclusiva."
                        </p>
                        <cite className="block font-bold text-[#111269]/70">— Gleyson Santos, Cofundador de NeuroIdentify</cite>
                    </div>

                    <div className="relative p-8 bg-[#8dc2ff]/5 rounded-2xl border-l-[6px] border-[#8dc2ff]">
                        <p className="italic text-xl text-[#111269] leading-relaxed mb-4">
                            "Es un honor recibir a innovadores como Gleyson. Evaluar la implementación de NeuroIdentify en el ámbito educativo y en el sector privado representa un paso concreto hacia la construcción de un ecosistema más inclusivo."
                        </p>
                        <cite className="block font-bold text-[#111269]/70">— Facundo Galdós, Presidente de la Fundación Pro Buenos Aires</cite>
                    </div>
                </div>
            </ArticleSection>

            <ArticleSection id="proximos-pasos" title="Hacia un Ecosistema Inclusivo">
                <div className="space-y-8">
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        NeuroIdentify, nacida hace un año en Belém como respuesta a un desafío académico, ya se comercializa en escuelas y redes educativas de Brasil. Tras su paso por el prestigioso <strong>Web Summit 2025 en Lisboa</strong>, busca expandir su impacto en Argentina.
                    </p>

                    <CheckList
                        items={[
                            <span key="1"><strong>Presentación a Autoridades:</strong> Diálogo con autoridades educativas nacionales para la implementación en escuelas.</span>,
                            <span key="2"><strong>Alianzas Corporativas:</strong> Trabajo con empresas líderes bajo marcos de ESG y Sostenibilidad.</span>,
                            <span key="3"><strong>Red Internacional:</strong> Refuerzo de la colaboración con Puentes a Brasil para conectar soluciones globales con realidades locales.</span>,
                            <span key="4"><strong>Impacto Social:</strong> Tecnología puesta al servicio de la inclusión para marcar un antes y un después.</span>,
                        ]}
                    />

                    <div className="mt-12">
                        <InfoBox type="success" title="Visión de Futuro">
                            La Fundación Pro Buenos Aires reafirma su compromiso de seguir acercando soluciones tecnológicas que transformen la educación y el empleo en nuestro país.
                        </InfoBox>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-8">
                        {["#NeuroIdentify", "#InclusiónEducativa", "#InclusiónLaboral", "#Neurodivergencia", "#TecnologíaSocial", "#ESG", "#ProbaComex", "#Vinculando"].map((tag) => (
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

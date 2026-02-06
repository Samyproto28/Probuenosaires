"use client"

import { ArticleLayout } from "@/components/article-layout"
import { ArticleSection, CheckList, InfoBox, ContentCard } from "@/components/article-components"
import { MapPin, Calendar as CalendarIcon, Rocket, Users, Heart } from "lucide-react"

export default function NuevaSedeQuilmesPage() {
    const toc = [
        { id: "mudanza", label: "La Mudanza" },
        { id: "legado", label: "Nuestro Legado" },
        { id: "futuro", label: "El Futuro" },
        { id: "agradecimientos", label: "Agradecimientos" },
    ]

    return (
        <ArticleLayout
            title="¡Comenzamos una nueva etapa! Inauguramos una nueva sede en Quilmes Oeste"
            category="Novedades"
            date="24 de Diciembre, 2025"
            readTime="3 min"
            summary="Nos llena de orgullo y entusiasmo comunicarles que concretamos una mudanza muy significativa para nuestro crecimiento territorial: un nuevo espacio ubicado en Venezuela 2543, Quilmes Oeste, para ampliar nuestro impacto."
            toc={toc}
        >
            <ArticleSection id="mudanza" title="Un Nuevo Espacio para Crecer">
                <div className="space-y-6">
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        Nos llena de orgullo y entusiasmo comunicarles que los días 22 y 23 de diciembre concretamos una mudanza muy significativa para nuestro crecimiento territorial. Hemos trasladado nuestra <strong>sede operativa compartida con FOCAVA de Berazategui</strong> (Ruta 36 N° 1354) a un nuevo espacio ubicado en <strong>Venezuela 2543, Quilmes Oeste</strong>.
                    </p>
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        Este cambio en la zona sur representa mucho más que una nueva dirección; es el compromiso renovado de seguir trabajando por el desarrollo productivo y la inclusión laboral en nuestra región.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mt-12">
                    <div className="flex items-center gap-4 p-6 bg-[#f0f7ff] rounded-2xl border border-[#8dc2ff]/20">
                        <MapPin className="w-8 h-8 text-[#111269]" />
                        <div>
                            <h4 className="font-bold text-[#111269]">Nueva Sede Operativa</h4>
                            <p className="text-[#111269]/60 text-sm">Venezuela 2543, Quilmes Oeste</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-6 bg-[#f0f7ff] rounded-2xl border border-[#8dc2ff]/20">
                        <MapPin className="w-8 h-8 text-[#111269]" />
                        <div>
                            <h4 className="font-bold text-[#111269]">Sede Central</h4>
                            <p className="text-[#111269]/60 text-sm">Piedras 113, Piso 5, Of. 1, CABA</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <InfoBox type="warning" title="Información Importante">
                        Nuestra sede principal y administrativa continúa operando de manera habitual en la Ciudad Autónoma de Buenos Aires. El nuevo espacio en Quilmes Oeste se encuentra actualmente en proceso de habilitación final.
                    </InfoBox>
                </div>
            </ArticleSection>

            <ArticleSection id="legado" title="Todo nuestro legado viaja con nosotros">
                <div className="space-y-6">
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        En nuestro espacio anterior, desarrollamos con pasión proyectos fundamentales que han marcado el camino de la Fundación. Todo ese legado y experiencia hoy se traslada a nuestro nuevo hogar:
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    <ContentCard>
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="w-12 h-12 rounded-full bg-[#111269]/5 flex items-center justify-center mb-4">
                                <Rocket className="w-6 h-6 text-[#111269]" />
                            </div>
                            <h4 className="font-bold text-[#111269] mb-2">Radio Empresaria</h4>
                            <p className="text-sm text-[#111269]/60">Comunicando la realidad de las cadenas de valor regionales diariamente.</p>
                        </div>
                    </ContentCard>
                    <ContentCard>
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="w-12 h-12 rounded-full bg-[#111269]/5 flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-[#111269]" />
                            </div>
                            <h4 className="font-bold text-[#111269] mb-2">Oficina AMIA</h4>
                            <p className="text-sm text-[#111269]/60">Operando como punto clave para la intermediación laboral en la zona sur.</p>
                        </div>
                    </ContentCard>
                    <ContentCard>
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="w-12 h-12 rounded-full bg-[#111269]/5 flex items-center justify-center mb-4">
                                <Heart className="w-6 h-6 text-[#111269]" />
                            </div>
                            <h4 className="font-bold text-[#111269] mb-2">Prog. Vinculando</h4>
                            <p className="text-sm text-[#111269]/60">Capacitando desde 2013 en ventas B2B y gestión comercial para pymes.</p>
                        </div>
                    </ContentCard>
                </div>
            </ArticleSection>

            <ArticleSection id="futuro" title="¿Qué construiremos en este nuevo hogar?">
                <div className="space-y-6">
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        En alianza estratégica con <strong>CEPBA</strong> y <strong>FOCAVA</strong>, vamos a construir el <strong>Centro de Capacitación Compartido «Pro Buenos Aires»</strong>.
                    </p>
                    <p className="text-lg text-[#111269]/70 leading-relaxed">
                        Este espacio está diseñado para ser un polo de formación, innovación y desarrollo para la comunidad empresarial, emprendedora y educativa de la región. Ya estamos planificando una serie de actividades que captarán su interés muy pronto.
                    </p>
                </div>

                <div className="mt-8">
                    <InfoBox type="info" title="Hacia la Operatividad Total">
                        Aunque aún estamos organizando el nuevo espacio, confiamos en que en muy poco tiempo estaremos 100% operativos para recibirlos y seguir trabajando juntos.
                    </InfoBox>
                </div>
            </ArticleSection>

            <ArticleSection id="agradecimientos" title="Un Agradecimiento Enorme">
                <p className="text-lg text-[#111269]/70 mb-8 leading-relaxed">
                    Este gran paso no hubiera sido posible sin el apoyo comprometido de empresas y amigos que creen en nuestra misión. Queremos agradecer profundamente a:
                </p>

                <div className="bg-[#f8fafc] rounded-3xl p-8 lg:p-12 border border-[#e2e8f0]">
                    <CheckList
                        items={[
                            <span key="1"><strong>Sergio y Mabel:</strong> propietarios del espacio anterior quienes creyeron en nuestra labor social.</span>,
                            <span key="2">Sanitarios Senzabello</span>,
                            <span key="3">Alimento Santa Cruz</span>,
                            <span key="4">Planificarseh</span>,
                            <span key="5">Dock Motion SRL</span>,
                            <span key="6">CVC Membranas</span>,
                            <span key="7">JLF Materiales Eléctricos S.A.</span>,
                            <span key="8">A la gran cantidad de voluntarios que dedicaron tiempo y esfuerzo.</span>,
                        ]}
                    />
                </div>

                <p className="text-lg text-[#111269]/70 mt-10 leading-relaxed italic">
                    "Su ayuda fue invaluable para trasladar todo el equipamiento de manera exitosa. ¡Los esperamos en nuestra nueva casa!"
                </p>
            </ArticleSection>
        </ArticleLayout>
    )
}

import { ArticleLayout } from "@/components/article-layout"
import { ArticleSection, ProcessSteps, CheckList, InfoBox, ContentCard } from "@/components/article-components"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink, Mail, Phone } from "lucide-react"

export default function ProbaComexPage() {
    return (
        <ArticleLayout
            title="ProBa Comex"
            category="Programas"
            summary="Asistencia Integral para Importadores y Servicios en Comercio Exterior"
            readTime="5 min"
            date="2025-08-01"
            heroImage="/images/probacomex-main.png"
            toc={[
                { id: "intro", label: "Introducción" },
                { id: "ofrece", label: "¿Qué ofrece?" },
                { id: "destinatarios", label: "Destinatarios" },
                { id: "participar", label: "Cómo participar" },
            ]}
        >
            <ArticleSection id="intro">
                <ContentCard>
                    <p className="lead">
                        Desde Fundación Pro Buenos Aires presentamos <strong>ProBA Comex</strong>, un nuevo programa orientado a impulsar la competitividad de las PYMES en el comercio internacional.
                    </p>
                    <p>
                        A través de este programa, acompañamos a empresas en sus proyectos de importación, conectándolas con prestadores de servicios confiables, generando economías de escala y brindando soporte técnico y capacitación.
                    </p>
                </ContentCard>
            </ArticleSection>

            <ArticleSection id="ofrece" title="¿Qué ofrece ProBA Comex?">
                <ProcessSteps
                    steps={[
                        {
                            title: "Vinculación con Prestadores Estratégicos",
                            description: "Conectamos a las empresas con agentes de carga, zonas francas, despachantes, aseguradoras y otros actores clave en la cadena logística.",
                            number: 1
                        },
                        {
                            title: "Pool de Compras para PYMES",
                            description: "Facilitamos compras agrupadas para reducir costos, compartir contenedores y optimizar la logística internacional.",
                            number: 2
                        },
                        {
                            title: "Estudios de Mercado y Costeos",
                            description: "Brindamos información estratégica para evaluar proveedores, costos y oportunidades de importación.",
                            number: 3
                        },
                        {
                            title: "Asistencia Técnica Personalizada",
                            description: "Acompañamos todo el proceso de importación: selección de proveedores, documentación, embarques y coordinación logística.",
                            number: 4
                        },
                        {
                            title: "Capacitación In Company",
                            description: "Formación especializada para equipos internos: normativa aduanera, gestión operativa, costeo y planificación.",
                            number: 5
                        }
                    ]}
                />
            </ArticleSection>

            <ArticleSection id="destinatarios" title="¿A quién está dirigido?">
                <CheckList
                    items={[
                        "PYMES industriales y comerciales",
                        "Startups con proyectos de importación",
                        "Cooperativas y agrupaciones empresarias",
                        "Empresas que desean profesionalizar su área de comercio exterior"
                    ]}
                />
            </ArticleSection>

            <ArticleSection id="porque-sumarte" title="¿Por qué sumarte?">
                <div className="grid md:grid-cols-2 gap-8">
                    <ContentCard title="Si sos una empresa importadora" className="bg-blue-50/50">
                        <ul className="space-y-3">
                            <li className="flex gap-2 items-start"><span className="text-primary font-bold">✔</span> Accedé a una red confiable de prestadores</li>
                            <li className="flex gap-2 items-start"><span className="text-primary font-bold">✔</span> Reducí tus costos de importación</li>
                            <li className="flex gap-2 items-start"><span className="text-primary font-bold">✔</span> Recibí asistencia técnica y formación</li>
                            <li className="flex gap-2 items-start"><span className="text-primary font-bold">✔</span> Importá sin necesidad de gran escala ni estructura interna</li>
                        </ul>
                    </ContentCard>
                    <ContentCard title="Si sos un prestador de servicios" className="bg-indigo-50/50">
                        <p className="text-sm text-muted-foreground mb-4 italic">(logística, seguros, bancos, zonas francas, etc.)</p>
                        <ul className="space-y-3">
                            <li className="flex gap-2 items-start"><span className="text-primary font-bold">✔</span> Conectá con clientes calificados</li>
                            <li className="flex gap-2 items-start"><span className="text-primary font-bold">✔</span> Ampliá tu visibilidad en el ecosistema PYME</li>
                            <li className="flex gap-2 items-start"><span className="text-primary font-bold">✔</span> Participá de una red colaborativa y validada</li>
                            <li className="flex gap-2 items-start"><span className="text-primary font-bold">✔</span> Sumate a una propuesta con impacto social y económico regional</li>
                        </ul>
                    </ContentCard>
                </div>
            </ArticleSection>

            <ArticleSection id="participar" title="¿Cómo participar?">
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {/* Importadoras */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg flex flex-col">
                        <h3 className="text-xl font-bold text-[#111269] mb-4">Empresas Importadoras</h3>
                        <p className="text-gray-600 mb-6 flex-grow">Completá un breve diagnóstico inicial sin cargo. Te contactaremos para coordinar una entrevista y definir un plan.</p>
                        <Button asChild className="w-full bg-[#111269] hover:bg-[#1a2754] text-white">
                            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSceI30ugxYgl5FUPzPdFGRPdUvm9NfaRbP-ze0JzY3Ih6P93g/viewform?embedded=true" target="_blank" rel="noopener noreferrer">
                                Diagnóstico Importación <ExternalLink className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </div>

                    {/* Exportadoras */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg flex flex-col">
                        <h3 className="text-xl font-bold text-[#111269] mb-4">Empresas Exportadoras</h3>
                        <p className="text-gray-600 mb-6 flex-grow">Completá un breve diagnóstico inicial sin cargo. Te contactaremos para coordinar una entrevista y definir un plan.</p>
                        <Button asChild className="w-full bg-[#111269] hover:bg-[#1a2754] text-white">
                            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf1jNkyAn46khdZyyb--O3FlxAXNB4dyOpHnZxmi-dyc90xMg/viewform?embedded=true" target="_blank" rel="noopener noreferrer">
                                Diagnóstico Exportación <ExternalLink className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Sponsors Textual Section */}
                <div className="mt-8 prose prose-lg max-w-none text-gray-700">
                    <h3 className="text-xl font-bold text-[#111269] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                        Sponsors y Prestadores de Servicios:
                    </h3>
                    <p className="mb-6">
                        Escribinos para conocer las modalidades de participación, beneficios de visibilidad y posibilidades de integración a la red.
                        Telefone 5258-0226 mail info@probuenosaires.org
                    </p>

                    <div className="flex items-center gap-2 mb-4 font-bold text-[#111269]">
                        <span className="text-green-500">✅</span>
                        Beneficios Clave
                    </div>

                    <ul className="list-disc pl-5 space-y-2">
                        <li>Reducción de costos logísticos</li>
                        <li>Acceso a proveedores confiables</li>
                        <li>Profesionalización del equipo interno</li>
                        <li>Planificación estratégica de compras</li>
                        <li>Transparencia, articulación y acompañamiento continuo</li>
                    </ul>
                </div>
            </ArticleSection>
        </ArticleLayout>
    )
}

"use client"

import { ArticleLayout } from "@/components/article-layout"
import { ArticleSection, CheckList, ContentCard, InfoBox } from "@/components/article-components"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function EncadenarPage() {
    const toc = [
        { id: "que-es", label: "¿Qué es Encadenar?" },
        { id: "origen", label: "Origen y Alianzas" },
        { id: "enfoque-social", label: "Enfoque Social" },
        { id: "objetivos", label: "Objetivos" },
        { id: "acciones", label: "Acciones Principales" },
        { id: "empresas-sostenibles", label: "Empresas Sostenibles" },
        { id: "comunidad-sostenible", label: "Comunidad Sostenible" },
        { id: "impacto", label: "Impacto en la Comunidad" },
        { id: "difusion", label: "Difusión y Vinculación" },
        { id: "reconocimientos", label: "Reconocimientos" },
    ]

    return (
        <ArticleLayout
            title="ENCADENAR, negocios en ronda"
            category="Programas"
            summary="Conectando oportunidades, fortaleciendo el entramado productivo y promoviendo la sostenibilidad."
            toc={toc}
            readTime="8 min"
            date="3 de Enero, 2024"
            heroImage="/images/encadenar-main.png"
        >
            <ArticleSection id="que-es" title="¿Qué es Encadenar, Negocios en Ronda?">
                <div className="prose prose-lg prose-blue max-w-none text-[#111269]/70">
                    <p>
                        <strong>Encadenar, Negocios en Ronda</strong> es un programa de la <strong>Fundación Pro Buenos Aires</strong> diseñado
                        para fomentar la <strong>colaboración y el crecimiento económico</strong> en la región. A través de esta iniciativa, buscamos
                        crear redes y oportunidades de negocio que impulsen el desarrollo de <strong>PyMEs, emprendedores y cooperativas</strong>,
                        fortaleciendo así el tejido productivo local y promoviendo prácticas sostenibles.
                    </p>
                </div>
            </ArticleSection>

            <ArticleSection id="origen" title="Origen y Alianzas Estratégicas">
                <div className="prose prose-lg prose-blue max-w-none text-[#111269]/70 mb-8">
                    <p>
                        El programa <strong>Encadenar, Negocios en Ronda</strong> nació el <strong>16 de agosto de 2017</strong> en alianza con la <strong>Cámara de Empresarios Bonaerenses
                            para el Fortalecimiento de las Cadenas de Valor (FOCAVA)</strong> y con el apoyo de la <strong>Confederación Económica de la
                                Provincia de Buenos Aires</strong>. Desde entonces, ha crecido y evolucionado, sumando nuevos aliados estratégicos.
                    </p>
                    <p className="mt-4">
                        En el año <strong>2024</strong>, se incorporaron a esta iniciativa la <strong>AMIA (Asociación Mutual Israelita Argentina)</strong> y la
                        <strong> CCAI (Cámara de Comercio Argentino Israelí)</strong>, reforzando nuestro compromiso con el desarrollo económico
                        y la integración de actores clave en la región.
                    </p>
                </div>
            </ArticleSection>

            <ArticleSection id="enfoque-social" title="Enfoque Social: La Participación de los Estudiantes">
                <div className="prose prose-lg prose-blue max-w-none text-[#111269]/70 mb-8">
                    <p>
                        Uno de los pilares fundamentales de <strong>Encadenar, Negocios en Ronda</strong> es su <strong>enfoque social</strong>, que se materializa a través de la participación activa de estudiantes de escuelas técnicas y del <strong>Instituto de Formación Técnica Superior N° 9 de CABA</strong>.
                    </p>
                </div>

                <div className="space-y-6">
                    <ContentCard className="border-l-4 border-l-[#8dc2ff]">
                        <h4 className="text-xl font-bold text-[#111269] mb-4">Alumnos de escuelas técnicas:</h4>
                        <ul className="list-disc list-inside space-y-3 text-[#111269]/70">
                            <li>
                                Los estudiantes del <strong>último año</strong> de las escuelas técnicas realizan sus <strong>200 horas de prácticas profesionalizantes</strong> en la <strong>Fundación Pro Buenos Aires</strong>, cumpliendo con un requisito clave para obtener su título de Técnico.
                            </li>
                            <li>
                                Durante estas prácticas, los alumnos son responsables de <strong>convocar a las empresas</strong> que participan en las diferentes jornadas de <strong>Encadenar, Negocios en Ronda</strong>, adquiriendo experiencia en el ámbito laboral y desarrollando habilidades clave como la comunicación, la organización y el trabajo en equipo.
                            </li>
                        </ul>
                    </ContentCard>

                    <ContentCard className="border-l-4 border-l-[#111269]">
                        <h4 className="text-xl font-bold text-[#111269] mb-4">Alumnos del Instituto de Formación Técnica Superior N° 9 de CABA:</h4>
                        <ul className="list-disc list-inside space-y-3 text-[#111269]/70">
                            <li>
                                Estudiantes de las especialidades de <strong>Comercio, Comercio Internacional y Administración</strong> se suman al programa, aportando sus conocimientos y experiencia para mejorar la <strong>selección de empresas</strong> que participan en cada encuentro.
                            </li>
                            <li>
                                Su contribución permite optimizar los procesos de vinculación y asegurar que las empresas seleccionadas sean las más adecuadas para cada ronda de negocios.
                            </li>
                        </ul>
                    </ContentCard>
                </div>
            </ArticleSection>

            <ArticleSection id="objetivos" title="Objetivos">
                <CheckList items={[
                    "Facilitar conexiones entre empresas, emprendedores, organizaciones sociales y organizaciones productivas.",
                    "Promover la integración de pequeñas y medianas empresas (PyMEs) en cadenas de valor más amplias.",
                    "Generar oportunidades de negocio a través de rondas de encuentro y networking.",
                    "Fortalecer las capacidades comerciales de los participantes mediante capacitaciones y asesoramiento.",
                    "Fomentar la sostenibilidad y la responsabilidad social empresarial (RSE)."
                ]} />
            </ArticleSection>

            <ArticleSection id="acciones" title="Acciones Principales">
                <div className="space-y-8">
                    {/* 1. Rondas de negocios */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#111269] text-white flex items-center justify-center font-bold text-xl">1</div>
                        <div>
                            <h4 className="text-xl font-bold text-[#111269] mb-2">Rondas de negocios:</h4>
                            <ul className="list-disc list-inside space-y-2 text-[#111269]/70 text-lg">
                                <li>Organización de eventos donde emprendedores y empresarios pueden presentar sus proyectos y establecer alianzas estratégicas.</li>
                                <li>Espacios de networking para generar conexiones entre PyMEs, grandes empresas y cooperativas.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 2. Capacitaciones y talleres */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#8dc2ff] text-white flex items-center justify-center font-bold text-xl">2</div>
                        <div>
                            <h4 className="text-xl font-bold text-[#111269] mb-2">Capacitaciones y talleres:</h4>
                            <ul className="list-disc list-inside space-y-2 text-[#111269]/70 text-lg">
                                <li>Formación en estrategias comerciales, negociación y gestión de alianzas.</li>
                                <li>Herramientas prácticas para mejorar la competitividad y la inserción en cadenas de valor.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 3. Asesoramiento personalizado */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#111269] text-white flex items-center justify-center font-bold text-xl">3</div>
                        <div>
                            <h4 className="text-xl font-bold text-[#111269] mb-2">Asesoramiento personalizado:</h4>
                            <ul className="list-disc list-inside space-y-2 text-[#111269]/70 text-lg">
                                <li>Acompañamiento a emprendedores y PyMEs en la identificación de oportunidades de negocio.</li>
                                <li>Apoyo en la formulación de proyectos y planes comerciales.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 4. Certificación */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#8dc2ff] text-white flex items-center justify-center font-bold text-xl">4</div>
                        <div>
                            <h4 className="text-xl font-bold text-[#111269] mb-2">Certificación de empresas sostenibles:</h4>
                            <ul className="list-disc list-inside space-y-2 text-[#111269]/70 text-lg">
                                <li>Desde el año <strong>2024</strong>, la Fundación Pro Buenos Aires certifica a las empresas participantes como <strong>Empresas Sociales</strong>, reconociendo su compromiso con el desarrollo sostenible y la responsabilidad social.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ArticleSection>

            <ArticleSection id="empresas-sostenibles" title="Empresas Sostenibles: Desarrollo de Proveedores">
                <div className="prose prose-lg prose-blue max-w-none text-[#111269]/70 mb-8">
                    <p>
                        Las empresas que participan en <strong>Encadenar, Negocios en Ronda</strong> y se enfocan en el desarrollo de proveedores locales son clasificadas
                        como <strong>empresas sostenibles</strong> por las siguientes razones:
                    </p>
                </div>

                <div className="grid gap-6">
                    <div className="bg-[#f0f7ff] p-6 rounded-2xl border border-[#8dc2ff]/30">
                        <ul className="space-y-4 text-[#111269]/80">
                            <li className="flex gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#111269] mt-2.5 flex-shrink-0" />
                                <span>
                                    <strong>Fomento de la economía local:</strong> Reducen la dependencia de proveedores lejanos, disminuyendo el impacto ambiental asociado con el transporte y fortaleciendo las economías locales.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#111269] mt-2.5 flex-shrink-0" />
                                <span>
                                    <strong>Resiliencia y adaptabilidad:</strong> Diversifican y fortalecen sus cadenas de suministro, haciéndose más resilientes frente a interrupciones globales.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#111269] mt-2.5 flex-shrink-0" />
                                <span>
                                    <strong>Responsabilidad Social Empresarial (RSE):</strong> Demuestran un compromiso con la comunidad al invertir en el desarrollo de proveedores locales, fomentando el empleo y el crecimiento económico.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#111269] mt-2.5 flex-shrink-0" />
                                <span>
                                    <strong>Circularidad y colaboración:</strong> Promueven un enfoque colaborativo y circular, donde grandes empresas y PyMEs trabajan juntas para mejorar la eficiencia, la calidad y la innovación.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </ArticleSection>

            <ArticleSection id="comunidad-sostenible" title="Creando una Comunidad Sostenible">
                <div className="prose prose-lg prose-blue max-w-none text-[#111269]/70">
                    <p>
                        El objetivo primordial de <strong>Encadenar, Negocios en Ronda</strong> es crear una <strong>comunidad de empresas sostenibles</strong> que operen con un alto nivel de responsabilidad social.
                    </p>
                    <p>
                        Además, cooperativas y ONGs encuentran oportunidades comerciales que les permiten ser autosustentables, enriqueciendo el ecosistema empresarial y social.
                    </p>
                </div>
            </ArticleSection>

            <ArticleSection id="impacto" title="Impacto en la Comunidad">
                <div className="prose prose-lg prose-blue max-w-none text-[#111269]/70">
                    <p>
                        Desde su inicio, <strong>Encadenar, Negocios en Ronda</strong> ha demostrado ser un <strong>catalizador eficaz</strong> para el desarrollo económico y social. Al conectar a un gran número de industrias y facilitadores del conocimiento, el programa contribuye significativamente al <strong>crecimiento sostenible</strong> de las comunidades locales y regionales.
                    </p>
                    <p className="mt-4">
                        La <strong>Fundación Pro Buenos Aires</strong> se enorgullece de liderar esta iniciativa, que no solo promueve el desarrollo económico, sino que también fortalece la <strong>resiliencia</strong> de las comunidades empresariales mediante el fortalecimiento de lazos estratégicos cruciales.
                    </p>
                </div>
            </ArticleSection>

            <ArticleSection id="difusion" title="Difusión y Vinculación">
                <div className="grid gap-6">
                    <ContentCard>
                        <h4 className="text-xl font-bold text-[#111269] mb-4">Cooperativa Mante Baires</h4>
                        <p className="text-[#111269]/70">
                            La cooperativa participará en <strong>Encadenar, Negocios en Ronda</strong>, el 17 de mayo de 2024 en Almirante Brown, donde se difundirán sus servicios entre las empresas presentes.
                        </p>
                    </ContentCard>

                    <ContentCard>
                        <h4 className="text-xl font-bold text-[#111269] mb-4">Cooperativa de Inclusión Laboral La Huella</h4>
                        <p className="text-[#111269]/70">
                            <strong>Federico Bejarano</strong> presentará los productos de la cooperativa y comentará sobre el trabajo social que llevan adelante durante <strong>Encadenar, Negocios en Ronda</strong>, el 26 de abril de 2024 en el Palacio El Victorial, CABA.
                        </p>
                    </ContentCard>

                    <ContentCard>
                        <h4 className="text-xl font-bold text-[#111269] mb-4">Integrantes de la Cooperativa Mante Baires de Berazategui</h4>
                        <p className="text-[#111269]/70">
                            Participarán en <strong>Encadenar, Negocios en Ronda</strong>, el 26 de abril de 2024 en el Palacio El Victorial, CABA.
                        </p>
                    </ContentCard>

                    <ContentCard>
                        <h4 className="text-xl font-bold text-[#111269] mb-4">Programa Vinculando</h4>
                        <p className="text-[#111269]/70">
                            <strong>Vinculación de MTU y Cooperativa Mante Baires con Escuelas Técnicas:</strong> Con el objetivo de que los futuros egresados completen sus 200 horas de prácticas profesionalizantes en un entorno laboral dentro de la organización, colaborando con el sistema educativo y brindando oportunidades a los alumnos durante el año 2024.
                        </p>
                    </ContentCard>

                    <ContentCard>
                        <h4 className="text-xl font-bold text-[#111269] mb-4">Capacitaciones 2024</h4>
                        <p className="text-[#111269]/70">
                            Talleres dirigidos a integrantes de PYMES industriales junto con ONG y cooperativas para fomentar la vinculación e integración (También participaron responsables de mantenimiento de <strong>YPF Destilería La Plata</strong>), brindando servicios conjuntos.
                        </p>
                        <p className="text-[#111269]/70 mt-4">
                            Estas capacitaciones fueron ofrecidas en colaboración con <strong>Chint Argentina</strong> y <strong>WEG Argentina</strong> en las instalaciones de FOCAVA en Berazategui, Cruce de Florencio Varela. La firma <strong>Samsung Argentina</strong> colaboró en el evento sorteando una tablet entre los presentes.
                        </p>
                    </ContentCard>
                </div>
            </ArticleSection>

            <ArticleSection id="reconocimientos" title="Reconocimientos">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: "Be The Driver", desc: "Colabora con nuestro CRM de gestión" },
                        { title: "Aconcagua Energía", desc: "Desarrolla proveedores en AMIA" },
                        { title: "Astillero Río Santiago", desc: "Desarrolla proveedores en Encadenar" },
                        { title: "Acero Perfil", desc: "Colabora donando materiales" },
                        { title: "Equipamientos", desc: "Colabora prestando desinteresadamente mesas y sillas para los encuentros" },
                        { title: "AD Barbieri", desc: "Participó de Encadenar Brown desarrollando proveedores" },
                    ].map((item, i) => (
                        <div key={i} className="bg-white rounded-xl overflow-hidden border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow">
                            <div className="aspect-[4/3] bg-[#f8faff] relative flex items-center justify-center p-4">
                                {/* Placeholder for certificate image */}
                                <div className="text-center opacity-30">
                                    <div className="mb-2 text-4xl">📜</div>
                                    <span className="text-xs uppercase tracking-wider font-bold">Certificado</span>
                                </div>
                            </div>
                            <div className="p-4">
                                <h5 className="font-bold text-[#111269] mb-1">{item.title}</h5>
                                <p className="text-sm text-[#111269]/70">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </ArticleSection>

            <ArticleSection id="sumate" title="Sumate a Encadenar">
                <div className="bg-[#111269] rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                            ¿Querés participar en nuestras rondas de negocios?
                        </h3>
                        <p className="text-white/80 text-lg mb-8">
                            Participá en nuestras capacitaciones, recibí asesoramiento o sumate a las próximas rondas de negocios
                            para conectar con grandes empresas y PyMEs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-[#111269] hover:bg-[#8dc2ff] hover:text-white font-bold px-8"
                                asChild
                            >
                                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSciq9hVDrN9u0_jVvW6N1X_jBvW6N1X_jBvW6N1X_jBvW6N1X/viewform" target="_blank">
                                    Inscribirse Ahora
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                                asChild
                            >
                                <Link href="mailto:info@probuenosaires.org">
                                    Enviar Consulta
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#8dc2ff]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8dc2ff]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                </div>
            </ArticleSection>

        </ArticleLayout>
    )
}

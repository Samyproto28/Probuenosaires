"use client"

import { ArticleLayout } from "@/components/article-layout"
import { ArticleSection, ContentCard, CheckList, InfoBox } from "@/components/article-components"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Building2, GraduationCap, Radio, Mail, Phone } from "lucide-react"

export default function CentroTecnologicoPage() {
    const toc = [
        { id: "iniciativa", label: "La Iniciativa" },
        { id: "galeria", label: "Galería de Talleres" },
        { id: "capacitaciones", label: "Oferta de Capacitación" },
        { id: "vinculacion", label: "Vinculación Educativa" },
        { id: "radio", label: "Radio Empresaria" },
        { id: "contacto", label: "Contacto e Inscripciones" }
    ]

    const galleryImages = [
        { src: "https://probuenosaires.org/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-04-at-06.25.35.jpeg", alt: "Taller Asoleb" },
        { src: "https://probuenosaires.org/wp-content/uploads/2024/03/photo_5163907861259070524_y.jpg", alt: "Taller Práctico" },
        { src: "https://probuenosaires.org/wp-content/uploads/2024/03/WhatsApp-Image-2024-02-28-at-08.21.08.jpeg", alt: "Capacitación Técnica" },
        { src: "https://probuenosaires.org/wp-content/uploads/2024/02/WhatsApp-Image-2023-12-20-at-16.24.26-2.jpeg", alt: "Equipamiento" },
        { src: "https://probuenosaires.org/wp-content/uploads/2023/11/9944f025-6939-4101-a3b4-ed701891e751.jpeg", alt: "Taller Transformación Digital 2023" },
        { src: "https://probuenosaires.org/wp-content/uploads/2023/11/f739c449-0f91-441f-b4f3-74fedfc73308.jpeg", alt: "Taller Variación de Velocidad 2024" },
        { src: "https://probuenosaires.org/wp-content/uploads/2024/12/photo_5066561426767851070_y.jpg", alt: "Taller Factor de Potencia 2024" }
    ]

    return (
        <ArticleLayout
            title="Centro Tecnológico 4.0"
            category="Capacitación"
            summary="Un espacio de innovación y formación en el Cruce Varela, destinado a acercar la última tecnología a la región y potenciar las capacidades de PyMEs y estudiantes."
            toc={toc}
            readTime="6 min"
            date="Septiembre 2023"
            heroImage="/images/centro-tecnologico-main.png"
        >
            <ArticleSection id="iniciativa" title="La Iniciativa">
                <ContentCard className="mb-8">
                    <p className="mb-6">
                        En la Fundación Pro Buenos Aires, en colaboración con la Cámara de Empresarios Bonaerenses para el Fortalecimiento de las Cadenas de Valor (FOCAVA), hemos estado trabajando junto al Ministerio de Economía de la Nación y la Secretaría de Industria y Desarrollo Productivo a través del programa <strong>«Consorcios para el Fortalecimiento de Capacidades Institucionales de Apoyo a MIPYMES»</strong>.
                    </p>
                    <p className="mb-6">
                        Aunque actualmente el financiamiento de este programa está detenido, hemos tomado la iniciativa de contactar a empresas líderes como <strong>WEG Argentina, Chint, Cambre, Kalop, y JLF Materiales Eléctricos S.A.</strong> para solicitar su apoyo en equipamiento y donaciones económicas, a fin de continuar con nuestro proyecto de forma autosustentable.
                    </p>
                    <p className="mb-6">
                        Gracias a las contribuciones de estas empresas y de nuevos colaboradores que se suman constantemente, hemos desarrollado un robusto programa de capacitaciones en nuestro centro de formación ubicado en el Cruce de Florencio Varela, sobre la Ruta N 36.
                    </p>

                </ContentCard>
            </ArticleSection>

            <ArticleSection id="galeria" title="Galería de Talleres">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {galleryImages.map((img, index) => (
                        <div key={index} className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                            {/* Note: Using external images requires domain configuration in next.config.js. 
                                 If they fail to load, placeholders will be needed or we will need to add probuenosaires.org to domains. 
                                 For now we use standard img tag for external compatibility if next/image fails without config. */}
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </ArticleSection>

            <ArticleSection id="capacitaciones" title="Oferta de Capacitación">
                <div className="mb-6">
                    <p className="text-lg text-[#111269]/70 mb-6">
                        Invitamos a las empresas de los municipios de <strong>Berazategui, Florencio Varela y Quilmes</strong> a registrarse y permitir que sus colaboradores accedan a nuestras capacitaciones en áreas clave como:
                    </p>
                    <CheckList items={[
                        "Industria 4.0 y Transformación de la Cultura Organizacional: Planeamiento Estratégico y Operativo.",
                        "Automatización de Procesos: Control y variación de velocidad en motores eléctricos.",
                        "Taller de Sensibilización en Industria 4.0.",
                        "Emprender Kaizen.",
                        "Herramienta 5S y su aplicación a cadenas de valor (Metalmecánica, Papel y Cartón, Alimentos, Plástico, Químico).",
                        "Metodología Kaizen aplicada a cadenas de valor (Metalmecánica, Papel y Cartón, Alimentos, Plástico, Químico).",
                        "Manejo de Datos de Producción en procesos industriales automatizados con Inteligencia Artificial."
                    ]} />
                </div>

                <InfoBox type="info" title="Objetivo Principal">
                    Nuestro principal objetivo es traer la última tecnología a nuestra región económica y articular con las 25 escuelas técnicas para facilitar el acceso de sus estudiantes a estos recursos. De este modo, potenciamos las capacidades de los futuros egresados y colaboramos con las PYMES de la región en la formación de sus colaboradores.
                </InfoBox>
            </ArticleSection>

            <ArticleSection id="vinculacion" title="Vinculación Educativa">
                <ContentCard>
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-[#f0f7ff] text-[#111269]">
                            <GraduationCap className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#111269] mb-3">Programa Vinculando</h3>
                            <p className="mb-4">
                                El programa Vinculando juega un papel crucial en nuestra misión de empoderar a las nuevas generaciones mediante la conexión de estudiantes de escuelas técnicas con empresas locales.
                            </p>
                            <p>
                                Este puente hacia experiencias laborales prácticas no solo enriquece la formación de los alumnos, sino que también ayuda a satisfacer las demandas del sector industrial.
                            </p>
                        </div>
                    </div>
                </ContentCard>
            </ArticleSection>

            <ArticleSection id="radio" title="Radio Empresaria">
                <ContentCard className="bg-[#111269] text-white border-none">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="p-4 bg-white/10 rounded-full">
                            <Radio className="w-12 h-12 text-[#8dc2ff]" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 font-heading text-white">Comunicando Nuestra Visión</h3>
                            <p className="text-white/80 leading-relaxed mb-4">
                                Adicionalmente, nos enorgullece contar con <strong>Radio Empresaria</strong>, nuestra emisora radial con streaming que nos permite difundir ampliamente nuestra visión.
                            </p>
                            <p className="text-white/80 leading-relaxed">
                                Este medio de comunicación es esencial para consolidar nuestra presencia en la comunidad y brindar información relevante y oportuna a todos nuestros interesados.
                            </p>
                        </div>
                    </div>
                </ContentCard>
            </ArticleSection>

            <ArticleSection id="contacto" title="Contacto e Inscripciones">
                <div className="bg-[#f8faff] rounded-2xl p-8 border border-[#e2e8f0]">
                    <h3 className="text-xl font-bold text-[#111269] mb-6 font-heading">¿Interesado en nuestras capacitaciones?</h3>
                    <p className="mb-8 text-[#111269]/70">
                        Para más información e inscripciones, pueden comunicarse de lunes a viernes, de 9 a 18 hs.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-[#e2e8f0]">
                            <div className="w-10 h-10 rounded-full bg-[#8dc2ff]/10 flex items-center justify-center text-[#111269]">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-[#111269]/50 font-bold uppercase tracking-wider">Llámanos</p>
                                <p className="text-lg font-bold text-[#111269]">5258-0226</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-[#e2e8f0]">
                            <div className="w-10 h-10 rounded-full bg-[#8dc2ff]/10 flex items-center justify-center text-[#111269]">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-[#111269]/50 font-bold uppercase tracking-wider">Escríbenos</p>
                                <a href="mailto:info@probuenosaires.org" className="text-lg font-bold text-[#111269] hover:underline">
                                    info@probuenosaires.org
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </ArticleSection>
        </ArticleLayout>
    )
}

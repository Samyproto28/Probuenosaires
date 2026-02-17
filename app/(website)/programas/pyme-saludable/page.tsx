import { ArticleLayout } from "@/components/article-layout";
import {
    ArticleSection,
    ProcessSteps,
    CheckList,
    InfoBox
} from "@/components/article-components";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pymes Saludables | Fundación Pro Buenos Aires",
    description: "Un programa integral diseñado para acompañar a las empresas en el fortalecimiento de su capital humano y sus capacidades de gestión.",
};

export default function PymeSaludablePage() {
    return (
        <ArticleLayout
            title="Pymes Saludables – Programa que te acerca a tus metas corporativas"
            summary="Un programa integral diseñado para acompañar a las empresas en el fortalecimiento de su capital humano y sus capacidades de gestión."
            date="13 de Octubre"
            readTime="5 min"
            category="Programas"
            heroImage="/images/programas/pyme-saludable/main.png"
        >
            <ArticleSection id="introduccion">
                <p className="lead">
                    En la Fundación Pro Buenos Aires, entendemos que el verdadero potencial de nuestra región reside en su gente. Las pymes son el motor económico y social de los municipios de Berazategui, Florencio Varela y Quilmes, y su sostenibilidad depende de dos pilares fundamentales: el bienestar de sus equipos y la competitividad de sus estrategias comerciales.
                </p>
                <p>
                    Por ello, y en línea con nuestra misión de impulsar el desarrollo sostenible a través de la colaboración, lanzamos <strong>Pymes Saludables</strong>. Un programa integral diseñado para acompañar a las empresas en el fortalecimiento de su capital humano y sus capacidades de gestión, partiendo de la convicción de que la salud de las personas y la salud del negocio son dos caras de la misma moneda.
                </p>
            </ArticleSection>

            <ArticleSection id="que-consiste" title="¿En qué consiste el programa?">
                <p>
                    Pymes Saludables es un acompañamiento intensivo que aborda dos ejes críticos para el éxito en la economía actual:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <InfoBox
                        title="1. Salud Corporal y Bienestar Integral"
                        type="info"
                    >
                        Mejoramos la calidad de vida de todos los integrantes de la pyme, desde los líderes hasta los colaboradores.
                    </InfoBox>
                    <InfoBox
                        title="2. Habilidades Blandas y Gestión de Ventas B2B"
                        type="success"
                    >
                        Potenciamos las capacidades comerciales y de liderazgo para impulsar el crecimiento y construir relaciones comerciales duraderas.
                    </InfoBox>
                </div>
            </ArticleSection>

            <ArticleSection id="modelo-articulacion" title="Nuestro Modelo de Articulación: La Fuerza de la Red">
                <p className="mb-6">
                    Al igual que en nuestro programa Vinculando, creemos en el poder de la sinergia. Para ejecutar Pymes Saludables, hemos unido a los mejores especialistas:
                </p>

                <h3 className="text-xl font-bold mb-4 text-[#111269]">Eje 1: Salud Corporal – Aliado Estratégico: IIDCA</h3>
                <p className="mb-4 italic">Instituto Internacional del Deporte y las Ciencias Aplicadas</p>
                <p className="mb-4">El IIDCA aportará su expertise para implementar:</p>
                <CheckList items={[
                    "Evaluaciones Diagnósticas: Chequeos básicos de salud y análisis de entornos laborales (ergonomía).",
                    "Charlas y Talleres Prácticos: Nutrición en el ámbito laboral, manejo del estrés, pausas activas y prevención de lesiones.",
                    "Plan de Bienestar Personalizado: Asesoramiento para integrar hábitos saludables en la cultura de la empresa.",
                    "Activación Fitness in-company: Entrenamiento en grupos reducidos para combatir el sedentarismo laboral."
                ]} />

                <div className="my-8">
                    <h3 className="text-xl font-bold mb-4 text-[#111269]">Eje 2: Habilidades Blandas y Ventas B2B – Aliado Estratégico: Fundación Argennova</h3>
                    <p className="mb-4">Con su foco en el liderazgo con valores, la Fundación Argennova será responsable de:</p>
                    <CheckList items={[
                        "Capacitación en Habilidades Blandas: Comunicación efectiva, trabajo en equipo, inteligencia emocional y resolución de conflictos.",
                        "Formación en Liderazgo con Valores: Desarrollo de líderes inspiradores que fomenten entornos de trabajo positivos y de alto rendimiento.",
                        "Gestión de Ventas B2B: Técnicas avanzadas para entender el ciclo de ventas complejas, gestionar objeciones y construir relaciones de confianza a largo plazo."
                    ]} />
                </div>
            </ArticleSection>

            <ArticleSection id="beneficios" title="Beneficios para su PyME">
                <p className="mb-6">Al participar en Pymes Saludables, su empresa accede a:</p>
                <CheckList items={[
                    "Mayor Productividad y Reducción del Ausentismo: Equipos más sanos y motivados son más eficientes.",
                    "Fortalecimiento del Clima Laboral: Mejora en la comunicación, cohesión del equipo y sentido de pertenencia.",
                    "Líderes Más Efectivos: Formación de mandos medios y altos con capacidad para guiar equipos y gestionar el talento.",
                    "Herramientas Concretas para Vender Más y Mejor: Metodologías probadas para aumentar el cierre de ventas B2B.",
                    "Diferenciación Competitiva: Posicionarse como un empleador y socio de preferencia.",
                    "Red de Contención y Acompañamiento: Acceso a especialistas en salud y management para consultas y seguimiento."
                ]} />
            </ArticleSection>

            <ArticleSection id="metodologia" title="Metodología de Implementación">
                <p className="mb-6">Nuestro modelo se basa en la mejora continua y la adaptación a cada empresa:</p>
                <ProcessSteps steps={[
                    {
                        title: "Diagnóstico Inicial",
                        description: "Evaluación de necesidades específicas en salud y gestión comercial."
                    },
                    {
                        title: "Plan de Trabajo Personalizado",
                        description: "Diseño de un itinerario de talleres, charlas y asesorías."
                    },
                    {
                        title: "Ejecución Intensiva",
                        description: "Implementación de las actividades en las instalaciones de la empresa o en nuestros centros."
                    },
                    {
                        title: "Seguimiento y Medición",
                        description: "Análisis de indicadores clave (clima laboral, desempeño comercial) para evaluar el impacto."
                    }
                ]} />
            </ArticleSection>

            <ArticleSection id="por-que-participar" title="¿Por qué Participar?">
                <InfoBox type="info">
                    Porque el activo más importante de su empresa son las personas. Invertir en su bienestar y desarrollo profesional no es un gasto, es la estrategia más inteligente para asegurar un crecimiento sostenible y construir una organización fuerte, saludable y preparada para el futuro.
                </InfoBox>
            </ArticleSection>

            <ArticleSection id="como-participar" title="¿Cómo Participar?">
                <p className="mb-6">El proceso es sencillo:</p>
                <ProcessSteps steps={[
                    {
                        title: "Registro",
                        description: "Complete el formulario de interés para contarnos sobre su empresa."
                    },
                    {
                        title: "Diagnóstico Sin Cargo",
                        description: "Realizaremos una primera reunión para identificar sus desafíos y objetivos."
                    },
                    {
                        title: "Propuesta a Medida",
                        description: "Elaboraremos un plan de trabajo conjunto con IIDCA y Fundación Argennova."
                    }
                ]} />
            </ArticleSection>

            <ArticleSection id="compromiso" title="Compromiso de la Fundación Pro Buenos Aires">
                <p>
                    Nos comprometemos a ser su partner estratégico en este camino, articulando el conocimiento de nuestros aliados y nuestra red de más de 3.300 pymes para generar un ecosistema donde las empresas no solo crezcan, sino que prosperen con salud y valores.
                </p>
            </ArticleSection>
        </ArticleLayout>
    );
}

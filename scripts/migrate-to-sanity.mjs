/**
 * Sanity Migration Script
 * ========================
 * Migrates existing hardcoded news articles to Sanity.
 * 
 * Usage:
 *   1. Get a Sanity API token from: https://www.sanity.io/manage/project/r2kwf8nd/api#tokens
 *      - Click "Add API token"
 *      - Name: "Migration"
 *      - Permissions: "Editor"
 *      - Copy the token
 *
 *   2. Run: node scripts/migrate-to-sanity.mjs YOUR_TOKEN_HERE
 */

import { createClient } from "next-sanity"

const token = process.argv[2]
if (!token) {
    console.error("❌ Falta el token. Uso: node scripts/migrate-to-sanity.mjs <SANITY_TOKEN>")
    console.error("   Obtené uno en: https://www.sanity.io/manage/project/r2kwf8nd/api#tokens")
    process.exit(1)
}

const client = createClient({
    projectId: "r2kwf8nd",
    dataset: "production",
    apiVersion: "2025-02-15",
    useCdn: false,
    token,
})

// ==========================================
// NEWS ARTICLES TO MIGRATE
// ==========================================
const noticias = [
    {
        _type: "noticia",
        title: "Reconocimiento a mujeres con compromiso social en Florencio Varela",
        slug: { _type: "slug", current: "reconocimiento-mujeres" },
        publishedAt: "2026-01-30T00:00:00Z",
        category: "Institucional",
        excerpt: "En el marco del 135° aniversario de Florencio Varela, participamos del reconocimiento a mujeres que transforman la comunidad con su labor diaria.",
        author: "Fundación Pro Buenos Aires",
        readTime: "4 min lectura",
        summary: "En el marco del 135° aniversario de Florencio Varela, la Fundación Pro Buenos Aires participó activamente en la ceremonia de reconocimiento a mujeres que transforman la comunidad con su compromiso social y labor diaria.",
        body: [
            {
                _type: "block",
                _key: "rm-1",
                style: "normal",
                markDefs: [],
                children: [
                    {
                        _type: "span",
                        _key: "rm-1-1",
                        marks: [],
                        text: "En el marco del 135° aniversario de Florencio Varela, la Fundación Pro Buenos Aires participó activamente en la ceremonia de reconocimiento a mujeres que transforman la comunidad con su compromiso social y labor diaria. Este evento puso de manifiesto la importancia del rol femenino en el desarrollo productivo y social de la región."
                    }
                ]
            },
            {
                _type: "block",
                _key: "rm-2",
                style: "h2",
                markDefs: [],
                children: [
                    { _type: "span", _key: "rm-2-1", marks: [], text: "Un reconocimiento merecido" }
                ]
            },
            {
                _type: "block",
                _key: "rm-3",
                style: "normal",
                markDefs: [],
                children: [
                    {
                        _type: "span",
                        _key: "rm-3-1",
                        marks: [],
                        text: "Las mujeres reconocidas se destacan por su trabajo en áreas como la educación, la salud, la economía social y la sustentabilidad ambiental. Su compromiso con la comunidad de Florencio Varela ha sido fundamental para impulsar proyectos que mejoran la calidad de vida de miles de familias."
                    }
                ]
            },
        ],
    },
    {
        _type: "noticia",
        title: "Inauguramos nueva sede en Quilmes Oeste",
        slug: { _type: "slug", current: "nueva-sede-quilmes" },
        publishedAt: "2025-12-24T00:00:00Z",
        category: "Novedades",
        excerpt: "¡Comenzamos una nueva etapa! Abrimos las puertas de nuestra nueva sede para ampliar el impacto de nuestros programas en toda la región sur del conurbano.",
        author: "Prensa Fundación",
        readTime: "3 min lectura",
        summary: "La Fundación Pro Buenos Aires inauguró su nueva sede en Quilmes Oeste, ampliando su capacidad operativa y acercando sus programas de desarrollo productivo a la comunidad del sur del conurbano bonaerense.",
        body: [
            {
                _type: "block",
                _key: "nsq-1",
                style: "normal",
                markDefs: [],
                children: [
                    {
                        _type: "span",
                        _key: "nsq-1-1",
                        marks: [],
                        text: "Con gran entusiasmo inauguramos nuestra nueva sede en Quilmes Oeste, un espacio diseñado para ampliar el alcance de nuestros programas de capacitación, vinculación laboral y desarrollo productivo en toda la región sur del conurbano bonaerense."
                    }
                ]
            },
            {
                _type: "block",
                _key: "nsq-2",
                style: "h2",
                markDefs: [],
                children: [
                    { _type: "span", _key: "nsq-2-1", marks: [], text: "Un nuevo espacio para crecer" }
                ]
            },
            {
                _type: "block",
                _key: "nsq-3",
                style: "normal",
                markDefs: [],
                children: [
                    {
                        _type: "span",
                        _key: "nsq-3-1",
                        marks: [],
                        text: "La nueva sede cuenta con aulas de capacitación, oficinas administrativas y espacios de coworking para emprendedores locales. Este paso representa una inversión significativa en el desarrollo de la zona sur, donde la demanda de programas de formación profesional sigue en aumento."
                    }
                ]
            },
        ],
    },
    {
        _type: "noticia",
        title: "Convenio clave para impulsar la economía verde",
        slug: { _type: "slug", current: "convenio-economia-verde" },
        publishedAt: "2026-01-15T00:00:00Z",
        category: "Sustentabilidad",
        excerpt: "Firmamos un acuerdo estratégico para promover prácticas sustentables en el sector industrial, acompañando a las pymes en su transición hacia la economía circular.",
        author: "Área Sustentabilidad",
        readTime: "5 min lectura",
        summary: "La Fundación Pro Buenos Aires firmó un convenio estratégico para promover prácticas sustentables en el sector industrial argentino, acompañando a las PyMEs en su transición hacia modelos de economía circular y producción limpia.",
        body: [
            {
                _type: "block",
                _key: "cev-1",
                style: "normal",
                markDefs: [],
                children: [
                    {
                        _type: "span",
                        _key: "cev-1-1",
                        marks: [],
                        text: "En un paso significativo hacia la sustentabilidad industrial, la Fundación Pro Buenos Aires firmó un convenio estratégico que busca promover prácticas de economía verde entre las PyMEs del sector productivo argentino."
                    }
                ]
            },
            {
                _type: "block",
                _key: "cev-2",
                style: "h2",
                markDefs: [],
                children: [
                    { _type: "span", _key: "cev-2-1", marks: [], text: "Hacia una producción más limpia" }
                ]
            },
            {
                _type: "block",
                _key: "cev-3",
                style: "normal",
                markDefs: [],
                children: [
                    {
                        _type: "span",
                        _key: "cev-3-1",
                        marks: [],
                        text: "El acuerdo contempla la implementación de programas de capacitación en gestión ambiental, reducción de residuos industriales y eficiencia energética. Las empresas participantes recibirán asistencia técnica personalizada para su transición hacia modelos de producción más sustentables."
                    }
                ]
            },
        ],
    },
    {
        _type: "noticia",
        title: "Colaboración estratégica con Grupo Arcor",
        slug: { _type: "slug", current: "colaboracion-arcor" },
        publishedAt: "2025-11-27T00:00:00Z",
        category: "Alianzas",
        excerpt: "Avanzamos en una valiosa colaboración para fortalecer las cadenas de valor y potenciar el desarrollo de proveedores locales.",
        author: "Relaciones Institucionales",
        readTime: "4 min lectura",
        summary: "La Fundación Pro Buenos Aires avanza en una valiosa colaboración con Grupo Arcor para fortalecer las cadenas de valor y potenciar el desarrollo de proveedores locales en el sector alimenticio.",
        body: [
            {
                _type: "block",
                _key: "ca-1",
                style: "normal",
                markDefs: [],
                children: [
                    {
                        _type: "span",
                        _key: "ca-1-1",
                        marks: [],
                        text: "La colaboración con Grupo Arcor representa un hito en nuestra misión de fortalecer el tejido productivo argentino. Este acuerdo busca desarrollar proveedores locales, mejorar la competitividad de las PyMEs y generar empleo de calidad en la cadena de valor alimenticia."
                    }
                ]
            },
        ],
    },
    {
        _type: "noticia",
        title: "Oracle y Fundación: Aliados para potenciar el Programa Vinculando",
        slug: { _type: "slug", current: "alianza-oracle" },
        publishedAt: "2026-01-05T00:00:00Z",
        category: "Institucional",
        excerpt: "Compartimos una visión de futuro con Oracle para acercar la tecnología y el conocimiento técnico a los jóvenes de escuelas técnicas.",
        author: "Programa Vinculando",
        readTime: "6 min lectura",
        summary: "Formalizamos una alianza con Oracle para potenciar el Programa Vinculando, acercando tecnología de vanguardia y conocimiento técnico a los jóvenes de escuelas técnicas del conurbano bonaerense.",
        body: [
            {
                _type: "block",
                _key: "ao-1",
                style: "normal",
                markDefs: [],
                children: [
                    {
                        _type: "span",
                        _key: "ao-1-1",
                        marks: [],
                        text: "La alianza con Oracle marca un antes y un después en nuestro Programa Vinculando. A través de esta colaboración, los jóvenes de escuelas técnicas del conurbano bonaerense tendrán acceso a capacitaciones en tecnologías de vanguardia, certificaciones reconocidas internacionalmente y oportunidades de inserción laboral en el sector tecnológico."
                    }
                ]
            },
        ],
    },
    {
        _type: "noticia",
        title: "Visita de Gleyson Santos (NeuroIdentify)",
        slug: { _type: "slug", current: "visita-neuroidentify" },
        publishedAt: "2025-11-27T00:00:00Z",
        category: "Novedades",
        excerpt: "Recibimos al creador de NeuroIdentify para potenciar la inclusión educativa y laboral en Argentina a través de herramientas tecnológicas innovadoras.",
        author: "Inclusión Laboral",
        readTime: "5 min lectura",
        summary: "Recibimos la visita de Gleyson Santos, creador de NeuroIdentify, para explorar oportunidades de inclusión educativa y laboral en Argentina a través de herramientas tecnológicas de neurodiversidad.",
        body: [
            {
                _type: "block",
                _key: "vn-1",
                style: "normal",
                markDefs: [],
                children: [
                    {
                        _type: "span",
                        _key: "vn-1-1",
                        marks: [],
                        text: "Recibimos la visita de Gleyson Santos, creador de NeuroIdentify, una plataforma innovadora que busca potenciar la inclusión educativa y laboral de personas neurodiversas. Durante el encuentro, exploramos las posibilidades de implementar esta tecnología en Argentina como herramienta complementaria para nuestros programas de formación e inserción laboral."
                    }
                ]
            },
        ],
    },
]

// ==========================================
// MIGRATION EXECUTION
// ==========================================

async function migrate() {
    console.log("🚀 Iniciando migración a Sanity...")
    console.log(`   Proyecto: r2kwf8nd / Dataset: production\n`)

    // First, delete the test article if it exists
    console.log("🧹 Limpiando datos de prueba...")
    const testDocs = await client.fetch('*[_type == "noticia" && title == "gfhg"]{ _id }')
    for (const doc of testDocs) {
        await client.delete(doc._id)
        console.log(`   ❌ Eliminada noticia de prueba: ${doc._id}`)
    }

    // Migrate noticias
    console.log(`\n📰 Migrando ${noticias.length} noticias...\n`)

    for (const noticia of noticias) {
        try {
            // Check if already exists
            const existing = await client.fetch(
                `*[_type == "noticia" && slug.current == $slug][0]{ _id }`,
                { slug: noticia.slug.current }
            )

            if (existing) {
                console.log(`   ⏭️  Ya existe: "${noticia.title}"`)
                continue
            }

            const result = await client.create(noticia)
            console.log(`   ✅ Creada: "${noticia.title}" (${result._id})`)
        } catch (error) {
            console.error(`   ❌ Error con "${noticia.title}":`, error.message)
        }
    }

    console.log("\n✨ ¡Migración completada!")
    console.log("   Recargá http://localhost:3000/novedades para ver los cambios.")
}

migrate().catch(console.error)

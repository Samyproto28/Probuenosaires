/**
 * Migración completa de Programas a Sanity CMS
 * ─────────────────────────────────────────────
 * 1. Sube imágenes locales (/public/images/) a Sanity CDN
 * 2. Descarga y sube imágenes externas (WordPress) a Sanity CDN
 * 3. Actualiza cada programa con mainImage, body (Portable Text completo),
 *    summary, author, readTime, publishedAt
 * 4. Crea el programa "Intermediación Laboral" que faltaba
 * 5. Limpia href (ya no apunta a páginas hardcodeadas)
 *
 * Uso: npx tsx scripts/migrate-programs-full.ts
 */

import { createClient } from "@sanity/client"
import fs from "fs"
import path from "path"

// ─── Cliente Sanity ──────────────────────────────────────────────────────────
const client = createClient({
    projectId: "r2kwf8nd",
    dataset: "production",
    apiVersion: "2025-02-15",
    token:
        process.env.SANITY_WRITE_TOKEN ||
        "skg4fpac0uKQasN7bPyjmyxPB4wRhC9ZVNSGXM2MRQz9NiaawZobqECjVDk0Mn8vYBLn2ztpplBMxxf52YftBMZhYLSmcay5xcXnZsG3CxkZ7tGdelyi4t67Ay0Qa80apXrmtOBtUcBIxUQxh4zMWsNPhhG19opcRKtpWSS23ZT1vCkYoiNJ",
    useCdn: false,
})

const PUBLIC_DIR = path.join(process.cwd(), "public")

// ─── Helpers: subida de imágenes ─────────────────────────────────────────────

async function uploadLocalImage(relativePath: string, label: string) {
    const fullPath = path.join(PUBLIC_DIR, relativePath.replace(/^\//, ""))
    if (!fs.existsSync(fullPath)) {
        console.log(`   ⚠️  Imagen local no encontrada: ${fullPath}`)
        return null
    }
    console.log(`   📸 Subiendo imagen local: ${relativePath}`)
    const asset = await client.assets.upload("image", fs.createReadStream(fullPath), {
        filename: path.basename(fullPath),
    })
    console.log(`   ✅ Imagen "${label}" subida → ${asset._id}`)
    return asset
}

async function uploadRemoteImage(url: string, filename: string, label: string) {
    console.log(`   🌐 Descargando imagen remota: ${url}`)
    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const buffer = await response.arrayBuffer()
        const asset = await client.assets.upload("image", Buffer.from(buffer), { filename })
        console.log(`   ✅ Imagen remota "${label}" subida → ${asset._id}`)
        return asset
    } catch (err) {
        console.log(`   ⚠️  No se pudo descargar ${url}: ${err}`)
        return null
    }
}

function sanityRef(assetId: string) {
    return { _type: "image" as const, asset: { _type: "reference" as const, _ref: assetId } }
}

// ─── Helpers: bloques Portable Text ──────────────────────────────────────────

function block(text: string, style: string = "normal") {
    return {
        _type: "block",
        _key: Math.random().toString(36).slice(2),
        style,
        children: [{ _type: "span", _key: Math.random().toString(36).slice(2), text, marks: [] }],
        markDefs: [],
    }
}

function boldSpan(text: string) {
    return { _type: "span", _key: Math.random().toString(36).slice(2), text, marks: ["strong"] }
}

function normalSpan(text: string) {
    return { _type: "span", _key: Math.random().toString(36).slice(2), text, marks: [] }
}

function mixedBlock(children: ReturnType<typeof normalSpan>[], style = "normal") {
    return {
        _type: "block",
        _key: Math.random().toString(36).slice(2),
        style,
        children,
        markDefs: [],
    }
}

function listItem(text: string) {
    return {
        _type: "block",
        _key: Math.random().toString(36).slice(2),
        style: "normal",
        listItem: "bullet",
        level: 1,
        children: [{ _type: "span", _key: Math.random().toString(36).slice(2), text, marks: [] }],
        markDefs: [],
    }
}

function h2(text: string) { return block(text, "h2") }
function h3(text: string) { return block(text, "h3") }
function quote(text: string) { return block(text, "blockquote") }

// ─── Definición de programas con su contenido completo ───────────────────────

interface ProgramData {
    slug: string
    title?: string
    summary: string
    author: string
    readTime: string
    publishedAt: string
    localImagePath?: string
    remoteImageUrl?: string
    remoteImageFilename?: string
    body: object[]
    // Para el programa nuevo (intermediacion):
    isNew?: boolean
    newDocFields?: object
}

const programs: ProgramData[] = [

    // ─── ENCADENAR ─────────────────────────────────────────────────────────────
    {
        slug: "encadenar",
        summary: "Conectando oportunidades, fortaleciendo el entramado productivo y promoviendo la sostenibilidad.",
        author: "Fundación Pro Buenos Aires",
        readTime: "8 min",
        publishedAt: "2024-01-03T00:00:00Z",
        localImagePath: "/images/encadenar-main.png",
        body: [
            h2("¿Qué es Encadenar, Negocios en Ronda?"),
            mixedBlock([boldSpan("Encadenar, Negocios en Ronda"), normalSpan(" es un programa de la "), boldSpan("Fundación Pro Buenos Aires"), normalSpan(" diseñado para fomentar la "), boldSpan("colaboración y el crecimiento económico"), normalSpan(" en la región. A través de esta iniciativa, buscamos crear redes y oportunidades de negocio que impulsen el desarrollo de "), boldSpan("PyMEs, emprendedores y cooperativas"), normalSpan(", fortaleciendo el tejido productivo local y promoviendo prácticas sostenibles.")]),

            h2("Origen y Alianzas Estratégicas"),
            mixedBlock([normalSpan("El programa nació el "), boldSpan("16 de agosto de 2017"), normalSpan(" en alianza con la "), boldSpan("Cámara de Empresarios Bonaerenses para el Fortalecimiento de las Cadenas de Valor (FOCAVA)"), normalSpan(" y con el apoyo de la "), boldSpan("Confederación Económica de la Provincia de Buenos Aires"), normalSpan(". Desde entonces, ha crecido y evolucionado, sumando nuevos aliados estratégicos.")]),
            mixedBlock([normalSpan("En el año "), boldSpan("2024"), normalSpan(", se incorporaron la "), boldSpan("AMIA (Asociación Mutual Israelita Argentina)"), normalSpan(" y la "), boldSpan("CCAI (Cámara de Comercio Argentino Israelí)"), normalSpan(", reforzando el compromiso con el desarrollo económico y la integración de actores clave en la región.")]),

            h2("Enfoque Social: La Participación de los Estudiantes"),
            mixedBlock([normalSpan("Uno de los pilares fundamentales de Encadenar es su "), boldSpan("enfoque social"), normalSpan(", que se materializa a través de la participación activa de estudiantes de escuelas técnicas y del "), boldSpan("Instituto de Formación Técnica Superior N° 9 de CABA"), normalSpan(".")]),
            h3("Alumnos de escuelas técnicas"),
            listItem("Los estudiantes del último año realizan sus 200 horas de prácticas profesionalizantes en la Fundación Pro Buenos Aires, cumpliendo con un requisito clave para obtener su título de Técnico."),
            listItem("Durante estas prácticas, los alumnos son responsables de convocar a las empresas que participan en las jornadas de Encadenar, adquiriendo experiencia en comunicación, organización y trabajo en equipo."),
            h3("Alumnos del Instituto de Formación Técnica Superior N° 9 de CABA"),
            listItem("Estudiantes de Comercio, Comercio Internacional y Administración se suman al programa, aportando sus conocimientos para mejorar la selección de empresas en cada encuentro."),
            listItem("Su contribución optimiza los procesos de vinculación y asegura que las empresas seleccionadas sean las más adecuadas para cada ronda de negocios."),

            h2("Objetivos"),
            listItem("Facilitar conexiones entre empresas, emprendedores, organizaciones sociales y productivas."),
            listItem("Promover la integración de PyMEs en cadenas de valor más amplias."),
            listItem("Generar oportunidades de negocio a través de rondas de encuentro y networking."),
            listItem("Fortalecer las capacidades comerciales mediante capacitaciones y asesoramiento."),
            listItem("Fomentar la sostenibilidad y la responsabilidad social empresarial (RSE)."),

            h2("Acciones Principales"),
            h3("1. Rondas de negocios"),
            listItem("Organización de eventos donde emprendedores y empresarios presentan sus proyectos y establecen alianzas estratégicas."),
            listItem("Espacios de networking para generar conexiones entre PyMEs, grandes empresas y cooperativas."),
            h3("2. Capacitaciones y talleres"),
            listItem("Formación en estrategias comerciales, negociación y gestión de alianzas."),
            listItem("Herramientas prácticas para mejorar la competitividad y la inserción en cadenas de valor."),
            h3("3. Asesoramiento personalizado"),
            listItem("Acompañamiento a emprendedores y PyMEs en la identificación de oportunidades de negocio."),
            listItem("Apoyo en la formulación de proyectos y planes comerciales."),
            h3("4. Certificación de empresas sostenibles"),
            mixedBlock([normalSpan("Desde el año "), boldSpan("2024"), normalSpan(", la Fundación certifica a las empresas participantes como "), boldSpan("Empresas Sociales"), normalSpan(", reconociendo su compromiso con el desarrollo sostenible y la responsabilidad social.")]),

            h2("Empresas Sostenibles: Desarrollo de Proveedores"),
            block("Las empresas que participan en Encadenar y se enfocan en el desarrollo de proveedores locales son clasificadas como empresas sostenibles por las siguientes razones:"),
            mixedBlock([boldSpan("Fomento de la economía local:"), normalSpan(" Reducen la dependencia de proveedores lejanos, disminuyendo el impacto ambiental asociado con el transporte y fortaleciendo las economías locales.")]),
            mixedBlock([boldSpan("Resiliencia y adaptabilidad:"), normalSpan(" Diversifican y fortalecen sus cadenas de suministro, haciéndose más resilientes frente a interrupciones globales.")]),
            mixedBlock([boldSpan("Responsabilidad Social Empresarial (RSE):"), normalSpan(" Demuestran un compromiso con la comunidad al invertir en el desarrollo de proveedores locales, fomentando el empleo y el crecimiento económico.")]),
            mixedBlock([boldSpan("Circularidad y colaboración:"), normalSpan(" Promueven un enfoque colaborativo y circular, donde grandes empresas y PyMEs trabajan juntas para mejorar la eficiencia, la calidad y la innovación.")]),

            h2("Creando una Comunidad Sostenible"),
            block("El objetivo primordial de Encadenar es crear una comunidad de empresas sostenibles que operen con un alto nivel de responsabilidad social. Además, cooperativas y ONGs encuentran oportunidades comerciales que les permiten ser autosustentables, enriqueciendo el ecosistema empresarial y social."),

            h2("Impacto en la Comunidad"),
            block("Desde su inicio, Encadenar ha demostrado ser un catalizador eficaz para el desarrollo económico y social. Al conectar a un gran número de industrias y facilitadores del conocimiento, el programa contribuye significativamente al crecimiento sostenible de las comunidades locales y regionales."),

            h2("Difusión y Vinculación"),
            h3("Cooperativa Mante Baires"),
            block("La cooperativa participó en Encadenar el 17 de mayo de 2024 en Almirante Brown, donde se difundieron sus servicios entre las empresas presentes."),
            h3("Cooperativa de Inclusión Laboral La Huella"),
            mixedBlock([boldSpan("Federico Bejarano"), normalSpan(" presentó los productos de la cooperativa el 26 de abril de 2024 en el Palacio El Victorial, CABA.")]),
            h3("Capacitaciones 2024"),
            mixedBlock([normalSpan("Talleres dirigidos a integrantes de PYMES industriales junto con ONG y cooperativas. También participaron responsables de mantenimiento de "), boldSpan("YPF Destilería La Plata"), normalSpan(". Estas capacitaciones fueron ofrecidas en colaboración con "), boldSpan("Chint Argentina"), normalSpan(" y "), boldSpan("WEG Argentina"), normalSpan(" en las instalaciones de FOCAVA en Berazategui. La firma "), boldSpan("Samsung Argentina"), normalSpan(" colaboró sorteando una tablet entre los presentes.")]),

            h2("Reconocimientos"),
            h3("Empresas destacadas"),
            listItem("Be The Driver — colabora con nuestro CRM de gestión."),
            listItem("Aconcagua Energía — desarrolla proveedores en AMIA."),
            listItem("Astillero Río Santiago — desarrolla proveedores en Encadenar."),
            listItem("Acero Perfil — colabora donando materiales."),
            listItem("AD Barbieri — participó de Encadenar Brown desarrollando proveedores."),

            h2("¿Querés participar en nuestras rondas de negocios?"),
            block("Participá en nuestras capacitaciones, recibí asesoramiento o sumate a las próximas rondas de negocios para conectar con grandes empresas y PyMEs."),
            block("Para inscribirte o realizar consultas, escribinos a info@probuenosaires.org o llamá al 5258-0226 (lunes a viernes de 9 a 18 hs)."),
        ],
    },

    // ─── CENTRO TECNOLÓGICO 4.0 ───────────────────────────────────────────────
    {
        slug: "centro-tecnologico-40",
        summary: "Un espacio de innovación y formación en el Cruce Varela, destinado a acercar la última tecnología a la región y potenciar las capacidades de PyMEs y estudiantes.",
        author: "Fundación Pro Buenos Aires",
        readTime: "6 min",
        publishedAt: "2023-09-01T00:00:00Z",
        localImagePath: "/images/centro-tecnologico-main.png",
        body: [
            h2("La Iniciativa"),
            mixedBlock([normalSpan("En la Fundación Pro Buenos Aires, en colaboración con la Cámara de Empresarios Bonaerenses (FOCAVA), trabajamos junto al Ministerio de Economía de la Nación a través del programa "), boldSpan("«Consorcios para el Fortalecimiento de Capacidades Institucionales de Apoyo a MIPYMES»"), normalSpan(".")]),
            mixedBlock([normalSpan("Aunque el financiamiento está actualmente detenido, tomamos la iniciativa de contactar a empresas líderes como "), boldSpan("WEG Argentina, Chint, Cambre, Kalop, y JLF Materiales Eléctricos S.A."), normalSpan(" para solicitar apoyo en equipamiento y donaciones económicas, a fin de continuar el proyecto de forma autosustentable.")]),
            block("Gracias a las contribuciones de estas empresas y de nuevos colaboradores que se suman constantemente, hemos desarrollado un robusto programa de capacitaciones en nuestro centro de formación ubicado en el Cruce de Florencio Varela, sobre la Ruta N 36."),

            h2("Galería de Talleres"),
            block("Nuestros talleres se realizan regularmente en el Centro Tecnológico 4.0 con empresas líderes del sector. Para ver las imágenes de nuestros talleres, visitá nuestra galería en las redes sociales."),
            listItem("Taller Asoleb — formación técnica especializada."),
            listItem("Taller Práctico — aplicación de tecnologías industriales."),
            listItem("Capacitación Técnica — actualización para profesionales."),
            listItem("Taller Transformación Digital 2023 — industria 4.0 en la práctica."),
            listItem("Taller de Variación de Velocidad 2024 — control de motores eléctricos."),
            listItem("Taller Factor de Potencia 2024 — eficiencia energética industrial."),

            h2("Oferta de Capacitación"),
            block("Invitamos a las empresas de Berazategui, Florencio Varela y Quilmes a registrarse y permitir que sus colaboradores accedan a nuestras capacitaciones en áreas clave:"),
            listItem("Industria 4.0 y Transformación de la Cultura Organizacional: Planeamiento Estratégico y Operativo."),
            listItem("Automatización de Procesos: Control y variación de velocidad en motores eléctricos."),
            listItem("Taller de Sensibilización en Industria 4.0."),
            listItem("Emprender Kaizen."),
            listItem("Herramienta 5S y su aplicación a cadenas de valor (Metalmecánica, Papel y Cartón, Alimentos, Plástico, Químico)."),
            listItem("Metodología Kaizen aplicada a cadenas de valor."),
            listItem("Manejo de Datos de Producción en procesos industriales automatizados con Inteligencia Artificial."),
            quote("Nuestro principal objetivo es traer la última tecnología a nuestra región económica y articular con las 25 escuelas técnicas para facilitar el acceso de sus estudiantes a estos recursos."),

            h2("Vinculación Educativa"),
            h3("Programa Vinculando"),
            block("El programa Vinculando juega un papel crucial en nuestra misión de empoderar a las nuevas generaciones mediante la conexión de estudiantes de escuelas técnicas con empresas locales."),
            block("Este puente hacia experiencias laborales prácticas no solo enriquece la formación de los alumnos, sino que también ayuda a satisfacer las demandas del sector industrial."),

            h2("Radio Empresaria"),
            mixedBlock([normalSpan("Adicionalmente, contamos con "), boldSpan("Radio Empresaria"), normalSpan(", nuestra emisora radial con streaming que nos permite difundir ampliamente nuestra visión y consolidar nuestra presencia en la comunidad.")]),

            h2("Contacto e Inscripciones"),
            block("Para más información e inscripciones, pueden comunicarse de lunes a viernes, de 9 a 18 hs:"),
            listItem("Teléfono: 5258-0226"),
            listItem("Email: info@probuenosaires.org"),
        ],
    },

    // ─── PROBA COMEX ──────────────────────────────────────────────────────────
    {
        slug: "proba-comex",
        summary: "Asistencia Integral para Importadores y Servicios en Comercio Exterior.",
        author: "Fundación Pro Buenos Aires",
        readTime: "5 min",
        publishedAt: "2025-08-01T00:00:00Z",
        localImagePath: "/images/probacomex-main.png",
        body: [
            h2("Introducción"),
            mixedBlock([normalSpan("Desde Fundación Pro Buenos Aires presentamos "), boldSpan("ProBA Comex"), normalSpan(", un nuevo programa orientado a impulsar la competitividad de las PYMES en el comercio internacional.")]),
            block("A través de este programa, acompañamos a empresas en sus proyectos de importación, conectándolas con prestadores de servicios confiables, generando economías de escala y brindando soporte técnico y capacitación."),

            h2("¿Qué ofrece ProBA Comex?"),
            h3("1. Vinculación con Prestadores Estratégicos"),
            block("Conectamos a las empresas con agentes de carga, zonas francas, despachantes, aseguradoras y otros actores clave en la cadena logística."),
            h3("2. Pool de Compras para PYMES"),
            block("Facilitamos compras agrupadas para reducir costos, compartir contenedores y optimizar la logística internacional."),
            h3("3. Estudios de Mercado y Costeos"),
            block("Brindamos información estratégica para evaluar proveedores, costos y oportunidades de importación."),
            h3("4. Asistencia Técnica Personalizada"),
            block("Acompañamos todo el proceso de importación: selección de proveedores, documentación, embarques y coordinación logística."),
            h3("5. Capacitación In Company"),
            block("Formación especializada para equipos internos: normativa aduanera, gestión operativa, costeo y planificación."),

            h2("¿A quién está dirigido?"),
            listItem("PYMES industriales y comerciales."),
            listItem("Startups con proyectos de importación."),
            listItem("Cooperativas y agrupaciones empresarias."),
            listItem("Empresas que desean profesionalizar su área de comercio exterior."),

            h2("Beneficios para empresas importadoras"),
            listItem("Accedé a una red confiable de prestadores."),
            listItem("Reducí tus costos de importación."),
            listItem("Recibí asistencia técnica y formación."),
            listItem("Importá sin necesidad de gran escala ni estructura interna."),

            h2("Beneficios para prestadores de servicios"),
            block("(Logística, seguros, bancos, zonas francas, etc.)"),
            listItem("Conectá con clientes calificados."),
            listItem("Ampliá tu visibilidad en el ecosistema PYME."),
            listItem("Participá de una red colaborativa y validada."),
            listItem("Sumate a una propuesta con impacto social y económico regional."),

            h2("Beneficios Clave"),
            listItem("Reducción de costos logísticos."),
            listItem("Acceso a proveedores confiables."),
            listItem("Profesionalización del equipo interno."),
            listItem("Planificación estratégica de compras."),
            listItem("Transparencia, articulación y acompañamiento continuo."),

            h2("¿Cómo participar?"),
            h3("Empresas Importadoras"),
            block("Completá un breve diagnóstico inicial sin cargo. Te contactaremos para coordinar una entrevista y definir un plan. Diagnóstico disponible en: https://docs.google.com/forms/d/e/1FAIpQLSceI30ugxYgl5FUPzPdFGRPdUvm9NfaRbP-ze0JzY3Ih6P93g/viewform"),
            h3("Empresas Exportadoras"),
            block("Completá un breve diagnóstico inicial sin cargo. Diagnóstico disponible en: https://docs.google.com/forms/d/e/1FAIpQLSf1jNkyAn46khdZyyb--O3FlxAXNB4dyOpHnZxmi-dyc90xMg/viewform"),
            h3("Sponsors y Prestadores de Servicios"),
            block("Escribinos para conocer las modalidades de participación, beneficios de visibilidad y posibilidades de integración a la red."),
            listItem("Teléfono: 5258-0226"),
            listItem("Email: info@probuenosaires.org"),
        ],
    },

    // ─── PYME SALUDABLE ───────────────────────────────────────────────────────
    {
        slug: "pyme-saludable",
        summary: "Un programa integral diseñado para acompañar a las empresas en el fortalecimiento de su capital humano y sus capacidades de gestión.",
        author: "Fundación Pro Buenos Aires",
        readTime: "5 min",
        publishedAt: "2024-10-13T00:00:00Z",
        localImagePath: "/images/programas/pyme-saludable/main.png",
        body: [
            h2("Introducción"),
            block("En la Fundación Pro Buenos Aires, entendemos que el verdadero potencial de nuestra región reside en su gente. Las pymes son el motor económico y social de los municipios de Berazategui, Florencio Varela y Quilmes, y su sostenibilidad depende de dos pilares fundamentales: el bienestar de sus equipos y la competitividad de sus estrategias comerciales."),
            mixedBlock([normalSpan("Por ello, lanzamos "), boldSpan("Pymes Saludables"), normalSpan(": un programa integral diseñado para acompañar a las empresas en el fortalecimiento de su capital humano y sus capacidades de gestión, partiendo de la convicción de que la salud de las personas y la salud del negocio son dos caras de la misma moneda.")]),

            h2("¿En qué consiste el programa?"),
            block("Pymes Saludables es un acompañamiento intensivo que aborda dos ejes críticos para el éxito en la economía actual:"),
            h3("1. Salud Corporal y Bienestar Integral"),
            block("Mejoramos la calidad de vida de todos los integrantes de la pyme, desde los líderes hasta los colaboradores."),
            h3("2. Habilidades Blandas y Gestión de Ventas B2B"),
            block("Potenciamos las capacidades comerciales y de liderazgo para impulsar el crecimiento y construir relaciones comerciales duraderas."),

            h2("Eje 1: Salud Corporal — Aliado Estratégico: IIDCA"),
            block("Instituto Internacional del Deporte y las Ciencias Aplicadas. El IIDCA aportará su expertise para implementar:"),
            listItem("Evaluaciones Diagnósticas: Chequeos básicos de salud y análisis de entornos laborales (ergonomía)."),
            listItem("Charlas y Talleres Prácticos: Nutrición en el ámbito laboral, manejo del estrés, pausas activas y prevención de lesiones."),
            listItem("Plan de Bienestar Personalizado: Asesoramiento para integrar hábitos saludables en la cultura de la empresa."),
            listItem("Activación Fitness in-company: Entrenamiento en grupos reducidos para combatir el sedentarismo laboral."),

            h2("Eje 2: Habilidades Blandas y Ventas B2B — Aliado Estratégico: Fundación Argennova"),
            block("Con su foco en el liderazgo con valores, la Fundación Argennova será responsable de:"),
            listItem("Capacitación en Habilidades Blandas: Comunicación efectiva, trabajo en equipo, inteligencia emocional y resolución de conflictos."),
            listItem("Formación en Liderazgo con Valores: Desarrollo de líderes inspiradores que fomenten entornos de trabajo positivos y de alto rendimiento."),
            listItem("Gestión de Ventas B2B: Técnicas avanzadas para entender el ciclo de ventas complejas, gestionar objeciones y construir relaciones de confianza a largo plazo."),

            h2("Beneficios para su PyME"),
            listItem("Mayor Productividad y Reducción del Ausentismo: Equipos más sanos y motivados son más eficientes."),
            listItem("Fortalecimiento del Clima Laboral: Mejora en la comunicación, cohesión del equipo y sentido de pertenencia."),
            listItem("Líderes Más Efectivos: Formación de mandos medios y altos con capacidad para guiar equipos y gestionar el talento."),
            listItem("Herramientas Concretas para Vender Más y Mejor: Metodologías probadas para aumentar el cierre de ventas B2B."),
            listItem("Diferenciación Competitiva: Posicionarse como empleador y socio de preferencia."),
            listItem("Red de Contención y Acompañamiento: Acceso a especialistas en salud y management para consultas y seguimiento."),

            h2("Metodología de Implementación"),
            h3("1. Diagnóstico Inicial"),
            block("Evaluación de necesidades específicas en salud y gestión comercial."),
            h3("2. Plan de Trabajo Personalizado"),
            block("Diseño de un itinerario de talleres, charlas y asesorías."),
            h3("3. Ejecución Intensiva"),
            block("Implementación de las actividades en las instalaciones de la empresa o en nuestros centros."),
            h3("4. Seguimiento y Medición"),
            block("Análisis de indicadores clave (clima laboral, desempeño comercial) para evaluar el impacto."),

            h2("¿Por qué Participar?"),
            quote("Porque el activo más importante de su empresa son las personas. Invertir en su bienestar y desarrollo profesional no es un gasto, es la estrategia más inteligente para asegurar un crecimiento sostenible."),

            h2("¿Cómo Participar?"),
            h3("Registro"),
            block("Complete el formulario de interés para contarnos sobre su empresa."),
            h3("Diagnóstico Sin Cargo"),
            block("Realizaremos una primera reunión para identificar sus desafíos y objetivos."),
            h3("Propuesta a Medida"),
            block("Elaboraremos un plan de trabajo conjunto con IIDCA y Fundación Argennova."),

            h2("Compromiso de la Fundación Pro Buenos Aires"),
            block("Nos comprometemos a ser su partner estratégico en este camino, articulando el conocimiento de nuestros aliados y nuestra red de más de 3.300 pymes para generar un ecosistema donde las empresas no solo crezcan, sino que prosperen con salud y valores."),
        ],
    },

    // ─── RADIO EMPRESARIA ─────────────────────────────────────────────────────
    {
        slug: "radio-empresaria",
        summary: "Fundada en 2014, Radio Empresaria se ha consolidado como una plataforma vital para comunicar la realidad de las cadenas de valor regionales, conectando pymes, cooperativas y emprendedores.",
        author: "Fundación Pro Buenos Aires",
        readTime: "6 min",
        publishedAt: "2023-01-01T00:00:00Z",
        localImagePath: "/radio-empresario.webp",
        body: [
            h2("Nuestra Misión"),
            mixedBlock([normalSpan("Desde su creación, "), boldSpan("Radio Empresaria"), normalSpan(" se ha dedicado a fomentar la sostenibilidad y la innovación, proporcionando contenido relevante que impulsa el desarrollo económico y social.")]),
            block("A través de nuestros programas, buscamos conectar ideas y personas, generando un impacto positivo en el entorno empresarial y comunitario. Brindamos espacio a emprendedores, pymes, cooperativas, ONGs y escuelas técnicas para que puedan expresarse libremente a diario."),

            h2("Programación Diversificada"),
            h3("Noticias Económicas"),
            block("Mantente al día con las últimas novedades que afectan a la industria y a los mercados locales, nacionales e internacionales."),
            h3("Diálogos con Líderes"),
            block("Escucha a los expertos y líderes de opinión discutir sobre innovación, sostenibilidad, y estrategias empresariales exitosas."),
            h3("Espacios para el Emprendimiento"),
            block("Ofrecemos plataformas para que emprendedores compartan sus experiencias y aprendizajes, inspirando a otros a seguir sus pasos."),
            h3("Área de Deportes"),
            block("Liderada por Claudio Blanco, con cobertura apasionante de Defensa y Justicia y otras disciplinas deportivas."),

            h2("Compromiso con la Comunidad"),
            quote("En Radio Empresaria, creemos en el poder transformador de la comunicación para el bien común. Nuestras iniciativas no solo informan, sino que también educan y motivan cambios positivos, alineándose con los Objetivos de Desarrollo Sostenible (ODS)."),

            h2("Plataforma Abierta — Horarios y Equipo"),
            block("Con la mirada puesta en el futuro, Radio Empresaria está completamente conectada al mundo digital, ofreciendo streaming en línea para que nuestra programación sea accesible desde cualquier lugar y en cualquier momento. Desde 2014, nuestro objetivo ha sido llegar más allá de las ondas radiales tradicionales."),
            mixedBlock([boldSpan("Emisión:"), normalSpan(" Todos los jueves de 11:00 a 13:00 horas.")]),
            mixedBlock([boldSpan("Conducción:"), normalSpan(" Facundo Galdós, María Eugenia Ruiz y Claudio Blanco.")]),
            mixedBlock([boldSpan("Producción:"), normalSpan(" Leila Galdós.")]),
            mixedBlock([boldSpan("Operación Técnica:"), normalSpan(" Eliana Herrera y Leonel Blanco.")]),

            h2("Historia"),
            block("Facundo Galdós remarcó la importancia de Reporte Regional: «Gracias a Reporte Regional en el año 2013 logramos recaudar los fondos para alquilar el primer espacio físico y luego crear Radio Empresaria. Es una herramienta para las pymes, cooperativas, industrias, instituciones y ONGs locales, dado que se constituyó en un lugar de encuentro comunicacional donde pueden contar sus acciones periódicamente.»"),
            h3("Participaron del primer programa"),
            listItem("Lic. Gustavo Pons"),
            listItem("María Eugenia Ruiz (Presidente de FOCAVA)"),
            listItem("Daniel Coral (Presidente de Seyta S.A. y vicepresidente de FOCAVA)"),
            listItem("Dr. Guillermo Siro (Presidente de CEPBA)"),

            h2("Entrevistas Destacadas"),
            block("Para ver las entrevistas destacadas de Radio Empresaria, visitá nuestro canal de YouTube:"),
            listItem("Entrevista Lic. Gustavo Pons: https://www.youtube.com/watch?v=XhYb1P-PQms"),
            listItem("Entrevista Daniel Coral (Seyta S.A.): https://www.youtube.com/watch?v=HZsFLmTPwDk"),
            listItem("Entrevista Dr. Guillermo Siro (CEPBA): https://www.youtube.com/watch?v=ju80WtN1c-M"),

            h2("Contacto"),
            listItem("Portal: www.radioempresaria.com.ar"),
            listItem("Email: info@probuenosaires.org"),
            listItem("Teléfono: 5258-0226 (Lunes a Viernes 9 a 13 hs)"),
        ],
    },

    // ─── INTERMEDIACIÓN LABORAL (PROGRAMA NUEVO — no estaba en la primera migración) ──
    {
        slug: "intermediacion-laboral",
        summary: "Herramientas para la búsqueda laboral y selección de personal. Brindamos soporte integral para conectar la oferta y demanda de empleo en la región.",
        author: "Fundación Pro Buenos Aires",
        readTime: "3 min",
        publishedAt: "2024-10-01T00:00:00Z",
        localImagePath: undefined,
        isNew: true,
        newDocFields: {
            _type: "programa",
            title: "Intermediación de Empleo",
            slug: { _type: "slug", current: "intermediacion-laboral" },
            icon: "Target",
            description: "Conectamos la oferta y demanda de empleo técnico en la región. Acompañamos a egresados de escuelas técnicas a encontrar su primer trabajo y a empresas a encontrar el talento que necesitan.",
            impact: "Empleo",
            impactLabel: "inserción laboral técnica regional",
            gradient: "from-[#111269] to-[#405e8c]",
            isActive: true,
        },
        body: [
            h2("¿Buscás trabajo?"),
            block("Si te encontrás en la búsqueda de nuevas oportunidades laborales, te invitamos a ingresar tu Curriculum Vitae en nuestra plataforma asociada para formar parte de nuestra base de datos de talento."),
            block("Ingresá tu CV en: https://empleos.amia.org.ar/busco-empleo/mi-curriculum/"),

            h2("¿Buscás personal?"),
            h3("Servicio para Empresas"),
            block("La oficina inició sus actividades en Octubre de 2024. Actualmente estamos invitando a alumnos por egresar y egresados de escuelas técnicas de la región integrada por los municipios de Berazategui, Florencio Varela y Quilmes a registrar su perfil profesional en nuestro sistema."),
            block("Invitamos a las empresas interesadas en incorporar personal a que nos consulten para recibir asesoramiento personalizado sobre nuestro servicio de búsqueda y selección."),
            listItem("Email: info@probuenosaires.org"),
            listItem("Teléfono: 5258-0226 (Lunes a Viernes de 9 a 13 hs)"),
            quote("El servicio de búsqueda y selección de personal tiene costo para las empresas. Durante los próximos días iremos informando a los interesados en adquirirlo."),
        ],
    },
]

// ─── Lógica principal de migración ─────────────────────────────────────────

async function run() {
    console.log("🚀 Iniciando migración completa de programas a Sanity...\n")

    let updated = 0
    let created = 0
    let errors = 0

    for (const prog of programs) {
        console.log(`\n${"─".repeat(60)}`)
        console.log(`📋 Procesando: ${prog.slug}`)

        try {
            // ── PASO 1: Subir imagen hero ────────────────────────────────────────
            let imageAsset = null

            if (prog.localImagePath) {
                imageAsset = await uploadLocalImage(prog.localImagePath, prog.slug)
            } else if (prog.remoteImageUrl && prog.remoteImageFilename) {
                imageAsset = await uploadRemoteImage(prog.remoteImageUrl, prog.remoteImageFilename, prog.slug)
            }

            // ── PASO 2: Para programas nuevos (intermediacion), crear el documento
            if (prog.isNew && prog.newDocFields) {
                const existing = await client.fetch(
                    `*[_type == "programa" && slug.current == $slug][0]._id`,
                    { slug: prog.slug }
                )
                if (!existing) {
                    console.log(`   ➕ Creando nuevo documento: ${prog.slug}`)
                    const newDoc: Record<string, unknown> = {
                        ...prog.newDocFields,
                        summary: prog.summary,
                        author: prog.author,
                        readTime: prog.readTime,
                        publishedAt: prog.publishedAt,
                        body: prog.body,
                    }
                    if (imageAsset) {
                        newDoc.mainImage = sanityRef(imageAsset._id)
                    }
                    const result = await client.create(newDoc)
                    console.log(`   ✅ Creado → ID: ${result._id}`)
                    created++
                    continue
                }
            }

            // ── PASO 3: Encontrar el documento existente por slug ─────────────────
            const existingId = await client.fetch<string>(
                `*[_type == "programa" && slug.current == $slug][0]._id`,
                { slug: prog.slug }
            )

            if (!existingId) {
                console.log(`   ⚠️  No se encontró el documento con slug "${prog.slug}" en Sanity. Omitido.`)
                errors++
                continue
            }

            // ── PASO 4: Construir patch con todos los campos ──────────────────────
            const patch: Record<string, unknown> = {
                summary: prog.summary,
                author: prog.author,
                readTime: prog.readTime,
                publishedAt: prog.publishedAt,
                body: prog.body,
                href: null, // Ya no apunta a páginas hardcodeadas
                localImage: null, // Se limpia porque la imagen ya está en Sanity
            }

            if (imageAsset) {
                patch.mainImage = sanityRef(imageAsset._id)
            }

            await client.patch(existingId).set(patch).commit()
            console.log(`   ✅ Actualizado → ID: ${existingId}`)
            updated++

            // Pausa entre peticiones
            await new Promise((r) => setTimeout(r, 300))

        } catch (err) {
            console.error(`   ❌ Error procesando "${prog.slug}":`, err)
            errors++
        }
    }

    console.log("\n" + "=".repeat(60))
    console.log("📊 Resumen de migración completa:")
    console.log(`   🔄 Actualizados: ${updated}`)
    console.log(`   ✨ Creados:      ${created}`)
    console.log(`   ❌ Errores:      ${errors}`)
    console.log("=".repeat(60))

    if (errors === 0) {
        console.log("\n🎉 ¡Migración completada sin errores!")
        console.log("   ✅ Imágenes subidas a Sanity CDN")
        console.log("   ✅ Contenido completo migrado (Portable Text)")
        console.log("   ✅ Campos href y localImage limpiados")
        console.log("\n   Siguiente paso: eliminar las carpetas hardcodeadas de /programas/")
    }
}

run().catch((err) => {
    console.error("Error fatal:", err)
    process.exit(1)
})

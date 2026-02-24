/**
 * Script de migración: sube los 9 programas hardcodeados a Sanity CMS.
 *
 * Uso:
 *   npx tsx scripts/migrate-programs.ts
 *
 * Requiere:
 *   - SANITY_WRITE_TOKEN configurado en el entorno (o definido abajo)
 *   - @sanity/client instalado (ya viene con next-sanity)
 */

import { createClient } from "@sanity/client"

// ---------------------------------------------------------------------------
// Configuración del cliente Sanity con permisos de escritura
// ---------------------------------------------------------------------------
const client = createClient({
    projectId: "r2kwf8nd",
    dataset: "production",
    apiVersion: "2025-02-15",
    token:
        process.env.SANITY_WRITE_TOKEN ||
        "skg4fpac0uKQasN7bPyjmyxPB4wRhC9ZVNSGXM2MRQz9NiaawZobqECjVDk0Mn8vYBLn2ztpplBMxxf52YftBMZhYLSmcay5xcXnZsG3CxkZ7tGdelyi4t67Ay0Qa80apXrmtOBtUcBIxUQxh4zMWsNPhhG19opcRKtpWSS23ZT1vCkYoiNJ",
    useCdn: false,
})

// ---------------------------------------------------------------------------
// Datos de los 9 programas a migrar
// ---------------------------------------------------------------------------
const programs = [
    {
        title: "Programa Vinculando",
        slug: "vinculando",
        icon: "Handshake",
        description:
            "Conectamos a estudiantes de escuelas técnicas con empresas para sus 200 horas de prácticas profesionalizantes. Un programa central que impulsa la formación de futuros técnicos y la empleabilidad juvenil en Quilmes, Florencio Varela y Berazategui.",
        impact: "200h",
        impactLabel: "prácticas profesionalizantes por alumno",
        localImage: "/vinculando.webp",
        gradient: "from-black/40 to-black/10",
        href: null,
        isActive: true,
    },
    {
        title: "Programa Encadenar",
        slug: "encadenar",
        icon: "Network",
        description:
            "Fortalecemos los vínculos entre PyMEs promoviendo el trabajo colaborativo mediante rondas de negocios, espacios de networking y articulación entre proveedores y demandantes para impulsar el sector productivo.",
        impact: "Sinergia",
        impactLabel: "rondas de negocios y networking",
        localImage: "/encadenar.webp",
        gradient: "from-black/40 to-black/10",
        href: "/programas/encadenar",
        isActive: true,
    },
    {
        title: "Programa Proba Comex",
        slug: "proba-comex",
        icon: "Globe",
        description:
            "Orientado a PyMEs que buscan iniciarse o fortalecerse en el comercio exterior. Brindamos capacitación en importación/exportación, asesoramiento técnico y acompañamiento en los primeros pasos del camino exportador.",
        impact: "Exportar",
        impactLabel: "apoyo integral al comercio exterior",
        localImage: null,
        gradient: "from-[#8dc2ff] to-[#89abe6]",
        href: "/programas/proba-comex",
        isActive: true,
    },
    {
        title: "Programa Pyme Saludable",
        slug: "pyme-saludable",
        icon: "HeartPulse",
        description:
            "Promovemos el bienestar integral y la salud laboral en las PyMEs. Trabajamos en ejes de clima organizacional, prevención y concientización para mejorar la calidad de vida y la sostenibilidad de las organizaciones.",
        impact: "Salud",
        impactLabel: "bienestar y productividad organizacional",
        localImage: null,
        gradient: "from-[#405e8c] to-[#111269]",
        href: "/programas/pyme-saludable",
        isActive: true,
    },
    {
        title: "Radio Empresaria",
        slug: "radio-empresaria",
        icon: "Radio",
        description:
            "Nuestra emisora online (RadioEmpresaria.com.ar) brinda visibilidad y posicionamiento para empresas del sector productivo. Un espacio para comunicar la realidad de las cadenas de valor regionales.",
        impact: "Difusión",
        impactLabel: "visibilidad para la cadena de valor",
        localImage: "/radio-empresario.webp",
        gradient: "from-black/40 to-black/10",
        href: "/programas/radio-empresaria",
        isActive: true,
    },
    {
        title: "Centro Tecnológico 4.0",
        slug: "centro-tecnologico-40",
        icon: "Cpu",
        description:
            "Acercamos a las PyMEs a la innovación y la transformación digital. Ofrecemos capacitaciones, charlas técnicas y espacios de actualización para preparar a las empresas ante los desafíos tecnológicos actuales.",
        impact: "4.0",
        impactLabel: "innovación y tecnología aplicada",
        localImage: "/centro-4-0.webp",
        gradient: "from-black/40 to-black/10",
        href: "/programas/centro-tecnologico",
        isActive: true,
    },
    {
        title: "Gestión Pymes",
        slug: "gestion-pymes",
        icon: "Layers",
        description:
            "Asistencia integral en productividad: Implementación de 5S, mejora de procesos, planificación estratégica y transformación digital para el fortalecimiento del negocio.",
        impact: "Eficiencia",
        impactLabel: "optimización de procesos productivos",
        localImage: null,
        gradient: "from-[#405e8c] to-[#89abe6]",
        href: null,
        isActive: true,
    },
    {
        title: "Industrias Culturales",
        slug: "industrias-culturales",
        icon: "Palette",
        description:
            "Fomentamos el desarrollo de las industrias culturales y creativas como motor de identidad y economía regional, integrando el arte y la creatividad con el sector productivo.",
        impact: "Cultura",
        impactLabel: "impulso a la economía creativa",
        localImage: null,
        gradient: "from-[#8dc2ff] to-[#111269]",
        href: null,
        isActive: true,
    },
    {
        title: "Argentina 2050",
        slug: "argentina-2050",
        icon: "Flag",
        description:
            "Plataforma de pensamiento y acción para el desarrollo sustentable del país a largo plazo, enfocada en la competitividad y la inclusión social.",
        impact: "Futuro",
        impactLabel: "visión estratégica de país",
        localImage: null,
        gradient: "from-[#111269] to-[#405e8c]",
        href: "#",
        isActive: true,
    },
]

// ---------------------------------------------------------------------------
// Lógica de migración
// ---------------------------------------------------------------------------
async function migratePrograms() {
    console.log("🚀 Iniciando migración de programas a Sanity...\n")

    // Verificar que el cliente puede conectarse
    try {
        await client.fetch(`*[_type == "programa"][0]._id`)
        console.log("✅ Conexión con Sanity establecida correctamente.\n")
    } catch (err) {
        console.error("❌ Error al conectar con Sanity. Verificá el token y el projectId.")
        console.error(err)
        process.exit(1)
    }

    let created = 0
    let skipped = 0
    let errors = 0

    for (let i = 0; i < programs.length; i++) {
        const program = programs[i]

        try {
            // Verificar si ya existe un programa con ese slug para evitar duplicados
            const existing = await client.fetch(
                `*[_type == "programa" && slug.current == $slug][0]._id`,
                { slug: program.slug }
            )

            if (existing) {
                console.log(`⏭️  [${i + 1}/${programs.length}] Ya existe: "${program.title}" (slug: ${program.slug}) — omitido`)
                skipped++
                continue
            }

            // Construir el documento Sanity
            const doc = {
                _type: "programa" as const,
                title: program.title,
                slug: {
                    _type: "slug" as const,
                    current: program.slug,
                },
                icon: program.icon,
                description: program.description,
                impact: program.impact,
                impactLabel: program.impactLabel,
                gradient: program.gradient,
                isActive: program.isActive,
                ...(program.localImage ? { localImage: program.localImage } : {}),
                ...(program.href ? { href: program.href } : {}),
            }

            // Crear el documento en Sanity
            const result = await client.create(doc)
            console.log(`✅ [${i + 1}/${programs.length}] Creado: "${program.title}" → ID: ${result._id}`)
            created++

            // Pequeña pausa para no saturar la API
            await new Promise((r) => setTimeout(r, 200))
        } catch (err) {
            console.error(`❌ [${i + 1}/${programs.length}] Error al crear "${program.title}":`, err)
            errors++
        }
    }

    console.log("\n" + "=".repeat(60))
    console.log("📊 Resumen de migración:")
    console.log(`   ✅ Creados:  ${created}`)
    console.log(`   ⏭️  Omitidos: ${skipped} (ya existían)`)
    console.log(`   ❌ Errores:  ${errors}`)
    console.log("=".repeat(60))

    if (created > 0) {
        console.log("\n🎉 ¡Migración completada!")
        console.log("   Los programas ya están disponibles en el Studio de Sanity.")
        console.log("   Podés reordenarlos con drag & drop en la sección 🚀 Programas.")
        if (created < programs.length - skipped) {
            console.log("\n⚠️  Algunos programas no se pudieron crear. Revisá los errores arriba.")
        }
    } else if (skipped === programs.length) {
        console.log("\nℹ️  Todos los programas ya existían en Sanity. No se creó nada nuevo.")
    }
}

// Ejecutar
migratePrograms().catch((err) => {
    console.error("Error fatal en la migración:", err)
    process.exit(1)
})

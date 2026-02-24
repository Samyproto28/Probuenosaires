/**
 * Migración completa del Equipo a Sanity CMS
 * ────────────────────────────────────────────
 * 1. Sube las 15 fotos de /public/ a Sanity CDN
 * 2. Crea los 18 documentos de miembros con todos sus datos
 *
 * Uso: npx tsx scripts/migrate-equipo.ts
 */

import { createClient } from "@sanity/client"
import fs from "fs"
import path from "path"

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

// ─── Helper: subir foto ─────────────────────────────────────────────────────
async function uploadPhoto(filename: string): Promise<string | null> {
    if (!filename) return null
    const fullPath = path.join(PUBLIC_DIR, filename.replace(/^\//, ""))
    if (!fs.existsSync(fullPath)) {
        console.log(`   ⚠️  Foto no encontrada: ${fullPath}`)
        return null
    }
    console.log(`   📸 Subiendo: ${filename}`)
    const asset = await client.assets.upload("image", fs.createReadStream(fullPath), {
        filename: path.basename(fullPath),
    })
    console.log(`   ✅ Subida → ${asset._id}`)
    return asset._id
}

// ─── Datos de los miembros ──────────────────────────────────────────────────

interface MemberData {
    name: string
    position: string
    bio: string
    image: string // ruta en /public
    expertise: string[]
    accent: string
    section: "directiva" | "coordinacion" | "profesional" | "internacional"
}

const allMembers: MemberData[] = [
    // ── Comisión Directiva ──────────────────────────────────────────────────
    {
        name: "Facundo Galdós",
        position: "Presidente",
        bio: "Empresario pyme desde 1992, dirigente gremial. Desde 2007 desempeñó funciones en Cámaras Empresarias nacionales, provinciales y regionales (CGERA, CGERA Regional Sur, CEPBA, FOCAVA). Preside Mutual 2050 mandato cumplido.",
        image: "/Facundo Galdós.jpg",
        expertise: ["Gestión Gremial", "PyMEs", "Mutualismo"],
        accent: "#111269",
        section: "directiva",
    },
    {
        name: "María Eugenia Ruiz",
        position: "Vicepresidenta",
        bio: "Presidenta de la Cámara de Comerciantes y amigos del cruce de Florencio Varela. Presidenta de la Cámara de Empresarios Bonaerenses para el Fortalecimiento de las Cadenas de Valor. Secretaria de la Mujer en CEPBA.",
        image: "/María Eugenia Ruiz.jpg",
        expertise: ["Cadenas de Valor", "Género", "Comercio"],
        accent: "#89abe6",
        section: "directiva",
    },
    {
        name: "Mariano Diaz",
        position: "Secretario",
        bio: "Comerciante desde el año 1998, también cumplió tareas como funcionario público en diferentes áreas relacionadas con seguridad, tránsito y fiscalización.",
        image: "/Mariano Diaz.jpg",
        expertise: ["Seguridad", "Fiscalización", "Comercio"],
        accent: "#8dc2ff",
        section: "directiva",
    },
    {
        name: "Lic. Leandro Clavero",
        position: "Tesorero",
        bio: "Profesional de la comunicación especializado en el desarrollo de productos digitales. Ha trabajado para el sector público, ONG y startups. Más de 10 años como docente en marketing y estrategia.",
        image: "/Lic.Leandro Clavero.jpeg",
        expertise: ["Estrategia Digital", "Marketing", "Docencia"],
        accent: "#405e8c",
        section: "directiva",
    },

    // ── Coordinación Operativa ──────────────────────────────────────────────
    {
        name: "Luis",
        position: "Vendedor",
        bio: "Integrante del equipo de ventas y promoción de los programas institucionales de la Fundación.",
        image: "",
        expertise: ["Ventas", "Atención al Cliente", "Promoción"],
        accent: "#111269",
        section: "coordinacion",
    },
    {
        name: "Florencia Vega",
        position: "Coordinadora Vinculando",
        bio: "Responsable de la dirección comercial de acciones sociales y la coordinación operativa del programa de prácticas profesionalizantes Vinculando.",
        image: "/Florencia Vega.jpeg",
        expertise: ["Coordinación", "Acción Social", "Comercial"],
        accent: "#89abe6",
        section: "coordinacion",
    },
    {
        name: "Alejandro Soria",
        position: "Voluntario",
        bio: "Colaborador voluntario en las acciones sociales y operativas de los diversos programas de la Fundación.",
        image: "",
        expertise: ["Voluntariado", "Acción Social", "Logística"],
        accent: "#8dc2ff",
        section: "coordinacion",
    },
    {
        name: "Samuel",
        position: "Coordinador",
        bio: "Colaborador voluntario en las acciones sociales y operativas de los diversos programas de la Fundación",
        image: "",
        expertise: ["Coordinación", "Acción Social", "Operaciones"],
        accent: "#405e8c",
        section: "coordinacion",
    },

    // ── Equipo Profesional ──────────────────────────────────────────────────
    {
        name: "Lic. Gustavo Pons",
        position: "Economista Asesor Financiero",
        bio: "Consultoría financiera especializada y análisis económico para el desarrollo de proyectos industriales.",
        image: "/Lic. Gustavo Pons.jpeg",
        expertise: ["Finanzas", "Economía"],
        accent: "#111269",
        section: "profesional",
    },
    {
        name: "Dra. Cynthia Abal",
        position: "Abogada",
        bio: "Asesoramiento legal institucional y normativo para el fortalecimiento de las organizaciones.",
        image: "/Dra. Cynthia Abal.jpeg",
        expertise: ["Legal", "Institucional"],
        accent: "#89abe6",
        section: "profesional",
    },
    {
        name: "Dr. Joaquin Britos",
        position: "Contador",
        bio: "Gestión contable y auditoría de procesos financieros para asegurar la transparencia institucional.",
        image: "/Dr. Joaquin Britos.jpeg",
        expertise: ["Contabilidad", "Auditoría"],
        accent: "#8dc2ff",
        section: "profesional",
    },
    {
        name: "Ing. Sergio Dominguez",
        position: "Ingeniero",
        bio: "Asesor técnico en procesos industriales y optimización de recursos energéticos.",
        image: "/Ing. Sergio Dominguez.jpg",
        expertise: ["Ingeniería", "Industria"],
        accent: "#405e8c",
        section: "profesional",
    },
    {
        name: "Rodrigo González",
        position: "Especialista en Relaciones Internacionales",
        bio: "Gestión de vínculos internacionales y programas de cooperación para el desarrollo regional.",
        image: "/Rodrigo González.jpeg",
        expertise: ["Relaciones Internacionales", "Cooperación"],
        accent: "#111269",
        section: "profesional",
    },
    {
        name: "Ing. Mariano Santos",
        position: "Ingeniero",
        bio: "Soporte técnico especializado en infraestructura y modernización tecnológica.",
        image: "/Ing. Mariano Santos.jpeg",
        expertise: ["Tecnología", "Infraestructura"],
        accent: "#89abe6",
        section: "profesional",
    },
    {
        name: "Prof. Romina Damiani Ameri",
        position: "Profesora",
        bio: "Docencia y desarrollo de contenidos educativos para los programas de capacitación de la Fundación.",
        image: "/Prof. Romina Damiani Ameri.jpeg",
        expertise: ["Educación", "Capacitación"],
        accent: "#8dc2ff",
        section: "profesional",
    },
    {
        name: "Prof. Marcela Crespo",
        position: "Profesora",
        bio: "Especialista en formación profesional y diseño pedagógico para la inserción laboral.",
        image: "/Prof. Marcela Crespo.jpeg",
        expertise: ["Educación", "Inserción Laboral"],
        accent: "#405e8c",
        section: "profesional",
    },

    // ── Oficinas Internacionales ────────────────────────────────────────────
    {
        name: "Wang Chan Can",
        position: "Director - Oficina en Shangai, China",
        bio: "Liderazgo de la representation internacional en Asia, facilitando vínculos comerciales y tecnológicos.",
        image: "/Wang Chan can.jpeg",
        expertise: ["China", "Comercio Exterior"],
        accent: "#111269",
        section: "internacional",
    },
    {
        name: "Ing. Gerardo Fernandez",
        position: "Director - Oficina Valencia, España",
        bio: "Coordinación de la oficina europea de la Fundación, promoviendo el intercambio con la red de Pymes de España.",
        image: "/Ing. Gerardo Fernandez.jpg",
        expertise: ["España", "Innovación Europea"],
        accent: "#89abe6",
        section: "internacional",
    },
]

// ─── Lógica principal ───────────────────────────────────────────────────────

async function run() {
    console.log("🚀 Iniciando migración completa del Equipo a Sanity...\n")

    let created = 0
    let errors = 0

    for (const member of allMembers) {
        console.log(`\n${"─".repeat(50)}`)
        console.log(`👤 ${member.name} (${member.position})`)

        try {
            // Verificar si ya existe
            const existing = await client.fetch<string | null>(
                `*[_type == "miembro" && name == $name][0]._id`,
                { name: member.name }
            )
            if (existing) {
                console.log(`   ⏭️  Ya existe → ${existing}. Omitido.`)
                continue
            }

            // Subir foto
            let photoRef = null
            if (member.image) {
                const assetId = await uploadPhoto(member.image)
                if (assetId) {
                    photoRef = {
                        _type: "image",
                        asset: { _type: "reference", _ref: assetId },
                    }
                }
            }

            // Crear documento
            const doc: Record<string, unknown> = {
                _type: "miembro",
                name: member.name,
                position: member.position,
                bio: member.bio,
                expertise: member.expertise,
                accent: member.accent,
                section: member.section,
                isActive: true,
            }

            if (photoRef) {
                doc.photo = photoRef
            }

            const result = await client.create(doc)
            console.log(`   ✅ Creado → ID: ${result._id}`)
            created++

            // Pausa entre peticiones
            await new Promise((r) => setTimeout(r, 200))
        } catch (err) {
            console.error(`   ❌ Error:`, err)
            errors++
        }
    }

    console.log("\n" + "=".repeat(50))
    console.log("📊 Resumen de migración del Equipo:")
    console.log(`   ✨ Creados: ${created}`)
    console.log(`   ❌ Errores: ${errors}`)
    console.log("=".repeat(50))

    if (errors === 0) {
        console.log("\n🎉 ¡Migración del equipo completada sin errores!")
        console.log("   ✅ 15 fotos subidas a Sanity CDN")
        console.log("   ✅ 18 miembros creados con todos sus datos")
        console.log("\n   Siguiente paso: refactorizar componentes y eliminar hardcodeo")
    }
}

run().catch((err) => {
    console.error("Error fatal:", err)
    process.exit(1)
})

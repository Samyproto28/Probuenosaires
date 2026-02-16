/**
 * Sanity Logo Migration Script
 * ==============================
 * Migrates all logos from local /public/ folder to Sanity.
 * Uploads each image file, creates logo documents with orderRank
 * for drag-and-drop ordering, preserving the current display order.
 *
 * Usage: node scripts/migrate-logos.mjs YOUR_SANITY_TOKEN
 */

import { createClient } from "next-sanity"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = path.resolve(__dirname, "..")
const PUBLIC_DIR = path.resolve(PROJECT_ROOT, "public")

const token = process.argv[2]
if (!token) {
    console.error("❌ Falta el token. Uso: node scripts/migrate-logos.mjs <SANITY_TOKEN>")
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
// LOGO DATA (same order as displayed on site)
// ==========================================

const redLogos = [
    { name: "RACI", file: "Redes/raci-logo.png" },
    { name: "FOCAVA", file: "Redes/FOCAVA-400x400.gif" },
    { name: "CEPBA", file: "Redes/WhatsApp-Image-2023-07-27-at-09.11.49-768x220.jpeg" },
    { name: "VINTECAR 4.0", file: "Redes/Vintecar-4.0.png" },
    { name: "Círculo de Periodistas", file: "Redes/Circulo-de-Periodistas-480x480.jpg" },
]

const alianzaLogos = [
    { name: "AMIA", file: "Alianzas/Servicio-de-Empleo-AMIA-fondo-transparente.png" },
    { name: "ENCADENAR", file: "Alianzas/WhatsApp-Image-2024-04-22-at-11.04.05-980x980.jpeg" },
    { name: "RUBIO BRITOS", file: "Alianzas/logobritos-300x68.png" },
    { name: "ABIZ", file: "Alianzas/logo-ABS.png" },
    { name: "RE92.5", file: "Alianzas/logo-principal-980x564.png" },
    { name: "Impactos Ambientales", file: "Alianzas/logo-Basura-CERO.jpg" },
    { name: "Grupo Founders", file: "Alianzas/1517269487024.jpg" },
    { name: "1650294436848", file: "Alianzas/1650294436848.jpg" },
    { name: "Dos Vagones", file: "Alianzas/2-480x480.png" },
    { name: "WEG", file: "Alianzas/2560px-WEG_Equipamentos_Eletricos.svg_-2048x1437.png" },
    { name: "Centro Comercial", file: "Alianzas/302240863_579055067311244_298514406941690006_n-980x980.jpg" },
    { name: "Conexión con Futuro", file: "Alianzas/315986445_100474029566665_2168239295716529853_n.jpg" },
    { name: "InvestBA", file: "Alianzas/326526035_1354568142047273_8984838584705020621_n.jpg" },
    { name: "Cámara Arg-Israeli", file: "Alianzas/Camara-arg-israeli.png" },
    { name: "Cambre", file: "Alianzas/Cambre-300x138.jpg" },
    { name: "Captura", file: "Alianzas/Captura-de-pantalla-2023-07-26-064017-768x761.jpg" },
    { name: "Dieger", file: "Alianzas/DIEGERlogo.png" },
    { name: "Escudo", file: "Alianzas/ESCUDO-238x300-1.jpg" },
    { name: "Fagua", file: "Alianzas/Fagua20anos.jpg" },
    { name: "Grupo Mayo", file: "Alianzas/Grupo-MAyo.png" },
    { name: "Ingesa", file: "Alianzas/Ingesa-logo-480x480.jpg" },
    { name: "Limpiolux", file: "Alianzas/Limpiolux-Logo-02-scaled.jpg" },
    { name: "Balcarce", file: "Alianzas/Logo-BC-jpg.jpg" },
    { name: "Kosc", file: "Alianzas/Logo-Kosc.png" },
    { name: "Quilmes", file: "Alianzas/Logo-Mun-Quilmes.png" },
    { name: "Ogus", file: "Alianzas/Logo-Ogus.webp" },
    { name: "UNQ", file: "Alianzas/Logo-UNQ-RGB.png" },
    { name: "Min. Capital Humano", file: "Alianzas/Logo_min_capital_humano.png" },
    { name: "Lopez Comendador", file: "Alianzas/LopezConmemador.png" },
    { name: "Selsa", file: "Alianzas/Mesa-de-trabajo-189selsa.webp" },
    { name: "Pampa Marketing", file: "Alianzas/Mp25M.jpg" },
    { name: "OEI", file: "Alianzas/OEI_marca_rgb_negativo_esmeralda.jpg" },
    { name: "WhatsApp 2018", file: "Alianzas/WhatsApp-Image-2018-768x180.jpg" },
    { name: "WhatsApp Oct 2023", file: "Alianzas/WhatsApp-Image-2023-10-03-at-09.43.47.jpeg" },
    { name: "LHR", file: "Alianzas/WhatsApp-Image-2024-01-20-at-10.09.15.jpeg" },
    { name: "Uniplast", file: "Alianzas/WhatsApp-Image-2024-01-20-at-10.09.17-1.jpeg" },
    { name: "WhatsApp Feb 2024", file: "Alianzas/WhatsApp-Image-2024-02-23-at-08.56.46.jpeg" },
    { name: "WhatsApp Apr 2024", file: "Alianzas/WhatsApp-Image-2024-04-24-at-16.35.02.jpeg" },
    { name: "Quintela", file: "Alianzas/WhatsApp-Image-2024-09-18-at-06.26.59-300x130.jpeg" },
    { name: "Acerías Berisso", file: "Alianzas/WhatsApp-Image-2024-10-17-at-05.32.16-300x110.jpeg" },
    { name: "EJ Solari", file: "Alianzas/WhatsApp-Image-2024-11-07-at-13.32.33.jpeg" },
    { name: "Postal+", file: "Alianzas/WhatsApp-Image-2024-12-09-at-11.07.32.jpeg" },
    { name: "TEM-FLOR", file: "Alianzas/WhatsApp-Image-2024-12-10-at-10.03.06.jpeg" },
    { name: "Romy", file: "Alianzas/WhatsApp-Image-2024-12-18-at-13.28.36.jpeg" },
    { name: "Sergio Cerullo", file: "Alianzas/WhatsApp-Image-2024-12-18-at-15.19.53-480x102.jpeg" },
    { name: "Bolsas Ecológicas", file: "Alianzas/WhatsApp-Image-2024-12-26-at-11.44.48.jpeg" },
    { name: "LH", file: "Alianzas/WhatsApp-Image-2024-12-26-at-11.46.12-980x980.jpeg" },
    { name: "JLF", file: "Alianzas/WhatsApp-Image-2025-01-20-at-11.27.33.jpeg" },
    { name: "Alimentos Santa Cruz", file: "Alianzas/WhatsApp-Image-2025-01-20-at-14.10.32.jpeg" },
    { name: "Bloque Grafico", file: "Alianzas/WhatsApp-Image-2025-01-21-at-10.16.02.jpeg" },
    { name: "EcoTec", file: "Alianzas/WhatsApp-Image-2025-01-23-at-16.37.10.jpeg" },
    { name: "Berisys", file: "Alianzas/WhatsApp-Image-2025-01-23-at-16.47.59-980x643.jpeg" },
    { name: "Pallet PRO", file: "Alianzas/WhatsApp-Image-2025-01-23-at-16.49.24-480x480.jpeg" },
    { name: "PLP", file: "Alianzas/WhatsApp-Image-2025-01-23-at-16.50.21.jpeg" },
    { name: "Walker", file: "Alianzas/WhatsApp-Image-2025-01-23-at-16.51.50.jpeg" },
    { name: "Autopartes Nitt", file: "Alianzas/WhatsApp-Image-2025-01-23-at-16.52.21.jpeg" },
    { name: "Graphipack", file: "Alianzas/WhatsApp-Image-2025-01-23-at-16.52.57.jpeg" },
    { name: "Starting Point", file: "Alianzas/WhatsApp-Image-2025-02-14-at-15.36.19.jpeg" },
    { name: "Realpaint", file: "Alianzas/WhatsApp-Image-2025-02-26-at-15.12.38.jpeg" },
    { name: "Fibran Sur", file: "Alianzas/WhatsApp-Image-2025-02-26-at-15.12.39.jpeg" },
    { name: "Banco Columbia", file: "Alianzas/WhatsApp-Image-2025-02-28-at-10.55.20-980x963.jpeg" },
    { name: "PL", file: "Alianzas/WhatsApp-Image-2025-04-09-at-15.10.05.jpeg" },
    { name: "Molinaro", file: "Alianzas/WhatsApp-Image-2025-05-27-at-16.44.30-1.jpeg" },
    { name: "Gestion Parque", file: "Alianzas/WhatsApp-Image-2025-05-30-at-15.49.59-980x821.jpeg" },
    { name: "Mante-Baires", file: "Alianzas/WhatsApp-Image-2025-05-30-at-15.50.00.jpeg" },
    { name: "Eco Friendly", file: "Alianzas/WhatsApp-Image-2025-07-10-at-08.55.40-980x980.jpeg" },
    { name: "PCCP", file: "Alianzas/WhatsApp-Image-2025-10-21-at-13.28.29-480x297.jpeg" },
    { name: "130 AMIA", file: "Alianzas/WhatsApp-Image-2025-12-19-at-13.09.29.jpeg" },
    { name: "Aliado", file: "Alianzas/YJTNFWEJHVALJLCNMZSUAZKHSA-980x490.png" },
    { name: "Center Box", file: "Alianzas/center-box-logo.jpg" },
    { name: "Descarga 1", file: "Alianzas/descarga-1.jpg" },
    { name: "Descarga 1b", file: "Alianzas/descarga-1.png" },
    { name: "Descarga 2", file: "Alianzas/descarga-2.jpg" },
    { name: "Images", file: "Alianzas/images.png" },
    { name: "Micro Control", file: "Alianzas/isologo-microcontrol-180x80-1.png" },
    { name: "Fundalat", file: "Alianzas/logo-Fundalat.png" },
    { name: "Asoleb", file: "Alianzas/logo-asoleb-colores-400x140-1.png" },
    { name: "Banco de Comercio", file: "Alianzas/logo-bco-de-comercio-480x133.png" },
    { name: "Work", file: "Alianzas/logo-work.jpg" },
    { name: "Aconcagua", file: "Alianzas/logoAconcagua-energia-e1666377870629-980x219.png" },
    { name: "FonoEmpresa", file: "Alianzas/logoFonoEmpresa.png" },
    { name: "M&S", file: "Alianzas/mys.png" },
    { name: "RDS", file: "Alianzas/rdsMontaje.jpg" },
    { name: "Sasson", file: "Alianzas/sason-comercial-980x551.jpg" },
    { name: "SICA", file: "Alianzas/sica.png" },
    { name: "Sinarplast", file: "Alianzas/sinarplast.png" },
    { name: "Sinergia", file: "Alianzas/sinergiaempresarialok_logo.jpg" },
]

// ==========================================
// HELPERS
// ==========================================

/**
 * Generate orderRank strings that maintain alphabetical order.
 * The orderable-document-list plugin uses LexoRank-style strings.
 * We generate simple sequential strings like "0|aaaaaa:", "0|aaaaab:", etc.
 */
function generateOrderRank(index) {
    // Generate a rank string based on position
    const base = "aaaaaa"
    const chars = base.split("")
    let remaining = index
    for (let i = chars.length - 1; i >= 0 && remaining > 0; i--) {
        const charCode = chars[i].charCodeAt(0) + remaining % 26
        chars[i] = String.fromCharCode(charCode)
        remaining = Math.floor(remaining / 26)
    }
    return `0|${chars.join("")}:`
}

/**
 * Get MIME type from filename
 */
function getMimeType(filename) {
    const ext = path.extname(filename).toLowerCase()
    const mimeMap = {
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".gif": "image/gif",
        ".webp": "image/webp",
        ".svg": "image/svg+xml",
    }
    return mimeMap[ext] || "image/jpeg"
}

/**
 * Upload a local file to Sanity and return the asset reference
 */
async function uploadImage(filePath, filename) {
    const fullPath = path.resolve(PUBLIC_DIR, filePath)

    if (!fs.existsSync(fullPath)) {
        console.warn(`   ⚠️  Archivo no encontrado: ${fullPath}`)
        return null
    }

    const buffer = fs.readFileSync(fullPath)
    const contentType = getMimeType(filename)

    const asset = await client.assets.upload("image", buffer, {
        filename,
        contentType,
    })

    return {
        _type: "image",
        asset: {
            _type: "reference",
            _ref: asset._id,
        },
    }
}

// ==========================================
// MIGRATION
// ==========================================

async function migrate() {
    console.log("🚀 Iniciando migración de logos a Sanity...")
    console.log(`   Proyecto: r2kwf8nd / Dataset: production`)
    console.log(`   Red logos: ${redLogos.length}`)
    console.log(`   Alianza logos: ${alianzaLogos.length}`)
    console.log(`   Total: ${redLogos.length + alianzaLogos.length}\n`)

    // Check for existing logos
    const existingCount = await client.fetch('count(*[_type == "logo"])')
    if (existingCount > 0) {
        console.log(`   ⚠️  Ya hay ${existingCount} logos en Sanity. Borrando para re-migrar...`)
        const existing = await client.fetch('*[_type == "logo"]{ _id }')
        for (const doc of existing) {
            await client.delete(doc._id)
        }
        console.log(`   🧹 Borrados ${existing.length} logos existentes.\n`)
    }

    // Migrate RED logos
    console.log("🔴 Migrando logos de Red (fila fija)...\n")
    let count = 0
    for (let i = 0; i < redLogos.length; i++) {
        const logo = redLogos[i]
        try {
            const imageRef = await uploadImage(logo.file, path.basename(logo.file))
            if (!imageRef) continue

            await client.create({
                _type: "logo",
                name: logo.name,
                image: imageRef,
                tier: "red",
                orderRank: generateOrderRank(i),
            })
            count++
            console.log(`   ✅ [${count}] ${logo.name}`)
        } catch (err) {
            console.error(`   ❌ Error: ${logo.name} — ${err.message}`)
        }
    }

    // Migrate ALIANZA logos
    console.log(`\n🤝 Migrando logos de Alianza (marquee)...\n`)
    for (let i = 0; i < alianzaLogos.length; i++) {
        const logo = alianzaLogos[i]
        try {
            const imageRef = await uploadImage(logo.file, path.basename(logo.file))
            if (!imageRef) continue

            await client.create({
                _type: "logo",
                name: logo.name,
                image: imageRef,
                tier: "alianza",
                orderRank: generateOrderRank(i),
            })
            count++
            console.log(`   ✅ [${count}] ${logo.name}`)
        } catch (err) {
            console.error(`   ❌ Error: ${logo.name} — ${err.message}`)
        }
    }

    console.log(`\n✨ ¡Migración de logos completada! ${count} logos subidos.`)
    console.log("   Recargá http://localhost:3000 para ver los cambios.")
    console.log("   Entrá a http://localhost:3000/studio → Logos para reordenarlos con drag & drop.")
}

migrate().catch(console.error)

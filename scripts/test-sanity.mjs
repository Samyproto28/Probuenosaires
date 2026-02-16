import { createClient } from "next-sanity"

const client = createClient({
    projectId: "r2kwf8nd",
    dataset: "production",
    apiVersion: "2025-02-15",
    useCdn: true,
})

// Test: fetch all noticias
const noticias = await client.fetch('*[_type == "noticia"]')
console.log("Noticias count:", noticias.length)
console.log("Noticias:", JSON.stringify(noticias, null, 2))

// Test: fetch all logos
const logos = await client.fetch('*[_type == "logo"]')
console.log("Logos count:", logos.length)

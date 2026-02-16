import { createClient } from "next-sanity"

const c = createClient({
    projectId: "r2kwf8nd",
    dataset: "production",
    apiVersion: "2025-02-15",
    useCdn: false,
})

// Fetch the raw body of the article with the image
const body = await c.fetch(
    `*[_type == "noticia" && slug.current == "convenio-economia-verde"][0].body`
)

// Show every block, especially images
for (const block of body) {
    if (block._type === "image") {
        console.log("=== IMAGE BLOCK ===")
        console.log(JSON.stringify(block, null, 2))
    } else {
        console.log(`[${block._type}] style=${block.style} -> ${block.children?.[0]?.text?.substring(0, 50)}...`)
    }
}

// Also fetch with the projection (like the query does)
const fullArticle = await c.fetch(
    `*[_type == "noticia" && slug.current == "convenio-economia-verde"][0]{
    body[] {
      ...,
      _type == "image" => {
        ...,
        "url": asset->url,
        "alt": alt,
        "caption": caption
      }
    }
  }`
)

console.log("\n=== PROJECTED IMAGE BLOCKS ===")
for (const block of fullArticle.body) {
    if (block._type === "image") {
        console.log(JSON.stringify(block, null, 2))
    }
}

import { groq } from "next-sanity"

// --- LOGOS ---

/** Get all logos in "red" tier, ordered by drag-and-drop rank */
export const redLogosQuery = groq`
  *[_type == "logo" && tier == "red"] | order(orderRank) {
    _id,
    name,
    "src": image.asset->url,
    tier,
    orderRank
  }
`

/** Get all logos in "alianza" tier, ordered by drag-and-drop rank */
export const alianzaLogosQuery = groq`
  *[_type == "logo" && tier == "alianza"] | order(orderRank) {
    _id,
    name,
    "src": image.asset->url,
    tier,
    orderRank
  }
`

// --- NOTICIAS ---

/** Get the latest N news for the homepage cards */
export const latestNewsQuery = groq`
  *[_type == "noticia"] | order(publishedAt desc)[0...$limit] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    category,
    excerpt,
    "mainImageUrl": mainImage.asset->url,
    author,
    readTime
  }
`

/** Get all news for the /novedades page */
export const allNewsQuery = groq`
  *[_type == "noticia"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    category,
    excerpt,
    "mainImageUrl": mainImage.asset->url,
    author,
    readTime
  }
`

/** Get a single news article by slug */
export const noticiaBySlugQuery = groq`
  *[_type == "noticia" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    category,
    excerpt,
    summary,
    "mainImageUrl": mainImage.asset->url,
    author,
    readTime,
    body[] {
      ...,
      _type == "image" => {
        ...,
        "url": asset->url,
        "alt": alt,
        "caption": caption
      }
    }
  }
`

/** Get all slugs for generateStaticParams */
export const allNoticiaSlugsQuery = groq`
  *[_type == "noticia" && defined(slug.current)] {
    "slug": slug.current
  }
`

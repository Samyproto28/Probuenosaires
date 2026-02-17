import { revalidatePath } from "next/cache"
import { type NextRequest, NextResponse } from "next/server"

/**
 * On-demand revalidation webhook for Sanity.
 *
 * When you publish/update content in Sanity Studio, Sanity sends a POST
 * request to this endpoint. We then tell Next.js to purge its cache for
 * the affected pages so they re-render with the latest data.
 *
 * Setup in Sanity:
 *   1. Go to https://www.sanity.io/manage → your project → API → Webhooks
 *   2. Create a new webhook:
 *      - URL: https://probuenosaires.vercel.app/api/revalidate
 *      - Trigger on: Create, Update, Delete
 *      - Filter: _type == "noticia" || _type == "logo"
 *      - Secret: (same value as SANITY_REVALIDATE_SECRET env var)
 *   3. Add SANITY_REVALIDATE_SECRET to Vercel Environment Variables
 */

export async function POST(req: NextRequest) {
    try {
        // Verify the webhook secret (optional but recommended)
        const secret = req.nextUrl.searchParams.get("secret")
        const envSecret = process.env.SANITY_REVALIDATE_SECRET

        if (envSecret && secret !== envSecret) {
            return NextResponse.json({ message: "Invalid secret" }, { status: 401 })
        }

        // Parse the Sanity webhook payload
        const body = await req.json().catch(() => ({}))
        const type = body?._type

        // Revalidate the relevant pages based on content type
        if (type === "noticia") {
            // Revalidate the homepage (news section) and novedades pages
            revalidatePath("/", "page")
            revalidatePath("/novedades", "page")
            // If slug is available, also revalidate the specific article
            if (body?.slug?.current) {
                revalidatePath(`/novedades/${body.slug.current}`, "page")
            }
        } else if (type === "logo") {
            // Logos are shown on the homepage
            revalidatePath("/", "page")
        } else {
            // For any other type, revalidate everything
            revalidatePath("/", "layout")
        }

        return NextResponse.json({
            revalidated: true,
            now: Date.now(),
            type: type || "unknown",
        })
    } catch (err) {
        console.error("Revalidation error:", err)
        return NextResponse.json(
            { message: "Error revalidating", error: String(err) },
            { status: 500 }
        )
    }
}

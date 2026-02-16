"use client"

/**
 * Sanity Studio embedded route.
 * Accessible at /studio — not linked from any public page.
 * The [[...tool]] catch-all handles all Studio sub-routes internally.
 */

import { NextStudio } from "next-sanity/studio"
import config from "@/sanity.config"

export default function StudioPage() {
    return <NextStudio config={config} basePath="/studio" />
}

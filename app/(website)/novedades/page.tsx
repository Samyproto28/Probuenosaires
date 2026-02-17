
/** Re-fetch Sanity data every 30 seconds (ISR) */
export const revalidate = 30

import { NovedadesContent } from "@/components/novedades-content"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Novedades | Fundación Pro Buenos Aires",
    description: "Últimas noticias, eventos y actualizaciones de la Fundación Pro Buenos Aires sobre el desarrollo productivo y PyMEs.",
}

export default function NovedadesPage() {
    return (
        <main className="min-h-screen bg-white">

            <NovedadesContent />

        </main>
    )
}

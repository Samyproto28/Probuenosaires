import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
    title: "Sanity Studio | Fundación Pro Buenos Aires",
    description: "Panel de administración de contenido",
    robots: {
        index: false,
        follow: false,
    },
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    // Studio viewport needs to set maximum-scale to work properly on mobile
    maximumScale: 1,
}

export default function StudioLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div
            id="sanity-studio"
            style={{
                height: "100vh",
                width: "100vw",
                overflow: "hidden",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 9999,
            }}
        >
            {children}
        </div>
    )
}

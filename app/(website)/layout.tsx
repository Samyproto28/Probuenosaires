
import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LayoutClient } from "./layout-client"

export default function WebsiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <Header />
            <LayoutClient>{children}</LayoutClient>
            <Footer />
        </>
    )
}

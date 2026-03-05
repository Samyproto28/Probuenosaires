import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"


const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: {
    default: "Fundación Pro Buenos Aires | Desarrollo Sustentable de Argentina",
    template: "%s | Fundación Pro Buenos Aires",
  },
  description:
    "Organización sin fines de lucro fundada en 1998. Promovemos el desarrollo sustentable de Argentina a través de capacitación gratuita, asistencia técnica y generación de empleo.",
  keywords: [
    "fundación",
    "organización sin fines de lucro",
    "desarrollo sustentable",
    "Argentina",
    "capacitación gratuita",
    "empleo",
    "PyMEs",
    "Pro Buenos Aires",
  ],
  authors: [{ name: "Fundación Pro Buenos Aires" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Fundación Pro Buenos Aires",
    title: "Fundación Pro Buenos Aires | Desarrollo Sustentable de Argentina",
    description:
      "Organización sin fines de lucro fundada en 1998. Capacitación gratuita, asistencia técnica y generación de empleo en Argentina.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`font-sans ${dmSans.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}

import { provinces } from "@/lib/data/argentina-regions"
import { Hero } from "@/components/hero"
import { ImpactStats } from "@/components/impact-stats"
import { Programs } from "@/components/programs"
import { DonationCTA } from "@/components/donation-cta"
import { Metadata } from "next"
import { notFound } from "next/navigation"

interface Props {
    params: { slug: string }
}

export async function generateStaticParams() {
    return provinces.map((p) => ({
        slug: p.slug,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const province = provinces.find((p) => p.slug === params.slug)
    if (!province) return {}

    return {
        title: `Impacto Social y Capacitación en ${province.name} | Fundación Probuenosaires`,
        description: `Impulsamos el desarrollo sustentable, la capacitación gratuita y el empleo en la provincia de ${province.name}. Conocé nuestros programas regionales.`,
    }
}

export default function RegionalImpactPage({ params }: Props) {
    const province = provinces.find((p) => p.slug === params.slug)

    if (!province) {
        notFound()
    }

    return (
        <main className="min-h-screen">
            {/* 
        Para el pSEO, inyectamos contextualmente el nombre de la provincia.
        Aunque los componentes son estáticos por ahora, la estructura de la página
        ya está optimizada para que Google la indexe por ubicación.
      */}
            <div className="bg-[#111269] pt-24 pb-12 text-center text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                        Fundación Probuenosaires en {province.name}
                    </h1>
                    <p className="text-xl opacity-80 max-w-2xl mx-auto">
                        Trabajando por el desarrollo sustentable y la inclusión laboral de los ciudadanos {province.demonym}s.
                    </p>
                </div>
            </div>

            <Hero />
            <ImpactStats />
            <Programs limit={3} />
            <DonationCTA />
        </main>
    )
}

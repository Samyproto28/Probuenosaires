"use client"

import { Globe } from "lucide-react"
import { MotionViewport } from "@/components/ui/motion-viewport"
import Image from "next/image"

export function SDGSection() {
    return (
        <MotionViewport className="py-24 bg-white" initial={{ opacity: 0, y: 30 }} delay={0.6}>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#8dc2ff]/10 text-[#111269] text-sm font-semibold tracking-wide mb-4">
                        <Globe className="w-4 h-4 inline-block mr-2" aria-hidden="true" />
                        AGENDA 2030
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111269] mb-6"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        Objetivos de Desarrollo Sostenible
                    </h2>
                    <p className="text-xl text-[#111269]/60 max-w-3xl mx-auto leading-relaxed font-light">
                        Nuestros programas contribuyen directamente al cumplimiento de las metas globales de las Naciones Unidas.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto px-4">
                    <div className="relative aspect-[16/9] w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#e2e8f0] group">
                        <Image
                            src="/ods-goals.png"
                            alt="Objetivos de Desarrollo Sostenible"
                            fill
                            className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </MotionViewport>
    )
}

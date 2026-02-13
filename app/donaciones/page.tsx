"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, ShieldCheck, Copy, Check, ExternalLink, Sparkles, Building2 } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function DonacionesPage() {
    const [copiedField, setCopiedField] = useState<string | null>(null)

    const copyToClipboard = (text: string, field: string) => {
        navigator.clipboard.writeText(text)
        setCopiedField(field)
        setTimeout(() => setCopiedField(null), 2000)
    }

    return (
        <main className="min-h-screen bg-[#fafafa] selection:bg-[#8dc2ff]/30">
            <Header />

            {/* Hero Section - Compact & Elegant */}
            <section className="relative pt-32 pb-20 bg-[#111269] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0b0c2a] via-[#111269] to-[#1a2754]" />
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#8dc2ff] text-xs font-semibold tracking-wider mb-6"
                    >
                        <Heart className="w-3 h-3" />
                        <span>TU APOYO TRANSFORMA</span>
                    </motion.div>

                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                        Donaciones
                    </h1>
                    <p className="text-white/60 text-lg max-w-xl mx-auto font-light leading-relaxed">
                        Elegí el método que te sea más cómodo para colaborar con nuestros programas de desarrollo sustentable.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 lg:px-8 -mt-12 mb-24 relative z-20">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8">

                    {/* Method 1: Mercado Pago (Primary Action) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-black/[0.03] border border-slate-200 flex flex-col items-center text-center group"
                    >
                        <div className="w-14 h-14 bg-[#8dc2ff]/10 rounded-2xl flex items-center justify-center text-[#8dc2ff] mb-6 group-hover:scale-110 transition-transform">
                            <ExternalLink className="w-7 h-7" />
                        </div>
                        <h2 className="text-2xl font-bold text-[#111269] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                            Mercado Pago
                        </h2>
                        <p className="text-slate-500 mb-8 text-sm leading-relaxed">
                            Colaborá de forma inmediata con tarjeta o dinero en cuenta a través de nuestro link oficial.
                        </p>
                        <Button
                            size="lg"
                            className="w-full bg-gradient-to-r from-[#8dc2ff] to-[#89abe6] text-[#111269] hover:brightness-105 h-14 rounded-2xl font-bold shadow-lg shadow-[#8dc2ff]/20 transition-all active:scale-95"
                            asChild
                        >
                            <a href="https://link.mercadopago.com.ar/probaires" target="_blank" rel="noopener noreferrer">
                                <Heart className="mr-2 h-5 w-5 fill-[#111269]" />
                                Donar Ahora
                            </a>
                        </Button>
                    </motion.div>

                    {/* Method 2: Bank Transfer (Information) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#111269] rounded-3xl p-8 lg:p-10 text-white shadow-xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#8dc2ff] opacity-5 blur-3xl rounded-full" />

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#8dc2ff]">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                                Transferencia Bancaria
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {[
                                { label: "Alias", value: "Fundacion.Pro.BsAs" },
                                { label: "CUIT", value: "30-69894716-7" }
                            ].map((item) => (
                                <div key={item.label} className="bg-white/5 rounded-xl p-4 border border-white/5 group/row hover:border-white/10 transition-colors">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">{item.label}</span>
                                        <button
                                            onClick={() => copyToClipboard(item.value, item.label)}
                                            className="text-white/30 hover:text-[#8dc2ff] transition-colors"
                                        >
                                            {copiedField === item.label ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                        </button>
                                    </div>
                                    <div className="font-mono text-sm tracking-tight truncate text-white/90">
                                        {item.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Support Section - Restored and adapted */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl relative z-10">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#111269] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                        ¿Necesitás asesoramiento?
                    </h2>
                    <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                        Nuestro equipo está en línea para ayudarte con cualquier consulta sobre donaciones o para gestionar certificados específicos.
                    </p>
                    <div className="flex justify-center">
                        <Button
                            className="bg-[#111269] text-white rounded-2xl h-16 px-12 text-lg hover:scale-[1.05] transition-all shadow-xl shadow-[#111269]/10 w-full sm:w-auto font-semibold"
                            asChild
                        >
                            <a href="https://wa.me/5491141899250" target="_blank" rel="noopener noreferrer">
                                <Sparkles className="mr-2 h-5 w-5 text-[#8dc2ff]" />
                                Contactar por WhatsApp
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

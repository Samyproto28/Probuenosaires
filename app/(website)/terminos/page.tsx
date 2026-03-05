import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Términos y Condiciones",
    description:
        "Términos y condiciones de uso del sitio web de la Fundación Pro Buenos Aires.",
}

export default function TerminosPage() {
    return (
        <main className="min-h-screen bg-[#fafafa] selection:bg-[#8dc2ff]/30">
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-[#111269] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0b0c2a] via-[#111269] to-[#1a2754]" />
                    <div
                        className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        }}
                    />
                </div>
                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                    <h1
                        className="text-4xl lg:text-6xl font-bold text-white mb-6"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        Términos y Condiciones
                    </h1>
                    <p className="text-white/60 text-lg max-w-xl mx-auto font-light leading-relaxed">
                        Condiciones de uso del sitio web de la Fundación Pro Buenos Aires.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
                    <div className="prose prose-lg prose-slate max-w-none">
                        {/* Aceptación */}
                        <h2
                            className="text-2xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            1. Aceptación de los Términos
                        </h2>
                        <p className="text-[#111269]/70 leading-relaxed mb-8">
                            Al acceder y utilizar el sitio web de la Fundación Pro Buenos Aires, el usuario
                            acepta los presentes términos y condiciones en su totalidad. Si no está de acuerdo
                            con alguno de los términos aquí expuestos, le solicitamos que se abstenga de utilizar
                            el sitio.
                        </p>

                        {/* Descripción */}
                        <h2
                            className="text-2xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            2. Descripción del Sitio
                        </h2>
                        <p className="text-[#111269]/70 leading-relaxed mb-8">
                            Este es el sitio web oficial de la{" "}
                            <strong className="text-[#111269]">Fundación Pro Buenos Aires</strong>, una
                            organización sin fines de lucro inscripta bajo CUIT 30-69894716-7 con Personería
                            Jurídica otorgada por la Inspección General de Justicia (IGJ 1649721). El sitio tiene
                            como propósito informar sobre las actividades, programas y servicios de la fundación,
                            así como facilitar la comunicación y la recepción de donaciones.
                        </p>

                        {/* Uso permitido */}
                        <h2
                            className="text-2xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            3. Uso Permitido
                        </h2>
                        <p className="text-[#111269]/70 leading-relaxed mb-4">
                            El sitio es de carácter informativo y está destinado a los siguientes usos:
                        </p>
                        <ul className="space-y-3 mb-8 text-[#111269]/70">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8dc2ff] flex-shrink-0 mt-2.5" />
                                <span>Conocer los programas y servicios de la fundación.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8dc2ff] flex-shrink-0 mt-2.5" />
                                <span>Realizar donaciones a través de los canales habilitados.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8dc2ff] flex-shrink-0 mt-2.5" />
                                <span>Contactar a la fundación para consultas o participación.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8dc2ff] flex-shrink-0 mt-2.5" />
                                <span>Consultar novedades y publicaciones institucionales.</span>
                            </li>
                        </ul>

                        {/* Propiedad intelectual */}
                        <h2
                            className="text-2xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            4. Propiedad Intelectual
                        </h2>
                        <p className="text-[#111269]/70 leading-relaxed mb-8">
                            Todos los contenidos del sitio web, incluyendo pero no limitado a textos, imágenes,
                            logotipos, diseños gráficos y material audiovisual, son propiedad de la Fundación Pro
                            Buenos Aires o se utilizan con la debida autorización. Queda prohibida su
                            reproducción, distribución o modificación sin autorización previa y por escrito de la
                            fundación.
                        </p>

                        {/* Donaciones */}
                        <h2
                            className="text-2xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            5. Donaciones
                        </h2>
                        <p className="text-[#111269]/70 leading-relaxed mb-4">
                            Las donaciones realizadas a través de este sitio se procesan mediante los siguientes
                            canales:
                        </p>
                        <ul className="space-y-3 mb-4 text-[#111269]/70">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8dc2ff] flex-shrink-0 mt-2.5" />
                                <span>
                                    <strong className="text-[#111269]">Mercado Pago:</strong> a través de nuestro
                                    link oficial de pagos.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8dc2ff] flex-shrink-0 mt-2.5" />
                                <span>
                                    <strong className="text-[#111269]">Transferencia bancaria:</strong> mediante
                                    alias o CBU institucional.
                                </span>
                            </li>
                        </ul>
                        <p className="text-[#111269]/70 leading-relaxed mb-8">
                            Las donaciones son voluntarias y no reembolsables. Las contribuciones realizadas a la
                            Fundación Pro Buenos Aires son{" "}
                            <strong className="text-[#111269]">
                                deducibles del Impuesto a las Ganancias
                            </strong>{" "}
                            según lo establecido en el Artículo 81 de la Ley 20.628.
                        </p>

                        {/* Enlaces a terceros */}
                        <h2
                            className="text-2xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            6. Enlaces a Sitios de Terceros
                        </h2>
                        <p className="text-[#111269]/70 leading-relaxed mb-8">
                            Este sitio puede contener enlaces a sitios web de terceros, como Mercado Pago y
                            WhatsApp, entre otros. La Fundación Pro Buenos Aires no se responsabiliza por el
                            contenido, las políticas de privacidad ni las prácticas de dichos sitios. El acceso a
                            estos enlaces es bajo la exclusiva responsabilidad del usuario.
                        </p>

                        {/* Limitación */}
                        <h2
                            className="text-2xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            7. Limitación de Responsabilidad
                        </h2>
                        <p className="text-[#111269]/70 leading-relaxed mb-8">
                            La Fundación Pro Buenos Aires no garantiza la disponibilidad ininterrumpida del sitio
                            web ni la ausencia de errores técnicos. El uso del sitio es bajo la responsabilidad
                            del usuario. La fundación no será responsable por daños directos o indirectos que
                            pudieran derivarse del uso o la imposibilidad de uso del sitio.
                        </p>

                        {/* Legislación */}
                        <h2
                            className="text-2xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            8. Legislación Aplicable y Jurisdicción
                        </h2>
                        <p className="text-[#111269]/70 leading-relaxed mb-8">
                            Los presentes términos y condiciones se rigen por las leyes de la República
                            Argentina. Para cualquier controversia que pudiera surgir en relación con el uso del
                            sitio, las partes se someten a la jurisdicción de los{" "}
                            <strong className="text-[#111269]">
                                Tribunales Ordinarios de la Ciudad Autónoma de Buenos Aires
                            </strong>
                            , renunciando a cualquier otro fuero que pudiera corresponderles.
                        </p>

                        {/* Contacto */}
                        <h2
                            className="text-2xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            9. Contacto
                        </h2>
                        <p className="text-[#111269]/70 leading-relaxed mb-8">
                            Para consultas relacionadas con estos términos y condiciones, podés comunicarte con
                            nosotros a través de:{" "}
                            <a
                                href="mailto:info@probuenosaires.org"
                                className="text-[#8dc2ff] hover:underline"
                            >
                                info@probuenosaires.org
                            </a>
                        </p>

                        {/* Fecha */}
                        <div className="mt-12 pt-8 border-t border-slate-200">
                            <p className="text-sm text-[#111269]/40">
                                <strong>Última actualización:</strong> 27 de Febrero de 2026
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

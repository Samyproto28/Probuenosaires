import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Política de Privacidad",
    description:
        "Política de privacidad y tratamiento de datos personales de la Fundación Pro Buenos Aires.",
}

export default function PoliticaDePrivacidadPage() {
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
                        Política de Privacidad
                    </h1>
                    <p className="text-white/60 text-lg max-w-xl mx-auto font-light leading-relaxed">
                        Cómo recopilamos, usamos y protegemos tus datos personales.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
                    <div className="prose prose-lg prose-slate max-w-none">
                        {/* Responsable */}
                        <h2
                            className="text-2xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            1. Responsable del Tratamiento de Datos
                        </h2>
                        <p className="text-[#111269]/70 leading-relaxed mb-8">
                            <strong className="text-[#111269]">Fundación Pro Buenos Aires</strong>
                            <br />
                            CUIT: 30-69894716-7
                            <br />
                            Personería Jurídica otorgada por la IGJ (1649721)
                            <br />
                            Domicilio: Piedras 113 piso 5 of 1, Ciudad Autónoma de Buenos Aires, Argentina
                            <br />
                            Email de contacto:{" "}
                            <a
                                href="mailto:info@probuenosaires.org"
                                className="text-[#8dc2ff] hover:underline"
                            >
                                info@probuenosaires.org
                            </a>
                        </p>

                        {/* Datos recopilados */}
                        <h2
                            className="text-2xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            2. Datos que Recopilamos
                        </h2>
                        <p className="text-[#111269]/70 leading-relaxed mb-4">
                            Recopilamos los siguientes datos personales a través de nuestro sitio web:
                        </p>
                        <ul className="space-y-3 mb-8 text-[#111269]/70">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8dc2ff] flex-shrink-0 mt-2.5" />
                                <span>
                                    <strong className="text-[#111269]">Contacto directo:</strong> los datos que
                                    nos compartas voluntariamente al comunicarte por email o WhatsApp.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8dc2ff] flex-shrink-0 mt-2.5" />
                                <span>
                                    <strong className="text-[#111269]">Newsletter:</strong> dirección de correo
                                    electrónico.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8dc2ff] flex-shrink-0 mt-2.5" />
                                <span>
                                    <strong className="text-[#111269]">Datos de navegación:</strong> información
                                    anónima de uso del sitio recopilada a través de Vercel Analytics (sin cookies).
                                </span>
                            </li>
                        </ul>

                        {/* Finalidad */}
                        <h2
                            className="text-2xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            3. Finalidad del Tratamiento
                        </h2>
                        <p className="text-[#111269]/70 leading-relaxed mb-4">
                            Los datos recopilados se utilizan exclusivamente para:
                        </p>
                        <ul className="space-y-3 mb-8 text-[#111269]/70">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8dc2ff] flex-shrink-0 mt-2.5" />
                                <span>Responder consultas realizadas a través del formulario de contacto.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8dc2ff] flex-shrink-0 mt-2.5" />
                                <span>Enviar novedades y noticias a los suscriptores del newsletter.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8dc2ff] flex-shrink-0 mt-2.5" />
                                <span>Mejorar la experiencia de navegación y el contenido del sitio web.</span>
                            </li>
                        </ul>

                        {/* Base legal */}
                        <h2
                            className="text-2xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            4. Base Legal
                        </h2>
                        <p className="text-[#111269]/70 leading-relaxed mb-8">
                            El tratamiento de datos personales se realiza sobre la base del{" "}
                            <strong className="text-[#111269]">consentimiento del usuario</strong>, otorgado al
                            completar y enviar los formularios del sitio. El tratamiento se rige por la{" "}
                            <strong className="text-[#111269]">
                                Ley 25.326 de Protección de Datos Personales
                            </strong>{" "}
                            de la República Argentina y sus normas reglamentarias.
                        </p>

                        {/* Compartir datos */}
                        <h2
                            className="text-2xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            5. Compartición de Datos
                        </h2>
                        <p className="text-[#111269]/70 leading-relaxed mb-4">
                            No compartimos datos personales con terceros con fines comerciales. Los datos pueden
                            ser procesados por los siguientes proveedores de servicios técnicos, estrictamente
                            necesarios para el funcionamiento del sitio:
                        </p>
                        <ul className="space-y-3 mb-8 text-[#111269]/70">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8dc2ff] flex-shrink-0 mt-2.5" />
                                <span>
                                    <strong className="text-[#111269]">Vercel:</strong> proveedor de hosting y
                                    analytics del sitio web.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8dc2ff] flex-shrink-0 mt-2.5" />
                                <span>
                                    <strong className="text-[#111269]">Mercado Pago:</strong> procesamiento de
                                    donaciones en línea.
                                </span>
                            </li>
                        </ul>

                        {/* Derechos */}
                        <h2
                            className="text-2xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            6. Derechos del Usuario
                        </h2>
                        <p className="text-[#111269]/70 leading-relaxed mb-4">
                            Como titular de tus datos personales, tenés derecho a:
                        </p>
                        <ul className="space-y-3 mb-4 text-[#111269]/70">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8dc2ff] flex-shrink-0 mt-2.5" />
                                <span>
                                    <strong className="text-[#111269]">Acceso:</strong> solicitar información sobre
                                    los datos que tenemos almacenados.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8dc2ff] flex-shrink-0 mt-2.5" />
                                <span>
                                    <strong className="text-[#111269]">Rectificación:</strong> solicitar la
                                    corrección de datos inexactos.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8dc2ff] flex-shrink-0 mt-2.5" />
                                <span>
                                    <strong className="text-[#111269]">Supresión:</strong> solicitar la eliminación
                                    de tus datos personales.
                                </span>
                            </li>
                        </ul>
                        <p className="text-[#111269]/70 leading-relaxed mb-8">
                            Para ejercer cualquiera de estos derechos, escribinos a{" "}
                            <a
                                href="mailto:info@probuenosaires.org"
                                className="text-[#8dc2ff] hover:underline"
                            >
                                info@probuenosaires.org
                            </a>
                            .
                        </p>

                        {/* Cookies y Analytics */}
                        <h2
                            className="text-2xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            7. Cookies y Analytics
                        </h2>
                        <p className="text-[#111269]/70 leading-relaxed mb-8">
                            Nuestro sitio utiliza{" "}
                            <strong className="text-[#111269]">Vercel Analytics</strong>, un servicio de
                            analítica web que{" "}
                            <strong className="text-[#111269]">no utiliza cookies</strong> y recopila datos de
                            navegación de forma anónima. No se almacena información que permita la
                            identificación personal de los visitantes a través de esta herramienta.
                        </p>

                        {/* Seguridad */}
                        <h2
                            className="text-2xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            8. Seguridad
                        </h2>
                        <p className="text-[#111269]/70 leading-relaxed mb-8">
                            Protegemos tus datos personales mediante conexión{" "}
                            <strong className="text-[#111269]">HTTPS</strong> (cifrado SSL/TLS) y aplicamos
                            prácticas de seguridad estándar de la industria. Nuestro hosting en Vercel cuenta con
                            certificaciones de seguridad y protección contra accesos no autorizados.
                        </p>

                        {/* Modificaciones */}
                        <h2
                            className="text-2xl font-bold text-[#111269] mb-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            9. Modificaciones a esta Política
                        </h2>
                        <p className="text-[#111269]/70 leading-relaxed mb-8">
                            La Fundación Pro Buenos Aires se reserva el derecho de modificar esta política de
                            privacidad en cualquier momento. Las modificaciones serán publicadas en esta misma
                            página con la fecha de actualización correspondiente. Recomendamos revisar esta
                            política periódicamente.
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

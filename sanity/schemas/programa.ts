import { defineField, defineType } from "sanity"
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list"

export default defineType({
    name: "programa",
    title: "Programa",
    type: "document",
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: "programa" }),
        defineField({
            name: "title",
            title: "Nombre del Programa",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "URL (se genera del nombre)",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "icon",
            title: "Ícono representativo",
            type: "string",
            options: {
                list: [
                    { title: "🤝 Handshake — Vinculando/Alianzas", value: "Handshake" },
                    { title: "🌐 Network — Encadenar/Redes", value: "Network" },
                    { title: "🌍 Globe — Comex/Internacional", value: "Globe" },
                    { title: "💙 HeartPulse — Salud/Bienestar", value: "HeartPulse" },
                    { title: "📻 Radio — Radio Empresaria", value: "Radio" },
                    { title: "💻 Cpu — Tecnología/Innovación", value: "Cpu" },
                    { title: "🎨 Palette — Cultura/Arte", value: "Palette" },
                    { title: "🚩 Flag — Visión de País", value: "Flag" },
                    { title: "📊 Layers — Gestión/Procesos", value: "Layers" },
                    { title: "🏭 Factory — Industria", value: "Factory" },
                    { title: "⭐ Star — Destacado", value: "Star" },
                    { title: "🎯 Target — Objetivos", value: "Target" },
                ],
                layout: "radio",
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Descripción (se muestra en la tarjeta)",
            type: "text",
            rows: 4,
            validation: (Rule) => Rule.required().max(500),
        }),
        defineField({
            name: "impact",
            title: "Valor de Impacto destacado",
            description: 'Número o palabra que se muestra grande. Ej: "200h", "Exportar", "4.0", "Cultura"',
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "impactLabel",
            title: "Descripción del Impacto",
            description: 'Texto pequeño debajo del valor. Ej: "prácticas profesionalizantes por alumno"',
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "mainImage",
            title: "Imagen principal (subí la foto acá)",
            description: "Si subís una imagen acá, reemplaza la imagen local de la migración.",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "localImage",
            title: "Imagen local (solo migración — no editar)",
            description: "Ruta de imagen en /public del servidor. Subí una imagen arriba para reemplazarla con una gestionada desde Sanity.",
            type: "string",
        }),
        defineField({
            name: "gradient",
            title: "Color de gradiente (si no hay imagen)",
            description: "Se usa como fondo de la tarjeta cuando no hay imagen.",
            type: "string",
            options: {
                list: [
                    { title: "⬛ Negro suave (fotos sobre fondo oscuro)", value: "from-black/40 to-black/10" },
                    { title: "🔵 Azul claro → Azul medio", value: "from-[#8dc2ff] to-[#89abe6]" },
                    { title: "🔷 Azul medio → Azul profundo", value: "from-[#405e8c] to-[#111269]" },
                    { title: "🔹 Azul medio → Azul suave", value: "from-[#405e8c] to-[#89abe6]" },
                    { title: "💠 Azul claro → Azul profundo", value: "from-[#8dc2ff] to-[#111269]" },
                    { title: "🌑 Azul profundo → Azul medio", value: "from-[#111269] to-[#405e8c]" },
                ],
                layout: "radio",
            },
            initialValue: "from-[#111269] to-[#405e8c]",
        }),
        defineField({
            name: "href",
            title: "URL del botón 'Conocer Más' (opcional)",
            description: 'Ej: /programas/encadenar — Si no tiene página propia, dejá vacío.',
            type: "string",
        }),
        defineField({
            name: "isActive",
            title: "¿Mostrar en el sitio?",
            description: "Destildá para ocultar el programa sin borrarlo.",
            type: "boolean",
            initialValue: true,
        }),
        // --- Campos del artículo completo (igual que Noticia) ---
        defineField({
            name: "publishedAt",
            title: "Fecha de actualización",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: "author",
            title: "Autor",
            type: "string",
            initialValue: "Fundación Pro Buenos Aires",
        }),
        defineField({
            name: "readTime",
            title: "Tiempo de lectura",
            type: "string",
            initialValue: "5 min lectura",
        }),
        defineField({
            name: "summary",
            title: "Resumen largo (se muestra al inicio del artículo)",
            description: "Introducción que aparece destacada debajo del título en la página del programa.",
            type: "text",
            rows: 4,
        }),
        defineField({
            name: "body",
            title: "Contenido del artículo",
            description: "Acá escribís todo el contenido del programa: qué es, objetivos, acciones, etc.",
            type: "array",
            of: [
                {
                    type: "block",
                    styles: [
                        { title: "Normal", value: "normal" },
                        { title: "H2", value: "h2" },
                        { title: "H3", value: "h3" },
                        { title: "H4", value: "h4" },
                        { title: "Cita", value: "blockquote" },
                    ],
                    marks: {
                        decorators: [
                            { title: "Negrita", value: "strong" },
                            { title: "Cursiva", value: "em" },
                            { title: "Subrayado", value: "underline" },
                        ],
                        annotations: [
                            {
                                title: "Link",
                                name: "link",
                                type: "object",
                                fields: [
                                    {
                                        title: "URL",
                                        name: "href",
                                        type: "url",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "image",
                    options: { hotspot: true },
                    fields: [
                        {
                            name: "caption",
                            type: "string",
                            title: "Pie de imagen",
                        },
                        {
                            name: "alt",
                            type: "string",
                            title: "Texto alternativo",
                        },
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: "title",
            media: "mainImage",
            isActive: "isActive",
            impact: "impact",
        },
        prepare({ title, media, isActive, impact }) {
            return {
                title,
                subtitle: `${isActive !== false ? "✅ Activo" : "❌ Oculto"} — Impacto: ${impact || "—"}`,
                media,
            }
        },
    },
})

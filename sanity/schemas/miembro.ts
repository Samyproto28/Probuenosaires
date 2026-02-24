import { defineField, defineType } from "sanity"
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list"

export default defineType({
    name: "miembro",
    title: "Miembro del Equipo",
    type: "document",
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: "miembro" }),
        defineField({
            name: "name",
            title: "Nombre completo",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "position",
            title: "Cargo",
            description: 'Ej: "Presidente", "Coordinadora Vinculando", "Ingeniero"',
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "bio",
            title: "Biografía breve",
            description: "Descripción corta del miembro (se muestra en la tarjeta).",
            type: "text",
            rows: 3,
            validation: (Rule) => Rule.required().max(500),
        }),
        defineField({
            name: "photo",
            title: "Foto del miembro",
            description: "Subí la foto del miembro acá. Si no tiene foto, se muestra un ícono genérico.",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "expertise",
            title: "Etiquetas de expertise",
            description: 'Áreas de especialización. Ej: "Finanzas", "Marketing", "Ingeniería"',
            type: "array",
            of: [{ type: "string" }],
            options: {
                layout: "tags",
            },
        }),
        defineField({
            name: "accent",
            title: "Color de acento",
            description: "Color de la línea decorativa debajo de la foto y del cargo.",
            type: "string",
            options: {
                list: [
                    { title: "🔵 Azul profundo", value: "#111269" },
                    { title: "🩵 Azul suave", value: "#89abe6" },
                    { title: "💠 Azul claro", value: "#8dc2ff" },
                    { title: "🔷 Azul medio", value: "#405e8c" },
                ],
                layout: "radio",
            },
            initialValue: "#111269",
        }),
        defineField({
            name: "section",
            title: "Sección del equipo",
            description: "¿A qué sección pertenece este miembro?",
            type: "string",
            options: {
                list: [
                    { title: "🏛️ Comisión Directiva", value: "directiva" },
                    { title: "⚙️ Coordinación Operativa", value: "coordinacion" },
                    { title: "👨‍💼 Equipo Profesional", value: "profesional" },
                    { title: "🌍 Oficinas Internacionales", value: "internacional" },
                ],
                layout: "radio",
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "isActive",
            title: "¿Mostrar en el sitio?",
            description: "Destildá para ocultar al miembro sin borrarlo.",
            type: "boolean",
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "position",
            media: "photo",
            isActive: "isActive",
            section: "section",
        },
        prepare({ title, subtitle, media, isActive, section }) {
            const sectionLabels: Record<string, string> = {
                directiva: "Directiva",
                coordinacion: "Coordinación",
                profesional: "Profesional",
                internacional: "Internacional",
            }
            return {
                title,
                subtitle: `${isActive !== false ? "✅" : "❌"} ${subtitle} — ${sectionLabels[section] || section}`,
                media,
            }
        },
    },
})

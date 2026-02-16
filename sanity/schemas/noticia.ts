import { defineField, defineType } from "sanity"

export default defineType({
    name: "noticia",
    title: "Noticia",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Título",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "URL (se genera del título)",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "publishedAt",
            title: "Fecha de publicación",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "category",
            title: "Categoría",
            type: "string",
            options: {
                list: [
                    { title: "Institucional", value: "Institucional" },
                    { title: "Novedades", value: "Novedades" },
                    { title: "Sustentabilidad", value: "Sustentabilidad" },
                    { title: "Alianzas", value: "Alianzas" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "excerpt",
            title: "Resumen corto (para la tarjeta)",
            type: "text",
            rows: 3,
            validation: (Rule) => Rule.required().max(300),
        }),
        defineField({
            name: "mainImage",
            title: "Imagen principal",
            type: "image",
            options: {
                hotspot: true,
            },
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
            type: "text",
            rows: 4,
        }),
        defineField({
            name: "body",
            title: "Contenido del artículo",
            type: "array",
            of: [
                {
                    type: "block",
                    styles: [
                        { title: "Normal", value: "normal" },
                        { title: "H2", value: "h2" },
                        { title: "H3", value: "h3" },
                        { title: "H4", value: "h4" },
                        { title: "Quote", value: "blockquote" },
                    ],
                    marks: {
                        decorators: [
                            { title: "Bold", value: "strong" },
                            { title: "Italic", value: "em" },
                            { title: "Underline", value: "underline" },
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
    orderings: [
        {
            title: "Fecha de publicación (más reciente)",
            name: "publishedAtDesc",
            by: [{ field: "publishedAt", direction: "desc" }],
        },
    ],
    preview: {
        select: {
            title: "title",
            media: "mainImage",
            category: "category",
            date: "publishedAt",
        },
        prepare({ title, media, category, date }) {
            const formattedDate = date
                ? new Date(date).toLocaleDateString("es-AR", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                })
                : "Sin fecha"
            return {
                title,
                subtitle: `${category || "Sin categoría"} — ${formattedDate}`,
                media,
            }
        },
    },
})

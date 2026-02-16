import { defineField, defineType } from "sanity"
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list"

export default defineType({
    name: "logo",
    title: "Logo / Patrocinador",
    type: "document",
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: "logo" }),
        defineField({
            name: "name",
            title: "Nombre de la empresa",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Logo (imagen)",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "tier",
            title: "Nivel / Categoría",
            type: "string",
            options: {
                list: [
                    { title: "Red (fila fija superior)", value: "red" },
                    { title: "Alianza (marquee inferior)", value: "alianza" },
                ],
                layout: "radio",
            },
            initialValue: "alianza",
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "name",
            media: "image",
            tier: "tier",
        },
        prepare({ title, media, tier }) {
            return {
                title,
                subtitle: tier === "red" ? "🔴 Red" : "🤝 Alianza",
                media,
            }
        },
    },
})

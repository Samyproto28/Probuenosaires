"use client"

import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./sanity/schemas"
import { apiVersion, dataset, projectId } from "./sanity/env"

export default defineConfig({
    name: "fundacion-pro-buenos-aires",
    title: "Fundación Pro Buenos Aires",

    projectId,
    dataset,

    plugins: [
        structureTool({
            structure: (S, context) => {
                return S.list()
                    .title("Contenido")
                    .items([
                        // Logos: "Integramos las siguientes redes"
                        orderableDocumentListDeskItem({
                            type: "logo",
                            id: "orderable-logo-red",
                            title: "Integramos las siguientes redes",
                            icon: () => "🌐",
                            filter: `tier == "red"`,
                            S,
                            context,
                        }),
                        // Logos: "Apoyan o acompañan nuestro proyecto"
                        orderableDocumentListDeskItem({
                            type: "logo",
                            id: "orderable-logo-alianza",
                            title: "Apoyan o acompañan nuestro proyecto",
                            icon: () => "🤝",
                            filter: `tier == "alianza"`,
                            S,
                            context,
                        }),
                        S.divider(),
                        // Noticias
                        S.listItem()
                            .title("Noticias")
                            .icon(() => "📰")
                            .child(
                                S.documentTypeList("noticia")
                                    .title("Noticias")
                                    .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
                            ),
                    ])
            },
        }),
        visionTool({ defaultApiVersion: apiVersion }),
    ],

    schema: {
        types: schemaTypes,
    },
})

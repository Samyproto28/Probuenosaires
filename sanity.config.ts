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
                        // Logos with drag-and-drop ordering
                        orderableDocumentListDeskItem({
                            type: "logo",
                            title: "Logos / Patrocinadores",
                            icon: () => "🖼️",
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

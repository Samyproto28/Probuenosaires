"use client"

import { PortableText, PortableTextComponents } from "@portabletext/react"
import Image from "next/image"

const components: PortableTextComponents = {
    block: {
        h2: ({ children }) => (
            <div className="mb-10 mt-16 first:mt-0">
                <h2
                    className="text-3xl lg:text-4xl font-bold text-[#111269] mb-6"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    {children}
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-[#8dc2ff] to-transparent rounded-full" />
            </div>
        ),
        h3: ({ children }) => (
            <h3
                className="text-2xl font-bold text-[#111269] mb-4 mt-10"
                style={{ fontFamily: "var(--font-playfair)" }}
            >
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-xl font-bold text-[#111269] mb-3 mt-8">
                {children}
            </h4>
        ),
        normal: ({ children }) => (
            <p className="text-lg text-[#111269]/70 leading-relaxed mb-6">
                {children}
            </p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="relative p-8 rounded-2xl border-l-[6px] border-[#8dc2ff] bg-[#f0f7ff] my-8">
                <div className="text-lg text-[#111269]/80 leading-relaxed italic font-medium">
                    {children}
                </div>
            </blockquote>
        ),
    },
    marks: {
        strong: ({ children }) => (
            <strong className="font-bold text-[#111269]">{children}</strong>
        ),
        em: ({ children }) => (
            <em className="italic">{children}</em>
        ),
        underline: ({ children }) => (
            <span className="underline decoration-[#8dc2ff] decoration-2 underline-offset-4">
                {children}
            </span>
        ),
        link: ({ value, children }) => {
            const target = (value?.href || "").startsWith("http") ? "_blank" : undefined
            return (
                <a
                    href={value?.href}
                    target={target}
                    rel={target === "_blank" ? "noopener noreferrer" : undefined}
                    className="text-[#111269] font-semibold underline decoration-[#8dc2ff] decoration-2 underline-offset-4 hover:text-[#8dc2ff] transition-colors"
                >
                    {children}
                </a>
            )
        },
    },
    types: {
        image: ({ value }) => {
            if (!value?.url) return null
            return (
                <figure className="my-10 rounded-2xl overflow-hidden shadow-lg">
                    <div className="relative w-full aspect-video">
                        <Image
                            src={value.url}
                            alt={value.alt || "Imagen del artículo"}
                            fill
                            sizes="(max-width: 768px) 100vw, 800px"
                            className="object-cover"
                        />
                    </div>
                    {value.caption && (
                        <figcaption className="bg-[#f8faff] px-6 py-4 text-sm text-[#111269]/60 italic border-t border-[#e2e8f0]">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            )
        },
    },
    list: {
        bullet: ({ children }) => (
            <ul className="space-y-3 my-6 pl-2">
                {children}
            </ul>
        ),
        number: ({ children }) => (
            <ol className="space-y-3 my-6 pl-2 list-decimal list-inside">
                {children}
            </ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => (
            <li className="flex items-start gap-3 text-lg text-[#111269]/70">
                <span className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-[#8dc2ff]" />
                <span className="leading-relaxed">{children}</span>
            </li>
        ),
        number: ({ children }) => (
            <li className="text-lg text-[#111269]/70 leading-relaxed">
                {children}
            </li>
        ),
    },
}

interface PortableTextRendererProps {
    value: any[]
}

export function PortableTextRenderer({ value }: PortableTextRendererProps) {
    return (
        <div className="portable-text-content">
            <PortableText value={value} components={components} />
        </div>
    )
}

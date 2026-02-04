"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, AlertCircle, Info, DollarSign, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

// ----------------------------------------------------------------------
// Section Wrapper
// ----------------------------------------------------------------------

interface ArticleSectionProps {
    id: string
    title?: string
    children: ReactNode
    className?: string
}

export function ArticleSection({ id, title, children, className }: ArticleSectionProps) {
    return (
        <section id={id} className={cn("scroll-mt-32 mb-20 last:mb-0", className)}>
            {title && (
                <div className="mb-10">
                    <h2
                        className="text-3xl lg:text-4xl font-bold text-[#111269] mb-6"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        {title}
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#8dc2ff] to-transparent rounded-full" />
                </div>
            )}
            {children}
        </section>
    )
}

// ----------------------------------------------------------------------
// Process Steps (Timeline)
// ----------------------------------------------------------------------

interface ProcessStep {
    title: string
    description: string
    number?: string | number
}

interface ProcessStepsProps {
    steps: ProcessStep[]
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
    return (
        <div className="relative space-y-0">
            {/* Vertical connecting line */}
            <div className="absolute left-[28px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#8dc2ff] via-[#8dc2ff]/30 to-transparent lg:left-[28px]" />

            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-20 py-6 group"
                >
                    {/* Circle Number */}
                    <div className="absolute left-0 top-6 w-14 h-14 rounded-full bg-white border-4 border-[#f0f7ff] flex items-center justify-center shadow-lg shadow-[#8dc2ff]/10 z-10 group-hover:scale-110 group-hover:border-[#8dc2ff] transition-all duration-300">
                        <span className="text-xl font-bold text-[#111269] font-heading">
                            {step.number || index + 1}
                        </span>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#e2e8f0] shadow-sm hover:shadow-xl hover:shadow-[#111269]/5 transition-all duration-300">
                        <h3 className="text-xl font-bold text-[#111269] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                            {step.title}
                        </h3>
                        <p className="text-[#111269]/70 leading-relaxed text-lg">
                            {step.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

// ----------------------------------------------------------------------
// Check List
// ----------------------------------------------------------------------

interface CheckListItem {
    label: ReactNode
}

interface CheckListProps {
    items: (string | ReactNode)[]
}

export function CheckList({ items }: CheckListProps) {
    return (
        <div className="grid gap-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#f8faff] border border-[#e2e8f0]/50 hover:border-[#8dc2ff]/30 transition-colors"
                >
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#8dc2ff]/10 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-[#8dc2ff]" />
                    </div>
                    <div className="text-lg text-[#111269]/80 leading-relaxed">
                        {item}
                    </div>
                </div>
            ))}
        </div>
    )
}

// ----------------------------------------------------------------------
// Info Box (Callout)
// ----------------------------------------------------------------------

interface InfoBoxProps {
    children: ReactNode
    type?: "info" | "warning" | "success" | "cost"
    title?: string
    highlight?: string
}

export function InfoBox({ children, type = "info", title, highlight }: InfoBoxProps) {
    const variants = {
        info: "bg-[#f0f7ff] border-[#8dc2ff] text-[#111269]",
        warning: "bg-amber-50 border-amber-400 text-amber-900",
        success: "bg-emerald-50 border-emerald-400 text-emerald-900",
        cost: "bg-[#111269]/5 border-[#111269] text-[#111269]",
    }

    const icons = {
        info: Info,
        warning: AlertCircle,
        success: CheckCircle2,
        cost: DollarSign,
    }

    const Icon = icons[type]

    return (
        <div className={cn("relative p-8 rounded-2xl border-l-[6px] overflow-hidden", variants[type])}>
            {/* Background Icon Watermark */}
            <Icon className="absolute -right-6 -bottom-6 w-32 h-32 opacity-[0.05]" />

            <div className="relative z-10">
                {title && (
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2 uppercase tracking-wide opacity-80">
                        <Icon className="w-5 h-5" />
                        {title}
                    </h4>
                )}

                <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {highlight && (
                        <div className="flex-shrink-0">
                            <span className="block text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                                {highlight}
                            </span>
                        </div>
                    )}
                    <div className="text-lg opacity-90 leading-relaxed font-medium">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

// ----------------------------------------------------------------------
// Content Card (Simple content wrapper)
// ----------------------------------------------------------------------

interface ContentCardProps {
    title?: string
    children: ReactNode
    className?: string
}

export function ContentCard({ title, children, className }: ContentCardProps) {
    return (
        <div className={cn("bg-white rounded-2xl p-8 border border-[#e2e8f0] shadow-sm", className)}>
            {title && (
                <h3 className="text-xl font-bold text-[#111269] mb-6 border-b border-[#e2e8f0] pb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                    {title}
                </h3>
            )}
            <div className="prose prose-lg prose-blue max-w-none text-[#111269]/70">
                {children}
            </div>
        </div>
    )
}

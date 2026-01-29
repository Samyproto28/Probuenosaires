"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface MotionViewportProps {
    children: React.ReactNode
    className?: string
    initial?: any
    whileInView?: any
    viewport?: any
    transition?: any
    delay?: number
}

export function MotionViewport({
    children,
    className,
    initial = { opacity: 0, y: 20 },
    whileInView = { opacity: 1, y: 0 },
    viewport = { once: true, margin: "-100px" },
    transition = { duration: 0.6 },
    delay = 0,
}: MotionViewportProps) {
    return (
        <motion.div
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            transition={{ ...transition, delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

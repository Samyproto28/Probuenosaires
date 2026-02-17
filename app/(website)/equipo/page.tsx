

import { EquipoContent } from "@/components/equipo-content"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Equipo | Fundación Pro Buenos Aires",
  description: "Conoce al equipo de profesionales que trabajan por el desarrollo sustentable de Argentina",
}

export default function EquipoPage() {
  return (
    <main className="min-h-screen bg-[#ffffff]">

      <EquipoContent />

    </main>
  )
}
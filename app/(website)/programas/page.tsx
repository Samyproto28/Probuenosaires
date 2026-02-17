
// Rebuild trigger
import { Programs } from "@/components/programs"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Programas | Fundación Pro Buenos Aires",
  description: "Iniciativas que transforman realidades y generan impacto sostenible en toda Argentina",
}

export default function ProgramasPage() {
  return (
    <main className="min-h-screen">

      <div className="pt-8">
        <Programs />
      </div>

    </main>
  )
}
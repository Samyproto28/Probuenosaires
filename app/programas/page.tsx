import { Header } from "@/components/header"
import { Programs } from "@/components/programs"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Programas | Fundación Pro Buenos Aires",
  description: "Iniciativas que transforman realidades y generan impacto sostenible en toda Argentina",
}

export default function ProgramasPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-8">
        <Programs />
      </div>
      <Footer />
    </main>
  )
}
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InstitucionalContent } from "@/components/institucional-content"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Institucional | Fundación Pro Buenos Aires",
  description: "Conoce nuestra historia, misión, visión y valores como organización sin fines de lucro",
}

export default function InstitucionalPage() {
  return (
    <main className="min-h-screen bg-[#ffffff]">
      <Header />
      <InstitucionalContent />
      <Footer />
    </main>
  )
}
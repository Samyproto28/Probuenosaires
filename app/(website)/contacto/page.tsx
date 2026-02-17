
import { Contact } from "@/components/contact"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto | Fundación Pro Buenos Aires",
  description: "Contactanos para colaborar, participar de nuestros programas o resolver tus consultas",
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen">

      <div className="pt-8">
        <Contact />
      </div>

    </main>
  )
}
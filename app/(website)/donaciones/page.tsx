import { Metadata } from "next"
import DonacionesContent from "@/components/donaciones-content"

export const metadata: Metadata = {
    title: "Donaciones",
    description:
        "Colaborá con la Fundación Pro Buenos Aires. Doná a través de Mercado Pago o transferencia bancaria. 100% deducible de impuestos.",
}

export default function DonacionesPage() {
    return <DonacionesContent />
}

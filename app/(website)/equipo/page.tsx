import { client } from "@/sanity/lib/client"
import { allMiembrosQuery } from "@/sanity/lib/queries"
import { EquipoContent, type MiembroItem } from "@/components/equipo-content"
import { Metadata } from "next"

export const revalidate = 30

export const metadata: Metadata = {
  title: "Equipo | Fundación Pro Buenos Aires",
  description: "Conoce al equipo de profesionales que trabajan por el desarrollo sustentable de Argentina",
}

// Fallback mínimo — solo actúa si Sanity está completamente caído
const fallbackMembers: MiembroItem[] = [
  {
    _id: "fallback-m1",
    name: "Facundo Galdós",
    position: "Presidente",
    bio: "Empresario pyme desde 1992, dirigente gremial.",
    photoUrl: null,
    expertise: ["Gestión Gremial", "PyMEs"],
    accent: "#111269",
    section: "directiva",
  },
]

export default async function EquipoPage() {
  let members: MiembroItem[] = fallbackMembers

  try {
    const sanityMembers = await client.fetch<MiembroItem[]>(allMiembrosQuery)
    if (sanityMembers && sanityMembers.length > 0) {
      members = sanityMembers
    }
  } catch (error) {
    console.error("Error fetching team members from Sanity:", error)
  }

  return (
    <main className="min-h-screen bg-[#ffffff]">
      <EquipoContent members={members} />
    </main>
  )
}
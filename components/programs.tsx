import { client } from "@/sanity/lib/client"
import { latestProgramsQuery, allProgramsQuery } from "@/sanity/lib/queries"
import { ProgramsClient, ProgramItem } from "./programs-client"

// ---------------------------------------------------------------------------
// Fallback mínimo — solo actúa si Sanity está completamente caído.
// No es contenido real: solo evita que la sección quede en blanco.
// ---------------------------------------------------------------------------
const fallbackPrograms: ProgramItem[] = [
  {
    _id: "fallback-p1",
    title: "Programa Vinculando",
    slug: "vinculando",
    icon: "Handshake",
    description:
      "Conectamos a estudiantes de escuelas técnicas con empresas para sus 200 horas de prácticas profesionalizantes.",
    impact: "200h",
    impactLabel: "prácticas profesionalizantes por alumno",
    gradient: "from-[#111269] to-[#405e8c]",
  },
  {
    _id: "fallback-p2",
    title: "Programa Encadenar",
    slug: "encadenar",
    icon: "Network",
    description:
      "Fortalecemos los vínculos entre PyMEs promoviendo el trabajo colaborativo mediante rondas de negocios y networking.",
    impact: "Sinergia",
    impactLabel: "rondas de negocios y networking",
    gradient: "from-[#405e8c] to-[#89abe6]",
  },
  {
    _id: "fallback-p3",
    title: "Centro Tecnológico 4.0",
    slug: "centro-tecnologico-40",
    icon: "Cpu",
    description:
      "Acercamos a las PyMEs a la innovación y la transformación digital con capacitaciones técnicas de vanguardia.",
    impact: "4.0",
    impactLabel: "innovación y tecnología aplicada",
    gradient: "from-[#8dc2ff] to-[#111269]",
  },
]

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------
interface ProgramsProps {
  limit?: number
}

/**
 * Server Component — fetcha datos de Sanity.
 * Si Sanity está caído, muestra el fallback mínimo para no romper la página.
 * Pattern idéntico a news.tsx.
 */
export async function Programs({ limit }: ProgramsProps) {
  let programs: ProgramItem[] = fallbackPrograms

  try {
    const query = limit ? latestProgramsQuery : allProgramsQuery
    const params = limit ? { limit: limit - 1 } : {}

    const sanityPrograms = await client.fetch<ProgramItem[]>(query, params)

    if (sanityPrograms && sanityPrograms.length > 0) {
      programs = sanityPrograms
    }
  } catch (error) {
    console.error("Error fetching programs from Sanity:", error)
    // fallback ya asignado — el sitio sigue funcionando
  }

  return <ProgramsClient programs={programs} limit={limit} />
}

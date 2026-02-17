
import { Hero } from "@/components/hero"
import { ImpactStats } from "@/components/impact-stats"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Programs } from "@/components/programs"
import { DonationCTA } from "@/components/donation-cta"
import { News } from "@/components/news"
import { Partners } from "@/components/partners"
import { Newsletter } from "@/components/newsletter"
import { Contact } from "@/components/contact"

import { Suspense } from "react"

export default function Home() {
  return (
    <main className="min-h-screen">

      <Hero />
      <Suspense fallback={<div className="h-96" />}>
        <ImpactStats />
        <About />
        <Services />
        <Programs limit={3} />
        <DonationCTA />
      </Suspense>
      <Suspense fallback={<div className="h-64 animate-pulse bg-gray-50" />}>
        <News />
      </Suspense>
      <Suspense fallback={<div className="h-64 animate-pulse bg-gray-50" />}>
        <Partners />
      </Suspense>
      <Suspense fallback={<div className="h-96" />}>
        <Newsletter />
        <Contact />
      </Suspense>

    </main>
  )
}


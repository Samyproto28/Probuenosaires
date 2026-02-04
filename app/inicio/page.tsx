import { Header } from "@/components/header"
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
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import { HashNavigationHandler } from "@/components/hash-navigation-handler"

export const metadata: Metadata = {
  title: "Inicio | Fundación Pro Buenos Aires",
  description: "Desde 1998 trabajamos por el desarrollo sustentable de Argentina",
}

export default function Inicio() {
  return (
    <main className="min-h-screen">
      <HashNavigationHandler />
      <Header />
      <Hero />
      <ImpactStats />
      <About />
      <Services />
      <Programs limit={3} />
      <DonationCTA />
      <News />
      <Partners />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  )
}
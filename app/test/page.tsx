import Gallery from "@/components/Gallery"
import Products from "@/components/Products"
import Hero from "@/components/hero/Hero"
import WhoAreWe from "@/components/who_are_we/WhoAreWe"
import { homePageSchema } from "@/schemas"
import { Suspense } from "react"

export default async function Test() {
  const query = { isRecommended: true }
  return (
    <div className="flex w-full flex-col justify-center items-center gap-10" id="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <Hero />
      <Suspense fallback="">
        <Products
          query={query}
          title="Izdvajamo iz ponude"
          subtitle="Sa zadovoljstvom vam predstavljamo ekskluzivnu i raskošnu ponudu iz Montre kolekcije.
            Ovi satovi predstavljaju vrhunac elegancije, izrade i stila. Uz pažljivo izabrane
            materijale i vrhunsku izradu, svaki sat iz ove kolekcije predstavlja spoj vrhunskog
            inženjeringa i estetike."
          type="recommendations"
        />
      </Suspense>
      <WhoAreWe />
      <Suspense fallback="">
        <Gallery />
      </Suspense>
    </div>
  )
}

import Gallery from "@/components/Gallery"
import Products from "@/components/Products"
import Overlay from "@/components/helpers/Overlay"
import Hero from "@/components/hero/Hero"
import { KEYWORDS, homePage } from "@/constants"
import { homePageSchema } from "@/schemas"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: homePage.title,
  description: homePage.description,
  generator: "Montre Shop",
  applicationName: "Montre Shop",
  keywords: KEYWORDS,
  authors: [{ name: "Reactify Solutions" }],
  creator: "Reactify Solutions",
  publisher: "Montre Shop",
  metadataBase: new URL("https://www.montre-shop.com/"),
  alternates: {
    canonical: "https://www.montre-shop.com/",
  },
  openGraph: {
    title: homePage.title,
    description: homePage.description,
    url: "https://www.montre-shop.com/",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    title: homePage.title,
    description: homePage.description,
    images: ["/twitter-image.png"],
    creator: "Reactify Solutions",
    site: `https://www.montre-shop.com`,
  },
}

export default async function Home() {
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
      <Overlay emoji="❄️" />
      <Suspense fallback="">
        <Gallery />
      </Suspense>
    </div>
  )
}

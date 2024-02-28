import { getAllProducts } from "@/actions/server/products"
import Gallery from "@/components/Gallery"
import Recommendations from "@/components/Recommendations"
import Hero from "@/components/hero/Hero"
import { KEYWORDS, homePage } from "@/constants"
import { getGalleryImagesFromCloudinary } from "@/helpers/server"
import { homePageSchema } from "@/schemas"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: homePage.title,
  description: homePage.description,
  generator: "Montre",
  applicationName: "Montre",
  keywords: KEYWORDS,
  authors: [{ name: "Reactify Solutions" }],
  creator: "Reactify Solutions",
  publisher: "Montre",
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
  const products = await getAllProducts({})
  const galleryImages = await getGalleryImagesFromCloudinary()
  console.log(galleryImages)
  return (
    <div className="flex w-full flex-col justify-center items-center gap-10" id="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <Hero />
      {/* <Suspense fallback="">
        <Overlay emoji="🧡" />
      </Suspense> */}
      <Suspense fallback="">
        <Recommendations products={products} />
      </Suspense>
      <Suspense fallback="">
        <Gallery images={galleryImages} />
      </Suspense>
    </div>
  )
}

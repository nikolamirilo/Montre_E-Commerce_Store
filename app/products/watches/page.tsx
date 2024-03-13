import Products from "@/components/Products"
import { KEYWORDS, allWatches } from "@/constants"
import { allProductsPageSchema } from "@/schemas"
import { SearchQuery } from "@/typescript/types"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: allWatches.title,
  description: allWatches.description,
  generator: "Montre Shop",
  applicationName: "Montre Shop",
  keywords: KEYWORDS,
  authors: [{ name: "Reactify Solutions" }],
  creator: "Reactify Solutions",
  publisher: "Montre Shop",
  metadataBase: new URL("https://www.montre-shop.com/products/watches"),
  alternates: {
    canonical: "https://www.montre-shop.com/products/watches",
  },
  openGraph: {
    title: allWatches.title,
    description: allWatches.description,
    url: "https://www.montre-shop.com/products/watches",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    title: allWatches.title,
    description: allWatches.description,
    images: ["/twitter-image.png"],
    creator: "Reactify Solutions",
    site: `https://www.montre-shop.com/products/watches`,
  },
}

const AllProducts = ({ searchParams }: { searchParams: SearchQuery }) => {
  const query = searchParams
  return (
    <div id="products">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(allProductsPageSchema) }}
      />
      <Products
        query={query}
        title="Ponuda satova Montre kolekcije"
        subtitle="Montre donosi pažljivo izabran asortiman muških i ženskih satova, između kojih se ističu elegantni modeli brendova Curren i Hannah Martin. Svi naši satovi su odabrani s posebnom pažnjom kako bismo zadovoljili raznolike stilove i ukuse naših kupaca."
      />
    </div>
  )
}

export default AllProducts

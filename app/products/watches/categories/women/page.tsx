import Products from "@/components/Products"
import { KEYWORDS, womenWatches } from "@/constants"
import { womenProductsPageSchema } from "@/schemas"
import { SearchQuery } from "@/typescript/types"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: womenWatches.title,
  description: womenWatches.description,
  generator: "Montre Shop",
  applicationName: "Montre Shop",
  keywords: KEYWORDS,
  authors: [{ name: "Reactify Solutions" }],
  creator: "Reactify Solutions",
  publisher: "Montre Shop",
  metadataBase: new URL("https://www.montre-shop.com/products/watches/categories/women"),
  alternates: {
    canonical: "https://www.montre-shop.com/products/watches/categories/women",
  },
  openGraph: {
    title: womenWatches.title,
    description: womenWatches.description,
    url: "https://www.montre-shop.com/products/watches/categories/women",
    images: ["/opengraph-image.jpg"],
  },
  twitter: {
    title: womenWatches.title,
    description: womenWatches.description,
    images: ["/twitter-image.jpg"],
    creator: "Reactify Solutions",
    site: `https://www.montre-shop.com/products/watches/categories/women`,
  },
}
const Category = ({ searchParams }: { searchParams: SearchQuery }) => {
  const searchParamsData = searchParams
  const category = "women"
  // const query = { ...searchParamsData, category }
  return (
    <div className="min-h-screen 2xl:min-h-[75vh] w-full" id="categories">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(womenProductsPageSchema) }}
      />
      <Products
        variant="women"
        // query={query}
        title="Ponuda ženskih satova Montre kolekcije"
        subtitle="Istražite pažljivo biranu kolekciju Montre ženskih satova i pronađite sat koji u potpunosti odgovara vašoj meri i ukusu! Neka on postane izraz vašeg stila i pratilac za svaki dan ili posebne trenutke."
        type={category}
      />
    </div>
  )
}
export default Category

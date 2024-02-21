import Products from "@/components/Products"
import { KEYWORDS, menWatches } from "@/constants"
import { menProductsPageSchema } from "@/schemas"
import { SearchQuery } from "@/typescript/types"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: menWatches.title,
  description: menWatches.description,
  generator: "Montre",
  applicationName: "Montre",
  keywords: KEYWORDS,
  authors: [{ name: "Reactify Solutions" }],
  creator: "Reactify Solutions",
  publisher: "Montre",
  metadataBase: new URL("https://www.montre-shop.com/products/watches/categories/men"),
  alternates: {
    canonical: "https://www.montre-shop.com/products/watches/categories/men",
  },
  openGraph: {
    title: menWatches.title,
    description: menWatches.description,
    url: "https://www.montre-shop.com/products/watches/categories/men",
    images: ["/opengraph-image.jpg"],
  },
  twitter: {
    title: menWatches.title,
    description: menWatches.description,
    images: ["/twitter-image.jpg"],
    creator: "Reactify Solutions",
    site: `https://www.montre-shop.com/products/watches/categories/men`,
  },
}
const Category = ({ searchParams }: { searchParams: SearchQuery }) => {
  const searchParamsData = searchParams
  const category = "men"
  const query = { ...searchParamsData, category }
  return (
    <div className="min-h-screen 2xl:min-h-[75vh] w-full" id="categories">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menProductsPageSchema) }}
      />
      <Products
        query={query}
        title="Ponuda muških satova Montre kolekcije"
        subtitle="Montre muški satovi su više od samo merila vremena, oni su izraz snage, stila i samopouzdanja. Otkrijte jedinstvene detalje i funkcionalnosti koje će dodati notu luksuza vašem svakodnevnom izgledu."
        type={category}
      />
    </div>
  )
}
export default Category

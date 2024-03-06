import Products from "@/components/Products"
import { KEYWORDS, superDealsWatches } from "@/constants"
import { superDealsProductsPageSchema } from "@/schemas"
import { SearchQuery } from "@/typescript/types"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: superDealsWatches.title,
  description: superDealsWatches.description,
  generator: "Montre Shop",
  applicationName: "Montre Shop",
  keywords: KEYWORDS,
  authors: [{ name: "Reactify Solutions" }],
  creator: "Reactify Solutions",
  publisher: "Montre Shop",
  metadataBase: new URL("https://www.montre-shop.com/products/watches/offers/super-deals"),
  alternates: {
    canonical: "https://www.montre-shop.com/products/watches/offers/super-deals",
  },
  openGraph: {
    title: superDealsWatches.description,
    description: superDealsWatches.description,
    url: "https://www.montre-shop.com/products/watches/offers/super-deals",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    title: superDealsWatches.description,
    description: superDealsWatches.description,
    images: ["/twitter-image.png"],
    creator: "Reactify Solutions",
    site: `https://www.montre-shop.com/products/watches/offers/super-deals`,
  },
}

const Offer = ({ searchParams }: { searchParams: SearchQuery }) => {
  // const query = searchParams
  return (
    <div className="min-h-screen 2xl:min-h-[75vh] w-full" id="offer">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(superDealsProductsPageSchema) }}
      />
      <Products
        variant="super-deals"
        type="discount"
        // query={{ ...query, isOnDiscount: true }}
        title="Ponuda satova na akciji"
        subtitle="Istražite raznovrsne stilove i tehničke karakteristike i započnite putovanje kroz vreme uz svoj idealni sat povoljnije nego ikada!"
      />
    </div>
  )
}
export default Offer

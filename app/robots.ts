import { APP_URL } from "@/constants"
import { fetchData } from "@/helpers/client"
import { Product } from "@/typescript/types"
import type { MetadataRoute } from "next"

export default async function robots(): Promise<MetadataRoute.Robots> {
  const products = await fetchData(`${APP_URL}/api/products`, {
    method: "POST",
    cache: "force-cache",
    body: JSON.stringify({ isPublic: true }),
    tags: ["products"],
  })
  const productsUrls = products?.map(
    (product: Product) => `/products/watches/${product.productCode}`
  )
  const editProductsUrls = products?.map(
    (product: Product) => `/products/watches/${product.productCode}/edit`
  )
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/contact",
          "/about",
          "/products/watches",
          "/products/watches/offers/super-deals",
          "/products/watches/categories/men",
          "/products/watches/categories/women",
          "/auth/log-in",
          ...productsUrls,
        ],
        disallow: [
          "/users/",
          "/admin/",
          "/cart",
          "/order/",
          "/order",
          "/thank-you",
          "/api/",
          "/blogs/", // remove when done
          "/faq", // remove when done
          "/test",
          ...editProductsUrls,
        ],
      },
    ],
    sitemap: "https://www.montre-shop.com/sitemap.xml",
  }
}

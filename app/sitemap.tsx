import { getAllProducts } from "@/actions/server/products"
import { Product } from "@/typescript/types"
import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.montre-shop.com"
  const products = await getAllProducts()
  const productsUrls = products?.map((product: Product) => ({
    url: `${baseUrl}/products/watches/${product.productCode}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }))
  return [
    {
      url: "https://www.montre-shop.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.montre-shop.com/products/watches",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.montre-shop.com/products/watches/categories/men",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.montre-shop.com/products/watches/categories/women",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.montre-shop.com/products/watches/offers/super-deals",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...productsUrls,
    {
      url: "https://www.montre-shop.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.montre-shop.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.montre-shop.com/auth/log-in",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.montre-shop.com/auth/sign-up",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]
}

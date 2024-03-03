"use client"
import { getAllProducts } from "@/actions/server/products"
import { Product, ProductsContextValue } from "@/typescript/types"
import { createContext, useContext, useEffect, useState } from "react"

const ProductsContext = createContext<ProductsContextValue>({ products: null })

export const useProductsContext = () => {
  return useContext(ProductsContext)
}

export const ProductsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[] | null>(null)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getAllProducts({})
        setProducts(res)
        console.log(res)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }
    fetchProducts()
  }, [])
  return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>
}

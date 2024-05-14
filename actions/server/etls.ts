"use server"

import { revalidateData } from "@/helpers/server"
import { getAllProducts, updateProductDiscount } from "./products"

export async function discountEtl(category: string, discount: number) {
  try {
    const products = await getAllProducts({ category: category })
    for (let i = 0; i++; i < products.length) {
      const product = products[i]
      const isOnDiscount = discount > 0
      const discountedPrice =
        discount > 0
          ? Math.floor((product.price * (1 - discount / 100)) / 100) * 100
          : product.price
      const res = await updateProductDiscount(product._id, isOnDiscount, discount, discountedPrice)
      console.log(res)
      revalidateData()
    }
  } catch (error) {
    console.log((error as Error).message)
    throw new Error((error as Error).message)
  }
}

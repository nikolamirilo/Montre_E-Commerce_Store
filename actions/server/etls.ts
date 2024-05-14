import { getAllProducts, updateProductDiscount } from "./products"

export async function discountEtl(category: string, discount: number) {
  try {
    const products = await getAllProducts({ category: category })
    for (let i = 0; i < products.length; i++) {
      const product = products[i]
      const isOnDiscount = discount > 0
      const discountedPrice =
        discount > 0 ? Math.floor(product.price * (1 - discount / 100)) : product.price
      await updateProductDiscount(product._id, isOnDiscount, discount, discountedPrice)
    }
    return true
  } catch (error) {
    console.error(error)
    throw error
  }
}

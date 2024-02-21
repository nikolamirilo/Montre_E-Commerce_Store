export async function handleOrderProducts(
  id: string | undefined,
  customerInfo: object,
  isAuthenticated: boolean
) {
  try {
    const order = isAuthenticated
      ? { uid: id, customerInfo, isAuthenticated }
      : { productId: id, customerInfo, isAuthenticated }
    const orderRes = await fetch("/api/products/order", {
      method: "POST",
      body: JSON.stringify(order),
    })
    if (!orderRes.ok) {
      throw new Error(`Error: ${orderRes.statusText}`)
    }
    return true
  } catch (error) {
    console.log((error as Error).message)
    throw new Error((error as Error).message)
  }
}

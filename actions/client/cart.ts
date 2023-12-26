export async function handleOrderProducts(
  id: string | undefined,
  customerInfo: object,
  isAuthenticated: boolean
) {
  try {
    if (isAuthenticated == true) {
      const body = { uid: id, customerInfo, isAuthenticated }
      const response = await fetch("/api/products/order", {
        method: "POST",
        body: JSON.stringify(body),
      })
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`)
      }
      return true
    } else {
      const body = { productId: id, customerInfo, isAuthenticated }
      const response = await fetch("/api/products/order", {
        method: "POST",
        body: JSON.stringify(body),
      })
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`)
      }
      return true
    }
  } catch (error) {
    console.error(error)
    return false
  }
}

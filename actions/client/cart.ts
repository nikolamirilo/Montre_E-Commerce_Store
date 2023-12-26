export async function handleOrderProducts(
  uid: string | undefined,
  customerInfo: object,
  isAuthenticated: boolean
) {
  try {
    const body = { uid: uid, customerInfo: customerInfo, isAuthenticated }
    const response = await fetch("/api/products/order", {
      method: "POST",
      body: JSON.stringify(body),
    })
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`)
    }
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

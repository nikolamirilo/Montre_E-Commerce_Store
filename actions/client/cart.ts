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
    // const emailRes = await fetch("/api/send-email", {
    //   method: "POST",
    //   body: JSON.stringify(order),
    // })
    // if (!emailRes.ok) {
    //   throw new Error(`Error: ${orderRes.statusText}`)
    // }
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

import { orderCartItems, orderSingleItem } from "@/actions/server/cart"
import { NextRequest, NextResponse } from "next/server"

export const revalidate = 0
export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    const orderDetails = await request.json()
    if (orderDetails.isAuthenticated == false) {
      await orderSingleItem(orderDetails.productId, orderDetails.customerInfo)
    } else {
      await orderCartItems(orderDetails.uid, orderDetails.customerInfo)
    }
    return NextResponse.json({ message: "Ordered Successully" }, { status: 200 })
  } catch (error) {
    return new NextResponse((error as Error).message)
  }
}

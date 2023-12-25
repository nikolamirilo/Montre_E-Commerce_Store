import { orderCartItems } from "@/actions/server/cart"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const orderDetails = await request.json()
    await orderCartItems(orderDetails.uid, orderDetails.customerInfo)
    return NextResponse.json({ message: "Ordered Successully" }, { status: 200 })
  } catch (error) {
    return new NextResponse((error as Error).message)
  }
}

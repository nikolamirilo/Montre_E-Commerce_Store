import { getAllOrders } from "@/actions/server/users"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const allOrders = await getAllOrders()
    return NextResponse.json(allOrders, { status: 200 })
  } catch (error) {
    return new NextResponse((error as Error).message, { status: 500 })
  }
}

import { getAllProducts } from "@/actions/server/products"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const allProducts = await getAllProducts({})
    return NextResponse.json(allProducts, { status: 200 })
  } catch (error) {
    return new NextResponse((error as Error).message, { status: 500 })
  }
}

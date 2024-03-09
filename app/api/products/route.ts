import { getAllProducts } from "@/actions/server/products"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const query = await request.json()
  try {
    if (query) {
      const allProducts = await getAllProducts(query)
      return NextResponse.json(allProducts, { status: 200 })
    }
  } catch (error) {
    return NextResponse.json((error as Error).message, { status: 500 })
  }
}

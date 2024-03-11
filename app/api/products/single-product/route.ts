import { getSingleProduct } from "@/actions/server/products"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const body = await request.json()
  const productCode = body.productCode
  try {
    if (productCode) {
      const singleProduct = await getSingleProduct(productCode)
      return NextResponse.json(singleProduct, { status: 200 })
    }
  } catch (error) {
    return NextResponse.json((error as Error).message, { status: 500 })
  }
}

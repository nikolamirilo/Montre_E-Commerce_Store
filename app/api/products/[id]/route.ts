import { getSingleProduct } from "@/actions/server/products"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id
  try {
    const singleProduct = await getSingleProduct(id)
    return NextResponse.json(singleProduct)
  } catch (error) {
    return new NextResponse((error as Error).message)
  }
}

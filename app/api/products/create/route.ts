import { createProduct } from "@/actions/server/products"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const newProduct = await request.json()
    await createProduct(newProduct)
    return NextResponse.json({ message: "Post created successully" }, { status: 201 })
  } catch (error) {
    return new NextResponse((error as Error).message, { status: 500 })
  }
}

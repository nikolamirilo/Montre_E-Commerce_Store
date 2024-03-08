import { updateProduct } from "@/actions/server/products"
import { NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    await updateProduct(body)
    return NextResponse.json({ message: "Post Added Successully" }, { status: 200 })
  } catch (error) {
    return new NextResponse((error as Error).message, { status: 500 })
  }
}

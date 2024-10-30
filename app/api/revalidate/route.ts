import { revalidateData } from "@/helpers/server"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    revalidateData()
    return NextResponse.json({ message: "Finished revalidation" }, { status: 200 })
  } catch (error) {
    return new NextResponse((error as Error).message, { status: 500 })
  }
}

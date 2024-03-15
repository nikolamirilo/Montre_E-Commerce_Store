import { getSingleUser } from "@/actions/server/users"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const body = await request.json()
  const uid = body.uid
  try {
    if (uid) {
      const singleUser = await getSingleUser(uid)
      return NextResponse.json(singleUser, { status: 200 })
    }
  } catch (error) {
    return NextResponse.json((error as Error).message, { status: 500 })
  }
}

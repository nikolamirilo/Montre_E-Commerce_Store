import { storeDatabaseConnection } from "@/lib/mongodb/connections"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const db = await storeDatabaseConnection()
    await db.collection("products").updateMany({}, [
      {
        $set: {
          images: {
            $map: {
              input: { $range: [0, { $size: "$images" }] }, // Create a range based on the size of the images array
              as: "index",
              in: {
                order: "$$index",
                url: { $arrayElemAt: ["$images", "$$index"] }, // Get the URL at the current index
              },
            },
          },
        },
      },
    ])
    return NextResponse.json({ message: "Finished" }, { status: 200 })
  } catch (error) {
    return new NextResponse((error as Error).message, { status: 500 })
  }
}

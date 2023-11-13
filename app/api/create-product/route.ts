import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const uploadData = await request.json()
    const res = await fetch(
        `${process.env.MONGO_DB_URL!}/action/insertOne`,
        {
          method: "POST",
          headers: {
            "api-key": process.env.MONGO_DB_API_KEY!,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dataSource: "MainCluster",
            database: "Store",
            collection: "products",
            document: uploadData,
          }),
        }
      );
    const data = await res.json()
    return NextResponse.json({ data })
}
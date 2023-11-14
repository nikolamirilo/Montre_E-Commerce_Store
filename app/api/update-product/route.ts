import { getAllProducts } from "@/actions/server/products";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const uploadData = await request.json()
    const products = await getAllProducts()
    const productsCount = await products?.documents?.length
    const fourDigitRandom = Math.floor(1000 + Math.random() * 9000)
    const id = `${uploadData.title.substr(0,2).toUpperCase()}${productsCount}${fourDigitRandom}`
    const body = {uploadData, id:id}
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
            document: body,
          }),
        }
      );
    const data = await res.json()
    return NextResponse.json({ data, id })
}
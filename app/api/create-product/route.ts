import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const uploadData = await request.json()
    const res = await fetch(
        `https://eu-central-1.aws.data.mongodb-api.com/app/data-eagdn/endpoint/data/v1/action/insertOne`,
        {
          method: "POST",
          headers: {
            "api-key":
              "QZCIcGQluFrPOHPAMvvrk9taEjiMifFAtrjGnmlM2efolfQjELuTbLdJTWhbhuYQ",
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
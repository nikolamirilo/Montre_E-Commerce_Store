"use server"
const fs = require("fs")

import { revalidatePath } from "next/cache"
export const revalidateData = () => {
  revalidatePath("/")
}

export async function updateJSONFile(data: any) {
  await fs.writeFile("./data/products.json", JSON.stringify({ data }), (err: any) => {
    if (err) throw err
    console.log("Data written to file")
  })
}

export async function getGalleryImagesFromCloudinary() {
  try {
    var imageUrls: string[] = []
    const results = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY +
              ":" +
              process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
          ).toString("base64")}`,
        },
      }
    ).then((r) => r.json())
    if (results) {
      await results.resources.map((item: any) => {
        if (item.folder == "gallery") imageUrls.push(item.secure_url)
      })
      return imageUrls
    } else {
      return "Error while fetching images from Cloudinary"
    }
  } catch (error) {
    console.log(error as Error)
  }
}

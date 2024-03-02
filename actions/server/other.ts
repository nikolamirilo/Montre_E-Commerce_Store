"use server"
import { ContactTemplateProps } from "@/typescript/interfaces"

export async function sendContactEmail(contactEmailData: ContactTemplateProps) {
  try {
    const emailRes = await fetch(process.env.NEXT_PUBLIC_WEB_APP_URL + "/api/contact", {
      method: "POST",
      body: JSON.stringify(contactEmailData),
    })
    if (emailRes.ok) {
      console.log("Contact email sent successfully")
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getGalleryImagesFromCloudinary() {
  try {
    var imageUrls: string[] = []
    const results = await fetch(
      `https://api.cloudinary.com/v1_1/montre-cloudinary/resources/image`,
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
        if (item.folder == "gallery") {
          imageUrls.push(item.url)
        }
      })
      console.log(imageUrls)
      return imageUrls
    } else {
      return "Error while fetching images from Cloudinary"
    }
  } catch (error) {
    console.log(error as Error)
  }
}

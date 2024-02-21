import { revalidateData } from "@/helpers/server"
import { Product } from "@/typescript/types"

export async function uploadImagesToCloudinary(
  files: FileList | null | undefined,
  images: string[]
) {
  const upload_preset = "products"
  const maxSizeMB = 3

  const resizeImage = async (file: File): Promise<Blob | null> => {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        const img = new Image()
        img.src = event.target?.result as string
        img.onload = () => {
          const canvas = document.createElement("canvas")
          const ctx = canvas.getContext("2d")!
          const maxSize = maxSizeMB * 1024 * 1024

          let width = img.width
          let height = img.height

          if (file.size > maxSize) {
            const scaleFactor = Math.sqrt(maxSize / file.size)
            width = Math.floor(width * scaleFactor)
            height = Math.floor(height * scaleFactor)
          }

          canvas.width = width
          canvas.height = height

          ctx.drawImage(img, 0, 0, width, height)

          canvas.toBlob((blob) => {
            resolve(blob)
          }, file.type)
        }
      }
      reader.readAsDataURL(file)
    })
  }

  const formData = new FormData()
  formData.append("upload_preset", upload_preset)
  if (files)
    for (let i = 0; i < files.length; i++) {
      let file = files[i]

      try {
        const resizedBlob = await resizeImage(file)
        if (!resizedBlob) {
          console.error(`Error resizing file ${file.name}`)
          continue
        }

        formData.append("file", resizedBlob, file.name)

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        )
        if (!response.ok) {
          console.error(`Error uploading file ${file.name}`)
          console.log(response)
          continue
        }
        const res = await response.json()
        images.push(res.url)
      } catch (error) {
        console.error(`Error uploading file ${file.name}: ${(error as Error).message}`)
      } finally {
        formData.delete("file")
      }
    }
}

export async function handleProductChange(
  images: string[],
  uploadData: Product,
  action: string,
  id?: string
) {
  if (images.length > 0) {
    const response = await fetch(`/api/products/${action}`, {
      method: action == "create" ? "POST" : "PUT",
      body:
        action == "create"
          ? JSON.stringify(uploadData)
          : JSON.stringify({ ...uploadData, _id: id }),
    })
    if (response.ok) {
      revalidateData()
    } else {
      console.log(response.statusText)
    }
  } else {
    alert("Dodaj bar jednu sliku!")
  }
}

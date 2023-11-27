import { revalidateData } from "@/helpers"
import { Product } from "@/typescript/interfaces"

export async function uploadImagesToCloudinary(files: any, images: string[]) {
  const formData = new FormData()
  formData.append("upload_preset", "products")
  for (let i = 0; i < files.length; i++) {
    let file = files[i]
    formData.append("file", file)
    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/montre-cloudinary/image/upload",
        {
          method: "POST",
          body: formData,
        }
      )

      if (!response.ok) {
        console.error(`Error uploading file ${file.name}`)
        continue // Skip to the next iteration if there's an error
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

export async function handleProductUpload(
  images: string[],
  uploadData: Product,
  action: string,
  id: string
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
      window.location.reload()
      alert("Vaš odgovor je zabeležen")
    } else {
      console.log(response.statusText)
    }
  } else {
    alert("Dodaj bar jednu sliku!")
  }
}

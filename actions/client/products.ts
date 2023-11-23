export async function uploadImagesToCloudinary(files: any, images: any) {
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

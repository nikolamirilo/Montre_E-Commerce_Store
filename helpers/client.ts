import { FetchOptions, ProductImage } from "@/typescript/types"

export function scrollToTop() {
  window.scrollTo({
    top: -20,
    behavior: "smooth",
  })
}

export function generateStringCode(name: string) {
  const hyphenatedName = name.toLowerCase().replace(/\s+/g, "-")
  return hyphenatedName
}

export function reindexProductImageArray(images: ProductImage[]) {
  return images.map((image, index) => ({
    ...image,
    order: index, // Assign new order based on index
  }))
}

export function generateRandomHex(length: number) {
  let result = ""
  const characters = "0123456789abcdef"
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

export function parseDate(dateString: string) {
  if (!dateString) return null // Handle missing date strings
  const formattedDateString = dateString.replace(/\.$/, "") // Remove trailing dot
  const parts = formattedDateString.split(".")
  if (parts.length !== 3) return null // Handle improperly formatted date strings
  const [day, month, year] = parts
  return new Date(`${year}-${month}-${day}`)
}

export async function fetchData(url: string, options: FetchOptions) {
  try {
    const { method, cache, body, tags } = options
    const res = await fetch(url, {
      method,
      cache: cache || "force-cache",
      body,
      next: { tags },
    })
    if (!res.ok) {
      throw new Error(`Failed to fetch data from ${url}. Status: ${res.status}`)
    }
    return await res.json()
  } catch (error) {
    console.error(error as Error)
  }
}

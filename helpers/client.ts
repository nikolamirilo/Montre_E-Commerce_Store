import { FetchOptions } from "@/typescript/types"

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

export function generateStringCode(name: string) {
  const hyphenatedName = name.toLowerCase().replace(/\s+/g, "-")
  return hyphenatedName
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
    const { method, cache, body } = options
    const res = await fetch(url, {
      method,
      cache: cache || "force-cache",
      body,
    })
    if (!res.ok) {
      throw new Error(`Failed to fetch data from ${url}. Status: ${res.status}`)
    }
    return await res.json()
  } catch (error) {
    console.error(error as Error)
  }
}

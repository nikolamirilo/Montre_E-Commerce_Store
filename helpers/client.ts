import productsDevelopment from "../data/development/products.json"
import productsProduction from "../data/production/products.json"

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

export function generateProductCode(name: string) {
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

export const getAllProductsFromLocalData = async (variant: string) => {
  let data: any
  if (process.env.NODE_ENV === "production") {
    data = productsProduction
  } else {
    data = productsDevelopment
  }
  if (!data || !data.products) {
    throw new Error("Data or products array is missing or empty.")
  }
  console.log(data)
  try {
    if (variant == "men" || variant == "women") {
      const filteredProducts = data.products.filter((item: any) => item.category == variant)
      return filteredProducts
    } else if (variant == "super-deals") {
      const filteredProducts = data.products.filter((item: any) => item.isOnDiscount == true)
      return filteredProducts
    } else if (variant == "recommended") {
      const filteredProducts = data.products.filter((item: any) => item.isRecommended == true)
      return filteredProducts
    } else {
      return data.products
    }
  } catch (error) {
    console.error("Error:", error)
  }
}

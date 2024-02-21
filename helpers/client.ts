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

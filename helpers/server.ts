"use server"
const fs = require("fs")

import { getAllProducts } from "@/actions/server/products"
import { revalidatePath } from "next/cache"
export const revalidateData = () => {
  revalidatePath("/")
}

export async function fetchProductsDataAndUpdateFile() {
  try {
    // Fetch data from the /products route
    const products = await getAllProducts({})

    const productionFilePath = "../data/production/products.json"
    const developmentFilePath = "../data/development/products.json"

    // Write fetched data to respective JSON files
    if (process.env.NODE_ENV === "production") {
      if (fs.existsSync(productionFilePath)) {
        fs.unlinkSync(productionFilePath)
        fs.writeFileSync(productionFilePath, JSON.stringify({ products }))
      }
    } else {
      if (fs.existsSync(developmentFilePath)) {
        fs.unlinkSync(developmentFilePath)
        fs.writeFileSync(developmentFilePath, JSON.stringify({ products }))
      }
    }
    console.log("Fetched data for products and stored inside /data/products.json")
  } catch (error) {
    console.error("Error:", error)
  }
}

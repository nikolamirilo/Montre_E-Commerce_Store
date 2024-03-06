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

    if (process.env.NODE_ENV == "production") {
      // Delete existing data file
      fs.unlinkSync("../data/production/products.json")
      // Write fetched data to data.json
      fs.writeFileSync("../data/production/products.json", JSON.stringify({ products }))
    } else {
      // Delete existing data file
      fs.unlinkSync("../data/development/products.json")
      // Write fetched data to data.json
      fs.writeFileSync("../data/development/products.json", JSON.stringify({ products }))
    }

    console.log("Fetched data for products and stored inside /data/products.json")
  } catch (error) {
    console.error("Error:", error)
  }
}

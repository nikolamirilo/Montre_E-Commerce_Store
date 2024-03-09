"use server"
import { getAllProducts } from "@/actions/server/products"
import { revalidatePath } from "next/cache"
const fs = require("fs")
const url = process.env.WEB_APP_URL

export const revalidateData = () => {
  revalidatePath("/")
  revalidatePath("/products/watches/categories/men")
  revalidatePath("/products/watches/categories/women")
  revalidatePath("/products/watches/offers/super-deals")
}
export async function fetchProductsDataAndUpdateFile() {
  try {
    const products = await getAllProducts()
    const productionFilePath = "./data/production/products.json"
    const developmentFilePath = "./data/development/products.json"

    if (process.env.NODE_ENV === "production") {
      fs.writeFile(productionFilePath, JSON.stringify({ products }), (err: any) => {
        if (err) throw err
        console.log("Data for products fetched and stored inside products.json")
      })
    } else {
      fs.writeFile(developmentFilePath, JSON.stringify({ products }), (err: any) => {
        if (err) throw err
        console.log("Data for products fetched and stored inside products.json")
      })
    }
  } catch (error) {
    console.error("Error:", error)
    throw new Error("Failed to fetch products data and update file")
  }
}

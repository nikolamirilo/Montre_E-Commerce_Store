"use server"
const fs = require("fs")

import { revalidatePath } from "next/cache"
export const revalidateData = () => {
  revalidatePath("/")
}

export async function updateJSONFile(data: any) {
  await fs.writeFile("./data/products.json", JSON.stringify({ data }), (err: any) => {
    if (err) throw err
    console.log("Data written to file")
  })
}

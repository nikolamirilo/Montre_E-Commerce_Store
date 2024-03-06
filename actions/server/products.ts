"use server"
import { fetchProductsDataAndUpdateFile } from "@/helpers/server"
import { storeDatabaseConnection } from "@/lib/mongodb/connections"
import { Product, ProductWithoutId, SearchQuery } from "@/typescript/types"
import { ObjectId } from "mongodb"

export const getAllProducts = async (query: SearchQuery, limit?: number) => {
  try {
    const db = await storeDatabaseConnection()
    // Build the MongoDB query based on the provided search criteria
    const mongoQuery: any = {}
    const minPrice: number = parseInt(query?.minPrice!)
    const maxPrice: number = parseInt(query?.maxPrice!)
    if (query.class) {
      mongoQuery.class = query.class
    }
    if (query.brand) {
      mongoQuery.brand = query.brand
    }
    if (query.category) {
      mongoQuery.category = query.category
    }
    if (query.isOnDiscount) {
      mongoQuery.isOnDiscount = query.isOnDiscount
    }
    if (minPrice > 0) {
      mongoQuery.discountedPrice = {
        $gte: minPrice,
        $lte: 20000,
      }
    }
    if (maxPrice > 0) {
      mongoQuery.discountedPrice = {
        $gte: 0,
        $lte: maxPrice,
      }
    }
    if (minPrice > 0 && maxPrice > 0) {
      mongoQuery.discountedPrice = {
        $gte: minPrice,
        $lte: maxPrice,
      }
    }
    if (query.text) {
      const keywords = query.text.split(" ").map((keyword) => keyword.trim())
      const regexArray = keywords.map((keyword) => new RegExp(keyword, "i"))
      mongoQuery.title = { $all: regexArray }
    }
    const queryBuilder = db.collection("products").find(mongoQuery)
    const queryResult = limit ? queryBuilder.limit(limit) : queryBuilder

    const filteredProducts: any = await queryResult.toArray()
    return filteredProducts.reverse()
  } catch (error) {
    console.log((error as Error).message)
    throw new Error((error as Error).message)
  }
}

export const getSingleProduct = async (productCode: string) => {
  try {
    const db = await storeDatabaseConnection()
    const singleProduct: any = await db.collection("products").findOne({ productCode: productCode })
    await fetchProductsDataAndUpdateFile()
    return singleProduct
  } catch (error) {
    console.log((error as Error).message)
    throw new Error((error as Error).message)
  }
}

export const deleteAllproducts = async () => {
  try {
    const db = await storeDatabaseConnection()
    db.collection("products").deleteMany({})
    await fetchProductsDataAndUpdateFile()
  } catch (error) {
    console.log((error as Error).message)
    throw new Error((error as Error).message)
  }
}

export const createProduct = async (product: ProductWithoutId) => {
  try {
    const db = await storeDatabaseConnection()
    await db.collection("products").insertOne(product)
    await fetchProductsDataAndUpdateFile()
  } catch (error) {
    console.log((error as Error).message)
    throw new Error((error as Error).message)
  }
}

export const updateProduct = async (body: Product) => {
  try {
    const db = await storeDatabaseConnection()
    const objId = new ObjectId(body._id)
    await db.collection("products").updateOne(
      { _id: objId },
      {
        $set: {
          isPublic: body.isPublic,
          category: body.category,
          title: body.title,
          description: body.description,
          typ: body.typ,
          diameter: body.diameter,
          price: body.price,
          productCode: body.productCode,
          class: body.class,
          discount: body.discount,
          isOnDiscount: body.isOnDiscount,
          brand: body.brand,
          images: body.images,
          isRecommended: body.isRecommended,
          isOutOfStock: body.isOutOfStock,
          discountedPrice: body.discountedPrice,
        },
      }
    )
    await fetchProductsDataAndUpdateFile()
    return true
  } catch (error) {
    console.log((error as Error).message)
    throw new Error((error as Error).message)
  }
}

export const deleteSingleProduct = async (_id: any) => {
  try {
    const db = await storeDatabaseConnection()
    const objId = new ObjectId(_id)
    await db.collection("products").deleteOne({ _id: objId })
    await db.collection("users").updateMany({ cart: _id }, { $pull: { cart: _id } })
    await fetchProductsDataAndUpdateFile()
  } catch (error) {
    console.log((error as Error).message)
    throw new Error((error as Error).message)
  }
}

"use server"
import { storeDatabaseConnection } from "@/connections/mongodb/connections"
import { Product, SearchQuery } from "@/typescript/interfaces"
import { ObjectId } from "mongodb"

export const getAllProducts = async (query: SearchQuery) => {
  try {
    const db = await storeDatabaseConnection()
    // Build the MongoDB query based on the provided search criteria
    const mongoQuery: any = {}
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
    if (query.minPrice && query.maxPrice) {
      mongoQuery.price = {
        $gte: parseFloat(query.minPrice),
        $lte: parseFloat(query.maxPrice),
      }
    }
    if (query.search) {
      mongoQuery.title = { $regex: query.search, $options: "i" }
    }
    // Execute the query and retrieve the products
    const filteredProducts: any = await db.collection("products").find(mongoQuery).toArray()
    return filteredProducts
  } catch (error) {
    console.log((error as Error).message)
    throw error
  }
}

export const getSingleProduct = async (_id: string) => {
  try {
    const db = await storeDatabaseConnection()
    const objId = new ObjectId(_id)
    const singleProduct: any = await db.collection("products").findOne({ _id: objId })
    return singleProduct
  } catch (error) {
    console.log((error as Error).message)
  }
}

export const deleteAllproducts = async () => {
  try {
    const db = await storeDatabaseConnection()
    db.collection("products").deleteMany({})
  } catch (error) {
    console.log((error as Error).message)
  }
}

export const createProduct = async (product: object) => {
  try {
    const db = await storeDatabaseConnection()
    await db.collection("products").insertOne(product)
  } catch (error) {
    console.log((error as Error).message)
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
          price: body.price,
          class: body.class,
          discount: body.discount,
          isOnDiscount: body.isOnDiscount,
          brand: body.brand,
          images: body.images
        }
        // }, $push: {
        //   images: body.images,
        // }
      }
    )
    return true
  } catch (error) {
    console.log((error as Error).message)
    return false
  }
}

export const deleteSingleProduct = async (_id: any) => {
  try {
    const db = await storeDatabaseConnection()
    const objId = new ObjectId(_id)
    await db.collection("products").deleteOne({ _id: objId })
    await db.collection("users").updateMany(
      { cart: _id },
      { $pull: { cart: _id } }
    );
  } catch (error) {
    console.log((error as Error).message)
  }
}

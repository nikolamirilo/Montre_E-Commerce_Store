"use server"
import { storeDatabaseConnection } from "@/connections/mongodb/connections"
import { ObjectId } from "mongodb"

export const getAllProducts = async () => {
  try {
    const db = await storeDatabaseConnection()
    const allProducts: any = await db.collection("products").find({}).toArray()
    return allProducts
  } catch (error) {
    console.log((error as Error).message)
  }
}

export const getSingleProduct = async (_id: string) => {
  try {
    const db = await storeDatabaseConnection()
    const objId = new ObjectId(_id)
    const singleProduct: any = await db
      .collection("products")
      .findOne({ _id: objId })
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

export const updateProduct = async (body: any) => {
  try {
    const db = await storeDatabaseConnection()
    const objId = new ObjectId(body._id)
    await db.collection("products").updateOne(
      { _id: objId },
      {
        $set: {
          isPublic: body.isPublic,
          location: body.location,
          category: body.category,
          title: body.title,
          description: body.description,
          images: body.images,
          price: body.price,
          class: body.class,
          brand: body.brand,
        },
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
  } catch (error) {
    console.log((error as Error).message)
  }
}

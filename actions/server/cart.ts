"use server"
import { storeDatabaseConnection } from "@/mongodb/connections"
import { currentUser } from "@clerk/nextjs"
import moment from "moment"
import { ObjectId } from "mongodb"
import { getSingleProduct } from "./products"
import { getSingleUser } from "./users"

export async function addItemToCart(uid: string | undefined, newCartItem: string | undefined) {
  try {
    const db = await storeDatabaseConnection()
    const user = await db.collection("users").findOne({ uid: uid })
    const product = await getSingleProduct(newCartItem!)
    // Check if the item already exists in the cart
    if (user && user.cart.some((item: any) => item._id.equals(new ObjectId(newCartItem)))) {
      console.log("Item already exists in the cart.")
      return "Duplicate"
    }
    const cartProduct = { ...product, quantity: 1 }
    await db.collection("users").updateOne(
      { uid: uid },
      {
        $push: {
          cart: cartProduct,
        },
      },
      {
        upsert: true,
      }
    )
    return "Success"
  } catch (error) {
    console.log((error as Error).message)
    return "Error"
  }
}
export async function getTotalData(uid: string | undefined) {
  try {
    const user = await currentUser()
    const userId = user?.id
    let total = 0
    if (userId) {
      const mongoUser = await getSingleUser(userId)

      if (mongoUser.cart.length > 0) {
        for (const item of mongoUser.cart) {
          const product = await getSingleProduct(item._id)
          if (product) {
            total +=
              (product.isOnDiscount ? product.discountedPrice : product.price) * item.quantity
          }
        }
      }
      return total
    }
  } catch (error) {
    console.error((error as Error).message)
  }
}
export async function deleteCartItem(uid: string | undefined, itemToDelete: string | undefined) {
  try {
    const db = await storeDatabaseConnection()
    await db.collection("users").updateOne(
      { uid: uid },
      {
        $pull: {
          cart: { _id: new ObjectId(itemToDelete) },
        },
      }
    )
    return true
  } catch (error) {
    console.error((error as Error).message)
    return false
  }
}

export async function updateItemCount(
  uid: string | undefined,
  modelId: string | undefined,
  count: number
) {
  try {
    const db = await storeDatabaseConnection()
    await db.collection("users").updateOne(
      { uid: uid, "cart._id": new ObjectId(modelId) },
      {
        $set: {
          "cart.$.quantity": count,
        },
      }
    )

    return true
  } catch (error) {
    console.log((error as Error).message)
    return false
  }
}

export async function orderCartItems(uid: string | undefined, customerInfo: object) {
  try {
    const db = await storeDatabaseConnection()
    const user = await db.collection("users").findOne({ uid: uid })

    if (!user) {
      console.log("User not found.")
      return false
    }

    if (!user.cart || user.cart.length === 0) {
      console.log("Cart is empty.")
      return false
    }

    // Calculate the total amount for each order
    var total = 400
    const currentDate = moment()
    const products = user.cart.map((item: any) => {
      total += (item.isOnDiscount == true ? item.discountedPrice : item.price) * item.quantity
      return {
        _id: item._id,
        title: item.title,
        price: item.price,
        class: item.class,
        category: item.category,
        brand: item.brand,
        description: item.description,
        isPublic: item.isPublic,
        discount: item.discount,
        discountedPrice: item.discountedPrice,
        isOnDiscount: item.isOnDiscount,
        images: item.images,
        quantity: item.quantity,
      }
    })
    const orders = {
      status: "ordered",
      total: total,
      products: products,
      customerInfo: customerInfo,
      date: currentDate.format("MMMM Do YYYY, h:mm:ss a"),
    }

    // Update the user document to move items from cart to order array
    await db.collection("users").updateOne(
      { uid: uid },
      {
        $push: {
          orders: orders,
        },
        $set: {
          cart: [],
        },
      }
    )
    console.log("Orders created successfully.")
    return true
  } catch (error) {
    console.log((error as Error).message)
    return false
  }
}
export async function orderSingleItem(productId: string | undefined, customerInfo: object) {
  try {
    const db = await storeDatabaseConnection()
    const product = await getSingleProduct(productId!)
    var total = (product.isOnDiscount == true ? product.discountedPrice : product.price) + 400
    const currentDate = moment()
    const order = {
      status: "ordered",
      total: total,
      product: product,
      customerInfo: customerInfo,
      date: currentDate.format("MMMM Do YYYY, h:mm:ss a"),
    }
    await db.collection("anonymus-orders").insertOne(order)
    console.log("Order created successfully.")
    return true
  } catch (error) {
    console.log((error as Error).message)
    return false
  }
}

"use server"
import { APP_URL, SHIPPING_COST } from "@/constants"
import { storeDatabaseConnection } from "@/lib/mongodb/connections"
import { CartItem, Product } from "@/typescript/types"
import moment from "moment"
import { ObjectId } from "mongodb"
import { revalidatePath } from "next/cache"
import { getSingleProduct } from "./products"
import { getSingleUser } from "./users"

export async function addItemToCart(uid: string | undefined, newCartItem: string): Promise<string> {
  try {
    if (!uid || !newCartItem) {
      console.error("Invalid parameters for addItemToCart function.")
      return "Error"
    }
    const db = await storeDatabaseConnection()
    const user = await db.collection("users").findOne({ uid: uid })
    if (user && user.cart.some((item: any) => item?.productCode === newCartItem)) {
      console.log("Item already exists in the cart.")
      return "Duplicate"
    }
    const product = await getSingleProduct(newCartItem)
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
    console.error("Error adding item to cart:", (error as Error).message)
    return "Error"
  }
}

export async function getTotalData(uid: string | undefined) {
  try {
    var total: number = 0
    if (uid) {
      const mongoUser = await getSingleUser(uid)
      if (mongoUser.cart.length > 0) {
        for (const item of mongoUser.cart) {
          const product = await getSingleProduct(item.productCode)
          if (product) {
            total += (((product.isOnDiscount as number)
              ? (product.discountedPrice as number)
              : (product.price as number)) * item.quantity) as number
          }
        }
      }
      return total as number
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
    console.log((error as Error).message)
    throw new Error((error as Error).message)
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
    throw new Error((error as Error).message)
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
    var total = SHIPPING_COST
    const currentDate = moment()
    const products = user.cart.map((item: CartItem) => {
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
    const order = {
      status: "ordered",
      total: total,
      products: products,
      customerInfo: customerInfo,
      date: currentDate.format("DD.MM.YYYY."),
    }

    // Update the user document to move items from cart to order array
    await db.collection("users").updateOne(
      { uid: uid },
      {
        $push: {
          orders: order,
        },
        $set: {
          cart: [],
        },
      }
    )
    const emailRes = await fetch(`${APP_URL}/api/send-email`, {
      method: "POST",
      body: JSON.stringify(order),
    })
    if (!emailRes.ok) {
      console.log(`Error: ${emailRes.statusText}`)
    }
    revalidatePath("/admin/orders", "page")
    return true
  } catch (error) {
    console.log((error as Error).message)
    throw new Error((error as Error).message)
  }
}
export async function orderSingleItem(productId: string | undefined, customerInfo: object) {
  try {
    const db = await storeDatabaseConnection()
    const product: Product = await getSingleProduct(productId!)
    const extendedProduct = { ...product, quantity: 1 }
    if (product) {
      var total = (product.isOnDiscount ? product.discountedPrice : product.price) + SHIPPING_COST
      const currentDate = moment()
      const order = {
        status: "ordered",
        total: total,
        products: [extendedProduct],
        customerInfo: customerInfo,
        date: currentDate.format("DD.MM.YYYY."),
      }
      await db.collection("anonymus-orders").insertOne(order)
      const emailRes = await fetch(`${APP_URL}/api/send-email`, {
        method: "POST",

        body: JSON.stringify(order),
      })
      if (!emailRes.ok) {
        console.log(`Error: ${emailRes.statusText}`)
      }
      console.log("Order created successfully.")
      return true
    }
  } catch (error) {
    console.log((error as Error).message)
    throw new Error((error as Error).message)
  }
}

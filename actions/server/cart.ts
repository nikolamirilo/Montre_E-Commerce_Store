"use server"
import { APP_URL, SHIPPING_COST } from "@/constants"
import { fetchData } from "@/helpers/client"
import { revalidateTagCustom } from "@/helpers/server"
import { storeDatabaseConnection } from "@/lib/mongodb/connections"
import { Product } from "@/typescript/types"
import moment from "moment"
import { getSingleProduct } from "./products"

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
    const cartProduct = { productCode: product.productCode, quantity: 1 }
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
    revalidateTagCustom("users")
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
      const mongoUser = await fetchData(`${APP_URL}/api/users/single-user`, {
        method: "POST",
        cache: "force-cache",
        tags: ["users"],
        body: JSON.stringify({ uid: uid }),
      })
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
          cart: { productCode: itemToDelete },
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
    // Update the quantity of the specified item in the user's cart
    await db.collection("users").updateOne(
      { uid: uid, "cart.productCode": modelId },
      {
        $set: {
          "cart.$.quantity": count,
        },
      }
    )

    return true
  } catch (error) {
    console.error("Error updating item count:", error)
    throw new Error("Failed to update item count.")
  }
}

export async function orderCartItems(uid: string, customerInfo: object) {
  try {
    const db = await storeDatabaseConnection()
    const user = await db.collection("users").findOne({ uid: uid })
    const cartItems = user?.cart

    if (!user) {
      console.log("User not found.")
      return false
    }

    if (!cartItems || cartItems.length === 0) {
      console.log("Cart is empty.")
      return false
    }

    // Calculate the total amount for each order
    const productsTotal = await getTotalData(uid)
    if (!productsTotal) {
      console.log("Error calculating products total.")
      return false
    }

    const total = SHIPPING_COST + productsTotal
    const currentDate = moment().format("DD.MM.YYYY.")
    const products = []

    for (const item of cartItems) {
      const product = await getSingleProduct(item.productCode)
      const cartItem = { ...product, quantity: item.quantity }
      products.push(cartItem)
    }

    const order = {
      isHandled: false,
      total,
      products,
      customerInfo,
      date: currentDate,
    }
    // Update the user document to move items from cart to order array
    await db.collection("users").updateOne(
      { uid: uid },
      {
        $push: { orders: order },
        $set: { cart: [] },
      }
    )

    const emailRes = await fetch(`${APP_URL}/api/send-email`, {
      method: "POST",
      body: JSON.stringify(order),
    })

    if (!emailRes.ok) {
      console.log(`Error: ${emailRes.statusText}`)
    }

    revalidateTagCustom("orders")

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
        isHandled: false,
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

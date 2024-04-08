"use server"
import { storeDatabaseConnection } from "@/lib/mongodb/connections"
import { ObjectId } from "mongodb"

export const getAllUsers = async () => {
  try {
    const db = await storeDatabaseConnection()
    const allUsers = await db.collection("users").find({}).toArray()
    return allUsers
  } catch (error) {
    console.error((error as Error).message)
    throw new Error((error as Error).message)
  }
}

export async function createNewUser(user: any) {
  try {
    const db = await storeDatabaseConnection()
    await db.collection("users").insertOne(user)
  } catch (error) {
    console.log((error as Error).message)
    throw new Error((error as Error).message)
  }
}

export const getSingleUser = async (uid: string | undefined) => {
  try {
    const db = await storeDatabaseConnection()
    const singleUser: any = await db.collection("users").findOne({ uid: uid })
    return singleUser
  } catch (error) {
    console.log((error as Error).message)
    throw new Error((error as Error).message)
  }
}
export const updateSingleUser = async (body: any) => {
  try {
    const db = await storeDatabaseConnection()
    const objId = new ObjectId(body.uid)
    await db.collection("users").updateOne(
      { _id: objId },
      {
        $set: {
          fullName: body.fullName,
          email: body.email,
        },
      }
    )
    return true
  } catch (error) {
    console.log((error as Error).message)
    throw new Error((error as Error).message)
  }
}

export const deleteSingleUser = async (uid: string) => {
  try {
    const db = await storeDatabaseConnection()
    await db.collection("users").deleteOne({ uid: uid })
  } catch (error) {
    console.log((error as Error).message)
    throw new Error((error as Error).message)
  }
}

export const getAllOrders = async () => {
  try {
    const db = await storeDatabaseConnection()
    const anonymusOrders = await db.collection("anonymus-orders").find({}).toArray()
    const allUsers = await getAllUsers()
    const orders = anonymusOrders
    allUsers.forEach((user: any) => {
      if (user.orders && user.orders.length > 0) {
        user.orders.forEach((order: any) => {
          orders.push(order)
        })
      }
    })
    return orders
  } catch (error) {
    console.error((error as Error).message)
    throw new Error((error as Error).message)
  }
}

export async function updateOrder(orderId: string, isHandledInput: boolean) {
  let firstUpdateSucceeded = false
  try {
    const db = await storeDatabaseConnection()
    const objId = new ObjectId(orderId)

    // First update operation
    await db.collection("anonymus-orders").updateOne(
      { _id: objId },
      {
        $set: {
          isHandled: isHandledInput,
        },
      }
    )
    firstUpdateSucceeded = true
  } catch (error: any) {
    console.error("First update failed:", error.message)
    // Throw error to indicate failure
    throw new Error("Failed to update order in anonymus-orders collection")
  }

  // If first update succeeded or if it failed, attempt second update
  try {
    const db = await storeDatabaseConnection()
    const objId = new ObjectId(orderId)

    if (firstUpdateSucceeded) {
      // Second update operation
      await db.collection("users").updateOne(
        { "orders._id": objId },
        {
          $set: {
            "orders.$.isHandled": isHandledInput,
          },
        }
      )
    }
    return true
  } catch (error: any) {
    console.error("Second update failed:", error.message)
    // Throw error to indicate failure
    throw new Error("Failed to update order in users collection")
  }
}

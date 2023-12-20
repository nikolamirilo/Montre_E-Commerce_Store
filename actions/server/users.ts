"use server"
import { storeDatabaseConnection } from "@/mongodb/connections"

export async function createNewUser(user:any){
  try {
    const db = await storeDatabaseConnection()
    await db.collection("users").insertOne(user)
  } catch (error) {
    console.log((error as Error).message)
  }
}

export const getSingleUser = async (uid: string | undefined) => {
  try {
    const db = await storeDatabaseConnection()
    const singleUser: any = await db.collection("users").findOne({ uid: uid })
    return singleUser
  } catch (error) {
    console.log((error as Error).message)
  }
}

export const deleteSingleUser = async (uid: string) => {
  try {
    const db = await storeDatabaseConnection()
    await db.collection("users").deleteOne({ uid: uid })
  } catch (error) {
    console.log((error as Error).message)
  }
}

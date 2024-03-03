import clientPromise from "./index"

export const storeDatabaseConnection = async () => {
  try {
    const client = await clientPromise
    const db = client.db("Store")
    return db
  } catch (error) {
    console.error("Error establishing database connection:", error)
    throw error
  }
}

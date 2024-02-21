import clientPromise from "./index"

export const storeDatabaseConnection = async () => {
  const client = await clientPromise
  const db = client.db("Store")
  return db
}

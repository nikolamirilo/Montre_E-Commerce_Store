import { ObjectId } from "mongodb"

export async function getAllUsers() {
  try {
    const res = await fetch(`${process.env.MONGO_DB_URL!}/action/find`, {
      cache: "no-cache",
      method: "POST",
      headers: {
        "api-key": process.env.MONGO_DB_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dataSource: "MainCluster",
        database: "Store",
        collection: "users",
      }),
    })

    if (!res.ok) {
      console.log(res)
    }
    return res.json()
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}
export async function getSingleUser(uid: string) {
  try {
    const res = await fetch(`${process.env.MONGO_DB_URL!}/action/findOne`, {
      cache: "no-cache",
      method: "POST",
      headers: {
        "api-key": process.env.MONGO_DB_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dataSource: "MainCluster",
        database: "Store",
        collection: "users",
        filter: { _id: new ObjectId(uid) },
      }),
    })

    if (!res.ok) {
      console.log(res)
    }
    return res.json()
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

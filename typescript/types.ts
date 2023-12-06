import { MongoClient } from "mongodb"

declare global {
  var _mongoClientPromise: Promise<MongoClient>
}

export type Role = "admin" | "customer"

export type Model = {
  id: string
  quantity: string
  price: string
}

export type Order = {
  state: "draft" | "active"
  models: Model[]
}

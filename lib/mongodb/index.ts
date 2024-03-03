import { MongoClient } from "mongodb"

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const options = {
  minPoolSize: 10,
  maxPoolSize: 20,
  connectTimeoutMS: 60000,
  serverSelectionTimeoutMS: 60000,
}

let client: any
let clientPromise: any

let attempt: number = 1
const retries: number = 2

try {
  if (process.env.NEXT_PUBLIC_APP_ENV === "development") {
    let globalWithMongo = global
    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options)
      globalWithMongo._mongoClientPromise = client.connect()
    }
    clientPromise = globalWithMongo._mongoClientPromise
  } else {
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
    console.log(`Successfully connected after ${attempt} ${attempt > 1 ? "attempts" : "attempt"}`)
  }
} catch (error) {
  console.log(`error\n`, error)
  console.log(`Trying again...`)

  if (attempt < retries) {
    attempt += 1
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
    console.log(`Successfully connected after ${attempt} ${attempt > 1 ? "attempts" : "attempt"}`)
  }
}
export default clientPromise

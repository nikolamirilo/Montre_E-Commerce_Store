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

let client
let clientPromise

let attempt = 1
const retries = 2

try {
  if (process.env.NEXT_PUBLIC_APP_ENV === "development") {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    let globalWithMongo = global

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options)
      globalWithMongo._mongoClientPromise = client.connect()
    }
    clientPromise = globalWithMongo._mongoClientPromise
  } else {
    // In production mode, it's best to not use a global variable.
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

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise

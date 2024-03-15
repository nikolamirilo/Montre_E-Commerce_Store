import { MongoClient, ObjectId } from "mongodb"

declare global {
  var _mongoClientPromise: Promise<MongoClient>
}

export type Role = "admin" | "customer"

export type Product = {
  _id?: ObjectId | string
  isPublic: boolean
  productCode: string
  category: string
  title: string
  description: string
  typ: string
  diameter: string
  images: string[]
  price: number
  isOnDiscount: boolean
  discount: number | null
  class: string
  brand: string
  discountedPrice: number
  isRecommended: boolean
  isOutOfStock: boolean
}
export type ProductWithoutId = Omit<Product, "_id">

export type ProductsContextValue = {
  products: Product[] | null
}

export type CartItem = ProductWithoutId & {
  _id: ObjectId
  quantity: number
}

export type CustomerInfo = {
  fullName: string
  email: string
  city: string
  phone: string
  note?: string
  zipCode: string
  address: string
}

export type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[]
}

export type OrderedProduct = Product

export type SearchQuery = {
  length?: string
  text?: string
  isOnDiscount?: boolean
  class?: string
  brand?: string
  category?: string
  minPrice?: string
  maxPrice?: string
  isRecommended?: boolean
}

export type FetchOptions = {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  cache: "force-cache" | "no-cache" | "no-store"
  body?: BodyInit
  tags: string[]
}

export type FormInitialData = {
  _id: string
  title: string
  productCode: string
  diameter: string
  typ: string
  price: string
  category: string
  class: string
  brand: string
  description: string
  isPublic: boolean
  discount: string
  images: string[]
  isOutOfStock: boolean
  isRecommended: boolean
}

export type User = {
  _id?: string
  fullName: string
  image?: string
  orders?: Order[]
  cart?: string[]
  role: Role
  address?: string
  city?: string
  postalCode?: number
}

export type Order = {
  status: string
  total: number
  date: Date
  customerInfo: CustomerInfo
  products: Product[]
}

export type PageDescription = {
  title: string
  description: string
  link: string
}
export type Option = {
  value: string
  label: string
}
export type SortType = "ASC" | "DESC"

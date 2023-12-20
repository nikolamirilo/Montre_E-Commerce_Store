import { Role } from "./types"

export interface User {
  _id?: string
  fullName: string
  image?: string
  orders?: Object[]
  cart?:string[]
  role: Role
  address?: string
  city?: string
  postalCode?: number
}

export interface Product {
  _id?: string
  isPublic: boolean
  category: string
  title: string
  description: string
  images: string[]
  price: number
  isOnDiscount: boolean
  discount: number
  class: string
  brand: string
  discountedPrice?:number
}

export interface CartItemProps {
  uid?: string
  _id?: string
  title: string
  category: string
  productClass: string
  price: number
  image: string
  isOnDiscount: boolean
  discountedPrice: number
}

export interface SearchQuery {
  length?: string
  search?: string
  isOnDiscount?: boolean
  class?: string
  brand?: string
  category?: string
  minPrice?: string
  maxPrice?: string
}

export interface FormInitialData {
  _id: string
  title: string
  price: string
  category: string
  class: string
  brand: string
  description: string
  isPublic: boolean
  discount: string
  images: string[]
}
export interface CardProps {
  _id?: string
  title: string
  images: string[]
  price: number
  isOnDiscount: boolean
  discountedPrice?: number
  discount: number
  productClass: string
  type?: string
}

export interface CloudinaryResponse {
  asset_id: string
  public_id: string
  version: number
  version_id: string
  signature: string
  width: number
  height: number
  format: string
  resource_type: string
  created_at: string
  tags: []
  bytes: number
  type: string
  etag: string
  placeholder: boolean
  url: string
  secure_url: string
  folder: string
  access_mode: string
  existing: boolean
  original_filename: string
}

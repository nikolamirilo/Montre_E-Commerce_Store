import { Role } from "./types"

export interface User {
  _id?: string
  fullName: string
  image?: string
  orders?: Object[]
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
  price: string
  isOnDiscount: boolean
  discount: string
  class: string
  brand: string
}

export interface CartItemProps {
  title: string
  category: string
  productClass: string
  price: string
  image: string
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
  price: string
  isOnDiscount: boolean
  discount: string
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

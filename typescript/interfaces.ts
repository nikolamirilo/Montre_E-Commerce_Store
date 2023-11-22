export interface User {
  _id?: string
  full_name: string
  image: string
  orders: Object[]
  user_group: string //admin OR customer
  address: string
  city: string
  postal_code: number
}

export interface Product {
  _id?: string
  isPublic: boolean
  location: string
  category: string
  title: string
  description: string
  images: string[]
  price: number
  class: string
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
  images: string[]
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

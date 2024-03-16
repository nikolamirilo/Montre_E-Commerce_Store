import { ObjectId } from "mongodb"
import { Dispatch, FormEvent, LegacyRef, RefObject, SetStateAction } from "react"
import { CustomerInfo, FormInitialData, Option, Product, SearchQuery } from "./types"

export interface CartItemProps {
  type?: string
  uid?: string
  _id?: string
  title: string
  productCode: string
  category: string
  productClass: string
  price: number
  image: string
  isOnDiscount: boolean
  discountedPrice: number
  quantity: number
}
export interface ProductCardProps {
  _id?: ObjectId | string
  title: string
  productCode: string
  image: string
  price: number
  isOnDiscount: boolean
  discountedPrice?: number
  discount: number | null
  productClass: string
  type?: string
  isOutOfStock?: boolean
}
export interface OrderProductFormProps {
  type: string
  product?: Product
  cartItems?: []
  fullNameInput: RefObject<HTMLInputElement>
  emailInput: RefObject<HTMLInputElement>
  phoneInput: RefObject<HTMLInputElement>
  addressInput: RefObject<HTMLInputElement>
  cityInput: RefObject<HTMLInputElement>
  zipCodeInput: RefObject<HTMLInputElement>
  noteInput: RefObject<HTMLTextAreaElement>
  handleOrder: (e: any) => Promise<void>
  total: number
  progress: number
  initialCustomerData?: CustomerInfo
}

export interface ProductFormProps {
  action: string
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  displayTitle: string
  form: RefObject<HTMLFormElement>
  titleInput: RefObject<HTMLInputElement>
  descriptionInput: RefObject<HTMLTextAreaElement>
  classInput: LegacyRef<HTMLSelectElement>
  categoryInput: LegacyRef<HTMLSelectElement>
  brandInput: LegacyRef<HTMLSelectElement>
  priceInput: RefObject<HTMLInputElement>
  typInput: LegacyRef<HTMLSelectElement>
  diameterInput: RefObject<HTMLInputElement>
  isPublicInput: RefObject<HTMLInputElement>
  discountInput: RefObject<HTMLInputElement>
  imagesInput: RefObject<HTMLInputElement>
  isRecommendedInput: RefObject<HTMLInputElement>
  isOutOfStockInput: RefObject<HTMLInputElement>
  handleFormSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
  displayImages: string[]
  handleDeleteImage: (idx: number) => void
  handleInputImageChange: () => void
  progress: number
}

export interface EditProductProps {
  initialData: FormInitialData
}

export interface OrderTemplateProps {
  products: Product[]
  customerInfo: any
  total: number
}
export interface ContactTemplateProps {
  email?: string
  message: string
  subject: string
}
export interface InfoModalProps {
  type?: string
  title: string
  subtitle: string
  closeModal?: () => void
  confirmAction?: () => void
}

export interface AddToCartButtonProps {
  uid: string | undefined
  id: string
  type: string
}

export interface ProductsProps {
  query: any
  title: string
  subtitle?: string
  type?: string
}

export interface SearchProps {
  type: string
  params: SearchQuery
}
export interface ImageModalProps {
  closeModal: () => void
  handlePreviousSlide: () => void
  handleNextSlide: () => void
  image: string
}
export interface FormElementProps {
  inputRef?: RefObject<HTMLInputElement>
  textAreaRef?: RefObject<HTMLTextAreaElement>
  selectRef?: LegacyRef<HTMLSelectElement>
  type?: string
  options?: Option[]
  placeholder?: string
  name: string
  label: string
  isRequired: boolean
  defaultValue?: string | number | readonly string[] | undefined
}
export interface LabelProps {
  title: string
  value: string
}

"use client"
import { handleOrderProducts } from "@/actions/client/cart"
import { getSingleProduct } from "@/actions/server/products"
import OrderForm from "@/components/OrderForm"
import { SHIPPING_COST } from "@/constants"
import { revalidateData } from "@/helpers/server"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const OrderSingleProduct = ({ params }: { params: { id: string } }) => {
  const productId = params.id
  const router = useRouter()
  const [product, setProduct] = useState<any>(null)
  const fullNameInput = useRef<HTMLInputElement>(null)
  const emailInput = useRef<HTMLInputElement>(null)
  const cityInput = useRef<HTMLInputElement>(null)
  const phoneInput = useRef<HTMLInputElement>(null)
  const noteInput = useRef<HTMLTextAreaElement>(null)
  const zipCodeInput = useRef<HTMLInputElement>(null)
  const adressInput = useRef<HTMLInputElement>(null)

  async function handleOrder(e: any) {
    e.preventDefault()
    const customerInfo = {
      fullName: fullNameInput.current!.value,
      email: emailInput.current!.value,
      city: cityInput.current!.value,
      phone: phoneInput.current!.value,
      note: noteInput.current!.value,
      zipCode: zipCodeInput.current!.value,
      adress: adressInput.current!.value,
    }
    const isOrdered = await handleOrderProducts(productId, customerInfo, false)
    if (isOrdered == true) {
      revalidateData()
      router.push("/thank-you")
    }
  }
  useEffect(() => {
    const getProduct = async () => {
      const res = await getSingleProduct(productId)
      setProduct(res)
    }
    getProduct()
  }, [])
  const total =
    (product?.isOnDiscount == true ? product?.discountedPrice : product?.price) + SHIPPING_COST
  if (product)
    return (
      <OrderForm
        type="single-item"
        product={product}
        fullNameInput={fullNameInput}
        emailInput={emailInput}
        phoneInput={phoneInput}
        adressInput={adressInput}
        cityInput={cityInput}
        zipCodeInput={zipCodeInput}
        noteInput={noteInput}
        handleOrder={handleOrder}
        total={total}
      />
    )
}

export default OrderSingleProduct

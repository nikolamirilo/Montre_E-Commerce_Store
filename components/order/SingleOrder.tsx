"use client"
import { handleOrderProducts } from "@/actions/client/cart"
import { getSingleProduct } from "@/actions/server/products"
import OrderProductForm from "@/components/forms/OrderProductForm"
import { SHIPPING_COST } from "@/constants"
import { revalidateProductsData } from "@/helpers/server"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const SingleOrder = ({ id }: { id: string }) => {
  const productCode = id
  const router = useRouter()
  const [product, setProduct] = useState<any>(null)
  const fullNameInput = useRef<HTMLInputElement>(null)
  const emailInput = useRef<HTMLInputElement>(null)
  const cityInput = useRef<HTMLInputElement>(null)
  const phoneInput = useRef<HTMLInputElement>(null)
  const [progress, setProgress] = useState<number>(0)
  const noteInput = useRef<HTMLTextAreaElement>(null)
  const zipCodeInput = useRef<HTMLInputElement>(null)
  const addressInput = useRef<HTMLInputElement>(null)

  async function handleOrder(e: any) {
    e.preventDefault()
    setProgress(50)
    const customerInfo = {
      fullName: fullNameInput.current!.value,
      email: emailInput.current!.value,
      city: cityInput.current!.value,
      phone: phoneInput.current!.value,
      note: noteInput.current!.value,
      zipCode: zipCodeInput.current!.value,
      address: addressInput.current!.value,
    }
    const isOrdered = await handleOrderProducts(productCode, customerInfo, false)
    if (isOrdered == true) {
      revalidateProductsData()
      setProgress(100)
      router.push("/thank-you")
    }
  }
  useEffect(() => {
    setProgress(0)
    const getProduct = async () => {
      const res = await getSingleProduct(productCode)
      setProduct(res)
    }
    getProduct()
  }, [])
  const total =
    (product?.isOnDiscount == true ? product?.discountedPrice : product?.price) + SHIPPING_COST
  if (product)
    return (
      <OrderProductForm
        type="single-item"
        product={product}
        fullNameInput={fullNameInput}
        emailInput={emailInput}
        phoneInput={phoneInput}
        addressInput={addressInput}
        cityInput={cityInput}
        zipCodeInput={zipCodeInput}
        noteInput={noteInput}
        handleOrder={handleOrder}
        total={total}
        progress={progress}
      />
    )
}

export default SingleOrder

"use client"
import { handleOrderProducts } from "@/actions/client/cart"
import { getTotalData } from "@/actions/server/cart"
import { getSingleProduct } from "@/actions/server/products"
import { APP_URL, SHIPPING_COST } from "@/constants"
import { fetchData } from "@/helpers/client"
import { revalidateTagCustom } from "@/helpers/server"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import OrderProductForm from "../forms/OrderProductForm"

const MultipleOrder = () => {
  const clerkUser = useUser()
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [cartItems, setCartItems] = useState<any>([])
  const [total, setTotal] = useState<number>(0)
  const [progress, setProgress] = useState<number>(50)
  const fullNameInput = useRef<HTMLInputElement>(null)
  const emailInput = useRef<HTMLInputElement>(null)
  const cityInput = useRef<HTMLInputElement>(null)
  const phoneInput = useRef<HTMLInputElement>(null)
  const noteInput = useRef<HTMLTextAreaElement>(null)
  const zipCodeInput = useRef<HTMLInputElement>(null)
  const addressInput = useRef<HTMLInputElement>(null)
  const uid = clerkUser?.user?.id

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
    const isOrdered = await handleOrderProducts(uid, customerInfo, true)
    if (isOrdered == true) {
      revalidateTagCustom("users")
      setProgress(100)
      router.push("/thank-you")
    } else {
      setProgress(0)
    }
  }

  useEffect(() => {
    setProgress(0)
    const getUserData = async () => {
      const res = await fetchData(`${APP_URL}/api/users/single-user`, {
        method: "POST",
        cache: "force-cache",
        body: JSON.stringify({ uid: uid }),
        tags: ["users"],
      })
      if (res) {
        setUser(res)
        const totalRes: any = await getTotalData(uid)
        // Create a temporary array to store cart items
        const tempCartItems = []
        for (const item of res.cart) {
          const singleProduct = await getSingleProduct(item.productCode)
          const cartItem = { ...singleProduct, quantity: item.quantity }
          tempCartItems.push(cartItem) // Push each cart item to the temporary array
        }
        // Set cart items once all items are fetched
        setCartItems(tempCartItems)
        setTotal(totalRes! + SHIPPING_COST)
      }
    }
    getUserData()
  }, []) //

  var initialCustomerInfoData: any = {}

  if (user != null) {
    if (user.orders) {
      const lastItemIndex: number = user.orders.length - 1
      initialCustomerInfoData = user.orders[lastItemIndex]?.customerInfo
    }
    return (
      <OrderProductForm
        type="multiple-items"
        initialCustomerData={initialCustomerInfoData}
        cartItems={cartItems}
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
}
export default MultipleOrder

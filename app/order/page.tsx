"use client"
import { handleOrderProducts } from "@/actions/client/cart"
import { getTotalData } from "@/actions/server/cart"
import { getSingleUser } from "@/actions/server/users"
import OrderForm from "@/components/OrderForm"
import { revalidateData } from "@/helpers/server"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
export const revalidate = 0
export const dynamic = "force-dynamic"
const Order = () => {
  const clerkUser = useUser()
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [total, setTotal] = useState<number>(0)
  const fullNameInput = useRef<HTMLInputElement>(null)
  const emailInput = useRef<HTMLInputElement>(null)
  const cityInput = useRef<HTMLInputElement>(null)
  const phoneInput = useRef<HTMLInputElement>(null)
  const noteInput = useRef<HTMLTextAreaElement>(null)
  const zipCodeInput = useRef<HTMLInputElement>(null)
  const adressInput = useRef<HTMLInputElement>(null)
  const uid = clerkUser?.user?.id
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
    const isOrdered = await handleOrderProducts(uid, customerInfo, true)
    if (isOrdered == true) {
      revalidateData()
      router.push("/thank-you")
    }
  }

  useEffect(() => {
    const getUser = async () => {
      const res = await getSingleUser(uid)
      setUser(res)
      const totalRes = await getTotalData(uid)
      setTotal(totalRes! + 400)
    }
    getUser()
  }, [])
  if (user != null)
    return (
      <OrderForm
        type="multiple-items"
        cartItems={user?.cart}
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

export default Order

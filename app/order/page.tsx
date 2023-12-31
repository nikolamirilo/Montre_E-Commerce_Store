"use client"
import { handleOrderProducts } from "@/actions/client/cart"
import { getTotalData } from "@/actions/server/cart"
import { getSingleUser } from "@/actions/server/users"
import Loader from "@/components/Loader"
import OrderForm from "@/components/OrderForm"
import { SHIPPING_COST } from "@/constants"
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
  const [progress, setProgress] = useState<number>(50)
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
    setProgress(50)
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
      setProgress(100)
      router.push("/thank-you")
    } else {
      setProgress(0)
    }
  }

  useEffect(() => {
    setProgress(0)
    const getUser = async () => {
      const res = await getSingleUser(uid)
      setUser(res)
      const totalRes = await getTotalData(uid)
      setTotal(totalRes! + SHIPPING_COST)
    }
    getUser()
  }, [])
  if (user != null)
    return (
      <>
        <div
          className={`absolute flex flex-row justify-center items-center w-full h-full bg-black/80 z-20 ${
            progress == 50 ? "block" : "hidden"
          }`}>
          <Loader />
        </div>
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
          progress={progress}
        />
      </>
    )
}

export default Order

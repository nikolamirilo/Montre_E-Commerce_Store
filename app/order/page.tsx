"use client"
import { getTotalData, orderCartItems } from "@/actions/server/cart"
import { getSingleUser } from "@/actions/server/users"
import { revalidateData } from "@/helpers/server"
import { useUser } from "@clerk/nextjs"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
export const revalidate = 0
export const dynamic = "force-dynamic"
const Order = () => {
  const clerkUser = useUser()
  const [displayImages, setDisplayImages] = useState<string[]>([])
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
    const isOrdered = await orderCartItems(uid)
    if (isOrdered == true) {
      //Navigate to Thank you page/User Profile page
      //Send email for confirmation
      revalidateData()
      alert("Vaša porudžbina je primljena")
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
      <div className="flex items-center justify-center" id="order">
        <div className="flex justify-center items-center lg:py-10 w-full">
          <div className="w-full md:w-10/12 lg:w-2/3 xl:w-1/2 md:mt-5 lg:mt-2 bg-white block rounded-lg px-4 py-16 sm:p-4 lg:p-16 md:border-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="text-center">
              <Image
                className="mx-auto"
                src="/MontreLogoTransparent.png"
                alt="Leafs"
                width={160}
                height={120}
              />
              {/* <h2 className="mt-6 text-2xl font-bold text-gray-900"></h2> */}
            </div>
            <form className="mt-8 flex flex-col w-full gap-2" encType="multipart/Order-data">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium leading-5 text-gray-700">
                  Ime i prezime:
                </label>
                <div className="mt-1">
                  <input
                    required
                    ref={fullNameInput}
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:border-2 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 text-gray-700">
                  Email:
                </label>
                <div className="mt-1">
                  <input
                    required
                    ref={emailInput}
                    id="email"
                    name="email"
                    type="text"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:border-2 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-5 text-gray-700">
                  Broj telefona:
                </label>
                <div className="mt-1">
                  <input
                    required
                    ref={phoneInput}
                    id="phone"
                    name="phone"
                    type="text"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:border-2 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="adress"
                  className="block text-sm font-medium leading-5 text-gray-700">
                  Adresa:
                </label>
                <div className="mt-1">
                  <input
                    required
                    ref={adressInput}
                    id="adress"
                    name="adress"
                    type="text"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:border-2 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium leading-5 text-gray-700">
                  Grad:
                </label>
                <div className="mt-1">
                  <input
                    required
                    ref={cityInput}
                    id="city"
                    name="city"
                    type="text"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:border-2 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="zip" className="block text-sm font-medium leading-5 text-gray-700">
                  Poštanski broj:
                </label>
                <div className="mt-1">
                  <input
                    required
                    ref={zipCodeInput}
                    id="zip"
                    name="zip"
                    type="text"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:border-2 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="note" className="block text-sm font-medium leading-5 text-gray-700">
                  Napomena:
                </label>
                <div className="mt-1">
                  <textarea
                    ref={noteInput}
                    id="note"
                    name="note"
                    rows={4}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:border-2 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="image-upload"
                  className="block text-sm font-medium leading-5 text-gray-700">
                  Izabrani proizvodi:
                </label>
                <div className="mt-2">
                  <div className="flex flex-col w-full gap-2">
                    <div
                      className={`flex flex-row flex-wrap gap-2 items-center justify-center w-full min-h-[10rem] h-fit py-6 md:border md:border-gray-300 rounded-lg bg-white`}>
                      {user.cart.length > 0
                        ? user.cart.map((product: any, idx: number) => {
                            return (
                              <div className="relative h-64 w-10/12 sm:w-52" key={idx}>
                                <h2 className="absolute bottom-0 right-0 text-center text-md text-white bg-amber-500 z-10 w-full">
                                  {product.title}
                                </h2>
                                <Image
                                  src={product.images[0]}
                                  fill
                                  priority
                                  className="object-cover object-center"
                                  alt="Input Picture"
                                />
                              </div>
                            )
                          })
                        : null}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="costs"
                  className="block text-sm font-medium leading-5 text-gray-700">
                  Ukupni troškovi:
                </label>
                <div className="mt-1">
                  <span> {total!.toLocaleString().replace(",", ".")},00 RSD</span>
                </div>
              </div>
              <div className="mt-2">
                <button
                  onClick={handleOrder}
                  id="submit-button"
                  className="uppercase w-full flex justify-center py-2 px-4 text-white rounded-md">
                  Naruči
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Order

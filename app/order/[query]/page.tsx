"use client"
import { getSingleUser } from "@/actions/server/users"
import { useUser } from "@clerk/nextjs"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { BsTrash3 } from "react-icons/bs"

const Order = ({ params }: { params: { query: string } }) => {
  const [displayImages, setDisplayImages] = useState<string[]>([])
  const [user, setUser] = useState<any>(null)
  const fullNameInput = useRef<HTMLInputElement>(null)
  const cityInput = useRef<HTMLInputElement>(null)
  const phoneInput = useRef<HTMLInputElement>(null)
  const noteInput = useRef<HTMLTextAreaElement>(null)
  const adressInput = useRef<HTMLInputElement>(null)
  var images: string[] = []
  var products = []

  // const query = decodeURIComponent(params.query)
  // const regex = /id-(\w+)&q-(\d+)/g
  // let match
  // const products = []
  // while ((match = regex.exec(query)) !== null) {
  //   const productId = match[1]
  //   const quantity = parseInt(match[2], 10)
  //   products.push({ productId, quantity })
  // }
  // console.log(products)
  const clerkUser = useUser()
  console.log(clerkUser)
  useEffect(() => {
    const getUser = async () => {
      const res = await getSingleUser(clerkUser?.user?.id)
      setUser(res)
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
              <h2 className="mt-6 text-2xl font-bold text-gray-900 uppercase">Poruči:</h2>
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
                <label htmlFor="note" className="block text-sm font-medium leading-5 text-gray-700">
                  Napomena:
                </label>
                <div className="mt-1">
                  <textarea
                    required
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
                      className={`relative flex-row flex-wrap gap-1 items-center justify-center bg-center bg-cover w-full min-h-[10rem] h-fit py-6 md:border md:border-gray-300 rounded-lg bg-white`}>
                      {user.cart.length > 0
                        ? user.cart.map(async (item: any, idx: number) => {
                            // const singleProduct = await getSingleProduct(item.model_id)
                            return (
                              <div
                                className="relative w-full h-52 md:w-1/2 xl:w-[30%] cursor-pointer"
                                key={idx}>
                                <button
                                  id="delete"
                                  className="absolute top-0 right-0 p-1 rounded-full bg-red-500 text-white z-10">
                                  <BsTrash3 size={25} />
                                </button>

                                <Image
                                  src={item.image}
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
                  <span>12.000din</span>
                </div>
              </div>

              <div className="mt-2">
                <button
                  type="submit"
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

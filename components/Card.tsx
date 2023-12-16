"use client"
import { addItemToCart } from "@/actions/server/cart"
import { deleteSingleProduct } from "@/actions/server/products"
import { revalidateData } from "@/helpers"
import { CardProps } from "@/typescript/interfaces"
import { useUser } from "@clerk/nextjs"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"
import { BsCart3, BsTrash3 } from "react-icons/bs"
import { MdOutlineModeEditOutline } from "react-icons/md"

const Card: React.FC<CardProps> = ({
  _id,
  title,
  images,
  price,
  productClass,
  discount,
  isOnDiscount,
  discountedPrice,
  type,
}) => {
  const router = useRouter()
  const { user } = useUser()

  async function handleDeleteProduct() {
    await deleteSingleProduct(_id)
    revalidateData()
  }

  async function handleAddItemToCart() {
    const uid = user?.id
    const res = await addItemToCart(uid, _id)
    if (res == "Success") {
      alert("Proizvod je dodat u korpu")
    } else if (res == "Duplicate") {
      alert("Proizvod ste već dodali u korpu")
    } else {
      alert("Greška")
    }
    revalidateData()
  }
  const displayPrice = isOnDiscount ? discountedPrice : price
  return (
    <div className="max-w-xl">
      <div className="bg-white shadow-xl rounded-lg max-w-lg relative">
        {user?.primaryEmailAddress?.emailAddress == "satovi.montre@gmail.com" ? (
          <div className="admin-buttons -top-[6px] right-1 z-10 flex flex-row gap-1 absolute">
            <button
              id="edit"
              className="p-1 rounded-full hover:bg-amber-500 hover:text-white"
              onClick={() => {
                router.push(`/products/watches/${_id}/edit`)
              }}>
              <MdOutlineModeEditOutline size={30} />
            </button>
            <button
              id="delete"
              className="p-1 rounded-full hover:bg-red-500 hover:text-white"
              onClick={handleDeleteProduct}>
              <BsTrash3 size={25} />
            </button>
          </div>
        ) : null}
        {isOnDiscount ? (
          <div className="absolute left-0 top-0 z-10 w-fit h-fit">
            <div
              id="triangle"
              className="w-[100px] h-[80px] bg-red-400 flex justify-start items-start">
              <span className="h-1/2 w-1/2 flex items-center justify-center text-xl text-white font-semibold relative left-1 top-[2px]">
                {discount}%
              </span>
            </div>
          </div>
        ) : null}

        <div
          className="relative w-80 h-80 xs:w-88 xs:h-88 sm:w-96 sm:h-96 cursor-pointer rounded-xl"
          onClick={() => {
            router.push(`/products/watches/${_id}`)
          }}>
          <Image
            className="p-8 object-cover object-center"
            priority
            fill
            src={images[0]}
            alt="product image"
          />
        </div>
        <div className="px-3 md:px-5 pb-5">
          <a href="#">
            <h3 className="text-gray-900 font-semibold text-2xl tracking-tight text-left">
              {title}
            </h3>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <span className="rounded-xl border-2 text-white bg-[#0c0502] border-[#0c0502] py-1 px-5 shadow-lg">
              {productClass}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl text-gray-900">
              {displayPrice?.toLocaleString("sr-RS", {
                style: "currency",
                currency: "RSD",
              })}
            </span>
            <button
              onClick={handleAddItemToCart}
              className="text-white bg-amber-500 hover:bg-amber-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex flex-row gap-2 justify-center items-center">
              <BsCart3 size={25} /> Dodaj u korpu
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

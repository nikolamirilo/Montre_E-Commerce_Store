"use client"
import { deleteCartItem, updateItemCount } from "@/actions/server/cart"
import { revalidateTagCustom } from "@/helpers/server"
import { CartItemProps } from "@/typescript/interfaces"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"

export const revalidate = 0
export const dynamic = "force-dynamic"

const CartItem: React.FC<CartItemProps> = ({
  uid,
  _id,
  title,
  category,
  productClass,
  price,
  image,
  isOnDiscount,
  discountedPrice,
  productCode,
  quantity,
  type,
}) => {
  const [count, setCount] = useState<number>(1)
  const router = useRouter()
  const handleDeleteCartItem = async () => {
    await deleteCartItem(uid, _id)
    revalidateTagCustom("users")
  }
  const setCountInfo = async (q: number) => {
    await updateItemCount(uid, _id, q)
    revalidateTagCustom("users")
  }
  useEffect(() => {
    setCount(quantity)
  }, [])
  const calculatedPrice = isOnDiscount ? discountedPrice : price
  return (
    <div className="justify-between mb-6 rounded-lg bg-white shadow-md sm:flex w-full mx-auto sm:justify-start relative p-5">
      {type != "user-profile" ? (
        <button onClick={handleDeleteCartItem} className="absolute top-1 right-1 z-10">
          <IoMdClose className="w-7 h-7 fill-white bg-red-500 rounded-full" />
        </button>
      ) : null}
      <div
        className="w-11/12 h-72 mx-auto sm:w-80 sm:h-48 relative cursor-pointer"
        onClick={() => {
          router.push(`/products/watches/${productCode}`)
        }}>
        <Image
          src={image}
          alt={title}
          fill
          className="w-full rounded-lg sm:w-40 object-cover object-center"
        />
      </div>
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900 text-left">{title}</h2>
          <p className="mt-1 text-lg text-gray-700 text-left">
            {category === "men" ? "Muški" : "Ženski"}
          </p>
          <p className="mt-1 text-lg text-gray-700 text-left">{productClass}</p>
        </div>
        <div className="mt-4 flex min-w-[40%] flex-row sm:flex-col sm:mt-0 h-full justify-between md:justify-end md:gap-2 items-center">
          {type != "user-profile" ? (
            <div className="w-full flex flex-col items-start justify-center border-gray-200 gap-1">
              <h2 className="text-base xl:text-lg w-full text-left">Izaberi količinu:</h2>
              <select
                name="quantity"
                onChange={(e: any) => {
                  setCountInfo(e.target.value)
                  setCount(e.target.value)
                }}
                defaultValue={quantity}
                className="w-full bg-white border-2 text-base xl:text-lg border-amber-500 focus:outline-none rounded-lg cursor-pointer px-2 py-0 md:py-1 text-gray-900">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
          ) : null}
          <div
            className="flex justify-end items-end md:items-start md:justify-left w-full pl-1"
            id="price">
            <p className="text-base xl:text-lg text-left font-semibold">
              {count}x{calculatedPrice!.toLocaleString().replace(",", ".")},00 RSD
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem

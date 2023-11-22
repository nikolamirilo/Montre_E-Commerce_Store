"use client"
import { deleteSingleProduct } from "@/actions/server/products"
import { revalidateData } from "@/helpers"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"
import { BsCart3, BsTrash3 } from "react-icons/bs"
import { MdOutlineModeEditOutline } from "react-icons/md"

export interface CardProps {
  _id?: string
  title: string
  images: string[]
  price: number
  category: string
}

const ProductCard: React.FC<CardProps> = ({ _id, title, images, price, category }) => {
  const router = useRouter()
  // const { user } = useAuthContext();
  const user = "admin"

  async function handleDeleteProduct() {
    await deleteSingleProduct(_id)
    revalidateData()
  }

  return (
    <div className="max-w-xl">
      <div className="bg-white shadow-xl rounded-lg max-w-lg relative">
        {user == "admin" && (
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
        )}

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
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight">{title}</h3>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <span className="rounded-xl border-2 bg-[#0c0502] border-[#0c0502] py-1 px-5 shadow-lg text-white text-bold uppercase">
              {category}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">${price}</span>
            <a
              href="#"
              className="text-white bg-amber-500 hover:bg-amber-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex flex-row gap-2 justify-center items-center">
              <BsCart3 size={25} /> Dodaj u korpu
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

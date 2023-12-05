"use client"
import { deleteCartItem } from "@/actions/server/cart"
import { revalidateData } from "@/helpers"
import { CartItemProps } from "@/typescript/interfaces"
import { IoMdClose } from "react-icons/io"

const CartItem = ({ uid, _id, title, category, productClass, price, image }: CartItemProps) => {
  const handleDeleteCartItem = async () => {
    await deleteCartItem(uid, _id)
    revalidateData()
  }
  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start relative">
      <input type="checkbox" className="absolute top-0 left-0 w-5 h-5 cursor-pointer" />
      <button onClick={handleDeleteCartItem} className="absolute top-0 right-0">
        <IoMdClose size={30} className="hover:fill-red-500" />
      </button>
      <img src={image} alt="product-image" className="w-full rounded-lg sm:w-40" />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <p className="mt-1 text-lg text-gray-700">{category == "man" ? "Muški" : "Ženski"}</p>
          <p className="mt-1 text-lg text-gray-700">{productClass}</p>
        </div>
        <div className="mt-4 flex flex-row-reverse md:flex-col sm:mt-0 h-full justify-between md:justify-around items-center">
          <div className="flex items-center border-gray-200">
            <button className="cursor-pointer text-xl rounded-l bg-gray-100 py-[2px] px-3.5 duration-100 hover:bg-amber-500 hover:text-amber-50">
              -
            </button>
            <span className="h-8 w-8 border text-xl bg-white text-center outline-none">0</span>
            <button className="cursor-pointer text-xl rounded-r bg-gray-100 py-[2px] px-3 duration-100 hover:bg-amber-500 hover:text-amber-50">
              +
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-lg">{price} RSD</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem

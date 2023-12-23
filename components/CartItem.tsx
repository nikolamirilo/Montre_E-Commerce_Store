"use client"
import { deleteCartItem, updateItemCount } from "@/actions/server/cart"
import { revalidateData } from "@/helpers/server"
import { CartItemProps } from "@/typescript/interfaces"
import { IoMdClose } from "react-icons/io"

const CartItem = ({
  uid,
  _id,
  title,
  category,
  productClass,
  price,
  image,
  isOnDiscount,
  discountedPrice,
  quantity,
}: CartItemProps) => {
  const handleDeleteCartItem = async () => {
    await deleteCartItem(uid, _id)
    revalidateData()
  }
  const setCountInfo = async (q: number) => {
    await updateItemCount(uid, _id, q)
    revalidateData()
  }
  const calculatedPrice = isOnDiscount ? discountedPrice : price
  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start relative">
      <button onClick={handleDeleteCartItem} className="absolute top-0 right-0">
        <IoMdClose size={30} className="hover:fill-red-500" />
      </button>
      <img src={image} alt="product-image" className="w-full rounded-lg sm:w-40" />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <p className="mt-1 text-lg text-gray-700">{category === "man" ? "Muški" : "Ženski"}</p>
          <p className="mt-1 text-lg text-gray-700">{productClass}</p>
        </div>
        <div className="mt-4 flex flex-row-reverse md:flex-col sm:mt-0 h-full justify-between md:justify-around items-center">
          <div className="flex items-center border-gray-200">
            <button
              onClick={() => {
                setCountInfo(1)
              }}
              className={`cursor-pointer text-xl rounded-l py-[2px] px-3.5 duration-100 hover:bg-amber-500 border border-gray-300 bg-gray-100`}>
              1
            </button>
            <button
              onClick={() => {
                setCountInfo(2)
              }}
              className={`cursor-pointer text-xl rounded-l py-[2px] px-3.5 duration-100 hover:bg-amber-500 border border-gray-300 bg-gray-100 
               
              `}>
              2
            </button>
            <button
              onClick={() => {
                setCountInfo(3)
              }}
              className={`cursor-pointer text-xl rounded-l py-[2px] px-3.5 duration-100 hover:bg-amber-500 border border-gray-300 bg-gray-100
          
              `}>
              3
            </button>
          </div>
          <div className="flex items-center space-x-4" id="price">
            <p className="text-lg">
              {quantity}x{calculatedPrice!.toLocaleString().replace(",", ".")} RSD
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem

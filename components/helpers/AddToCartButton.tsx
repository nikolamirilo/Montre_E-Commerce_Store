"use client"
import { addItemToCart } from "@/actions/server/cart"
import { revalidateTagCustom } from "@/helpers/server"
import { AddToCartButtonProps } from "@/typescript/interfaces"
import Link from "next/link"
import React, { useState } from "react"
import { BsCart3 } from "react-icons/bs"
import { IoCheckmarkCircleOutline } from "react-icons/io5"
import { LuLoader2, LuPackageCheck } from "react-icons/lu"

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ uid, id, type }) => {
  const [progress, setProgress] = useState(0)
  async function handleAddItemToCart() {
    setProgress(50)
    const res = await addItemToCart(uid, id)
    if (res == "Success") {
      setProgress(100)
      revalidateTagCustom("users")
    } else if (res == "Duplicate") {
      setProgress(75)
    } else {
      alert("Došlo je do greške")
    }
  }
  if (type == "add-to-cart") {
    return (
      <form className="flex w-full items-center justify-center mt-5">
        <button
          type="submit"
          onClick={handleAddItemToCart}
          disabled={progress == 0 ? false : true}
          className={`text-md flex items-center rounded-xl gap-1 mb-5 justify-center leading-none text-white bg-amber-500 w-full lg:w-1/2 font-semibold py-2 hover:bg-amber-600 focus:outline-none ${
            progress == 100
              ? "bg-green-600 hover:bg-green-700"
              : progress == 75
              ? "bg-red-500 hover:bg-red-600"
              : "bg-amber-500 hover:bg-amber-600"
          }`}>
          {progress == 50 ? (
            <LuLoader2 className="animate-spin rounded-full" color="white" size={30} />
          ) : progress == 100 ? (
            <IoCheckmarkCircleOutline size={30} color="white" />
          ) : (
            <BsCart3 size={30} color="white" />
          )}
          {progress == 50
            ? "Dodavanje u korpu..."
            : progress == 75
            ? "Već je dodato u korpu"
            : progress == 100
            ? "Dodato u korpu"
            : "Dodaj u korpu"}
        </button>
      </form>
    )
  } else {
    return (
      <div className="flex w-full items-center justify-center mt-5">
        <Link
          href={`/order/${id}`}
          className=" text-md flex items-center rounded-xl gap-3 mb-5 justify-center leading-none text-white bg-amber-500 w-full lg:w-1/2 font-semibold py-2 hover:bg-amber-600 focus:outline-none">
          <LuPackageCheck size={25} /> Naruči
        </Link>
      </div>
    )
  }
}
export default AddToCartButton

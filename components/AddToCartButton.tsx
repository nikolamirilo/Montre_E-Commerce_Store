"use client"

import { addItemToCart } from "@/actions/server/cart"
import { revalidateData } from "@/helpers"
import { BsCart3 } from "react-icons/bs"

export default function AddToCartButton({ uid, id }: { uid: string | undefined; id: string }) {
  async function handleAddItemToCart() {
    const res = await addItemToCart(uid, id)
    if (res == "Success") {
      alert("Proizvod je dodat u korpu")
    } else if (res == "Duplicate") {
      alert("Proizvod ste već dodali u korpu")
    } else {
      alert("Greška")
    }
    revalidateData()
  }
  return (
    <form action={handleAddItemToCart} className="flex w-full items-center justify-center mt-5">
      <button
        type="submit"
        className=" text-md flex items-center rounded-xl gap-3 mb-5 justify-center leading-none text-white bg-amber-500 w-full lg:w-1/2 font-semibold py-2 hover:bg-amber-600 focus:outline-none">
        <BsCart3 size={30} /> Dodaj u korpu
      </button>
    </form>
  )
}

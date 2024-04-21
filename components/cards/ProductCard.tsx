"use client"
import { addItemToCart } from "@/actions/server/cart"
import { deleteSingleProduct } from "@/actions/server/products"
import { revalidateTagCustom } from "@/helpers/server"
import { ProductCardProps } from "@/typescript/interfaces"
import { useUser } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { BsCart3, BsTrash3 } from "react-icons/bs"
import { IoCheckmarkCircleOutline } from "react-icons/io5"
import { LuLoader2, LuPackageCheck } from "react-icons/lu"
import { MdOutlineModeEditOutline } from "react-icons/md"
import InfoModal from "../modals/InfoModal"

const ProductCard: React.FC<ProductCardProps> = ({
  _id,
  title,
  image,
  price,
  productClass,
  discount,
  isOnDiscount,
  discountedPrice,
  productCode,
  isOutOfStock,
}) => {
  const router = useRouter()
  const { user } = useUser()
  const [progress, setProgress] = useState<number>(0)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  async function handleAddItemToCart() {
    setProgress(50)
    const uid = user?.id
    const res = await addItemToCart(uid, productCode)
    if (res == "Success") {
      setProgress(100)
      revalidateTagCustom("users")
    } else if (res == "Duplicate") {
      setProgress(75)
    } else {
      setProgress(0)
      alert("Došlo je do greške")
    }
  }
  async function handleDeleteItem() {
    setIsOpen(false)
    await deleteSingleProduct(productCode)
    revalidateTagCustom("products")
  }
  return (
    <>
      {isOpen ? (
        <InfoModal
          type="delete-product"
          title="Upozorenje"
          subtitle="Da li ste sigurni da želite da obrišete ovaj proizvod?"
          closeModal={() => {
            setIsOpen(false)
          }}
          confirmAction={handleDeleteItem}
        />
      ) : null}
      <div className="bg-white shadow-xl rounded-lg w-[96vw] xs:w-80 h-fit sm:h-[28rem] relative lg:hover:scale-[1.02] transition-all duration-200 ease-in-out">
        {user?.primaryEmailAddress?.emailAddress == "satovi.montre@gmail.com" ? (
          <div className="admin-buttons top-0 right-3 z-10 flex flex-row-reverse gap-2 absolute">
            <button
              id="edit"
              className="p-1 rounded-full z-10 bg-amber-500 text-white"
              onClick={() => {
                router.push(`/products/watches/${productCode}/edit`)
              }}>
              <MdOutlineModeEditOutline size={30} />
            </button>
            <button
              id="delete"
              className="p-1 z-10 rounded-full bg-red-500 text-white"
              onClick={() => {
                setIsOpen(true)
              }}>
              <BsTrash3 size={25} />
            </button>
          </div>
        ) : null}
        {isOnDiscount ? (
          <div className="absolute left-0 top-0 z-10 w-fit h-fit">
            {isOutOfStock ? (
              <div
                id="triangle"
                className="w-[130px] h-[80px] bg-red-500 flex justify-start items-start">
                <span className="h-2/3 w-2/3 top-1 flex items-center justify-center text-base text-white font-semibold relative -rotate-[31deg]">
                  Rasprodato
                </span>
              </div>
            ) : (
              <div
                id="triangle"
                className="w-[100px] h-[80px] bg-red-500 flex justify-start items-start">
                <span className="h-1/2 w-1/2 flex items-center justify-center text-xl text-white font-semibold relative left-1 top-[2px]">
                  {discount}%
                </span>
              </div>
            )}
          </div>
        ) : isOutOfStock ? (
          <div className="absolute left-0 top-0 z-10 w-fit h-fit">
            <div
              id="triangle"
              className="w-[130px] h-[80px] bg-red-500 flex justify-start items-start">
              <span className="h-2/3 w-2/3 top-1 flex items-center justify-center text-base text-white font-semibold relative -rotate-[31deg]">
                Rasprodato
              </span>
            </div>
          </div>
        ) : null}

        <div
          className="relative w-full h-72 cursor-pointer rounded-xl"
          onClick={() => {
            router.push(`/products/watches/${productCode}`)
          }}>
          <Image
            className="object-cover object-center"
            style={{ borderRadius: "10px 10px 0 0" }}
            fill
            src={image}
            alt={title}
            loading="lazy"
          />
        </div>
        <div className="p-2">
          <span className="text-gray-900 font-semibold text-xl tracking-tight text-left">
            {title}
          </span>
          <div className="flex items-center my-2.5">
            <span className="rounded-lg border-2 text-white bg-[#0c0502] border-[#0c0502] shadow-lg py-1 px-4">
              {productClass}
            </span>
          </div>
          <div className={`flex items-center justify-between  ${isOnDiscount == false && "mb-3"}`}>
            <div className="flex flex-col">
              <span
                className={`text-lg md:text-xl text-gray-900 ${
                  isOnDiscount == true && isOutOfStock == false ? "line-through" : "mt-3"
                }`}>
                {price!.toLocaleString().replace(",", ".")},00 RSD
              </span>
              {isOnDiscount == true && isOutOfStock == false ? (
                <span className="text-lg md:text-xl text-red-600 font-semibold">
                  {discountedPrice!.toLocaleString().replace(",", ".")}
                  ,00 RSD
                </span>
              ) : null}
            </div>
            {user != null ? (
              <button
                onClick={handleAddItemToCart}
                disabled={progress == 0 ? false : true}
                className={`${
                  isOutOfStock == true ? "hidden" : "flex"
                } text-white z-10 rounded-lg px-2 5 py-2 text-center flex-row gap-1 justify-center items-center ${
                  progress == 100
                    ? "bg-green-600 hover:bg-green-700"
                    : progress == 75
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-amber-500 hover:bg-amber-600"
                }`}>
                {progress == 50 ? (
                  <LuLoader2
                    className="animate-spin h-5 w-5 rounded-full"
                    color="white"
                    size={25}
                  />
                ) : progress == 100 ? (
                  <IoCheckmarkCircleOutline size={25} color="white" />
                ) : (
                  <BsCart3 size={25} color="white" />
                )}
                {progress == 50
                  ? "Dodavanje..."
                  : progress == 75
                  ? "Već je dodato"
                  : progress == 100
                  ? "Dodato"
                  : "Dodaj"}
              </button>
            ) : (
              <Link
                href={`/order/${productCode}`}
                className={`text-white z-10 bg-amber-500 hover:bg-amber-600 rounded-lg 5 py-2 text-center flex-row gap-1 justify-center items-center px-2 ${
                  isOutOfStock == true ? "hidden" : "flex"
                }`}>
                <LuPackageCheck size={25} /> Naruči
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard

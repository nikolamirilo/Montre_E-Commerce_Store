"use client"
import { josefinSans } from "@/fonts"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"

const Navigation: React.FC = () => {
  const router = useRouter()
  return (
    <div className="relative w-full lg:w-10/12 2xl:w-11/12 lg:right-[5%] flex flex-col justify-center items-center gap-2 md:fle md:flex-row md:justify-center lg:justify-start">
      <button
        onClick={() => {
          router.push("/products/watches/categories/men")
        }}
        id="men-offer"
        className="romboid bg-white lg:hover:transform lg:hover:transition-all lg:hover:ease-in-out lg:hover:duration-200 lg:hover:scale-[1.03] p-4 border-none h-36 lg:h-32 relative md:left-[6%] w-full md:w-[45%]  font-bold py-2 px-4 inline-flex items-center gap-2 shadow-sm lg:shadow-xl shadow-black/20 transition-all ease-out duration-150">
        <Image
          className="object-cover object-center transform -scale-x-100"
          fill
          src="/hero/men.jpg"
          alt="product image"
        />
        <span className="absolute bottom-0 left-0 top-0 right-0 w-full h-full bg-black/40 z-10 lg:hover:bg-black/20 text-amber-500 uppercase flex justify-center items-center text-[1.6rem] transition-all ease-out duration-150">
          <p className={`w-full lg:w-1/2 text-center shadow-text ${josefinSans.className}`}>
            Muški satovi
          </p>
        </span>
      </button>
      <button
        onClick={() => {
          router.push("/products/watches/categories/women")
        }}
        id="women-offer"
        className="romboid-reverse lg:hover:transform lg:hover:transition-all lg:hover:ease-in-out lg:hover:duration-200 lg:hover:scale-[1.03] bg-white p-4 border-none h-36 lg:h-32 relative md:right-[6%] w-full md:w-[45%] font-bold py-2 px-4 inline-flex items-center gap-2  shadow-sm lg:shadow-xl shadow-amber-600/20 transition-all ease-out duration-150">
        <Image
          className="object-cover object-center"
          fill
          src="/hero/women.jpg"
          alt="product image"
        />
        <span className="absolute bottom-0 left-0 top-0 right-0 w-full h-full z-10 text-white uppercase flex bg-orange-200/20 lg:hover:bg-orange-300/10 justify-center items-center text-[1.6rem] transition-all ease-out duration-150">
          <p className={`w-full lg:w-1/2 text-center shadow-text ${josefinSans.className}`}>
            Ženski satovi
          </p>
        </span>
      </button>
    </div>
  )
}

export default Navigation

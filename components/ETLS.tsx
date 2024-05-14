"use client"

import { discountEtl } from "@/actions/server/etls"
import { revalidateData } from "@/helpers/server"
import { useState } from "react"

const ETLS = () => {
  async function handleUpdateMultipleProducts(category: string, discount: number) {
    const res = await discountEtl(category, discount)
    revalidateData()
    if (res == true) {
      alert("Uspešno ažurirani proizvodi")
    } else {
      alert("Doslo je do greske")
    }
  }
  const [allProductsDiscount, setAllProductsDiscount] = useState<number>(0)
  const [menProductsDiscount, setMenProductsDiscount] = useState<number>(0)
  const [womenProductsDiscount, setWomenProductsDiscount] = useState<number>(0)
  return (
    <div className="flex items-center justify-center flex-col gap-5 w-full mx-auto max-w-2xl">
      <div className="flex flex-row gap-4 w-full items-center justify-center">
        <input
          className="bg-gray-50 border border-gray-300 w-6/12 max-w-[16rem] h-full text-gray-900 text-sm rounded-lg outline-none focus:border-amber-500 block p-2.5"
          type="number"
          placeholder="e.g: 20"
          value={allProductsDiscount}
          onChange={(e: any) => {
            setAllProductsDiscount(e.target.value)
          }}
        />
        <button
          onClick={() => handleUpdateMultipleProducts("all", allProductsDiscount)}
          className="text-white bg-amber-500 px-5 py-2 w-6/12 max-w-[16rem] hover:bg-amber-600 font-medium rounded-lg text-lg text-center flex flex-row justify-center items-center">
          Ažuriraj sve proizvode
        </button>
      </div>
      <div className="flex flex-row gap-4 w-full items-center justify-center">
        <input
          className="bg-gray-50 border border-gray-300 w-6/12 max-w-[16rem] h-full text-gray-900 text-sm rounded-lg outline-none focus:border-amber-500 block p-2.5"
          type="number"
          placeholder="e.g: 15"
          value={menProductsDiscount}
          onChange={(e: any) => {
            setMenProductsDiscount(e.target.value)
          }}
        />
        <button
          onClick={() => handleUpdateMultipleProducts("men", menProductsDiscount)}
          className="text-white bg-amber-500 px-5 py-2 w-6/12 max-w-[16rem] hover:bg-amber-600 font-medium rounded-lg text-lg text-center flex flex-row justify-center items-center">
          Ažuriraj muške proizvode
        </button>
      </div>
      <div className="flex flex-row gap-4 w-full items-center justify-center">
        <input
          className="bg-gray-50 border border-gray-300 w-6/12 max-w-[16rem] h-full text-gray-900 text-sm rounded-lg outline-none focus:border-amber-500 block p-2.5"
          type="number"
          placeholder="e.g: 30"
          value={womenProductsDiscount}
          onChange={(e: any) => {
            setWomenProductsDiscount(e.target.value)
          }}
        />
        <button
          onClick={() => handleUpdateMultipleProducts("women", womenProductsDiscount)}
          className="text-white bg-amber-500 px-5 py-2 w-6/12 max-w-[16rem] hover:bg-amber-600 font-medium rounded-lg text-lg text-center flex flex-row justify-center items-center">
          Ažuriraj ženske proizvode
        </button>
      </div>
    </div>
  )
}

export default ETLS

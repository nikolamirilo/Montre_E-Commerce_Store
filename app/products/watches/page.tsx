import Loader from "@/components/Loader"
import dynamic from "next/dynamic"
import React from "react"
const DynamicProducts = dynamic(() => import("@/components/Products"), {
  loading: () => <Loader />,
})

const AllProducts = () => {
  return (
    <main>
      <DynamicProducts />
    </main>
  )
}

export default AllProducts

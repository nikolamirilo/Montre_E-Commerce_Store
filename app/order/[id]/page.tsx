import { getAllProducts } from "@/actions/server/products"
import Loader from "@/components/loading/Loader"
import SingleOrder from "@/components/order/SingleOrder"
import { Product } from "@/typescript/types"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Naruči",
  robots: {
    index: false,
    nocache: true,
  },
}

export async function generateStaticParams() {
  const products = await getAllProducts({})
  return products.map((product: Product) => ({
    id: product.productCode,
  }))
}

const OrderSingleProduct = ({ params }: { params: { id: string } }) => {
  return (
    <Suspense fallback={<Loader />}>
      <SingleOrder id={params.id} />
    </Suspense>
  )
}

export default OrderSingleProduct

import Loader from "@/components/loading/Loader"
import SingleOrder from "@/components/order/SingleOrder"
import { APP_URL } from "@/constants"
import { fetchData } from "@/helpers/client"
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
  const products = await fetchData(`${APP_URL}/api/products`, {
    method: "POST",
    cache: "force-cache",
    body: JSON.stringify({ isPublic: true }),
    tags: ["products"],
  })
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

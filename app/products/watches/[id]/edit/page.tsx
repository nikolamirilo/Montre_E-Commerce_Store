import { getSingleProduct } from "@/actions/server/products"
import Loader from "@/components/loading/Loader"
import EditProduct from "@/components/product/EditProduct"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Ažuriraj proizvod",
}

const Edit = async ({ params }: { params: { id: string } }) => {
  const id = params.id.toString()
  const initialData = await getSingleProduct(id)
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen 2xl:min-h-[75vh] h-fit py-[6vh]">
      <Suspense fallback={<Loader />}>
        <EditProduct initialData={initialData} />
      </Suspense>
    </div>
  )
}
export default Edit

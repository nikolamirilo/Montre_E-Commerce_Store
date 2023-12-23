import { getSingleProduct } from "@/actions/server/products"
import Form from "@/components/Form"

const EditProduct = async ({ params }: { params: { id: string } }) => {
  const id = params.id.toString()
  const initialData = await getSingleProduct(id)
  return (
    <div className="flex flex-col items-center justify-center w-full py-20 min-h-screen h-fit">
      <Form action="update" initialData={initialData} />
    </div>
  )
}

export default EditProduct

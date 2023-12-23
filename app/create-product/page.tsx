import Form from "@/components/Form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dodaj novi proizvod",
  description: "Dodaj novi proizvod u Montre online shop",
}

const CreateProduct = () => {
  return (
    <div id="create-product" className="flex items-center justify-center">
      <Form action="create" />
    </div>
  )
}

export default CreateProduct

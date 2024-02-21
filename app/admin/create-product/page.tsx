import CreateProduct from "@/components/product/CreateProduct"
import { currentUser } from "@clerk/nextjs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dodaj novi proizvod",
  robots: {
    index: false,
    nocache: true,
  },
}

const Create = async () => {
  const user = await currentUser()
  if (user?.emailAddresses[0].emailAddress != "satovi.montre@gmail.com")
    throw new Error("Admin permissions needed to access this page")
  return (
    <div id="create-product" className="flex items-center justify-center">
      <CreateProduct />
    </div>
  )
}

export default Create

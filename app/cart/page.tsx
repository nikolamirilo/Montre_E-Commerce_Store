import { getSingleProduct } from "@/actions/server/products"
import { getSingleUser } from "@/actions/server/users"
import CartItem from "@/components/CartItem"
import { currentUser } from "@clerk/nextjs"
import Link from "next/link"

const ShoppingCart = async () => {
  const user = await currentUser()
  const uid = user?.id
  const mongoUser = await getSingleUser(uid)
  return (
    <main>
      <div className="min-h-screen bg-white py-20 h-fit w-full flex flex-col justify-start items-center">
        <h1 className="mb-10 text-center text-3xl uppercase font-bold">Proizvodi u korpi</h1>
        {mongoUser?.cart.length > 0 ? (
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {mongoUser?.cart?.map(async (item: string) => {
                const product = await getSingleProduct(item)
                return (
                  <CartItem
                    title={product.title}
                    category={product.category}
                    productClass={product.class}
                    price={product.price}
                    image={product.images[0]}
                  />
                )
              })}
            </div>
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Cena satova:</p>
                <p className="text-gray-700">$129.99</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Dostava</p>
                <p className="text-gray-700">$4.99</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                  <p className="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <Link
                className="mt-6 w-full rounded-md bg-amber-500 py-2 px-4 font-medium text-amber-50 hover:bg-amber-600"
                href="/order">
                Poruči
              </Link>
            </div>
          </div>
        ) : (
          <h2 className="text-2xl font-semibold">Nema ni jedan proizvod u korpi</h2>
        )}
      </div>
    </main>
  )
}

export default ShoppingCart

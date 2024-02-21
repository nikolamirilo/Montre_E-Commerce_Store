import { getTotalData } from "@/actions/server/cart"
import { getSingleUser } from "@/actions/server/users"
import CartItem from "@/components/CartItem"
import { SHIPPING_COST } from "@/constants"
import { currentUser } from "@clerk/nextjs"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { LuPackageCheck } from "react-icons/lu"

export const revalidate = 0
export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Korpa",
  robots: {
    index: false,
    nocache: true,
  },
}

const ShoppingCart = async () => {
  const clerkUser = await currentUser()
  const user = await getSingleUser(clerkUser?.id)
  if (user != null) {
    const productsPrice: any = await getTotalData(user.uid)
    const total = productsPrice! + SHIPPING_COST
    return (
      <div id="cart">
        <div className="min-h-screen 2xl:min-h-[75vh] bg-white py-20 h-fit w-full flex flex-col justify-start items-center">
          <h1 className="mb-10 text-center text-3xl font-bold">Proizvodi u korpi</h1>
          {user.cart?.length > 0 ? (
            <div className="mx-auto xl:w-2/3 w-full justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">
                {user.cart?.map(async (product: any, idx: number) => {
                  return (
                    <CartItem
                      key={idx}
                      _id={product?._id}
                      productCode={product?.productCode}
                      uid={user.uid}
                      title={product?.title}
                      category={product?.category}
                      productClass={product?.class}
                      price={product?.price}
                      image={product?.images[0]}
                      isOnDiscount={product?.isOnDiscount}
                      discountedPrice={product?.discountedPrice}
                      quantity={product.quantity}
                    />
                  )
                })}
              </div>
              <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Cena satova:</p>
                  <p className="text-gray-700">
                    {productsPrice?.toLocaleString().replace(",", ".")},00 RSD
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Poštarina:</p>
                  <p className="text-gray-700">400,00 RSD</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between mb-5">
                  <p className="text-lg font-bold">Ukupno:</p>
                  <p className="mb-1 text-lg font-bold">
                    {total?.toLocaleString().replace(",", ".")},00 RSD
                  </p>
                </div>
                <Link
                  className="mt-6 w-full rounded-md bg-amber-500 py-2 px-4 font-medium text-amber-50 hover:bg-amber-600 flex flex-row justify-center items-center  gap-1"
                  href={`/order`}>
                  <LuPackageCheck size={25} /> Naruči
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex w-2/3 justify-center items-center flex-col gap-20">
              <h2 className="text-2xl  text-center">Nema ni jedan proizvod u korpi</h2>
              <Image src="/other/empty_cart.jpg" alt="Empty Cart" width={200} height={200} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ShoppingCart

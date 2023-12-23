import { getTotalData } from "@/actions/server/cart"
import { getSingleUser } from "@/actions/server/users"
import CartItem from "@/components/CartItem"
import { currentUser } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

const ShoppingCart = async () => {
  const clerkUser = await currentUser()
  const user = await getSingleUser(clerkUser?.id)
  if (user != null) {
    const total = await getTotalData(user.uid)
    return (
      <div id="cart">
        <div className="min-h-screen bg-white py-20 h-fit w-full flex flex-col justify-start items-center">
          <h1 className="mb-10 text-center text-3xl font-bold">Proizvodi u korpi</h1>
          {user.cart?.length > 0 ? (
            <div className="mx-auto xl:w-2/3 w-full justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">
                {user.cart?.map(async (item: any) => {
                  return (
                    <CartItem
                      _id={item.product?._id}
                      uid={item.uid}
                      title={item.product?.title}
                      category={item.product?.category}
                      productClass={item.product?.class}
                      price={item.product?.price}
                      image={item.product?.images[0]}
                      isOnDiscount={item.product?.isOnDiscount}
                      discountedPrice={item.product?.discountedPrice}
                      quantity={item.quantity}
                    />
                  )
                })}
              </div>
              <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Cena satova:</p>
                  <p className="text-gray-700">
                    {total!.toLocaleString().replace(",", ".")},00 RSD
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Poštarina:</p>
                  <p className="text-gray-700">nije uključena u cenu</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between mb-5">
                  <p className="text-lg font-bold">Ukupno:</p>
                  <p className="mb-1 text-lg font-bold">
                    {total!.toLocaleString().replace(",", ".")},00 RSD
                  </p>
                </div>
                <Link
                  className="mt-6 w-full rounded-md bg-amber-500 py-2 px-4 font-medium text-amber-50 hover:bg-amber-600"
                  href={`/order`}>
                  Poruči
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex w-2/3 justify-center items-center flex-col gap-20">
              <h2 className="text-2xl font-semibold text-center">Nema ni jedan proizvod u korpi</h2>
              <Image src="/other/empty_cart.jpg" alt="Empty Cart" width={300} height={300} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ShoppingCart

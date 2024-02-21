import { getSingleUser } from "@/actions/server/users"
import CartItem from "@/components/CartItem"
import { parseDate } from "@/helpers/client"
import { currentUser } from "@clerk/nextjs"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Moje narudžbine",
  robots: {
    index: false,
    nocache: true,
  },
}
const UserProfile = async () => {
  const user = await currentUser()
  const uid = user?.id
  const mongoUser = await getSingleUser(uid)
  if (user)
    return (
      <div
        className="min-h-screen 2xl:min-h-[90vh] flex flex-col items-center justify-center w-full text-center gap-20 mt-10"
        id="user-profile">
        {mongoUser?.orders?.length > 0 ? (
          <div className="flex flex-col justify-center items-center gap-10 w-full">
            <h1 className="font-semibold text-2xl md:text-3xl w-full py-10">Moje narudžbine</h1>
            <div className="flex flex-col w-10/12 sm:w-9/12 justify-center items-center gap-10">
              {mongoUser.orders
                .sort((a: any, b: any) => {
                  const dateA: any = parseDate(a.date)
                  const dateB: any = parseDate(b.date)
                  if (!dateA || !dateB) return 0 // Handle invalid dates
                  return dateB - dateA
                })
                .map((order: any, idx: number) => {
                  return (
                    <div className="mx-auto xl:w-2/3 w-full" key={idx}>
                      <h2 className="font-semibold text-xl w-full text-left">
                        Datum: <span className="font-normal">{order?.date}</span>
                      </h2>
                      {order.products.map((product: any, idx: number) => {
                        return (
                          <CartItem
                            key={idx}
                            type="user-profile"
                            productCode={product?.productCode}
                            discountedPrice={product?.discountedPrice}
                            isOnDiscount={product?.isOnDiscount}
                            _id={product?._id?.toString()}
                            title={product?.title}
                            productClass={product?.class}
                            image={product?.images[0]}
                            price={product?.price}
                            category={product?.category}
                            quantity={product?.quantity}
                          />
                        )
                      })}
                      <h2 className="font-semibold text-lg w-full text-right">
                        Ukupan iznos:{" "}
                        <span className="font-normal">
                          {order?.total.toLocaleString().replace(",", ".")},00 RSD
                        </span>
                      </h2>
                      <div className="my-4 bg-amber-500 h-[2px] w-full"></div>
                    </div>
                  )
                })}
            </div>
          </div>
        ) : (
          <div className="flex w-2/3 justify-center items-center flex-col gap-5">
            <h2 className="text-2xl  text-center">Nemate ni jednu narudžbinu do sad</h2>
            <Image src="/other/no_order.jpg" alt="Empty Cart" width={200} height={200} />
          </div>
        )}
      </div>
    )
}
export default UserProfile

import { getSingleUser } from "@/actions/server/users"
import CartItem from "@/components/CartItem"
import { currentUser } from "@clerk/nextjs"
import Image from "next/image"

const UserProfile = async ({ params }: { params: { id: string } }) => {
  const user = await currentUser()
  const uid = user?.id
  const mongoUser = await getSingleUser(uid)
  if (user)
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center w-full text-center gap-20 mt-10"
        id="user-profile">
        {mongoUser?.orders?.length > 0 ? (
          <div className="flex flex-col justify-center items-center gap-10 w-full">
            <h1 className="font-semibold text-2xl md:text-3xl w-full py-10">Moje porudžbine</h1>
            <div className="flex flex-col w-full sm:w-10/12 justify-center items-center gap-10">
              {mongoUser.orders.map((order: any, idx: number) => {
                return (
                  <div className="mx-auto xl:w-2/3 w-full" key={idx}>
                    <div className="w-full flex flex-col px-2 justify-start items-center md:items-start">
                      <h2 className="font-semibold text-xl">
                        Datum: <span className="font-normal">{order?.date}</span>
                      </h2>
                      <h2 className="font-semibold text-xl">
                        Status:{" "}
                        <span className="font-normal">
                          {order?.status == "ordered" ? "naručeno" : "isporučeno"}
                        </span>
                      </h2>
                      <h2 className="font-semibold text-xl">
                        Iznos:{" "}
                        <span className="font-normal">
                          {order?.total.toLocaleString().replace(",", ".")},00 RSD
                        </span>
                      </h2>
                    </div>
                    {order.products.map((product: any, idx: number) => {
                      return (
                        <CartItem
                          key={idx}
                          type="user-profile"
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
                    <div className="my-4 bg-amber-500 h-[2px] w-full"></div>
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          <div className="flex w-2/3 justify-center items-center flex-col gap-5">
            <h2 className="text-2xl font-semibold text-center">
              Niste poručili ni jedan proizvod do sad
            </h2>
            <Image src="/other/no_order.jpg" alt="Empty Cart" width={300} height={300} />
          </div>
        )}
      </div>
    )
}
export default UserProfile

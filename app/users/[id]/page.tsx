import { getSingleUser } from "@/actions/server/users"
import { currentUser } from "@clerk/nextjs"
import Image from "next/image"

const UserProfile = async ({ params }: { params: { id: string } }) => {
  const user = await currentUser()
  const uid = user?.id
  const mongoUser = await getSingleUser(uid)
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center w-full text-center gap-20 mt-10"
      id="user-profile">
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <Image
          src={user!.imageUrl}
          width={100}
          height={100}
          alt={`${user!.username}`}
          className="rounded-full"
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-semibold text-2xl">{user!.username}</h1>
          <h2>{user!.emailAddresses[0].emailAddress}</h2>
        </div>
      </div>
      {mongoUser?.orders?.length > 0 ? (
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="font-semibold text-2xl">Moje porudžbine</h1>
          <div className="flex flex-row flex-wrap w-full justify-center items-center">
            {mongoUser.orders?.map((order: any) => {
              order.products.map((product: any) => {
                return (
                  // <Card
                  //   discount={product?.discount}
                  //   isOnDiscount={product?.isOnDiscount}
                  //   discountedPrice={product?.discountedPrice}
                  //   _id={product?._id?.toString()}
                  //   title={product?.title}
                  //   productClass={product?.class}
                  //   images={product?.images}
                  //   price={product?.price}
                  // />
                  <h1>{product.title!}</h1>
                )
              })
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

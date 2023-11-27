import { getSingleProduct } from "@/actions/server/products"
import { getSingleUser } from "@/actions/server/users"
import Card from "@/components/Card"
import { currentUser } from "@clerk/nextjs"

const UserProfile = async ({ params }: { params: { id: string } }) => {
  const user = await currentUser()
  const uid = user?.id
  const mongoUser = await getSingleUser(uid)
  return (
    <main className="min-h-screen flex flex-col items-center justify-center w-full text-center gap-20">
      User: {user?.username}
      <div className="flex flex-row flex-wrap w-full justify-center items-center">
        {mongoUser?.orders?.map(async (order: any) => {
          const product = await getSingleProduct(order.model)
          return (
            <Card
              discount={product?.discount}
              isOnDiscount={product?.isOnDiscount}
              _id={product?._id?.toString()}
              title={product.title}
              productClass={product.class}
              images={product.images}
              price={product.price}
            />
          )
        })}
      </div>
    </main>
  )
}
export default UserProfile

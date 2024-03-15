import OrdersTable from "@/components/tables/OrdersTable"
import { APP_URL } from "@/constants"
import { fetchData } from "@/helpers/client"
import { currentUser } from "@clerk/nextjs"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Sve narudžbine",
  robots: {
    index: false,
    nocache: true,
  },
}
const Orders = async () => {
  const allOrders = await fetchData(`${APP_URL}/api/orders`, {
    method: "GET",
    cache: "force-cache",
    tags: ["orders"],
  })
  const user = await currentUser()
  if (user?.emailAddresses[0].emailAddress != "satovi.montre@gmail.com")
    throw new Error("Admin permissions needed to access this page")
  return (
    <div className="flex flex-col justify-start items-center w-full min-h-[80vh] gap-8 py-8 lg:py-16">
      <h1 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900">
        Sve narudžbine
      </h1>
      <div className="relative overflow-x-auto w-full flex justify-center items-center sm:min-w-[80vw] lg:w-fit xl:min-w-[1000px]">
        {allOrders?.length > 0 ? (
          <OrdersTable orders={allOrders} />
        ) : (
          <div className="flex w-2/3 justify-center items-center flex-col gap-5">
            <h2 className="text-2xl  text-center">Nemate trenutno ni jedna narudžbina</h2>
            <Image src="/other/no_order.png" alt="No Orders" width={200} height={200} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Orders

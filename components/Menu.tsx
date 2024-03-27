import { APP_URL } from "@/constants"
import { fetchData } from "@/helpers/client"
import { auth } from "@clerk/nextjs"
import React from "react"
import Sidebar from "./Sidebar"

const Menu: React.FC = async () => {
  const { userId }: { userId: string | null } = auth()
  var cartItemsCount: number = 0
  var mongoUser: any = {}
  if (userId) {
    mongoUser = await fetchData(`${APP_URL}/api/users/single-user`, {
      method: "POST",
      cache: "force-cache",
      body: JSON.stringify({ uid: userId }),
      tags: ["users"],
    })
    cartItemsCount = mongoUser?.cart?.length > 0 ? mongoUser?.cart?.length : 0
  }
  return <Sidebar cartItemsCount={cartItemsCount} />
}

export default Menu

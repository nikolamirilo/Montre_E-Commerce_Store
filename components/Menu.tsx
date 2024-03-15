import { APP_URL } from "@/constants"
import { fetchData } from "@/helpers/client"
import { currentUser } from "@clerk/nextjs"
import React from "react"
import Sidebar from "./Sidebar"

const Menu: React.FC = async () => {
  const user = await currentUser()
  var cartItemsCount: number = 0
  var mongoUser: any = {}
  if (user) {
    const uid = user?.id
    mongoUser = await fetchData(`${APP_URL}/api/users/single-user`, {
      method: "POST",
      cache: "force-cache",
      body: JSON.stringify({ uid: uid }),
      tags: ["users"],
    })
    cartItemsCount = mongoUser?.cart?.length > 0 ? mongoUser?.cart?.length : 0
  }
  return <Sidebar cartItemsCount={cartItemsCount} />
}

export default Menu

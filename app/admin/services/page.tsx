import { discountEtl } from "@/actions/server/etls"
import ETLS from "@/components/ETLS"
import Heading from "@/components/helpers/Heading"
import { currentUser } from "@clerk/nextjs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servisi",
  robots: {
    index: false,
    nocache: true,
  },
}

const Services = async () => {
  async function handleUpdateMultipleProducts() {
    "use server"
    await discountEtl("all", 20)
  }
  const user = await currentUser()
  if (user?.emailAddresses[0].emailAddress != "satovi.montre@gmail.com")
    throw new Error("Admin permissions needed to access this page")
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full py-16">
      <Heading value="Dostupni Servisi" />
      <ETLS handleUpdateMultipleProducts={handleUpdateMultipleProducts} />
    </div>
  )
}

export default Services

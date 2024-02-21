import MultipleOrder from "@/components/order/MultipleOrder"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Naruči",
  robots: {
    index: false,
    nocache: true,
  },
}

const Order = () => {
  return <MultipleOrder />
}

export default Order

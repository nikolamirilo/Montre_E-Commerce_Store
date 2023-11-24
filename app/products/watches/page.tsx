import Loader from "@/components/Loader"
import { SearchQuery } from "@/typescript/interfaces"
import dynamic from "next/dynamic"
const DynamicProducts = dynamic(() => import("@/components/Products"), {
  loading: () => <Loader />,
})

const AllProducts = ({ searchParams }: { searchParams: SearchQuery }) => {
  return (
    <main>
      <DynamicProducts query={searchParams} title="Svi modeli satova" type="all" />
    </main>
  )
}

export default AllProducts

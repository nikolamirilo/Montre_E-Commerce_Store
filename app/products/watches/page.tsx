import Loader from "@/components/Loader"
import { SearchQuery } from "@/typescript/interfaces"
import dynamic from "next/dynamic"
const DynamicProducts = dynamic(() => import("@/components/Products"), {
  loading: () => <Loader />,
})

const AllProducts = ({ searchParams }: { searchParams: SearchQuery }) => {
  const query = searchParams
  return (
    <main>
      <DynamicProducts query={query} title="Svi modeli satova" type="all" />
    </main>
  )
}

export default AllProducts

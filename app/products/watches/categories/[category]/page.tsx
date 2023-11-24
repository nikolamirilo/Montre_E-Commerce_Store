import Loader from "@/components/Loader"
import dynamic from "next/dynamic"

const DynamicProducts = dynamic(() => import("@/components/Products"), {
  loading: () => <Loader />,
})

const Category = ({ params }: { params: { category: string } }) => {
  return (
    <main className="min-h-screen w-full text-center">
      <DynamicProducts
        query={{ category: params.category }}
        title={params.category == "man" ? "Muška ponuda satova" : "Ženska ponuda satova"}
        type={params.category}
      />
    </main>
  )
}
export default Category

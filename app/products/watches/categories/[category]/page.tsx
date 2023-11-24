import Products from "@/components/Products"
import { SearchQuery } from "@/typescript/interfaces"

const Category = ({
  searchParams,
  params,
}: {
  searchParams: SearchQuery
  params: { category: string }
}) => {
  const searchParamsData = searchParams
  const category = params.category
  const query = { ...searchParamsData, category }
  return (
    <main className="min-h-screen w-full text-center">
      <Products
        query={query}
        title={category == "man" ? "Muška ponuda satova" : "Ženska ponuda satova"}
        type={category}
      />
    </main>
  )
}
export default Category

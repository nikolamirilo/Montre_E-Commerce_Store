import Products from "@/components/Products"

const Category = ({ params }: { params: { category: string } }) => {
  return (
    <main className="min-h-screen w-full text-center">
      <Products category={params.category} />
    </main>
  )
}
export default Category

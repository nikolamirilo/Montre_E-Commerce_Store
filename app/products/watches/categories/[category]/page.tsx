import Products from "@/components/Products"

const Category = ({ params }: { params: { category: string } }) => {
  return (
    <main className="min-h-screen w-full text-center">
      <Products
        query={{ category: params.category }}
        title={params.category == "man" ? "Muška ponuda satova" : "Ženska ponuda satova"}
      />
    </main>
  )
}
export default Category

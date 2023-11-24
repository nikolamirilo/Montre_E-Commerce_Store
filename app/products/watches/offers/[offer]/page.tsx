import Products from "@/components/Products"

const Offer = ({ params }: { params: { offer: string } }) => {
  return (
    <main className="min-h-screen w-full text-center">
      <Products type="discount" query={{ discount: true }} title="Modeli koji su na sniženju" />
    </main>
  )
}
export default Offer

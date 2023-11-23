import Products from "@/components/Products"

const Offer = ({ params }: { params: { offer: string } }) => {
  return (
    <main className="min-h-screen w-full text-center">
      <Products query={{ category: "man" }} title="Modeli koji su na sniženju" />
    </main>
  )
}
export default Offer

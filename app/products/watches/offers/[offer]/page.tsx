import Products from "@/components/Products"

const Offer = ({ params }: { params: { offer: string } }) => {
  return (
    <div className="min-h-screen w-full text-center" id="offer">
      <Products type="discount" query={{ isOnDiscount: true }} title="Modeli koji su na sniženju" />
    </div>
  )
}
export default Offer

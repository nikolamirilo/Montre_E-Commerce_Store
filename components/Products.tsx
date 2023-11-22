import { Product } from "@/typescript/interfaces"
import CardsContainer from "./CardsContainer"
import Search from "./Search"

export const revalidate = 0
export const dynamic = "force-dynamic"

const Products = ({ category }: { category?: string }) => {
  var search = ""
  const filterProducts = (product: Product) => {
    if (category) {
      return product.category == category
    } else if (search != "") {
      return product.title.includes(search)
    } else {
      return product.price > 0
    }
  }

  return (
    <section
      id="cards-container"
      className="flex flex-col justify-center items-center h-fit md:p-20 gap-10 w-full pt-12">
      <h3 className="text-gray-800 font-semibold text-4xl tracking-tight text-center uppercase">
        Svi modeli satova
      </h3>
      <Search search={search} />
      <CardsContainer filter={filterProducts} />
    </section>
  )
}

export default Products

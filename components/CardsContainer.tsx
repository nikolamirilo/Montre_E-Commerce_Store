import { getAllProducts } from "@/actions/server/products"
import Card from "@/components/Card"
import { Product } from "@/typescript/interfaces"
import Loader from "./Loader"

export interface CardsContanerProps {
  filter: (product: Product) => void
}

const CardsContainer: React.FC<CardsContanerProps> = async ({ filter }) => {
  const products = await getAllProducts()
  if (!products) return <Loader />
  return (
    <div className="flex flex-wrap w-full justify-center items-center gap-5">
      {products
        ?.filter((product: Product) => filter(product))
        .map((product: Product, idx: number) => {
          if (
            product.title &&
            product.images.length > 0 &&
            product.price &&
            product.category &&
            product.isPublic == true
          ) {
            return (
              <Card
                key={idx}
                _id={product?._id?.toString()}
                title={product.title}
                category={product.category}
                images={product.images}
                price={product.price}
              />
            )
          }
        })}
    </div>
  )
}

export default CardsContainer

import { getAllProducts } from "@/actions/server/products"
import { Product, SearchQuery } from "@/typescript/interfaces"
import Card from "./Card"
import Loader from "./Loader"
import Search from "./Search"

export const revalidate = 0
export const dynamic = "force-dynamic"

const Products = async ({
  query,
  title,
  type,
}: {
  query: SearchQuery
  title: string
  type: string
}) => {
  const products = await getAllProducts(query)
  return (
    <section
      id="cards-container"
      className="flex flex-col justify-center items-center h-fit md:p-20 gap-10 w-full pt-12">
      <h3 className="text-gray-800 font-semibold text-4xl tracking-tight text-center uppercase">
        {title}
      </h3>
      <Search type={type} params={query} />
      <div className="flex flex-wrap w-full justify-center items-center gap-5">
        {products ? (
          products.map((product: Product, idx: number) => {
            if (
              product.title &&
              product.images.length > 0 &&
              product.price &&
              product.class &&
              product.isPublic == true
            ) {
              return (
                <Card
                  key={idx}
                  discount={product?.discount}
                  isOnDiscount={product?.isOnDiscount}
                  _id={product?._id?.toString()}
                  title={product.title}
                  productClass={product.class}
                  images={product.images}
                  price={product.price}
                />
              )
            }
          })
        ) : (
          <Loader />
        )}
      </div>
    </section>
  )
}

export default Products

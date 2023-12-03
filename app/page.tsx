import { getAllProducts } from "@/actions/server/products"
import Card from "@/components/Card"
import Hero from "@/components/Hero"
import Loader from "@/components/Loader"
import Snow from "@/components/Snow"
import { Product } from "@/typescript/interfaces"
import Link from "next/link"

export default async function Home() {
  const products = await getAllProducts({})
  return (
    <main className="flex w-full flex-col justify-center items-center" id="home">
      <Hero />
      <Snow />
      <div className="flex flex-col gap-10 justify-center items-center mt-10">
        <h2 className="text-3xl font-semibold text-center">Izdvajamo iz ponude</h2>
        <div className="flex flex-wrap w-full justify-center items-center gap-5">
          {products ? (
            products
              .filter((product: Product, idx: number) => idx < 4)
              .map((product: Product, idx: number) => {
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
        <Link
          href="/products/watches"
          className="text-white bg-amber-500 hover:bg-amber-600 font-medium rounded-lg text-lg px-5 py-2.5 text-center flex flex-row gap-2 justify-center items-center">
          Svi proizvodi
        </Link>
      </div>
    </main>
  )
}

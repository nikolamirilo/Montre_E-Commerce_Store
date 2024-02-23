import { getAllProducts } from "@/actions/server/products"
import { ProductsProps } from "@/typescript/interfaces"
import { Product } from "@/typescript/types"
import Image from "next/image"
import React from "react"
import Card from "./Card"
import Search from "./helpers/Search"

export const revalidate = 86400
export const dynamic = "force-static"

const Products: React.FC<ProductsProps> = async ({ query, title, subtitle, type }) => {
  const products = await getAllProducts(query)
  return (
    <section
      id="cards-container"
      className="flex flex-col justify-center items-center h-fit py-[6vh] lg:px-[5%] xl:px-[10%] gap-8 w-full">
      <div className="flex flex-col w-full justify-center items-center gap-4">
        <h1 className="text-amber-500 text-2xl font-bold lg:text-3xl text-center w-10/12 xl:w-1/2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-800 text-base lg:text-lg text-center w-10/12 xl:w-1/2">
            {subtitle}
          </p>
        )}
      </div>
      <Search type={type} params={query} />
      <div className="px-0 flex flex-wrap w-fit justify-center gap-x-5 gap-y-5 2xl:gap-y-10 lg:gap-x-0 items-center cards-container max-w-[1500px] mx-auto">
        {products
          ? products.map((product: Product, idx: number) => {
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
                    productCode={product?.productCode}
                    discount={product?.discount}
                    isOnDiscount={product?.isOnDiscount}
                    discountedPrice={product?.discountedPrice}
                    _id={product?._id?.toString()}
                    isOutOfStock={product?.isOutOfStock}
                    title={product?.title}
                    productClass={product?.class}
                    image={product?.images[0]!}
                    price={product?.price}
                  />
                )
              }
            })
          : "Greška pri učitavanju"}

        {products?.length == 0 && (
          <div className="flex w-2/3 justify-center items-center flex-col gap-5">
            <h2 className="text-2xl  text-center">Nema rezultata pretrage</h2>
            <Image src="/other/no_results.png" alt="No results" width={200} height={200} />
          </div>
        )}
      </div>
    </section>
  )
}

export default Products

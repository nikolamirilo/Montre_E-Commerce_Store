import { APP_URL } from "@/constants"
import { fetchData } from "@/helpers/client"
import { ProductsProps } from "@/typescript/interfaces"
import { Product } from "@/typescript/types"
import Image from "next/image"
import React from "react"
import { BiMessageError } from "react-icons/bi"
import ProductCard from "./cards/ProductCard"

export const revalidate = 86400
export const dynamic = "force-static"

const Products: React.FC<ProductsProps> = async ({ query, title, subtitle, type }) => {
  const products = await fetchData(`${APP_URL}/api/products`, {
    method: "POST",
    cache: "force-cache",
    body: JSON.stringify(query),
  })
  return (
    <section className="flex flex-col justify-center items-center h-fit py-[6vh] lg:px-[5%] xl:px-[10%] gap-8 w-full">
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
      {/* <Search type={type} params={query} /> */}
      <div
        className={`px-0 flex flex-wrap w-fit justify-center gap-4 items-center ${
          products?.length > 3 && "cards-container"
        } max-w-[1500px] mx-auto`}>
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
                <ProductCard
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
        ) : (
          <span className="text-xl font-semibold flex flex-row gap-2 items-center justify-center">
            Greška pri učitavanju <BiMessageError color="red" size={30} />
          </span>
        )}
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

import { Product } from "@/typescript/types"
import Link from "next/link"
import { BiMessageError } from "react-icons/bi"
import ProductCard from "./cards/ProductCard"

const Recommendations = ({ products }: { products: Product[] }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-fit lg:px-[5%] xl:px-[10%] gap-8">
      <div className="flex flex-col w-full justify-center items-center gap-4">
        <h2 className="text-amber-500 text-2xl font-bold lg:text-3xl text-center w-10/12 xl:w-1/2">
          Izdvajamo iz ponude
        </h2>
        <p className="text-gray-800 text-base lg:text-lg text-center w-10/12 xl:w-1/2">
          Sa zadovoljstvom vam predstavljamo ekskluzivnu i raskošnu ponudu iz Montre kolekcije. Ovi
          satovi predstavljaju vrhunac elegancije, izrade i stila. Uz pažljivo izabrane materijale i
          vrhunsku izradu, svaki sat iz ove kolekcije predstavlja spoj vrhunskog inženjeringa i
          estetike.
        </p>
      </div>
      <div className="px-0 flex flex-wrap w-fit justify-center gap-4 items-center max-w-[1500px] mx-auto">
        {products ? (
          products
            .filter((item, idx) => idx < 3)
            .map((product: Product, idx: number) => {
              return (
                <ProductCard
                  key={idx}
                  discount={product?.discount}
                  isOnDiscount={product?.isOnDiscount}
                  discountedPrice={product?.discountedPrice}
                  productCode={product.productCode}
                  _id={product?._id?.toString()}
                  title={product.title}
                  productClass={product.class}
                  image={product.images[0]}
                  price={product.price}
                />
              )
            })
        ) : (
          <span className="text-xl font-semibold flex flex-row gap-2 items-center justify-center">
            Greška pri učitavanju <BiMessageError color="red" size={30} />
          </span>
        )}
      </div>
      <Link
        href="/products/watches"
        className="text-white bg-amber-500 hover:bg-amber-600 font-medium rounded-lg text-lg px-5 py-2.5 text-center flex flex-row gap-2 justify-center items-center">
        Svi proizvodi
      </Link>
    </div>
  )
}

export default Recommendations

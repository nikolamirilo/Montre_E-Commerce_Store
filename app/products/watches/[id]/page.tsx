import { getSingleProduct } from "@/actions/server/products"
import Slider from "@/components/Slider"
import { BsCart3 } from "react-icons/bs"

const SingleProduct = async ({ params }: { params: { id: string } }) => {
  const id = params.id
  const product = await getSingleProduct(id)
  return (
    <main className="md:flex items-start mt-20 lg:mt-32 justify-center 2xl:px-20 md:px-6 px-4 ">
      <div className="flex flex-col justify-center lg:mt-6 items-center w-full xl:w-3/5 h-full md:w-1/2">
        <Slider images={product.images} />
      </div>
      <div className="xl:w-3/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-8">
        <div className="border-b border-gray-200 pb-6">
          <h1 className="lg:text-3xl text-2xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
            {product.title}
          </h1>
        </div>
        <div className="py-2 border-b border-gray-200 flex items-center justify-between">
          <p className="text-lg tracking-wide text-gray-900 dark:text-gray-300">
            {product.description}
          </p>
        </div>
        <div className="flex w-full items-center justify-center mt-5">
          <button className=" text-lg flex items-center rounded-xl gap-3 mb-5 justify-center leading-none text-white bg-amber-500 w-full lg:w-1/2 font-semibold py-2 hover:bg-amber-600 focus:outline-none">
            <BsCart3 size={30} /> Dodaj u korpu
          </button>
        </div>
        <div className="py-2 border-b border-gray-200 flex items-center justify-between">
          <p className="text-lg text-gray-900 dark:text-gray-300">Brend:</p>
          <div className="flex items-center justify-center">
            <p className="text-lg font-semibold leading-none text-gray-900 dark:text-gray-300 mr-3">
              {product.brand}
            </p>
          </div>
        </div>
        <div className="py-2 border-b border-gray-200 flex items-center justify-between">
          <p className="text-lg text-gray-900 dark:text-gray-300">Klasa:</p>
          <div className="flex items-center justify-center">
            <p className="text-lg font-semibold leading-none text-gray-900 dark:text-gray-300 mr-3">
              {product.class}
            </p>
          </div>
        </div>
        <div className="py-2 border-b border-gray-200 flex items-center justify-between">
          <p className="text-lg text-gray-900 dark:text-gray-300">Kategorija:</p>
          <div className="flex items-center justify-center">
            <p className="text-lg font-semibold leading-none text-gray-900 dark:text-gray-300 mr-3">
              {product.category == "man" ? "Muški" : "Ženski"}
            </p>
          </div>
        </div>
        <div className="py-2 border-b border-gray-200 flex items-center justify-between">
          <p className="text-lg text-gray-900 dark:text-gray-300">Šifra:</p>
          <div className="flex items-center justify-center">
            <p className="text-lg font-semibold leading-none text-gray-900 dark:text-gray-300 mr-3">
              {product._id}
            </p>
          </div>
        </div>
        <div className="py-2 border-b border-gray-200 flex items-center justify-between">
          <p className="text-lg text-gray-900 dark:text-gray-300">Prečnik:</p>
          <div className="flex items-center justify-center">
            <p className="text-lg font-semibold leading-none text-gray-900 dark:text-gray-300 mr-3">
              5,2cm
            </p>
          </div>
        </div>
        <div className="py-2 border-b border-gray-200 flex items-center justify-between">
          <p className="text-lg text-gray-900 dark:text-gray-300">Sastav:</p>
          <div className="flex items-center justify-center">
            <p className="text-lg font-semibold leading-none text-gray-900 dark:text-gray-300 mr-3">
              100% hirurški čelik
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SingleProduct

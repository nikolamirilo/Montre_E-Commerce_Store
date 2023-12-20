import { getSingleProduct } from "@/actions/server/products"
import AddToCartButton from "@/components/AddToCartButton"
import Slider from "@/components/Slider"
import { Product } from "@/typescript/interfaces"
import { currentUser } from "@clerk/nextjs"

const SingleProduct = async ({ params }: { params: { id: string } }) => {
  const id = params.id
  const product: Product = await getSingleProduct(id)
  const user = await currentUser()
  const uid = user?.id
  if (product) {
    const calculatedPrice = product.isOnDiscount ? product.discountedPrice! : product.price!
    return (
      <main className="md:flex items-start mt-20 lg:mt-32 justify-center 2xl:px-20 md:px-6 px-4 ">
        <div className="flex flex-col justify-center lg:mt-6 items-center w-full xl:w-3/5 h-full md:w-1/2">
          <Slider images={product.images} />
        </div>
        <div className="xl:w-3/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-8">
          <div className="border-b border-gray-200 pb-6">
            <h1 className="lg:text-3xl text-2xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">
              {product.title}
            </h1>
          </div>
          <div className="py-2 border-b border-gray-200 flex items-center justify-between">
            <p className="text-lg tracking-wide text-gray-900">{product.description}</p>
          </div>
          <div className="py-2 border-b border-gray-200 flex items-center justify-between">
            <p className="text-lg text-gray-900">Cena:</p>
            <div className="flex items-center justify-center">
              <p className="text-lg font-semibold leading-none text-gray-900 mr-3">
                {calculatedPrice!.toLocaleString().replace(",", ".")},00 RSD
              </p>
            </div>
          </div>
          {product.isOnDiscount == true ? (
            <div className="py-2 border-b border-gray-200 flex items-center justify-between">
              <p className="text-lg text-gray-900">Popust:</p>
              <div className="flex items-center justify-center">
                <p className="text-lg font-semibold leading-none text-gray-900 mr-3">
                  {product.discount}%
                </p>
              </div>
            </div>
          ) : null}
          {user ? <AddToCartButton uid={uid} id={id} /> : null}
          <div className="py-2 border-b border-gray-200 flex items-center justify-between">
            <p className="text-lg text-gray-900">Brend:</p>
            <div className="flex items-center justify-center">
              <p className="text-lg font-semibold leading-none text-gray-900 mr-3">
                {product.brand}
              </p>
            </div>
          </div>
          <div className="py-2 border-b border-gray-200 flex items-center justify-between">
            <p className="text-lg text-gray-900">Tip:</p>
            <div className="flex items-center justify-center">
              <p className="text-lg font-semibold leading-none text-gray-900 mr-3">Hronograf</p>
            </div>
          </div>
          <div className="py-2 border-b border-gray-200 flex items-center justify-between">
            <p className="text-lg text-gray-900">Klasa:</p>
            <div className="flex items-center justify-center">
              <p className="text-lg font-semibold leading-none text-gray-900 mr-3">
                {product.class}
              </p>
            </div>
          </div>
          <div className="py-2 border-b border-gray-200 flex items-center justify-between">
            <p className="text-lg text-gray-900">Kategorija:</p>
            <div className="flex items-center justify-center">
              <p className="text-lg font-semibold leading-none text-gray-900 mr-3">
                {product.category == "man" ? "Muški" : "Ženski"}
              </p>
            </div>
          </div>
          {/* <div className="py-2 border-b border-gray-200 flex items-center justify-between">
            <p className="text-lg text-gray-900">Šifra:</p>
            <div className="flex items-center justify-center">
              <p className="text-lg font-semibold leading-none text-gray-900 mr-3">{product._id}</p>
            </div>
          </div> */}
          <div className="py-2 border-b border-gray-200 flex items-center justify-between">
            <p className="text-lg text-gray-900">Prečnik:</p>
            <div className="flex items-center justify-center">
              <p className="text-lg font-semibold leading-none text-gray-900 mr-3">5,2cm</p>
            </div>
          </div>
          <div className="py-2 border-b border-gray-200 flex items-center justify-between">
            <p className="text-lg text-gray-900">Sastav:</p>
            <div className="flex items-center justify-center">
              <p className="text-lg font-semibold leading-none text-gray-900 mr-3">
                100% hirurški čelik
              </p>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
export default SingleProduct

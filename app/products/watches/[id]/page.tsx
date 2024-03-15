import { getAllProducts } from "@/actions/server/products"
import AddToCartButton from "@/components/helpers/AddToCartButton"
import Slider from "@/components/Slider"
import { APP_URL, KEYWORDS } from "@/constants"
import { fetchData } from "@/helpers/client"
import { getProductJSONSchema } from "@/schemas"
import { Product } from "@/typescript/types"
import { currentUser } from "@clerk/nextjs"
import { Metadata } from "next"
import { CldOgImage } from "next-cloudinary"

export async function generateStaticParams() {
  const products = await getAllProducts()
  return products.map((product: Product) => ({
    id: product?.productCode,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id
  const product: Product = await fetchData(`${APP_URL}/api/products/single-product`, {
    method: "POST",
    cache: "force-cache",
    body: JSON.stringify({ productCode: id }),
    tags: ["products"],
  })
  const imageUrl: string = product?.images[0]
  return {
    title: product?.title,
    description: product?.description,
    generator: "Montre Shop",
    applicationName: "Montre Shop",
    keywords: KEYWORDS,
    authors: [{ name: "Reactify Solutions" }],
    creator: "Reactify Solutions",
    publisher: "Montre Shop",
    metadataBase: new URL(`https://www.montre-shop.com/products/watches/${product?.productCode}`),
    alternates: {
      canonical: `https://www.montre-shop.com/products/watches/${product?.productCode}`,
    },
    openGraph: {
      title: product?.title,
      description: product?.description,
      url: `https://www.montre-shop.com/products/watches/${product?.productCode}`,
      images: [imageUrl],
    },
    twitter: {
      title: product?.title,
      creator: "Reactify Solutions",
      site: `https://www.montre-shop.com/products/watches/${product?.productCode}`,
      description: product?.description,
      images: [imageUrl],
    },
  }
}

const SingleProduct = async ({ params }: { params: { id: string } }) => {
  const id = params.id
  const product: Product = await fetchData(`${APP_URL}/api/products/single-product`, {
    method: "POST",
    cache: "force-cache",
    body: JSON.stringify({ productCode: id }),
    tags: ["products"],
  })
  if (product) {
    const jsonLD = getProductJSONSchema(
      product.title,
      product.brand,
      product.category,
      product.discountedPrice,
      product.description,
      product.images[0],
      product.productCode
    )
    const user = await currentUser()
    const uid = user?.id
    return (
      <div className="md:flex items-start mt-[10vh] justify-center 2xl:px-20 md:px-6 px-4 ">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
        />
        <CldOgImage src={product?.images[0]} alt={product?.title} twitterTitle={product?.title} />
        <div className="flex flex-col justify-center lg:mt-[1.5%] items-center w-full xl:w-4/5 2xl:w-3/5 h-full md:w-full">
          <Slider images={product?.images} />
        </div>
        <div className="xl:w-3/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-8">
          <div className="border-b border-gray-300 pb-6">
            <h1 className="lg:text-3xl text-2xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">
              {product?.title}
            </h1>
          </div>
          <div className="py-2 border-b border-gray-300 flex items-center justify-between">
            <p className="text-lg tracking-wide text-gray-900">{product?.description}</p>
          </div>
          <div className="py-2 border-b border-gray-300 flex items-center justify-between">
            <p className="text-lg text-gray-900">Cena:</p>
            <div className="flex items-center justify-center">
              <p className="text-lg font-semibold leading-none text-gray-900 mr-3">
                {product?.price!.toLocaleString().replace(",", ".")},00 RSD
              </p>
            </div>
          </div>
          {product?.isOnDiscount == true ? (
            <div className="py-2 border-b border-gray-300 flex items-center justify-between">
              <p className="text-lg text-gray-900">Popust:</p>
              <div className="flex items-center justify-center">
                <p className="text-lg font-semibold leading-none text-gray-900 mr-3">
                  {product?.discount}%
                </p>
              </div>
            </div>
          ) : null}
          <div className="py-2 border-b border-gray-300 flex items-center justify-between">
            <p className="text-lg text-gray-900">Status:</p>
            <div className="flex items-center justify-center">
              <p className="text-lg font-semibold leading-none text-gray-900 mr-3">
                {product?.isOutOfStock == true ? "Rasprodato" : "Na stanju"}
              </p>
            </div>
          </div>
          {product?.isOnDiscount == true ? (
            <div className="py-2 border-b border-gray-300 flex items-center justify-between">
              <p className="text-lg text-gray-900">Cena sa popustom:</p>
              <div className="flex items-center justify-center">
                <p className="text-lg font-bold leading-none text-red-600 mr-3">
                  {product?.discountedPrice!.toLocaleString().replace(",", ".")},00 RSD
                </p>
              </div>
            </div>
          ) : null}
          {product?.isOutOfStock == false && user ? (
            <AddToCartButton uid={uid} id={id} type="add-to-cart" />
          ) : product?.isOutOfStock == false && !user ? (
            <AddToCartButton uid={uid} id={id} type="order" />
          ) : null}
          <div className="py-2 border-b border-gray-300 flex items-center justify-between">
            <p className="text-lg text-gray-900">Brend:</p>
            <div className="flex items-center justify-center">
              <p className="text-lg font-semibold leading-none text-gray-900 mr-3">
                {product?.brand}
              </p>
            </div>
          </div>
          <div className="py-2 border-b border-gray-300 flex items-center justify-between">
            <p className="text-lg text-gray-900">Tip:</p>
            <div className="flex items-center justify-center">
              <p className="text-lg font-semibold leading-none text-gray-900 mr-3">
                {product?.typ}
              </p>
            </div>
          </div>
          <div className="py-2 border-b border-gray-300 flex items-center justify-between">
            <p className="text-lg text-gray-900">Klasa:</p>
            <div className="flex items-center justify-center">
              <p className="text-lg font-semibold leading-none text-gray-900 mr-3">
                {product?.class}
              </p>
            </div>
          </div>
          <div className="py-2 border-b border-gray-300 flex items-center justify-between">
            <p className="text-lg text-gray-900">Kategorija:</p>
            <div className="flex items-center justify-center">
              <p className="text-lg font-semibold leading-none text-gray-900 mr-3">
                {product?.category == "men" ? "Muški" : "Ženski"}
              </p>
            </div>
          </div>
          <div className="py-2 border-b border-gray-300 flex items-center justify-between">
            <p className="text-lg text-gray-900">Prečnik:</p>
            <div className="flex items-center justify-center">
              <p className="text-lg font-semibold leading-none text-gray-900 mr-3">
                {product?.diameter}mm
              </p>
            </div>
          </div>
          <div className="py-2 border-b border-gray-300 flex items-center justify-between">
            <p className="text-lg text-gray-900">Sastav:</p>
            <div className="flex items-center justify-center">
              <p className="text-lg font-semibold leading-none text-gray-900 mr-3">
                Nerđajući čelik
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default SingleProduct

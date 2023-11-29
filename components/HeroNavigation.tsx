"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

const HeroNavigation = () => {
  const router = useRouter()
  return (
    <div className="relative w-full lg:w-11/12 lg:right-[7%] flex flex-col justify-center items-center gap-2 md:fle md:flex-row md:justify-center lg:justify-start">
      <button
        onClick={() => {
          router.push("/products/watches/categories/man")
        }}
        id="man-offer"
        className="romboid bg-white p-4 border-none h-48 relative md:left-[7%] w-full md:w-1/2  font-bold py-2 px-4 inline-flex items-center gap-2 shadow-xl shadow-black/20">
        <Image
          className="object-cover object-center transform -scale-x-100"
          priority
          fill
          src="/hero/man.jpg"
          alt="product image"
        />
        <span className="absolute bottom-0 left-0 top-0 right-0 w-full h-full bg-black/60 z-10 text-amber-500 uppercase flex justify-center items-center text-3xl">
          <p className="w-1/2 text-center">Muška Ponuda</p>
        </span>
      </button>
      <button
        onClick={() => {
          router.push("/products/watches/categories/woman")
        }}
        id="woman-offer"
        className="romboid-reverse bg-white p-4 border-none h-48 relative md:right-[7%] w-full md:w-1/2 font-bold py-2 px-4 inline-flex items-center gap-2  shadow-xl shadow-amber-600/20">
        <Image
          className="object-cover object-center"
          priority
          fill
          src="/hero/woman.webp"
          alt="product image"
        />
        <span className="absolute bottom-0 left-0 top-0 right-0 w-full h-full z-10 text-white uppercase flex bg-amber-900/60 justify-center items-center text-3xl">
          <p className="w-1/2 text-center">Ženska Ponuda</p>
        </span>
      </button>
    </div>
  )
}

export default HeroNavigation

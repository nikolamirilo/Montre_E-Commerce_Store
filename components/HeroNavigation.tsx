"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

const HeroNavigation = () => {
  const router = useRouter()
  return (
    <div className="relative w-full lg:w-9/12 lg:right-[5%] flex flex-col justify-center items-center gap-2 md:fle md:flex-row md:justify-center lg:justify-start">
      <button
        onClick={() => {
          router.push("/products/watches/categories/man")
        }}
        id="man-offer"
        className="romboid bg-white hover:transform hover:scale-[1.03] p-4 border-none h-36 relative md:left-[7%] w-full md:w-1/2  font-bold py-2 px-4 inline-flex items-center gap-2 shadow-xl shadow-black/20">
        <Image
          className="object-cover object-center transform -scale-x-100"
          priority
          fill
          src="/hero/man.jpg"
          alt="product image"
        />
        <span className="absolute bottom-0 left-0 top-0 right-0 w-full h-full bg-black/60 z-10 hover:bg-black/40 text-amber-500 uppercase flex justify-center items-center text-3xl">
          <p className="w-1/2 text-center">Muška Ponuda</p>
        </span>
      </button>
      <button
        onClick={() => {
          router.push("/products/watches/categories/woman")
        }}
        id="woman-offer"
        className="romboid-reverse hover:transform hover:scale-[1.03] bg-white p-4 border-none h-36 relative md:right-[7%] w-full md:w-1/2 font-bold py-2 px-4 inline-flex items-center gap-2  shadow-xl shadow-amber-600/20">
        <Image
          className="object-cover object-center"
          priority
          fill
          src="/hero/woman.webp"
          alt="product image"
        />
        <span className="absolute bottom-0 left-0 top-0 right-0 w-full h-full z-10 text-white uppercase flex bg-amber-700/60 hover:bg-amber-700/40 justify-center items-center text-3xl">
          <p className="w-1/2 text-center">Ženska Ponuda</p>
        </span>
      </button>
    </div>
  )
}

export default HeroNavigation

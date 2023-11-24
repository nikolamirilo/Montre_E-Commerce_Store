"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

const HeroNavigation = () => {
  const router = useRouter()
  return (
    <div className="relative flex flex-col justify-center items-center gap-2 md:fle md:flex-row md:justify-center lg:justify-start">
      <button
        onClick={() => {
          router.push("/products/watches/categories/man")
        }}
        className="bg-white p-4 md:skew-x-[3deg] border-none h-56 relative md:left-3 w-full md:w-1/2  font-bold py-2 px-4 inline-flex items-center gap-2 shadow-xl shadow-black/20">
        <Image
          className="object-cover object-center transform -scale-x-100"
          priority
          fill
          src="https://th.bing.com/th/id/OIP.mattLDPpdMfLylkHb9h3ZQHaEp?w=339&h=180&c=7&r=0&o=5&pid=1.7"
          alt="product image"
        />
        <span className="absolute bottom-0 left-0 top-0 right-0 w-full h-full bg-black/60 z-10 text-amber-500 uppercase flex justify-center items-center text-3xl">
          Muška Ponuda
        </span>
      </button>
      <button
        onClick={() => {
          router.push("/products/watches/categories/woman")
        }}
        className="bg-white md:skew-x-[3deg] p-4 border-none h-56 relative md:right-3 w-full md:w-1/2 font-bold py-2 px-4 inline-flex items-center gap-2  shadow-xl shadow-amber-600/20">
        <Image
          className="object-cover object-center"
          priority
          fill
          src="/hero/woman.webp"
          alt="product image"
        />
        <span className="absolute bottom-0 left-0 top-0 right-0 w-full h-full z-10 text-white uppercase flex bg-amber-800/40 justify-center items-center text-3xl">
          Ženska Ponuda
        </span>
      </button>
    </div>
  )
}

export default HeroNavigation

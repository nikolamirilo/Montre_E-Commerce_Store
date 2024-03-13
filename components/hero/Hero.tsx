import { openSans } from "@/fonts"
import Image from "next/image"
import React, { Suspense } from "react"
import Navigation from "./Navigation"

const Hero: React.FC = () => {
  return (
    <section
      className="relative -top-[4vh] lg:-top-[10vh] lg:min-h-screen h-fit w-full lg:shadow-2xl lg:shadow-black/40 border-black"
      id="hero">
      <Image
        src="/hero/hero.jpg"
        fill
        alt="Hero"
        id="hero-bg"
        className="object-center object-cover hidden lg:flex"
        priority={true}
      />
      <div className="relative w-full px-[5%] xl:pl-[5%] m-auto md:px-12 lg:px-6 flex items-center pt-[10vh] sm:pt-[12vh] md:items-start justify-center flex-col lg:mt-[1%] xl:mt-[2%]">
        <h1
          className={`${openSans.className} bg-gradient-to-r bg-clip-text  text-transparent 
          from-amber-500 via-amber-500 to-orange-500
          animate-text w-full lg:w-8/12 xl:w-1/2 font-black leading-10 text-amber-500 text-[2rem] md:text-4xl lg:text-left xl:text-5xl text-center`}>
          Unikatna kolekcija muških i ženskih satova
        </h1>
        <div className="lg:flex">
          <div className="relative mt-4 md:mt-8 space-y-4 sm:w-10/12 lg:w-8/12 lg:ml-0 sm:mx-auto lg:text-left lg:mr-auto">
            <p className="text-base lg:text-lg text-gray-800 w-full lg:w-full xl:w-11/12 2xl:w-10/12">
              Naša misija je jednostavna. Želimo da vam omogućimo pristup vrhunskim satovima koji ne
              samo da mere vreme, već ga i čine vrednim pamćenja!
            </p>
            <span className="block text-gray-800 text-base lg:text-lg w-full lg:w-full xl:w-11/12 2xl:w-10/12">
              Započni putovanje kroz vreme uz Montre kolekciju satova:
            </span>
            <Navigation />
            <span className="block italic text-gray-800 text-lg lg:text-lg mt-8">
              "Elegancija koja se meri sekundama"
            </span>
            <Suspense fallback="">
              <div className="pt-5 flex flex-row justify-center lg:justify-start lg:w-2/3 w-full items-center flex-wrap gap-8 lg:gap-4">
                <Image
                  src="/brands/curren_logo.png"
                  className="h-6 w-auto"
                  width={300}
                  height={150}
                  alt="Curren"
                />
                <Image
                  src="/brands/hannah_martin_logo.png"
                  alt="Hannah Martin"
                  className="h-6 w-auto"
                  width={300}
                  height={150}
                />
                <Image
                  src="/brands/poedgar_logo.png"
                  alt="Poedgar"
                  className="h-20 w-auto"
                  width={200}
                  height={400}
                />
                {/* <Image
                  src="/brands/naviforce_logo.png"
                  alt="Naviforce"
                  className="h-12 w-auto"
                  width={200}
                  height={400}
                /> */}
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

import React from "react";
import HeroNavigation from "@/components/HeroNavigation";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen h-fit w-full pt-10 lg:pt-16"
      id="hero"
    >
      <div className="relative w-full xl:w-10/12 m-auto px-2 md:px-12 lg:px-6">
        <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 w-full font-black text-amber-500 text-4xl text-center sm:text-6xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl ">
          Montre, satovi koji oduzimaju dah <br className="lg:block hidden" />
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
            po tvojoj meri!
          </span>
        </h1>
        <div className="lg:flex">
          <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
            <p className="sm:text-lg text-gray-800 lg:w-11/12">
              Naša misija je da svakom kupcu pružimo pristup vrhunskim satovima
              koji kombinuju neopisivu eleganciju sa nesavladivom preciznošću,
              čineći svaki trenutak vrednim pamćenja.
            </p>
            <span className="block italic text-gray-800 text-xl">
              "Elegancija koja se meri sekundama"
            </span>
            <HeroNavigation />
            <div className="text-xl text-black">
              🔥🌟Poruči i ti svoj sat preko našeg sajta u dva klika!
            </div>
            <div className="pt-10 flex flex-row justify-center align-middle flex-wrap gap-8">
              <Image
                src="/brands/curren_logo.png"
                className="h-8 w-auto"
                width={300}
                height={150}
                alt="Curren"
              />
              <Image
                src="/brands/lige_logo.png"
                alt="Lige"
                className="h-12 w-auto"
                width={300}
                height={150}
              />
              <Image
                src="/brands/naviforce_logo.png"
                alt="Naviforce"
                className="h-12 w-auto"
                width={300}
                height={150}
              />
              <Image
                src="/brands/benyar_logo.jpg"
                alt="Benyar"
                className="h-12 w-auto"
                width={300}
                height={150}
              />
              <Image
                src="/brands/geneva_logo.png"
                alt="Geneva"
                className="h-10 w-auto"
                width={300}
                height={150}
              />
              <Image
                src="/brands/hannah_martin_logo.png"
                alt="Hannah Martin"
                className="h-8 w-auto"
                width={300}
                height={150}
              />
            </div>
          </div>
          <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-3/12 hidden md:flex">
            <div className="relative w-full flex justify-center items-center">
              <div
                aria-hidden="true"
                className="absolute scale-75 inset-0 m-auto w-80 h-80 lg:w-88 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-amber-400 to-amber-300 blur-3xl"
              ></div>
              <Image
                src="/CurrenHero.png"
                className="relative"
                width={350}
                height={200}
                priority
                alt="wath illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

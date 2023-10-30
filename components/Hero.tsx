import Image from "next/image";
import React from "react";
import { GoPackageDependencies } from "react-icons/go";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-44 dark:bg-gray-900 w-full">
      <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
        <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-amber-500 text-4xl text-center sm:text-6xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
          Montre, satovi koji oduzimaju dah <br className="lg:block hidden" />{" "}
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400 dark:from-blue-400 dark:to-cyan-300">
            po tvojoj meri!
          </span>
        </h1>
        <div className="lg:flex">
          <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
            <p className="sm:text-lg text-gray-800 dark:text-gray-300 lg:w-11/12">
              Naša misija je da svakom kupcu pružimo pristup vrhunskim satovima
              koji kombinuju neopisivu eleganciju sa nesavladivom preciznošću,
              čineći svaki trenutak vrednim pamćenja.
            </p>
            <span className="block italic text-gray-800 dark:text-gray-400 text-xl">
              "Elegancija koja se meri sekundama"
            </span>
            <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
              <button className="bg-white p-4 border border-gray-200 text-gray-900 font-bold py-2 px-4 rounded-2xl inline-flex items-center gap-2 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-600/20 dark:hover:border-amber-300/30">
                <BsInfoCircle size={30} />
                <span>O Nama</span>
              </button>
              <button className="bg-white p-4 border border-gray-200 text-gray-900 font-bold py-2 px-4 rounded-2xl inline-flex items-center gap-2 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-600/20 dark:hover:border-amber-300/30">
                <MdOutlineMessage size={30} />
                <span>Kontaktiraj Nas</span>
              </button>
              <button className="bg-white p-4 border border-gray-200 text-gray-900 font-bold py-2 px-4 rounded-2xl inline-flex items-center gap-2 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-600/20 dark:hover:border-amber-300/30">
                <GoPackageDependencies size={30} />
                <span>Poruči Sat</span>
              </button>
            </div>

            <div className="dark:text-gray-300 text-xl">
              🔥🌟Poruci i ti svoj sat preko naseg sajta u dva klika!
            </div>

            <div className="pt-10 flex flex-row justify-center align-middle flex-wrap gap-8">
              <img
                style={{ height: "30px", width: "auto" }}
                src="/brands/curren_logo.png"
                alt="Curren"
              />
              <img
                style={{ height: "50px", width: "auto" }}
                src="/brands/lige_logo.png"
                alt="Lige"
              />
              <img
                style={{ height: "50px", width: "auto" }}
                src="/brands/naviforce_logo.png"
                alt="Naviforce"
              />
              <img
                style={{ height: "60px", width: "auto" }}
                src="/brands/benyar_logo.jpg"
                alt="Benyar"
              />
              <img
                style={{ height: "40px", width: "auto" }}
                src="/brands/geneva_logo.png"
                alt="Geneva"
              />
              <img
                style={{ height: "30px", width: "auto" }}
                src="/brands/hannah_martin_logo.png"
                alt="Hannah Martin"
              />
            </div>
          </div>
          <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-3/12">
            <div className="relative w-full">
              <div
                aria-hidden="true"
                className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-amber-400 to-amber-300 blur-3xl"
              ></div>
              <img
                src="/CurrenHero.png"
                className="relative w-full"
                alt="wath illustration"
                loading="lazy"
                width="320"
                height="280"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

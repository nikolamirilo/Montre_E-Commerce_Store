"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const HeroNavigation = () => {
  const router = useRouter();
  return (
    <div className="relative flex flex-col justify-center items-center gap-2 md:fle md:flex-row md:justify-center lg:justify-start">
      <button
        onClick={() => {
          router.push("/contact");
        }}
        className="bg-white p-4 md:skew-x-[4deg] border-2 h-56 relative md:left-3 w-full md:w-1/2  font-bold py-2 px-4 inline-flex items-center gap-2 border-black shadow-xl shadow-black/20"
      >
        <Image
          className="object-cover object-center transform -scale-x-100"
          priority
          fill
          src="https://th.bing.com/th/id/OIP.mattLDPpdMfLylkHb9h3ZQHaEp?w=339&h=180&c=7&r=0&o=5&pid=1.7"
          alt="product image"
        />
        <span className="absolute bottom-0 left-0 top-0 right-0 w-full h-full bg-black/60 z-10 text-amber-500 uppercase flex justify-center items-center text-2xl">
          Muška Ponuda
        </span>
      </button>
      <button
        onClick={() => {
          router.push("/about");
        }}
        className="bg-white md:skew-x-[4deg] p-4 border-2 h-56 relative md:right-3 w-full md:w-1/2 font-bold py-2 px-4 inline-flex items-center gap-2 border-amber-400 shadow-xl shadow-amber-600/20"
      >
        <Image
          className="object-cover object-center"
          priority
          fill
          src="/hero/woman.webp"
          alt="product image"
        />
        <span className="absolute bottom-0 left-0 top-0 right-0 w-full h-full z-10 text-black uppercase flex bg-amber-500/40 justify-center items-center text-2xl">
          Ženska Ponuda
        </span>
      </button>
    </div>
  );
};

export default HeroNavigation;

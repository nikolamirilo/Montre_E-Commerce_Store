"use client";
import React from "react";
import { GoPackageDependencies } from "react-icons/go";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { useRouter } from "next/navigation";

const HeroNavigation = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center gap-2 md:fle md:flex-row md:justify-center lg:justify-start">
      <button
        onClick={() => {
          router.push("/about");
        }}
        className="bg-white p-4 border border-gray-200 text-gray-900 font-bold py-2 px-4 rounded-2xl inline-flex items-center gap-2 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-600/20"
      >
        <BsInfoCircle size={30} />
        <span>O Nama</span>
      </button>
      <button
        onClick={() => {
          router.push("/contact");
        }}
        className="bg-white p-4 border border-gray-200 text-gray-900 font-bold py-2 px-4 rounded-2xl inline-flex items-center gap-2 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-600/20"
      >
        <MdOutlineMessage size={30} />
        <span>Kontaktiraj Nas</span>
      </button>
      <button
        onClick={() => {
          router.push("/order");
        }}
        className="bg-white p-4 border border-gray-200 text-gray-900 font-bold py-2 px-4 rounded-2xl inline-flex items-center gap-2 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-600/20"
      >
        <GoPackageDependencies size={30} />
        <span>Poruči Sat</span>
      </button>
    </div>
  );
};

export default HeroNavigation;

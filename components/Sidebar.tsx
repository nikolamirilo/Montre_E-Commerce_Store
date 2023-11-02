"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import logo from "../public/MontreLogoTransparent.png";
import { BsInfoCircle, BsWatch, BsCart3 } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { LuPlusSquare } from "react-icons/lu";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleSidebar() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <div className="w-full">
      <div
        className={`fixed top-0 text-white text-4xl flex flex-row justify-end cursor-pointer h-fit lg:p-3 p-5 z-50 ${
          isOpen && "hidden"
        }`}
        style={{ width: "100%" }}
        id="navbar"
      >
        <button
          className="font-xxl text-white rounded-3xl lg:mr-20 mr-6"
          onClick={handleSidebar}
        >
          <RiMenu3Line size={35} />
        </button>
      </div>
      <div
        className={`sidebar fixed top-0 bottom-0 left-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center z-50 ${
          !isOpen && "hidden"
        }`}
        id="sidebar"
      >
        <div className="text-gray-100 text-xl relative">
          <div className="p-2.5 mt-1 flex flex-row items-center justify-between">
            <div className="heading flex items-center justify-center">
              <Image src={logo} alt="Logo" width={300} height={200} />
            </div>

            <button
              // className="bi bi-x cursor-pointer ml-28 lg:hidden"
              onClick={handleSidebar}
              className="absolute top-3 right-2"
            >
              <AiFillCloseCircle size={30} />
            </button>
          </div>
          <div className="my-2 bg-stone-50 h-[1px]"></div>
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-stone-50/30 text-white">
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            href="/"
            className="text-[15px] ml-4 text-gray-200 font-bold flex flex-row gap-3 justify-center items-center"
          >
            <BsWatch size={35} />
            <span>Svi Satovi</span>
          </Link>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-stone-50/30 text-white">
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            href="/create-product"
            className="text-[15px] ml-4 text-gray-200 font-bold flex flex-row gap-3 justify-center items-center"
          >
            <LuPlusSquare size={30} />
            <span>Dodaj Novi Proizvod</span>
          </Link>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-stone-50/30 text-white">
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            href="/"
            className="text-[15px] ml-4 text-gray-200 font-bold flex flex-row gap-3 justify-center items-center"
          >
            <BsCart3 size={30} />
            <span>Korpa</span>
          </Link>
        </div>
        <div className="my-4 bg-stone-50 h-[1px]"></div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-stone-50/30 text-white">
          <div className="flex justify-between w-full items-center">
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              href="/"
              className="text-[15px] ml-4 text-gray-200 font-bold flex flex-row gap-3 justify-center items-center"
            >
              <BsInfoCircle size={30} />
              <span>O Nama</span>
            </Link>
          </div>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-stone-50/30 text-white">
          <div className="flex justify-between w-full items-center">
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              href="/contact"
              className="text-[15px] ml-4 text-gray-200 font-bold flex flex-row gap-3 justify-center items-center"
            >
              <MdOutlineMessage size={30} />
              <span>Kontaktiraj Nas</span>
            </Link>
          </div>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-stone-50/30 text-white">
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            href="/"
            className="text-[15px] ml-4 text-gray-200 font-bold flex flex-row gap-3 justify-center items-center"
          >
            <FiLogOut size={30} />
            <span>Odjavi se</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

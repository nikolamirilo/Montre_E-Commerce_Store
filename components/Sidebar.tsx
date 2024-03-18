"use client"
import { UserButton, useUser } from "@clerk/nextjs"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AiFillCloseCircle, AiOutlineLogin } from "react-icons/ai"
import { BsCart3, BsInfoCircle, BsWatch } from "react-icons/bs"
import { FaRegUser } from "react-icons/fa"
import { IoHomeOutline } from "react-icons/io5"
import { LuPlusSquare } from "react-icons/lu"
import { MdKeyboardArrowDown, MdKeyboardArrowRight, MdOutlineLocalOffer } from "react-icons/md"
import { PiDress } from "react-icons/pi"
import { RiContactsLine, RiMenu2Line } from "react-icons/ri"
import { TbDiscount2, TbPackages, TbTie } from "react-icons/tb"
import logo from "../public/MontreLogoTransparent.png"
import Logo from "./helpers/Logo"

const Sidebar = ({ cartItemsCount }: { cartItemsCount: number }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isOfferOpen, setIsOfferOpen] = useState(false)
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
  function handleSidebar() {
    setIsSidebarOpen(!isSidebarOpen)
  }
  function handleMenu() {
    setIsOfferOpen(!isOfferOpen)
  }
  const { user } = useUser()
  return (
    <div className="w-full">
      <div
        className={`fixed top-0 w-full text-white text-4xl flex-row justify-between items-center cursor-pointer h-fit lg:py-3 py-5 z-40 px-[5%] ${
          isSidebarOpen ? "hidden" : "flex"
        }`}
        id="navbar">
        <button className="font-xxl text-white rounded-3xl" onClick={handleSidebar}>
          <RiMenu2Line size={30} />
        </button>
        <Logo type="sidebar" />
        <div className="flex flex-row gap-4 lg:gap-8">
          {user ? (
            <Link href="/cart" className="flex flex-row justify-center items-center  relative">
              <BsCart3 size={30} />
              <span className="absolute text-xs text-white -right-2 -bottom-1 px-1 rounded-full bg-amber-500">
                {cartItemsCount}
              </span>
            </Link>
          ) : null}
          {user ? (
            <Link href={`/users/${user.id}`} className="flex flex-row justify-center items-center ">
              {user.imageUrl != "" ? <UserButton afterSignOutUrl="/" /> : <FaRegUser size={25} />}
            </Link>
          ) : (
            <Link
              href="/auth/log-in"
              className="flex flex-row justify-center items-center  text-lg border-2 hover:bg-amber-500 border-amber-500 rounded-xl px-4">
              Prijavi se
            </Link>
          )}
        </div>
      </div>
      <motion.div
        transition={{
          ease: "linear",
          duration: 0.6,
          x: { duration: 0.2 },
        }}
        animate={isSidebarOpen ? "open" : "closed"}
        variants={variants}
        className={`sidebar fixed top-0 bottom-0 left-0 lg:left-0 p-2 w-fit text-center z-40 overflow-y-visible ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        id="sidebar">
        <div className="text-gray-100 text-xl relative">
          <div className="p-1.5 mt-1 flex flex-row items-center justify-between">
            <Link
              href="/"
              className="heading flex items-center justify-center w-full"
              onClick={handleSidebar}>
              <Image src={logo} alt="Logo" width={150} height={100} priority />
            </Link>

            <button onClick={handleSidebar} className="absolute top-3 right-2">
              <AiFillCloseCircle size={30} />
            </button>
          </div>
          <div className="my-2 bg-stone-50 h-[1px]"></div>
        </div>
        <div>
          <div className="p-1.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-stone-50/30 text-white">
            <Link
              onClick={handleSidebar}
              href="/"
              className="text-[15px] ml-4 text-gray-200 font-bold flex flex-row gap-3 justify-start items-center w-full">
              <IoHomeOutline size={30} />
              <span>Početna</span>
            </Link>
          </div>
          <div id="offer-section">
            <div className="p-1.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-stone-50/30 text-white">
              <button
                onClick={handleMenu}
                className="text-[15px] ml-4 text-gray-200 font-bold flex flex-row gap-3 justify-start items-center w-full">
                <BsWatch size={30} />
                <span>Ponuda satova</span>
                {isOfferOpen ? (
                  <MdKeyboardArrowDown size={30} className="relative bottom-[1px]" />
                ) : (
                  <MdKeyboardArrowRight size={30} className="relative bottom-[1px]" />
                )}
              </button>
            </div>
            <div
              className={`relative left-5 p-1.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-stone-50/30 text-white ${
                !isOfferOpen && "hidden"
              }`}>
              <Link
                onClick={handleSidebar}
                href="/products/watches"
                className="text-[15px] ml-4 text-gray-200 font-bold flex flex-row gap-3 justify-start items-center w-full">
                <MdOutlineLocalOffer size={30} />
                <span>Svi</span>
              </Link>
            </div>
            <div
              className={`relative left-5 p-1.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-stone-50/30 text-white ${
                !isOfferOpen && "hidden"
              }`}>
              <Link
                onClick={handleSidebar}
                href="/products/watches/categories/men"
                className="text-[15px] ml-4 text-gray-200 font-bold flex flex-row gap-3 justify-start items-center w-full">
                <TbTie size={30} />
                <span>Muški</span>
              </Link>
            </div>
            <div
              className={`relative left-5 p-1.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-stone-50/30 text-white ${
                !isOfferOpen && "hidden"
              }`}>
              <Link
                onClick={handleSidebar}
                href="/products/watches/categories/women"
                className="text-[15px] ml-4 text-gray-200 font-bold flex flex-row gap-3 justify-start items-center w-full">
                <PiDress size={30} />
                <span>Ženski</span>
              </Link>
            </div>
            <div
              className={`relative left-5 p-1.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-stone-50/30 text-white ${
                !isOfferOpen && "hidden"
              }`}>
              <Link
                onClick={handleSidebar}
                href="/products/watches/offers/super-deals"
                className="text-[15px] ml-4 text-gray-200 font-bold flex flex-row gap-3 justify-start items-center w-full">
                <TbDiscount2 size={30} />
                <span>Akcije</span>
              </Link>
            </div>
            {user ? (
              <div className="p-1.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-stone-50/30 text-white">
                <Link
                  onClick={handleSidebar}
                  href="/cart"
                  className="text-[15px] relative ml-4 text-gray-200 font-bold flex flex-row gap-3 justify-start items-center w-full">
                  <span className="absolute text-xs text-white left-5 -bottom-1 px-1 rounded-full bg-amber-500">
                    {cartItemsCount}
                  </span>
                  <BsCart3 size={30} />
                  <span>Korpa</span>
                </Link>
              </div>
            ) : null}
          </div>
          <div className="my-4 bg-stone-50 h-[1px]"></div>
          <div className="p-1.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-stone-50/30 text-white">
            <div className="flex justify-between w-full items-center">
              <Link
                onClick={handleSidebar}
                href="/about"
                className="text-[15px] ml-4 text-gray-200 font-bold flex flex-row gap-3 justify-start items-center w-full">
                <BsInfoCircle size={30} />
                <span>O Nama</span>
              </Link>
            </div>
          </div>
          <div className="p-1.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-stone-50/30 text-white">
            <div className="flex justify-between w-full items-center">
              <Link
                onClick={handleSidebar}
                href="/contact"
                className="text-[15px] ml-4 text-gray-200 font-bold flex flex-row gap-3 justify-start items-center w-full">
                <RiContactsLine size={30} />
                <span>Kontaktirajte Nas</span>
              </Link>
            </div>
          </div>
          {user ? (
            <div className="p-1.5 mt-2 flex items-center justify-start rounded-md px-4 duration-300 cursor-pointer hover:bg-stone-50/30 text-white">
              <Link
                className="text-[15px] ml-4 text-gray-200 font-bold flex flex-row gap-3 justify-start items-center w-full"
                onClick={handleSidebar}
                href={`/users/${user.id}`}>
                {user.imageUrl != "" ? (
                  <div className="h-8 w-8 relative rounded-full">
                    <Image
                      src={user.imageUrl}
                      fill
                      className="object-cover object-center rounded-full"
                      alt="User Avatar"
                    />
                  </div>
                ) : (
                  <FaRegUser size={25} />
                )}

                <span>Moje narudžbine</span>
              </Link>
            </div>
          ) : (
            <div className="p-1.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-stone-50/30 text-white">
              <Link
                onClick={handleSidebar}
                href="/auth/log-in"
                className="text-[15px] ml-4 text-gray-200 font-bold flex flex-row gap-3 justify-start items-center w-full">
                <AiOutlineLogin size={30} />
                <span>Prijavi se</span>
              </Link>
            </div>
          )}
          <div className="my-4 bg-stone-50 h-[1px]"></div>

          {user?.primaryEmailAddress?.emailAddress == "satovi.montre@gmail.com" ? (
            <>
              <div className="p-1.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-stone-50/30 text-white">
                <Link
                  onClick={handleSidebar}
                  href="/admin/create-product"
                  className="text-[15px] ml-4 text-gray-200 font-bold flex flex-row gap-3 justify-start items-center w-full">
                  <LuPlusSquare size={30} />
                  <span>Dodaj Novi Proizvod</span>
                </Link>
              </div>
              <div className="p-1.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-stone-50/30 text-white">
                <Link
                  onClick={handleSidebar}
                  href="/admin/orders"
                  className="text-[15px] ml-4 text-gray-200 font-bold flex flex-row gap-3 justify-start items-center w-full">
                  <TbPackages size={30} />
                  <span>Sve Narudžbine</span>
                </Link>
              </div>
            </>
          ) : null}
        </div>
      </motion.div>
    </div>
  )
}

export default Sidebar

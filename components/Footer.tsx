"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import Logo from "./helpers/Logo"

const Footer: React.FC = () => {
  const pathname = usePathname()
  const currYear = new Date().getFullYear()
  return (
    <footer
      className={`w-full flex flex-col relative top-6 justify-center items-center ${
        pathname != "/thank-you" ? "mt-20" : null
      }`}
      id="footer">
      <div className="container flex md:flex-row flex-col-reverse items-center justify-center gap-3 px-5 py-8 mx-auto md:items-start md:justify-around">
        <div className="px-4">
          <div className="flex items-center justify-center font-medium text-white title-font md:justify-start">
            <Logo />
          </div>
          <p className="mt-2 text-md text-white md:text-left text-center">
            "Elegncija koja se meri sekundama"
          </p>
          <div className="mt-4 w-full">
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 md:justify-start w-full">
              <Link
                href="https://www.instagram.com/montre.satovi/"
                className="text-white cursor-pointer transform hover:scale-110 transition-all hover:ease-in duration-100 hover:text-pink-500">
                <FaInstagram size={25} />
              </Link>
              <Link
                href="https://www.facebook.com/people/Montre-Satovi/61553370101519/?mibextid=LQQJ4d"
                className="ml-3 text-white cursor-pointer hover:scale-110 transition-all hover:ease-in duration-100 hover:text-blue-500">
                <FaFacebook size={25} />
              </Link>
              <Link
                href="https://www.tiktok.com/@montre.satovi"
                className="ml-3 text-white cursor-pointer hover:scale-110 transition-all hover:ease-in duration-100 hover:text-gray-500">
                <FaTiktok size={25} />
              </Link>
              <Link
                href="mailto:satovi.montre@gmail.com"
                className="ml-3 text-white cursor-pointer  hover:scale-110 transition-all hover:ease-in duration-100 hover:text-red-500">
                <MdOutlineEmail size={27} />
              </Link>
            </span>
          </div>
          <p className="mt-2 text-md text-white text-center md:text-left">
            Copyright @Montre Shop {currYear}
          </p>
        </div>

        <div className="px-4 fill flex flex-col md:justify-start md:items-start items-center justify-center gap-3">
          <span className="mb-1 text-[16px] font-medium tracking-widest text-white uppercase title-font">
            Ponuda
          </span>
          <ul className="list-none flex flex-col md:justify-start md:items-start items-center justify-center gap-2">
            <li>
              <Link
                href="/products/watches/categories/men"
                className="text-white cursor-pointer hover:text-amber-500">
                Muški Satovi
              </Link>
            </li>
            <li>
              <Link
                href="products/watches/categories/women"
                className="text-white cursor-pointer hover:text-amber-500">
                Ženski Satovi
              </Link>
            </li>
            <li>
              <Link
                href="/products/watches/offers/super-deals"
                className="text-white cursor-pointer hover:text-amber-500">
                Akcije
              </Link>
            </li>
          </ul>
        </div>
        <div className="px-4 flex flex-col md:justify-start md:items-start items-center justify-center gap-3">
          <span className="mb-1 text-[16px] font-medium tracking-widest text-white uppercase title-font">
            Kontakt
          </span>
          <ul className="list-none flex flex-col md:justify-start md:items-start items-center justify-center gap-2">
            <li>
              <Link href="/about" className="text-white cursor-pointer hover:text-amber-500">
                O Nama
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white cursor-pointer hover:text-amber-500">
                Kontaktirajte nas
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

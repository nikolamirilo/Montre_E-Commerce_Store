"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"

const Footer = () => {
  const pathname = usePathname()
  return (
    <footer className={`w-full relative ${pathname != "/thank-you" ? "mt-20" : null}`} id="footer">
      <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <Link
            className="flex items-center justify-center font-medium text-white title-font md:justify-start"
            href="/">
            <Image
              src="/MontreLogoTransparentLetters.png"
              width={120}
              height={90}
              alt="Montre"
              className="relative"
              priority
            />
          </Link>
          <p className="mt-2 text-md text-white">"Gde vreme postaje moda"</p>
          <div className="mt-4">
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <Link
                href="https://www.instagram.com/montre.satovi/"
                className="text-white cursor-pointer">
                <FaInstagram size={25} />
              </Link>
              <Link
                href="https://www.facebook.com/people/Montre-Satovi/61553370101519/?mibextid=LQQJ4d"
                className="ml-3 text-white cursor-pointer">
                <FaFacebook size={25} />
              </Link>
              <Link
                href="https://www.tiktok.com/@montre.satovi"
                className="ml-3 text-white cursor-pointer">
                <FaTiktok size={25} />
              </Link>
              <Link
                href="mailto:satovi.montre@gmail.com"
                className="ml-3 text-white cursor-pointer">
                <MdOutlineEmail size={27} />
              </Link>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-white cursor-pointer">
                O Nama
              </Link>
              <Link href="/contact" className="text-white cursor-pointer">
                Kontaktiraj Nas
              </Link>
              <Link href="/products/watches/man" className="text-white cursor-pointer">
                Muški Satovi
              </Link>
              <Link href="/products/watches/woman" className="text-white cursor-pointer">
                Ženski Satovi
              </Link>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
              Support
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <Link href="/" className="text-white cursor-pointer">
                  Contact Support
                </Link>
              </li>
              <li className="mt-3">
                <Link href="/" className="text-white cursor-pointer">
                  Help Resources
                </Link>
              </li>
              <li className="mt-3">
                <Link href="/" className="text-white cursor-pointer">
                  Release Updates
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
              Platform
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <Link href="/" className="text-white cursor-pointer">
                  Terms &amp; Privacy
                </Link>
              </li>
              <li className="mt-3">
                <Link href="/" className="text-white cursor-pointer">
                  Pricing
                </Link>
              </li>
              <li className="mt-3">
                <Link href="/" className="text-white cursor-pointer">
                  FAQ
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
              Contact
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <Link href="/" className="text-white cursor-pointer">
                  Send a Message
                </Link>
              </li>
              <li className="mt-3">
                <Link href="/" className="text-white cursor-pointer">
                  Request a Quote
                </Link>
              </li>
              <li className="mt-3">
                <Link href="/" className="text-white cursor-pointer">
                  +123-456-7890
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

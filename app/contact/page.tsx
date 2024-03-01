import ContactForm from "@/components/forms/ContactForm"
import { KEYWORDS, contactPage } from "@/constants"
import { contactPageSchema } from "@/schemas"
import { Metadata } from "next"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"

export const metadata: Metadata = {
  title: contactPage.title,
  description: contactPage.description,
  generator: "Montre Shop",
  applicationName: "Montre Shop",

  keywords: KEYWORDS,
  authors: [{ name: "Reactify Solutions" }],
  creator: "Reactify Solutions",
  publisher: "Montre Shop",
  metadataBase: new URL("https://www.montre-shop.com/contact"),
  alternates: {
    canonical: "https://www.montre-shop.com/contact",
  },
  openGraph: {
    title: contactPage.title,
    description: contactPage.description,
    url: "https://www.montre-shop.com/contact",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    title: contactPage.title,
    description: contactPage.description,
    images: ["/twitter-image.png"],
    creator: "Reactify Solutions",
    site: `https://www.montre-shop.com/contact`,
  },
}

const Contact = async () => {
  return (
    <div className="flex flex-row items-center justify-center w-full" id="contact">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <div className="py-8 lg:py-16 mx-auto max-w-[1500px] w-full flex flex-col items-center justify-center mt-10 lg:mt-0">
        <h1 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900">
          Kontaktirajte nas
        </h1>
        <p className="mb-8 font-light text-center text-gray-500 sm:text-xl w-full md:2/3 lg:w-1/2 px-5">
          Vaša povratna informacija je od suštinskog značaja za nas! Ako imate bilo kakva pitanja,
          komentare ili jednostavno želite podeliti svoje iskustvo, slobodno nas kontaktirajte.
        </p>
        <div className="flex w-full px-5 lg:w-[90%] xl:w-3/4 2xl:w-2/3 flex-col gap-5 lg:gap-0 lg:flex-row lg:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] lg:py-20 lg:px-10 lg:rounded-lg">
          <ContactForm />
          <div className="w-full lg:w-1/3 lg:flex flex-col items-center justify-start mt-5 gap-4 hidden">
            <div className="lg:flex flex-col justify-center items-start lg:w-8/12">
              <h1 className="font-bold text-xl">Društvene mreže:</h1>
            </div>
            <Link
              href="https://www.instagram.com/montre.satovi/"
              className="cursor-pointer flex flex-row justify-start items-center gap-2 lg:w-8/12 hover:scale-105 transition-all hover:ease-in duration-100 hover:text-pink-500">
              <FaInstagram size={30} className="text-pink-600" />
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/people/Montre-Satovi/61553370101519/?mibextid=LQQJ4d"
              className="cursor-pointer flex flex-row justify-start items-center gap-2 lg:w-8/12 hover:scale-105 transition-all hover:ease-in duration-100 hover:text-blue-500">
              <FaFacebook size={30} className="text-blue-700" />
              Facebook
            </Link>
            <Link
              href="https://www.tiktok.com/@montre.satovi"
              className="cursor-pointer flex flex-row justify-start items-center gap-2 lg:w-8/12 hover:scale-105 transition-all hover:ease-in duration-100 hover:text-gray-900">
              <FaTiktok size={30} />
              Tik Tok
            </Link>
            <Link
              href="mailto:satovi.montre@gmail.com"
              className="cursor-pointer flex flex-row justify-start items-center gap-2 lg:w-8/12 hover:scale-105 transition-all hover:ease-in duration-100 hover:text-red-500">
              <MdOutlineEmail size={32} className="text-red-500" />
              E-Mail
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

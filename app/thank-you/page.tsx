import { currentUser } from "@clerk/nextjs"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hvala na poverenju!",
  robots: {
    index: false,
    nocache: true,
  },
}

const ThankYou = async () => {
  const user = await currentUser()
  return (
    <div className="w-full h-fit">
      <Image
        src="/ty_bg.webp"
        fill
        alt="Backrgound"
        id="ty-bg"
        className="object-center object-cover"
        priority
      />
      <div className="flex items-center justify-center min-h-[80vh] w-11/12 mx-auto">
        <div className="p-1 rounded shadow-lg bg-gradient-to-r from-yellow-500 via-amber-500 to-red-500 z-10">
          <div className="flex flex-col items-center p-4 gap-8 bg-[#0c0502]">
            <Image
              src="/MontreLogoTransparent.png"
              width={150}
              height={110}
              alt="Montre Shop"
              className="relative"
              priority
            />
            <h1 className="text-4xl w-full md:w-9/12 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500">
              {`${user && user.firstName != null ? user.firstName : "Poštovani"}`}, hvala na
              ukazanom poverenju!
            </h1>
            <p className="text-lg w-full md:w-10/12 mx-auto text-center text-white">
              Vaša narudžbina je evidentirana i biće poslata u roku od 3 radna dana. Potvrda
              narudžbine je poslata putem e-maila.
            </p>
            <Link
              className="px-4 py-2 text-white bg-amber-500 text-lg rounded-lg hover:bg-amber-600 focus:outline-none focus:ring"
              href="/">
              Nazad na početnu stranu
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYou

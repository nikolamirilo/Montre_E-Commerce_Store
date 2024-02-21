import { KEYWORDS } from "@/constants"
import { SignIn, SignUp } from "@clerk/nextjs"
import { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: { action: string }
}): Promise<Metadata> {
  const action = params.action
  return {
    title: action == "log-in" ? "Prijavite se" : "Registrujte se",
    description:
      action == "log-in"
        ? "Prijavite se kako bi sa lakoćom upravljali vašim narudžbinama."
        : "Registrujte se kako bi sa lakoćom upravljali vašim narudžbinama",
    generator: "Montre",
    applicationName: "Montre",
    keywords: KEYWORDS,
    authors: [{ name: "Reactify Solutions" }],
    creator: "Reactify Solutions",
    publisher: "Montre",
    openGraph: {
      title: "Montre Satovi",
      description: "Unikatna kolekcija muških i ženskih satova",
      url: "https://www.montre-shop.com/",
      images: ["/opengraph-image.png"],
    },
    twitter: {
      title: "Montre Satovi",
      description: "Unikatna kolekcija muških i ženskih satova",
      images: ["/twitter-image.png"],
    },
    metadataBase: new URL(`https://www.montre-shop.com/auth/${action}`),
    alternates: {
      canonical: `https://www.montre-shop.com/auth/${action}`,
    },
  }
}

const Auth = ({ params }: { params: { action: string } }) => {
  return (
    <div
      className="flex py-8 lg:py-16 mt-10 lg:mt-0 flex-col justify-center items-center"
      id="auth">
      <h1 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900">
        {params.action == "log-in" ? "Prijava korisnika" : "Registracija korisnika"}
      </h1>
      <p className="mb-8 font-light text-center text-gray-500 sm:text-xl w-full md:2/3 lg:w-1/2 px-5">
        Kreiranje naloga ima mnoge prednosti kao što su funkcionalnost korpe, brže popunjavanje
        informacija za naručivanje, mogućnost naručivanje više artikla istovremeno i mogućnost
        praćenja istorije narudžbina.
      </p>
      {params.action == "log-in" ? <SignIn afterSignInUrl="/" /> : <SignUp afterSignUpUrl="/" />}
    </div>
  )
}

export default Auth

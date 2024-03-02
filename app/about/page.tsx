import { KEYWORDS, aboutPage } from "@/constants"
import { aboutPageSchema } from "@/schemas"
import { Metadata } from "next"
import Image from "next/image"
import React from "react"

export const metadata: Metadata = {
  title: aboutPage.title,
  description: aboutPage.description,
  generator: "Montre Shop",
  applicationName: "Montre Shop",
  keywords: KEYWORDS,
  authors: [{ name: "Reactify Solutions" }],
  creator: "Reactify Solutions",
  publisher: "Montre Shop",
  metadataBase: new URL("https://www.montre-shop.com/about"),
  alternates: {
    canonical: "https://www.montre-shop.com/about",
  },
  openGraph: {
    title: aboutPage.title,
    description: aboutPage.description,
    url: "https://www.montre-shop.com/about",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    title: aboutPage.title,
    description: aboutPage.description,
    images: ["/twitter-image.png"],
    creator: "Reactify Solutions",
    site: `https://www.montre-shop.com/about`,
  },
}

const About: React.FC = () => {
  return (
    <div className="overflow-hidden pt-[6vh] px-5" id="about">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-around md:flex-row flex-col-reverse -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4 md:flex-row flex-col ">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <Image
                    width={500}
                    height={800}
                    src="/about/1.webp"
                    alt="Shop"
                    className="w-full rounded-2xl"
                    quality={70}
                  />
                </div>
                <div className="relative z-10 my-4">
                  <Image
                    width={500}
                    height={800}
                    src="/about/3.webp"
                    alt="Men watch"
                    className="w-full rounded-2xl"
                    quality={70}
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <Image
                    width={500}
                    height={800}
                    src="/about/2.webp"
                    alt="Watches"
                    className="w-full rounded-2xl"
                    quality={70}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-5 lg:mt-0">
              <h1 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
                Dobrodošli u Montre!
              </h1>
              <h2 className="mb-5 text-base text-body-color dark:text-dark-6">
                Montre je online destinacija posvećena pružanju nezaboravnih trenutaka kroz spoj
                elegancije i preciznosti. Specijalizujemo se u prodaji muških i ženskih satova, sa
                posebnim fokusom na ekskluzivne modele brendova Curren i Hannah Martin. Naša misija
                je jednostavna - omogućiti svakom kupcu pristup vrhunskim satovima koji će dodati
                notu stila i elegancije u svakom trenutku.
              </h2>
              <span className="block mb-4 text-lg font-semibold text-primary">Naša Ponuda:</span>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                Montre donosi pažljivo izabran asortiman muških i ženskih satova, između kojih se
                ističu elegantni modeli brendova Curren i Hannah Martin. Svi naši satovi su odabrani
                s posebnom pažnjom kako bismo zadovoljili raznolike stilove i ukuse naših kupaca.
                Bez obzira tražite li klasičan sat za poslovne prilike ili modernu i atraktivnu
                varijantu za svakodnevne trenutke, Montre ima nešto za svakoga.
              </p>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                U budućnosti planiramo proširenje naše kolekcije sa još modela koji će odražavati
                najnovije trendove i udovoljavati raznovrsnim preferencijama naših kupaca. Montre
                nije samo online prodavnica satova; mi smo posvećeni stvaranju zajednice ljubitelja
                satova koji dele strast prema vrhunskom dizajnu i besprekornoj preciznosti.
              </p>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                Zahvaljujemo vam na poverenju i pozivamo vas da istražite našu pažljivo biranu
                kolekciju i započnete putovanje kroz vreme uz Montre satove!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

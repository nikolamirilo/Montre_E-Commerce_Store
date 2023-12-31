import { getSingleUser } from "@/actions/server/users"
import Footer from "@/components/Footer"
import { NavigationEvents } from "@/components/NavigationEvents"
import Sidebar from "@/components/Sidebar"
import MainContextProvider from "@/context/MainContext"
import { ClerkProvider, currentUser } from "@clerk/nextjs"
import { Cloudinary } from "@cloudinary/url-gen"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const font = Open_Sans({ preload: true, subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Montre Satovi",
  description: "Elegancija koja se meri sekundama",
  generator: "Montre",
  applicationName: "Montre",
  referrer: "origin-when-cross-origin",
  keywords: ["Montre", "Satovi", "GMT", "Hronograf", "Povoljno", "Curren", "Lige", "Hannah Martin"],
  authors: [{ name: "Reactify Solutions" }],
  creator: "Nikola Mirilo",
  publisher: "Montre",
  metadataBase: new URL("https://www.montre-shop.com/"),
  alternates: {
    canonical: "/",
    languages: {
      "sr-RS": "/sr-RS",
    },
  },
  openGraph: {
    images: ["/opengraph-image.jpeg", "twitter-image.jpeg"],
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const cld = new Cloudinary({ cloud: { cloudName: "montre-cloudinary" } })
  const user = await currentUser()
  var cartItems: number = 0
  var mongoUser: any = {}

  if (user) {
    const uid = user?.id
    mongoUser = await getSingleUser(uid)
    cartItems = mongoUser?.cart?.length
  }
  return (
    <ClerkProvider>
      <MainContextProvider>
        <html lang="en">
          <body className={`${font.className} bg-white relative`}>
            <Suspense fallback={null}>
              <NavigationEvents />
            </Suspense>
            <Sidebar cartItems={cartItems} />
            <div id="parent">{props.children}</div>
            <Footer />
          </body>
        </html>
      </MainContextProvider>
    </ClerkProvider>
  )
}

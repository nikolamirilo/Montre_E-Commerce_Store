import { getSingleUser } from "@/actions/server/users"
import Footer from "@/components/Footer"
import Sidebar from "@/components/Sidebar"
import MainContextProvider from "@/context/MainContext"
import { ClerkProvider, currentUser } from "@clerk/nextjs"
import { Cloudinary } from "@cloudinary/url-gen"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Montre",
  description: "Montre online shop",
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const cld = new Cloudinary({ cloud: { cloudName: "montre-cloudinary" } })

  const user = await currentUser()
  var cartItems: number = 0

  if (user) {
    const uid = user?.id
    const mongoUser = await getSingleUser(uid)
    const uniqueArray = mongoUser?.cart?.filter((value: string, index: string, self: any) => {
      return self.indexOf(value) === index
    })
    cartItems = uniqueArray?.length
  }
  return (
    <ClerkProvider>
      <MainContextProvider>
        <html lang="en">
          <body className={`${inter.className} bg-white`}>
            <Sidebar cartItems={cartItems} />
            {props.children}
            <Footer />
          </body>
        </html>
      </MainContextProvider>
    </ClerkProvider>
  )
}

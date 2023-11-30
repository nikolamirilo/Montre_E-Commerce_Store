import Footer from "@/components/Footer"
import Sidebar from "@/components/Sidebar"
import MainContextProvider from "@/context/MainContext"
import { ClerkProvider } from "@clerk/nextjs"
import { Cloudinary } from "@cloudinary/url-gen"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Montre",
  description: "Montre online shop",
}

export default function RootLayout(props: { children: React.ReactNode }) {
  const cld = new Cloudinary({ cloud: { cloudName: "montre-cloudinary" } })

  return (
    <ClerkProvider>
      <MainContextProvider>
        <html lang="en">
          <body className={`${inter.className} bg-white`}>
            <Sidebar />
            {props.children}
            <Footer />
          </body>
        </html>
      </MainContextProvider>
    </ClerkProvider>
  )
}

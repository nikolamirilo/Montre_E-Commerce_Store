import Sidebar from "@/components/Sidebar"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/Footer"
import { Cloudinary } from "@cloudinary/url-gen"
import MainContextProvider from "@/context/MainContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Montre",
  description: "Montre online shop",
}

export default function RootLayout(props: { children: React.ReactNode; modal: React.ReactNode }) {
  const cld = new Cloudinary({ cloud: { cloudName: "montre-cloudinary" } })
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <MainContextProvider>
          <Sidebar />
          {props.children}
          {props.modal}
          <Footer />
        </MainContextProvider>
      </body>
    </html>
  )
}

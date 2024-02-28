import Footer from "@/components/Footer"
import Menu from "@/components/Menu"
import GoogleAnalytics from "@/components/helpers/GoogleAnalytics"
import { NavigationEvents } from "@/components/helpers/NavigationEvents"
import { KEYWORDS, homePage } from "@/constants"
import { openSans } from "@/fonts"
import { ClerkProvider } from "@clerk/nextjs"
import { Cloudinary } from "@cloudinary/url-gen"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: homePage.title,
    template: "%s | Montre",
  },
  description: homePage.description,
  generator: "Montre",
  applicationName: "Montre",
  keywords: KEYWORDS,
  authors: [{ name: "Reactify Solutions" }],
  creator: "Reactify Solutions",
  publisher: "Montre",
  metadataBase: new URL("https://www.montre-shop.com/"),
  alternates: {
    canonical: "https://www.montre-shop.com/",
  },
  openGraph: {
    title: homePage.title,
    description: homePage.description,
    url: "https://www.montre-shop.com/",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    title: homePage.title,
    description: homePage.description,
    images: ["/twitter-image.png"],
    creator: "Reactify Solutions",
    site: `https://www.montre-shop.com`,
  },
}

export function reportWebVitals(metric: any) {
  metric.label === "web-vital" && console.log(metric)
}
export default async function RootLayout(props: { children: React.ReactNode }) {
  const cld = new Cloudinary({
    cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME },
  })
  return (
    <ClerkProvider>
      <html lang="sr">
        <body className={`${openSans.className} bg-stone-100 relative`}>
          <GoogleAnalytics />
          <Analytics />
          <SpeedInsights />
          <Menu />
          <div id="parent">{props.children}</div>
          <Footer />
          <Suspense fallback={null}>
            <NavigationEvents />
          </Suspense>
        </body>
      </html>
    </ClerkProvider>
  )
}

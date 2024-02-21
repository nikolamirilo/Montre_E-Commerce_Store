import { Cormorant_SC } from "next/font/google"
import Link from "next/link"

const font = Cormorant_SC({ weight: "600", subsets: ["latin"] })

const Logo = ({ type }: { type?: string }) => {
  return (
    <Link
      href="/"
      className={`text-amber-500 text-3xl tracking-wider ${font.className} ${
        type == "sidebar" ? "relative left-2" : null
      }`}>
      <span className="text-4xl">M</span>ontre
    </Link>
  )
}

export default Logo

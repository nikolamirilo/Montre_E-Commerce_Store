import { comporantSC } from "@/fonts"
import Link from "next/link"



const Logo = ({ type }: { type?: string }) => {
  return (
    <Link
      href="/"
      className={`text-amber-500 text-4xl tracking-wider ${comporantSC.className} ${type == "sidebar" ? "relative left-2" : null
        }`}>
      <span className="text-5xl">M</span>ontre
    </Link>
  )
}

export default Logo

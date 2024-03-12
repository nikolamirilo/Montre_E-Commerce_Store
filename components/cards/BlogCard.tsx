import { generateStringCode } from "@/helpers/client"
import Link from "next/link"

const BlogCard = ({ title, text }: { title: string; text: string }) => {
  const blogCode = generateStringCode(title)
  return (
    <div>
      <p className="font-bold text-4xl text-white">{title}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">{text}</p>
      <Link className="text-white" href={`/blogs/${blogCode}`}>
        Read More
      </Link>
    </div>
  )
}

export default BlogCard

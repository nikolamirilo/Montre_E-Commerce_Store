import data from "@/data/blogs.json"
import Image from "next/image"
const Blog = ({ params }: { params: { id: string } }) => {
  const id = params.id
  const singleBlog = data.blogs.find((blog) => blog.blogCode === id)
  if (singleBlog)
    return (
      <div className="container flex flex-col justify-center items-center gap-5">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col justify-center gap-5">
            <h1 className="text-3xl font-bold">{singleBlog.title}</h1>
            <p>{singleBlog.description}</p>
            <span className="font-semibold flex flex-row gap-3 text-lg justify-center items-center w-fit">
              <Image
                src={singleBlog.author.image}
                width={40}
                height={40}
                alt={singleBlog.author.fullName}
                className="rounded-full"
              />
              {singleBlog.author.fullName}
            </span>
            <span>Datum: {singleBlog.date}</span>
          </div>
          <Image
            src={singleBlog.thumbnail}
            width={600}
            height={200}
            alt={singleBlog.title}
            className="rounded-xl"
          />
        </div>

        {singleBlog.content.map((item, idx) => {
          return (
            <div
              className={`${
                idx % 2 == 0 ? "flex-row-reverse" : "flex-row"
              } flex justify-center items-center gap-5`}
              key={idx}>
              <p className={`${idx % 2 == 0 ? "text-right" : "text-left"}`}>{item.text}</p>
              <Image src={item.image} width={400} height={200} alt={singleBlog.title} />
            </div>
          )
        })}
      </div>
    )
}

export default Blog

import data from "@/data/blogs.json"
import Image from "next/image"
const Blog = ({ params }: { params: { id: string } }) => {
  const id = params.id
  const singleBlog = data.blogs.find((blog) => blog.blogCode === id)
  if (singleBlog)
    return (
      <div className="container max-w-[1200px] flex flex-col justify-center items-center gap-5 w-11/12 py-10">
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="flex flex-col justify-center gap-5">
            <h1 className="text-2xl lg:text-3xl font-bold">{singleBlog.title}</h1>
            <h2 className="text-xl lg:text-2xl">{singleBlog.subtitle}</h2>
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
            width={500}
            height={200}
            alt={singleBlog.title}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-4">
          {singleBlog.content.map((item, idx) => {
            return (
              <div
                className={`${
                  idx % 2 == 0 ? "lg:flex-row-reverse flex-col" : "lg:flex-row flex-col"
                } flex justify-center items-center gap-2 ${
                  !item.text && item.subheading ? "flex-col" : "flex-row"
                }`}
                key={idx}>
                <div className="flex flex-col gap-2">
                  {item.subheading && (
                    <h3
                      className={`font-semibold w-full text-xl ${
                        !item.text ? "text-center" : idx % 2 == 0 ? "lg:text-right" : "text-left"
                      } ${!item.image ? "!text-left w-full lg:w-6/12" : ""}`}>
                      {item.subheading}
                    </h3>
                  )}
                  {item.text && (
                    <p
                      className={`${idx % 2 == 0 ? "lg:text-right" : "text-left"} ${
                        !item.image ? "!text-left w-full lg:w-6/12" : ""
                      }`}>
                      {item.text}
                    </p>
                  )}
                </div>
                {item.image && (
                  <Image
                    src={item.image}
                    width={item.text ? 400 : 800}
                    height={item.text ? 200 : 400}
                    alt={singleBlog.title}
                    className="rounded-lg"
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
}

export default Blog

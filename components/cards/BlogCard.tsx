const BlogCard = ({ title, text }: { title: string; text: string }) => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">{title}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">{text}</p>
    </div>
  )
}

export default BlogCard

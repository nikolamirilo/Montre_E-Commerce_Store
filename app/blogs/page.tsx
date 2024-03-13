"use client"

import { BlogLayoutGrid } from "@/components/BlogLayout"
import BlogCard from "@/components/cards/BlogCard"
import Heading from "@/components/helpers/Heading"
import data from "@/data/blogs.json"

export default function Blogs() {
  return (
    <div className="h-screen py-10 w-full flex flex-col justify-center items-center gap-5">
      <Heading value="Svi blogovi" />
      <BlogLayoutGrid cards={cards} />
    </div>
  )
}

const cards = [
  {
    id: 1,
    content: (
      <BlogCard
        blogCode={data.blogs[0].blogCode}
        title={data.blogs[0].title}
        text={data.blogs[0].description}
      />
    ),
    className: "md:col-span-2",
    thumbnail: data.blogs[0].thumbnail,
  },
  {
    id: 2,
    content: (
      <BlogCard
        blogCode="something"
        title="Rivers are serene"
        text="When youre searching for a house, numerous factors could affect your decision, from deciding on the location to deciding on a price that fits your budget and anything in-between. Each of these factors can effectively sway your decision on your dream home.Perhaps you are also considering buying a house near a river and wondering if that is a good idea. While the easiest answer to help homeowners is to give them a hard yes or no, but the actual reply to this question would be: that depends."
      />
    ),
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: (
      <BlogCard
        blogCode="something"
        title="Rivers are serene"
        text="When youre searching for a house, numerous factors could affect your decision, from deciding on the location to deciding on a price that fits your budget and anything in-between. Each of these factors can effectively sway your decision on your dream home.Perhaps you are also considering buying a house near a river and wondering if that is a good idea. While the easiest answer to help homeowners is to give them a hard yes or no, but the actual reply to this question would be: that depends."
      />
    ),
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: (
      <BlogCard
        blogCode="something"
        title="Rivers are serene"
        text="When youre searching for a house, numerous factors could affect your decision, from deciding on the location to deciding on a price that fits your budget and anything in-between. Each of these factors can effectively sway your decision on your dream home.Perhaps you are also considering buying a house near a river and wondering if that is a good idea. While the easiest answer to help homeowners is to give them a hard yes or no, but the actual reply to this question would be: that depends."
      />
    ),
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

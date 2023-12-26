"use client"
import Image from "next/image"
import { useState } from "react"
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md"

const Slider = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState<number>(0)
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-fit bg-blue h-full" data-carousel="static">
        <div className="relative overflow-hidden rounded-lg w-fit">
          <div className="duration-700 ease-in-out h-fit w-fit" data-carousel-item>
            <div className="relative h-[60vh] w-[90vw] md:w-[30vw] cursor-pointer">
              <Image src={images[index]} fill className="object-cover object-center" alt="..." />
            </div>
          </div>
        </div>
        <button
          type="button"
          className="absolute top-0 left-1 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={() => {
            if (index == 0) {
              setIndex(images?.length - 1)
            } else {
              setIndex(index - 1)
            }
          }}>
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500 outline-none">
            <MdOutlineKeyboardArrowLeft size={40} color="white" />
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-1 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={() => {
            if (index == images?.length - 1) {
              setIndex(0)
            } else {
              setIndex(index + 1)
            }
          }}>
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500 outline-none">
            <MdOutlineKeyboardArrowRight size={40} color="white" />
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-2 mt-3">
        {images?.map((image: string, idx: number) => {
          return (
            <div
              key={idx}
              className={`relative w-20 h-16 cursor-pointer ${
                image == images[index] ? "border-2 border-amber-500" : ""
              }`}
              onClick={() => {
                setIndex(idx)
              }}>
              <Image src={image} className="object-cover object-center" alt="Product" fill />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Slider

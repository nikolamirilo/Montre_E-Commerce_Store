"use client"
import { ProductImage } from "@/typescript/types"
import Image from "next/image"
import { useState } from "react"
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md"
import { RiFullscreenFill } from "react-icons/ri"
import ImageModal from "./modals/ImageModal"

const Slider = ({ images }: { images: ProductImage[] }) => {
  const [index, setIndex] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  function handleNextSlide() {
    if (index == images?.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  function handlePreviousSlide() {
    if (index == 0) {
      setIndex(images?.length - 1)
    } else {
      setIndex(index - 1)
    }
  }
  if (images)
    return (
      <div className="relative flex flex-col justify-center items-center">
        {isModalOpen ? (
          <ImageModal
            image={images[index].url}
            closeModal={() => {
              setIsModalOpen(false)
            }}
            handleNextSlide={handleNextSlide}
            handlePreviousSlide={handlePreviousSlide}
          />
        ) : null}
        <div className="relative w-fit h-full" data-carousel="static">
          <div className="relative overflow-hidden rounded-lg w-fit">
            <div className="duration-700 ease-in-out h-fit w-fit" data-carousel-item>
              <div
                className="relative h-[40vh] w-[90vw] md:w-[45vw] 2xl:w-[40vw] md:h-[65vh] cursor-pointer"
                onClick={() => {
                  setIsModalOpen(true)
                }}>
                <Image
                  src={images[index].url}
                  fill
                  className="object-cover object-center"
                  alt="Slider picture"
                  loading="eager"
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="absolute top-[45%] left-1 z-20 flex items-center justify-center h-fit cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={handlePreviousSlide}>
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500 outline-none">
              <MdOutlineKeyboardArrowLeft size={40} color="white" />
            </span>
          </button>
          <button
            type="button"
            className="absolute top-[45%] right-1 z-20 flex items-center justify-center h-fit cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={handleNextSlide}>
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500 outline-none">
              <MdOutlineKeyboardArrowRight size={40} color="white" />
            </span>
          </button>
          <button
            type="button"
            className="absolute -bottom-[42%] right-5 z-10 flex items-center justify-center h-full cursor-pointer group focus:outline-none"
            onClick={() => {
              setIsModalOpen(true)
            }}>
            <span className="inline-flex items-center justify-center">
              <RiFullscreenFill size={35} color="white" className="hover:fill-amber-500" />
            </span>
          </button>
        </div>
        <div className="flex flex-row flex-wrap max-w-[90vw] md:max-w-[45vw] 2xl:max-w-[40vw] justify-start w-full items-center gap-2 mt-3">
          {images
            ? images?.map((image: ProductImage, idx: number) => {
                return (
                  <div
                    key={idx}
                    className={`relative w-20 h-16 cursor-pointer ${
                      image == images[index] ? "border-2 border-amber-500" : ""
                    }`}
                    onClick={() => {
                      setIndex(idx)
                    }}>
                    <Image
                      src={image.url}
                      className="object-cover object-center"
                      loading="lazy"
                      alt="Product"
                      fill
                    />
                  </div>
                )
              })
            : null}
        </div>
      </div>
    )
}

export default Slider

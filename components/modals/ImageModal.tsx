import { ImageModalProps } from "@/typescript/interfaces"
import Image from "next/image"
import { FaXmark } from "react-icons/fa6"
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md"

const ImageModal: React.FC<ImageModalProps> = ({
  closeModal,
  handlePreviousSlide,
  handleNextSlide,
  image,
}) => {
  return (
    <div className="fixed z-40 top-0 left-0 w-screen h-screen bg-black/80 flex justify-center items-center">
      <div className="relative h-[50vh] md:h-[90vh] w-[98vw] md:w-[60vw] bg-center bg-cover">
        <button className="absolute top-2 md:top-5 right-2 md:right-5 z-20" onClick={closeModal}>
          <FaXmark size={30} color="white" className="hover:fill-amber-500" />
        </button>
        <Image
          className="object-cover object-center rounded-md"
          src={image}
          fill
          alt="Slider picture"
          loading="eager"
        />
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
      </div>
    </div>
  )
}

export default ImageModal

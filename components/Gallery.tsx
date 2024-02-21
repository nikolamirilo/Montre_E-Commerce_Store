"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useRef } from "react"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const Gallery: React.FC = () => {
  const router = useRouter()
  const progressCircle = useRef<SVGSVGElement | null>(null)
  const progressContent = useRef<HTMLSpanElement | null>(null)
  const onAutoplayTimeLeft = (s: unknown, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", String(1 - progress))
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
    }
  }
  const slides = [
    "/gallery/1.jpeg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
    "/gallery/7.jpg",
    "/gallery/8.jpg",
    "/gallery/9.jpg",
    "/gallery/10.jpg",
  ]

  return (
    <section className="w-full h-fit flex flex-col justify-center items-center px-2 py-10 gap-8">
      <div className="flex flex-col w-full justify-center items-center gap-4">
        <h2 className="text-amber-500 text-2xl font-bold lg:text-3xl text-center w-10/12 xl:w-1/2">
          Montre galerija
        </h2>
        <p className="text-gray-800 text-base lg:text-lg text-center w-10/12 xl:w-1/2">
          Dobrodošli u Montre galeriju - virtuelno putovanje kroz raskošan svet satova i neodoljivih
          akcija. Ovde možete istražiti najnovije kolekcije satova koje nudi Montre shop,
          otkrivajući izvanredan spoj elegancije i funkcionalnosti.
        </p>
      </div>
      <Swiper
        className="w-full h-72 md:w-1/2 md:h-[60vh]"
        spaceBetween={30}
        centeredSlides={true}
        zoom={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        effect={"fade"}
        grabCursor={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}>
        {slides?.map((image, idx) => {
          return (
            <SwiperSlide
              key={idx}
              className="w-full h-full rounded-xl"
              onClick={() => {
                router.push("/")
              }}>
              <Image
                src={image}
                alt="Slide Image"
                loading="lazy"
                fill
                className="object-cover object-center rounded-xl"
              />
            </SwiperSlide>
          )
        })}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </section>
  )
}
export default Gallery

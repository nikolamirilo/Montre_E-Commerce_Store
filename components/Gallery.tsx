"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useRef } from "react"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const Gallery = ({ images }: { images: any }) => {
  const router = useRouter()
  const progressCircle = useRef<SVGSVGElement | null>(null)
  const progressContent = useRef<HTMLSpanElement | null>(null)
  const onAutoplayTimeLeft = (s: unknown, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", String(1 - progress))
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
    }
  }

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
        className="w-full h-72 md:w-2/3 lg:w-1/2 md:h-[60vh]"
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
        {images?.map((image: string, idx: number) => {
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
                quality={60}
                fill
                className="object-cover object-center rounded-xl"
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
export default Gallery

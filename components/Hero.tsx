import HeroNavigation from "@/components/HeroNavigation"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="relative min-h-screen h-fit w-full pt-10 lg:pt-16" id="hero">
      <Image
        src="https://th.bing.com/th/id/R.d39f8535c01ff3193eb3ef27f782d230?rik=mpQf3qvuphLMyw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2017%2f11%2f17%2f230726-watch-luxury_watches.jpg&ehk=32PDfUB8z2%2fyJ0l8u%2bjs53NHDJqNxCDOvFNmzbPjDic%3d&risl=&pid=ImgRaw&r=0"
        fill
        alt="Hero"
        id="hero-bg"
        className="object-center object-cover hidden lg:flex"
        priority
      />
      <div className="relative w-full px-[5%] xl:pl-[5%] m-auto md:px-12 lg:px-6 flex items-center md:items-start justify-center flex-col lg:mt-[2%] 2xl:mt-[5%]">
        <h1 className="w-full lg:w-2/3 xl:1/2 font-black text-amber-500 text-4xl sm:text-6xl md:text-5xl lg:text-left xl:text-6xl text-center">
          Elegancija koja se meri sekundama
        </h1>
        <div className="lg:flex">
          <div className="relative mt-8 space-y-8 sm:w-10/12 lg:w-8/12 lg:ml-0 sm:mx-auto lg:text-left lg:mr-auto">
            <p className="text-xl text-gray-800 lg:w-10/12 xl:w-8/12">
              Naša misija je jednostavna. Želimo da vam omogućimo pristup vrhunskim satovima koji ne
              samo da mere vreme, već ga i čine vrednim pamćenja! Svaki pažljivo biran model u nasem
              asortimanu nosi pečat beskompromisnog stila i tehničke izvrsnosti.
            </p>
            <span className="block text-gray-800 text-xl">
              Započni putovanje kroz vreme uz Montre kolekciju satova:
            </span>
            <HeroNavigation />

            <span className="block italic text-gray-800 text-xl">"Gde vreme postaje moda"</span>
            <div className="pt-5 flex flex-row justify-center lg:justify-start lg:w-2/3 w-full align-middle flex-wrap gap-8 lg:gap-4">
              <Image
                src="/brands/curren_logo.png"
                className="h-8 w-auto"
                width={300}
                height={150}
                alt="Curren"
              />
              {/* <Image
                src="/brands/lige_logo.png"
                alt="Lige"
                className="h-12 w-auto"
                width={300}
                height={150}
              /> */}
              {/* <Image
                src="/brands/naviforce_logo.png"
                alt="Naviforce"
                className="h-12 w-auto"
                width={300}
                height={150}
              />
              <Image
                src="/brands/benyar_logo.png"
                alt="Benyar"
                className="h-16 w-auto"
                width={400}
                height={200}
              />
              <Image
                src="/brands/geneva_logo.png"
                alt="Geneva"
                className="h-10 w-auto"
                width={300}
                height={150}
              /> */}
              <Image
                src="/brands/hannah_martin_logo.png"
                alt="Hannah Martin"
                className="h-8 w-auto"
                width={300}
                height={150}
              />
            </div>
          </div>
          {/* <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-3/12 hidden lg:flex">
            <div className="relative top-32 w-full flex justify-center items-center">
              <div
                aria-hidden="true"
                className="absolute scale-75 inset-0 m-auto w-80 h-80 lg:w-88 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-amber-400 to-amber-300 blur-3xl"></div>
              <Image
                src="/CurrenHero.png"
                className="relative"
                width={350}
                height={200}
                priority
                alt="wath illustration"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero

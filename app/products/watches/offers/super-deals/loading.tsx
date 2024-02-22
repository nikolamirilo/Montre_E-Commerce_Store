import Search from "@/components/helpers/Search"
import { SkeletonCards } from "@/components/loading/Skeleton"

const Loading = () => {
  return (
    <section
      id="cards-container"
      className="flex flex-col justify-center items-center h-fit py-[6vh] md:px-20 gap-8 w-full">
      <div className="flex flex-col w-full justify-center items-center gap-4">
        <h1 className="text-amber-500 text-2xl font-bold lg:text-3xl text-center w-10/12 xl:w-1/2">
          Ponuda satova na akciji
        </h1>
        <p className="text-gray-800 text-base lg:text-lg text-center w-10/12 xl:w-1/2">
          Istražite raznovrsne stilove i tehničke karakteristike i započnite putovanje kroz vreme uz
          svoj idealni sat povoljnije nego ikada!
        </p>
      </div>
      <Search type="discount" params={{}} />
      <div className="flex flex-wrap w-full justify-center items-center gap-5">
        <SkeletonCards />
      </div>
    </section>
  )
}

export default Loading

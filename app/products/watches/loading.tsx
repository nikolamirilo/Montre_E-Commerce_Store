import Search from "@/components/helpers/Search"
import { SkeletonCards } from "@/components/loading/Skeleton"

const Loading = () => {
  return (
    <section
      id="cards-container"
      className="flex flex-col justify-center items-center h-fit py-[6vh] md:px-20 gap-8 w-full">
      <div className="flex flex-col w-full justify-center items-center gap-4">
        <h1 className="text-amber-500 text-2xl font-bold lg:text-3xl text-center w-10/12 xl:w-1/2">
          Ponuda satova Montre kolekcije
        </h1>
        <p className="text-gray-800 text-base lg:text-lg text-left md:text-center w-10/12 xl:w-1/2">
          Montre donosi pažljivo izabran asortiman muških i ženskih satova, između kojih se ističu
          elegantni modeli brendova Curren i Hannah Martin. Svi naši satovi su odabrani s posebnom
          pažnjom kako bismo zadovoljili raznolike stilove i ukuse naših kupaca.
        </p>
      </div>
      <Search type="all" params={{}} />
      <div className="flex flex-wrap w-full justify-center items-center gap-5">
        <SkeletonCards />
      </div>
    </section>
  )
}

export default Loading

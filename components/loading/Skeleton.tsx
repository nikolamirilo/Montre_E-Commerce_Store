import Search from "../helpers/Search"

export function Skeleton({ className }: { className: string }) {
  return <div className={`bg-slate-200 motion-safe:animate-pulse rounded ${className}`} />
}

export function SkeletonCard({ additionalClass }: { additionalClass?: string }) {
  return (
    <div className={`space-y-4 py-5 px-4 border shadow-xl w-[96vw] xs:w-80 bg-white h-fit sm:h-[28rem] ${additionalClass}`}>
      <Skeleton className="w-full h-72" />
      <div className="space-y-2">
        <Skeleton className="w-9/12 h-[1.25rem]" />
        <Skeleton className="w-1/3 h-[1.5rem]" />
      </div>
      <div className="flex flex-row justify-between items-center">
        <Skeleton className="w-1/2 h-[1.5rem]" />
        <Skeleton className="w-1/3 h-[1.5rem]" />
      </div>
    </div>
  )
}

export function SkeletonCards() {
  return (
    <>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard additionalClass="hidden lg:block" />
      <SkeletonCard additionalClass="hidden 2xl:block" />
    </>
  )
}
export function ProductsSkeleton({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <section
      className="flex flex-col justify-center items-center h-fit py-[6vh] lg:px-[5%] xl:px-[10%] gap-8 w-full">
      <div className="flex flex-col w-full justify-center items-center gap-4">
        <h1 className="text-amber-500 text-2xl font-bold lg:text-3xl text-center w-10/12 xl:w-1/2">
          {title}
        </h1>
        <p className="text-gray-800 text-base lg:text-lg text-center w-10/12 xl:w-1/2">
          {subtitle}
        </p>
      </div>
      <Search type="discount" params={{}} />
      <div className="px-0 flex flex-wrap w-fit justify-center gap-4 items-center cards-container max-w-[1500px] mx-auto">
        <SkeletonCards />
      </div>
    </section>
  )
}
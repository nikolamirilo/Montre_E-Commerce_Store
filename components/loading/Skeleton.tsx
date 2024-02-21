export function Skeleton({ className }: { className: string }) {
  return <div className={`bg-slate-200 motion-safe:animate-pulse rounded ${className}`} />
}

export function SkeletonCard({ additionalClass }: { additionalClass?: string }) {
  return (
    <div className={`space-y-4 h-fit w-fit py-5 px-4 border shadow-xl ${additionalClass}`}>
      <Skeleton className="w-64 h-64 xl:w-72 xl:h-72 2xl:w-[21rem] 2xl:h-[21rem]" />
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

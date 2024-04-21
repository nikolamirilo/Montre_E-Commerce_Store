import Watch from "./watch/Watch"

const WhoAreWe = () => {
  return (
    <div className="flex flex-col justify-center items-center relative bg-amber-500 w-full py-10">
      <div className="flex flex-col justify-between items-between px-4 lg:flex-row lg:justify-around lg:items-center w-full max-w-[1500px] min-h-[110vh] md:min-h-[70vh]">
        <div
          id="cloud"
          className="bg-[#eceff1] p-4 rounded-3xl flex flex-col justify-start items-center gap-5 text-gray-900 w-full lg:w-1/3 h-full">
          <h2 className="font-bold text-2xl lg:text-3xl relative lg:bottom-20">Ko smo mi?</h2>
          <p className="text-base lg:text-lg text-center relative lg:bottom-20 lg:w-10/12">
            Dobrodošli u Montre - vašu ekskluzivnu online prodavnicu gde otkrivamo svet luksuznih
            satova. Uživajte u širokom izboru vrhunskih satova i pronađite savršeni dodatak koji će
            upotpuniti vaš stil i naglasiti vašu jedinstvenost. Sa našim pažljivo odabranim
            kolekcijama, garantujemo vam kvalitet, eleganciju i trajnost.
          </p>
        </div>
        <div className="w-full lg:w-1/3 relative bottom-48 lg:bottom-0">
          <Watch />
        </div>
      </div>
    </div>
  )
}

export default WhoAreWe

import Watch from "./watch/Watch"

const WhoAreWe = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 relative">
      <div className="flex flex-col justify-between items-between md:flex-row md:justify-around md:items-center w-full max-w-[1500px] min-h-[100vh] md:min-h-[70vh]">
        <div className="relative md:bottom-5 flex flex-col justify-start items-center gap-5 text-gray-900 w-full md:w-1/3 h-full">
          <h2 className="font-bold text-3xl">Ko smo mi?</h2>
          <p className="text-lg text-center">
            Dobrodošli u Montre - vašu ekskluzivnu online prodavnicu gde otkrivamo svet luksuznih
            satova. Uživajte u širokom izboru vrhunskih satova i pronađite savršeni dodatak koji će
            upotpuniti vaš stil i naglasiti vašu jedinstvenost. Sa našim pažljivo odabranim
            kolekcijama, garantujemo vam kvalitet, eleganciju i trajnost. Zaronite u našu kolekciju
            i pronađite sat koji odražava vašu ličnost i stil.
          </p>
        </div>
        <div className="w-full md:w-1/3 relative bottom-56 md:bottom-0">
          <Watch />
        </div>
      </div>
    </div>
  )
}

export default WhoAreWe

"use client"

const ETLS = ({ handleUpdateMultipleProducts }: { handleUpdateMultipleProducts: () => void }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-5 w-full mx-auto max-w-2xl">
      <div className="flex flex-row gap-4 w-full items-center justify-center">
        <input
          className="bg-gray-50 border border-gray-300 w-6/12 max-w-[16rem] h-full text-gray-900 text-sm rounded-lg outline-none focus:border-amber-500 block p-2.5"
          placeholder="e.g: 20"
        />
        <button
          onClick={handleUpdateMultipleProducts}
          className="text-white bg-amber-500 px-5 py-2 w-6/12 max-w-[16rem] hover:bg-amber-600 font-medium rounded-lg text-lg text-center flex flex-row justify-center items-center">
          Ažuriraj više proizvoda
        </button>
      </div>
      <div className="flex flex-row gap-4 w-full items-center justify-center">
        <input
          className="bg-gray-50 border border-gray-300 w-6/12 max-w-[16rem] h-full text-gray-900 text-sm rounded-lg outline-none focus:border-amber-500 block p-2.5"
          placeholder="e.g: 15"
        />
        <button
          onClick={handleUpdateMultipleProducts}
          className="text-white bg-amber-500 px-5 py-2 w-6/12 max-w-[16rem] hover:bg-amber-600 font-medium rounded-lg text-lg text-center flex flex-row justify-center items-center">
          Ažuriraj muške proizvode
        </button>
      </div>
      <div className="flex flex-row gap-4 w-full items-center justify-center">
        <input
          className="bg-gray-50 border border-gray-300 w-6/12 max-w-[16rem] h-full text-gray-900 text-sm rounded-lg outline-none focus:border-amber-500 block p-2.5"
          placeholder="e.g: 30"
        />
        <button
          onClick={handleUpdateMultipleProducts}
          className="text-white bg-amber-500 px-5 py-2 w-6/12 max-w-[16rem] hover:bg-amber-600 font-medium rounded-lg text-lg text-center flex flex-row justify-center items-center">
          Ažuriraj ženske proizvode
        </button>
      </div>
    </div>
  )
}

export default ETLS

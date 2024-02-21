import React from "react"

const Loader: React.FC = () => {
  return (
    <div
      className="min-h-[110vh] flex flex-row justify-center items-center w-full h-full relative -top-[5vh]"
      id="loader">
      <div className="flex flex-col justify-center items-center group animate-pulse">
        <div className="border-2 border-amber-500 w-10 h-20 rounded-md relative top-3 flex flex-col justify-start items-start">
          <div className="w-full h-[88%] flex flex-col justify-around items-between">
            <div className="border border-amber-500 w-full"></div>
            <div className="border border-amber-500 w-full"></div>
            <div className="border border-amber-500 w-full"></div>
            <div className="border border-amber-500 w-full"></div>
            <div className="border border-amber-500 w-full"></div>
            <div className="border border-amber-500 w-full"></div>
            <div className="border border-amber-500 w-full"></div>
            <div className="border border-amber-500 w-full"></div>
            <div className="border border-amber-500 w-full"></div>
          </div>
        </div>
        <div className="relative flex items-center justify-end w-20 h-20 overflow-hidden bg-gray-900 border-2 z-10 border-amber-500 rounded-full ">
          <div className="absolute w-1/2 h-1 bg-amber-500 rounded-full origin-left animate-spin-medium"></div>
          <div className="absolute w-1/2 h-1 origin-left rotate-[70] animate-spin-slow">
            <div className="w-2/3 h-full bg-amber-500 rounded-full" />
          </div>
          <div className="absolute flex justify-center flex-1 w-full">
            <div className="w-1 h-1 bg-amber-500 rounded-full" />
          </div>
        </div>
        <div className="border-2 border-amber-500 w-10 h-20 rounded-lg relative bottom-3 flex flex-col justify-end items-end">
          <div className="w-full h-[88%] flex flex-col justify-around items-between">
            <div className="border border-amber-500 w-full"></div>
            <div className="border border-amber-500 w-full"></div>
            <div className="border border-amber-500 w-full"></div>
            <div className="border border-amber-500 w-full"></div>
            <div className="border border-amber-500 w-full"></div>
            <div className="border border-amber-500 w-full"></div>
            <div className="border border-amber-500 w-full"></div>
            <div className="border border-amber-500 w-full"></div>
            <div className="border border-amber-500 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader

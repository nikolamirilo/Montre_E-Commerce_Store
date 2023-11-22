"use client"
import { useRef, useState } from "react"
import { BiSearch } from "react-icons/bi"
import Filters from "./Filters"

export interface SearchProps {
  search: string
}

const Search: React.FC<SearchProps> = ({ search }) => {
  const [isOpen, setIsOpen] = useState(false)
  const searchInput = useRef<HTMLInputElement>(null)
  return (
    <form className="flex flex-col justify-center items-center gap-5 w-full">
      <div className="flex flex-col gap-5 md:flex-row items-center justify-center w-full">
        <div className="flex flex-row items-center justify-center w-full  md:w-3/5 lg:w-4/12">
          <input
            ref={searchInput}
            type="text"
            placeholder="Pretraži satove"
            className="w-4/5 md:px-4 md:py-2 px-4 py-2 h-10 rounded-lg border-2 border-amber-500 focus:outline-none text-lg relative left-2"
          />
          <button
            onClick={e => {
              e.preventDefault()
              if (searchInput.current) {
                search = searchInput.current.value
              }
            }}
            className="w-fit bg-amber-500 text-white rounded-lg relative right-2 px-2 md:px-3 h-10 hover:bg-amber-500 text-lg">
            <BiSearch size={30} />
          </button>
        </div>

        <button
          className="bg-white w-fit text-amber-500 text-lg rounded-lg relative border-2 border-amber-500 hover:bg-amber-500 hover:text-white px-2 md:px-3 py-1 md:py-1"
          onClick={e => {
            e.preventDefault()
            setIsOpen(!isOpen)
          }}>
          {isOpen ? "Isključi filtere" : "Uključi filtere"}
        </button>
      </div>
      {isOpen ? (
        <>
          <Filters />
          <button
            type="submit"
            className="bg-amber-500 text-white rounded-lg relative right-3 px-2 md:px-3 h-10 hover:bg-amber-500 text-lg">
            Primeni
          </button>
        </>
      ) : null}
    </form>
  )
}

export default Search

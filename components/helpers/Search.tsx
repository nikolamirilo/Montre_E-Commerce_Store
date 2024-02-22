"use client"
import { SearchProps } from "@/typescript/interfaces"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
import { BiSearch } from "react-icons/bi"
import { FaFilter } from "react-icons/fa"
import { IoMdCloseCircleOutline } from "react-icons/io"

const Search: React.FC<SearchProps> = ({ type, params }) => {
  const [isOpen, setIsOpen] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const textRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const getFilters = () => {
    const filters: any = {
      text: textRef.current?.value || "",
      class: formRef.current?.class.value || "",
      brand: formRef.current?.brand.value || "",
      category: formRef.current?.category.value || "",
      minPrice: formRef.current?.minPrice.value || "",
      maxPrice: formRef.current?.maxPrice.value || "",
    }
    // Remove filters with empty values
    for (const key in filters) {
      if (filters[key] === "") {
        delete filters[key]
      }
    }

    return filters
  }

  const handleApplyFilters = (e: React.FormEvent) => {
    e.preventDefault()
    const filters = getFilters()
    if (type == "men" || type == "women") {
      delete filters.category
    }
    const queryParams = new URLSearchParams(filters)
    router.push(`?${queryParams.toString()}`, { scroll: false })
    setIsOpen(false)
  }

  const handleRemoveFilters = () => {
    switch (type) {
      case "all":
        router.push("/products/watches", { scroll: false })
        break
      case "men":
        router.push("/products/watches/categories/men", { scroll: false })
        break
      case "women":
        router.push("/products/watches/categories/women", { scroll: false })
        break
      case "discount":
        router.push("/products/watches/offers/super-deals", { scroll: false })
        break
      default:
        router.push("/products/watches", { scroll: false })
        break
    }
    formRef.current?.reset()
    textRef.current!.value = ""
    setIsOpen(false)
  }
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full">
      <div className="flex flex-col gap-5 md:flex-row items-center justify-center w-full">
        <div className="flex flex-row items-center justify-center w-full  md:w-3/5 lg:w-4/12">
          <input
            ref={textRef}
            type="text"
            placeholder="Pretraži satove"
            className="w-4/5 md:px-4 md:py-2 px-4 py-2 h-10 rounded-lg border-2 border-amber-500 focus:outline-none text-lg relative left-2"
          />
          <button
            onClick={handleApplyFilters}
            className="w-fit bg-amber-500 text-white rounded-lg relative right-2 px-2 md:px-3 h-10 hover:bg-amber-500 text-lg">
            <BiSearch size={30} />
          </button>
        </div>

        <button
          className="bg-white w-fit py-1 px-12 md:px-8 text-amber-500 text-lg rounded-lg relative border-2 flex flex-row gap-2 justify-center items-center border-amber-500 hover:bg-amber-500 hover:text-white"
          onClick={() => {
            setIsOpen(!isOpen)
          }}>
          {isOpen ? <IoMdCloseCircleOutline size={25} /> : <FaFilter size={20} />}
          {isOpen ? "Zatvori" : "Filteri"}
        </button>
      </div>
      {isOpen ? (
        <>
          <form
            ref={formRef}
            className="flex flex-row flex-wrap justify-center items-center gap-3 w-full text-lg"
            id="filters">
            <div className="flex flex-col">
              <label htmlFor="brand">Brend:</label>
              <select
                id="brand"
                name="brand"
                className="w-40 md:w-48 h-10 border-2 bg-white border-amber-500 focus:outline-none focus:border-amber-500 rounded-lg cursor-pointer px-2 md:px-3 py-0 md:py-1 tracking-wider text-gray-900">
                <option value="">Izaberi</option>
                <option value="Curren">Curren</option>
                <option value="Lige">Lige</option>
                <option value="Naviforce">Naviforce</option>
                <option value="Benyar">Benyar</option>
                <option value="Hannah Martin">Hannah Martin</option>
                <option value="Geneva">Geneva</option>
              </select>
            </div>
            <div
              className={`flex flex-col ${
                type == "men" ? "hidden" : type == "women" ? "hidden" : null
              }`}>
              <label htmlFor="category">Kategorija:</label>
              <select
                id="category"
                name="category"
                className="w-40 md:w-48 h-10 border-2 bg-white border-amber-500 focus:outline-none focus:border-amber-500 rounded-lg cursor-pointer px-2 md:px-3 py-0 md:py-1 tracking-wider text-gray-900">
                <option value="">Izaberi</option>
                <option value="men">Muški</option>
                <option value="women">Ženski</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="class">Klasa:</label>
              <select
                id="class"
                name="class"
                className="w-40 md:w-48 h-10 border-2 bg-white border-amber-500 focus:outline-none focus:border-amber-500 rounded-lg cursor-pointer px-2 md:px-3 py-0 md:py-1 tracking-wider text-gray-900">
                <option value="">Izaberi</option>
                <option value="Premium">Premium</option>
                <option value="Casual">Casual</option>
                <option value="Sport">Sport</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="minPrice">Minimalna cena:</label>
              <input
                id="minPrice"
                name="minPrice"
                type="text"
                placeholder="RSD"
                className="w-40 md:w-48 h-10 border-2 border-amber-500 focus:outline-none focus:border-amber-500 rounded-lg px-2 md:px-3 py-0 md:py-1 tracking-wider text-gray-900"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="maxPrice">Maksimalna cena:</label>
              <input
                id="maxPrice"
                name="maxPrice"
                placeholder="RSD"
                type="text"
                className="w-40 md:w-48 h-10 border-2 border-amber-500 focus:outline-none focus:border-amber-500 rounded-lg px-2 md:px-3 py-0 md:py-1 tracking-wider text-gray-900"
              />
            </div>
          </form>
          <div className="flex flex-row justify-center items-center  gap-2 w-full">
            <button
              onClick={handleApplyFilters}
              className="w-40 md:w-48 bg-amber-500 text-white rounded-lg px-2 md:px-3 h-10 hover:bg-amber-600 text-lg">
              Primeni
            </button>
            <button
              onClick={handleRemoveFilters}
              className=" w-40 md:w-48 border-2 border-amber-500 bg-white text-amber-500 rounded-lg px-2 md:px-3 h-10 hover:bg-amber-500 hover:text-white text-lg">
              Obriši filtere
            </button>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default Search

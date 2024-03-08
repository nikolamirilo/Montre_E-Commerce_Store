import { FormElementProps } from "@/typescript/interfaces"
import { Option } from "@/typescript/types"
import React from "react"

const Select: React.FC<FormElementProps> = ({ selectRef, name, label, options }) => {
  return (
    <>
      <label htmlFor={name} className="block text-sm font-medium leading-5 text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <select
          required
          ref={selectRef}
          id={name}
          name={name}
          className="w-full bg-white h-10 border-2 text-sm focus:border-amber-500 focus:outline-none rounded-lg cursor-pointer px-2 py-0 md:py-1 text-gray-900">
          <option value="">Izaberi</option>
          {options?.map((option: Option, idx: number) => {
            return (
              <option value={option.value} key={idx}>
                {option.label}
              </option>
            )
          })}
        </select>
      </div>
    </>
  )
}

export default Select

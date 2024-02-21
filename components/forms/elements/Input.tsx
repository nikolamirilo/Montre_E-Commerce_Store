import { FormElementProps } from "@/typescript/interfaces"
import React from "react"

const Input: React.FC<FormElementProps> = ({
  type,
  defaultValue,
  inputRef,
  name,
  label,
  isRequired,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={name} className="block text-base font-medium leading-5 text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          required={isRequired}
          defaultValue={defaultValue}
          placeholder={placeholder}
          ref={inputRef}
          id={name}
          name={name}
          type={type ? type : "text"}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:border-2 sm:text-sm"
        />
      </div>
    </>
  )
}

export default Input

import { FormElementProps } from "@/typescript/interfaces"
import React from "react"

const TextArea: React.FC<FormElementProps> = ({ textAreaRef, name, label, isRequired }) => {
  return (
    <>
      <label htmlFor={name} className="block text-base font-medium leading-5 text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <textarea
          required={isRequired}
          ref={textAreaRef}
          id={name}
          name={name}
          rows={4}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:border-2 sm:text-sm"
        />
      </div>
    </>
  )
}

export default TextArea

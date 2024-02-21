import { FormElementProps } from "@/typescript/interfaces"
import React from "react"

const Checkbox: React.FC<FormElementProps> = ({ inputRef, name, label, isRequired }) => {
  return (
    <div className="flex items-center relative left-1">
      <input ref={inputRef} id={name} type="checkbox" className="w-4 h-4 rounded cursor-pointer" />
      <label htmlFor={name} className="ms-2 text-sm font-medium text-gray-900">
        {label}
      </label>
    </div>
  )
}

export default Checkbox

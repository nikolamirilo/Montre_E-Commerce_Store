import { LabelProps } from "@/typescript/interfaces"
import React from "react"

const Label: React.FC<LabelProps> = ({ title, value }) => {
  return (
    <>
      <label className="block text-base font-medium leading-5 text-gray-700">{title}</label>
      <div className="mt-1">
        <span>{value}</span>
      </div>
    </>
  )
}

export default Label

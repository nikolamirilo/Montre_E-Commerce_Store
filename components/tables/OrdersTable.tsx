"use client"
import { parseDate } from "@/helpers/client"
import { SortType } from "@/typescript/types"
import { useState } from "react"
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa"

const OrdersTable = ({ orders }: { orders: any }) => {
  const primaryCellStyle = "px-6 py-3 border-b border-gray-700 text-white bg-gray-900 text-center"
  const secondaryCellStyle = "px-6 py-3 border-b border-gray-700 text-gray-800 text-center"
  const [sort, setSort] = useState<SortType>("DESC")
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto shadow-md sm:rounded-lg border border-gray-700">
      <thead className="text-sm uppercase font-bold">
        <tr>
          <th scope="col" className={primaryCellStyle}>
            Ime i prezime
          </th>
          <th scope="col" className={secondaryCellStyle}>
            Naručeni proizvodi
          </th>
          <th scope="col" className={primaryCellStyle}>
            Cena (uračunata dostava)
          </th>
          <th
            scope="col"
            className={`${secondaryCellStyle} flex flex-row gap-1 justify-center items-center cursor-pointer`}
            onClick={() => {
              if (sort == "DESC") {
                setSort("ASC")
              } else {
                setSort("DESC")
              }
            }}>
            {sort == "DESC" ? <FaSortAmountDown /> : <FaSortAmountUp />}
            Datum
          </th>
          <th scope="col" className={primaryCellStyle}>
            Email
          </th>
          <th scope="col" className={secondaryCellStyle}>
            Telefon
          </th>
          <th scope="col" className={primaryCellStyle}>
            Adresa
          </th>
        </tr>
      </thead>
      <tbody>
        {orders
          ?.sort((a: any, b: any) => {
            const dateA: any = parseDate(a.date)
            const dateB: any = parseDate(b.date)
            if (!dateA || !dateB) return 0
            if (sort == "DESC") {
              return dateB - dateA
            } else {
              return dateA - dateB
            }
          })
          .map((order: any) => {
            return (
              <tr className="border-b border-gray-700 h-[100px] font-medium">
                <td className={primaryCellStyle}>{order.customerInfo.fullName}</td>
                <td scope="row" className={`lg:w-[300px] ${secondaryCellStyle}`}>
                  {order.products.map((product: any) => {
                    return `${product.quantity} x ${product.title}, `
                  })}
                </td>
                <td className={primaryCellStyle}>
                  {order.total.toLocaleString().replace(",", ".")},00 RSD
                </td>
                <td className={secondaryCellStyle}>{order.date}</td>
                <td className={primaryCellStyle}>{order.customerInfo.email}</td>
                <td className={secondaryCellStyle}>{order.customerInfo.phone}</td>
                <td className={primaryCellStyle}>
                  {`${order.customerInfo.address}, ${order.customerInfo.city},${order.customerInfo.zipCode}`}
                </td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

export default OrdersTable

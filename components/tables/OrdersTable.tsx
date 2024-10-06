"use client"
import { deleteSingleOrder } from "@/actions/server/cart"
import { updateOrder } from "@/actions/server/users"
import { parseDate } from "@/helpers/client"
import { revalidateTagCustom } from "@/helpers/server"
import { SortType } from "@/typescript/types"
import { useState } from "react"
import {
  FaRegCheckCircle,
  FaRegTimesCircle,
  FaRegTrashAlt,
  FaSortAmountDown,
  FaSortAmountUp,
} from "react-icons/fa"
import { TbLoader3 } from "react-icons/tb"

const OrdersTable = ({ orders }: { orders: any }) => {
  const primaryCellStyle = "px-6 py-3 border-b border-gray-700 text-white bg-gray-900 text-center"
  const secondaryCellStyle = "px-6 py-3 border-b border-gray-700 text-gray-800 text-center"
  const [sort, setSort] = useState<SortType>("DESC")
  const [loading, setLoading] = useState<boolean>(false)
  async function hanldeUpdateOrder(orderId: string, isHandled: boolean) {
    setLoading(true)
    try {
      const res = await updateOrder(orderId, isHandled)
      if (res) {
        revalidateTagCustom("orders")
        console.log("Order updated successfully")
      } else {
        console.log("Failed to update order")
      }
    } catch (error: any) {
      console.error("Failed to update order:", error.message)
    } finally {
      setLoading(false)
    }
  }

  async function hanldeDeleteOrder(orderId: string) {
    setLoading(true)
    try {
      const res = await deleteSingleOrder(orderId)
      if (res) {
        revalidateTagCustom("orders")
        console.log("Order deleted successfully successfully")
      } else {
        console.log("Failed to update order")
      }
    } catch (error: any) {
      console.error("Failed to update order:", error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative">
      {loading && (
        <div className="absolute h-full w-full bg-gray-800/40 flex justify-center items-center z-20">
          <TbLoader3 size={40} color="#d97706" className="animate-spin" />
        </div>
      )}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto shadow-md sm:rounded-lg border border-gray-700">
        <thead className="text-sm uppercase font-bold">
          <tr>
            <th scope="col" className={primaryCellStyle}>
              Ime i prezime
            </th>
            <th scope="col" className={secondaryCellStyle}>
              Proizvodi
            </th>
            <th scope="col" className={primaryCellStyle}>
              Iznos
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
            <th scope="col" className={secondaryCellStyle}>
              Poslato
            </th>
          </tr>
        </thead>
        <tbody>
          {orders
            ? orders
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
                .map((order: any, index: number) => {
                  return (
                    <tr className="border-b border-gray-700 h-[100px] font-medium" key={index}>
                      <td className={`${primaryCellStyle} relative`}>
                        <FaRegTrashAlt
                          size={20}
                          className="absolute left-1 top-2 cursor-pointer text-red-400 hover:text-red-500"
                          onClick={() => {
                            hanldeDeleteOrder(order._id)
                          }}
                        />
                        {order.customerInfo.fullName}
                      </td>
                      <td scope="row" className={`lg:w-[300px] ${secondaryCellStyle}`}>
                        {order?.products.length == 1
                          ? order?.products.map((product: any) => {
                              return `${product.quantity} x ${product.title}`
                            })
                          : order?.products.map((product: any) => {
                              return (
                                <span>
                                  {product.quantity} x {product.title}
                                  <br />
                                </span>
                              )
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
                      <td className={`${secondaryCellStyle}`}>
                        <button
                          className="cursor-pointer"
                          onClick={() => {
                            hanldeUpdateOrder(order._id, !order.isHandled)
                          }}>
                          {order.isHandled == true ? (
                            <FaRegCheckCircle color="green" size={30} />
                          ) : (
                            <FaRegTimesCircle color="red" size={30} />
                          )}
                        </button>
                      </td>
                    </tr>
                  )
                })
            : null}
        </tbody>
      </table>
    </div>
  )
}

export default OrdersTable

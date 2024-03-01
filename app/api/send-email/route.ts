import { OrderTemplate } from "@/components/email/OrderTemplate"
import { NextRequest } from "next/server"
import * as React from "react"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const order = await request.json()
  if (order)
    try {
      const { data, error } = await resend.emails.send({
        from: "Montre Shop <no-reply@montre-shop.com>",
        to: order.customerInfo.email,
        cc: "satovi.montre@gmail.com",
        subject: "Potvrda o narudžbini",
        react: OrderTemplate({
          customerInfo: order?.customerInfo,
          products: order?.products,
          total: order?.total,
        }) as React.ReactElement,
      })

      if (error) {
        console.log(error)
        return Response.json({ error }, { status: 500 })
      }
      return Response.json({ data }, { status: 200 })
    } catch (error) {
      console.log(error)
      return Response.json({ error }, { status: 500 })
    }
}

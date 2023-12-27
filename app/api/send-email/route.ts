import { EmailTemplate } from "@/components/EmailTemplate"
import { NextRequest } from "next/server"
import * as React from "react"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const order = await request.json()
  console.log(order)
  if (order)
    try {
      const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: ["satovi.montre@gmail.com"],
        subject: "Hello world",
        react: EmailTemplate({
          fullName: order?.customerInfo?.fullName,
          products: order?.products,
        }) as React.ReactElement,
      })

      if (error) {
        console.log(error)
        return Response.json({ error })
      }
      return Response.json({ data }, { status: 200 })
    } catch (error) {
      console.log(error)
      return Response.json({ error })
    }
}

import { ContactTemplate } from "@/components/email/ContactEmail"
import { ContactTemplateProps } from "@/typescript/interfaces"
import { NextRequest } from "next/server"
import * as React from "react"
import { Resend } from "resend"

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const contactEmailData: ContactTemplateProps = await request.json()
  if (contactEmailData)
    try {
      const { data, error } = await resend.emails.send({
        from: "Montre Shop <no-reply@montre-shop.com>",
        to: "satovi.montre@gmail.com",
        subject: "Nova poruka na sajtu www.montre-shop.com",
        reply_to: contactEmailData.email,
        react: ContactTemplate({
          subject: contactEmailData.subject,
          message: contactEmailData.message,
        }) as React.ReactElement,
      })
      if (error) {
        console.log(error)
        return Response.json({ error })
      }
      return Response.json({ data }, { status: 200 })
    } catch (error) {
      console.log(error)
      return Response.json({ error }, { status: 500 })
    }
}

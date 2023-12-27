import { EmailTemplate } from "@/components/EmailTemplate"
import * as React from "react"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["satovi.montre@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "Nikola", orderNumber: "MS-96785" }) as React.ReactElement,
    })

    if (error) {
      return Response.json({ error })
    }

    return Response.json({ data })
  } catch (error) {
    return Response.json({ error })
  }
}

import { EmailTemplate } from "@/components/EmailTemplate"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "satovi.montre@gmail.com",
      to: "nikolamirilo@gmail.com",
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }),
      text: "Hello World",
    })
    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}

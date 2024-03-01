"use server"
import { ContactTemplateProps } from "@/typescript/interfaces"

export async function sendContactEmail(contactEmailData: ContactTemplateProps) {
  try {
    const emailRes = await fetch(process.env.NEXT_PUBLIC_WEB_APP_URL + "/api/contact", {
      method: "POST",
      body: JSON.stringify(contactEmailData),
    })
    if (emailRes.ok) {
      console.log("Contact email sent successfully")
    }
  } catch (error) {
    console.log(error)
  }
}

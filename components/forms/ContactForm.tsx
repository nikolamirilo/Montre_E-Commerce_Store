"use client"
import { sendContactEmail } from "@/actions/server/other"
import React, { useState } from "react"
import { BsSendFill } from "react-icons/bs"
import { LuLoader2 } from "react-icons/lu"
import InfoModal from "../modals/InfoModal"

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [progress, setProgress] = useState<number>(0)
  async function sendEmail(e: any) {
    e.preventDefault()
    setProgress(50)
    const data = { email, subject, message }
    await sendContactEmail(data).then(() => {
      setProgress(100)
    })
    setIsOpen(true)
    setEmail("")
    setSubject("")
    setMessage("")
  }
  return (
    <form action="submit" className="w-full lg:w-2/3 flex flex-col gap-3" onSubmit={sendEmail}>
      {isOpen ? (
        <InfoModal
          title="Vaš odgovor je zabeležen"
          subtitle="Hvala na kontaktiranju. Javićemo vam se u roku od 24 sata."
          closeModal={() => {
            setIsOpen(false)
          }}
        />
      ) : null}
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
          Vaš E-Mail:
        </label>
        <input
          value={email}
          onChange={(e: any) => {
            setEmail(e.target.value)
          }}
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-amber-500 block w-full p-2.5"
          required
        />
      </div>
      <div>
        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 ">
          Naslov:
        </label>
        <input
          value={subject}
          onChange={(e: any) => {
            setSubject(e.target.value)
          }}
          type="text"
          id="subject"
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none focus:border-amber-500"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">
          Poruka:
        </label>
        <textarea
          value={message}
          onChange={(e: any) => {
            setMessage(e.target.value)
          }}
          id="message"
          rows={6}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none focus:border-amber-500"></textarea>
      </div>
      <button
        type="submit"
        className="py-2 px-5 focus:outline-none active:outline-none flex flex-row justify-center items-center  gap-1 text-[16px] text-center text-white rounded-lg bg-amber-500 sm:w-fit hover:bg-amber-600 focus:ring-0">
        {progress == 50 ? (
          <LuLoader2 className="animate-spin h-5 w-5 rounded-full" color="white" size={25} />
        ) : (
          <BsSendFill size={20} />
        )}
        {progress == 50 ? "Šalje se" : "Pošalji"}
      </button>
    </form>
  )
}

export default ContactForm

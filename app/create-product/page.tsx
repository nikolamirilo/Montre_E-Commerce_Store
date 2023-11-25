import Form from "@/components/Form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dodaj novi proizvod",
  description: "Dodaj novi proizvod u Montre online shop",
}

const CreatePost = () => {
  return (
    <main id="create-post" className="flex items-center justify-center">
      <Form action="create" />
    </main>
  )
}

export default CreatePost

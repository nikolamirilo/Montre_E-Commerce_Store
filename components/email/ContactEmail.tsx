import { ContactTemplateProps } from "@/typescript/interfaces"
import { Heading, Section, Text } from "@react-email/components"
import * as React from "react"

export const ContactTemplate: React.FC<Readonly<ContactTemplateProps>> = ({ message, subject }) => (
  <Section>
    <Heading as="h2">{subject}</Heading>
    <Text>{message}</Text>
  </Section>
)

import { Product } from "@/typescript/interfaces"
import { Column, Container, Heading, Img, Row, Section, Text } from "@react-email/components"
import * as React from "react"

interface EmailTemplateProps {
  products: Product[]
  fullName: string
}
var total = 400
const orderNumber = "MS-0002"

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ products, fullName }) => (
  <Container
    style={{ width: "800px", background: "#0c0502", padding: "50px 30px", borderRadius: "10px" }}>
    <Heading as="h2" style={{ color: "#ffffff" }}>
      Potvrda o narudžbini
    </Heading>
    <Text style={{ fontSize: "1.2rem", color: "#ffffff" }}>
      Poštovani {fullName}, tvoja porudžbina {orderNumber} je primljena i biće ti dostavljena u
      naredna 3 radna dana.
    </Text>
    <Section style={{ border: "1px solid #ffffff", width: "700px" }}>
      <Row>
        <Column
          style={{
            ...cellStyle,
            background: "#f59e0b",
            fontWeight: "bold",
            color: "#ffffff",
          }}>
          Naziv proizvoda
        </Column>
        <Column
          style={{
            ...cellStyle,
            background: "#f59e0b",
            fontWeight: "bold",
            color: "#ffffff",
          }}>
          Količina
        </Column>
        <Column
          style={{
            ...cellStyle,
            background: "#f59e0b",
            fontWeight: "bold",
            color: "#ffffff",
          }}>
          Jedinična cena
        </Column>
        <Column
          style={{
            ...cellStyle,
            background: "#f59e0b",
            fontWeight: "bold",
            color: "#ffffff",
          }}>
          Ukupna cena
        </Column>
      </Row>
      {products.map((product: any, idx: number) => {
        const price = product.isOnDiscount == true ? product.discountedPrice : product.price
        const totalPerProduct = price * product.quantity
        total += totalPerProduct
        return (
          <Row key={idx}>
            <Column style={{ ...cellStyle }}>{product.title}</Column>
            <Column style={{ ...cellStyle }}>{product.quantity} kom</Column>
            <Column style={{ ...cellStyle }}>
              {price.toLocaleString().replace(",", ".")},00 RSD
            </Column>
            <Column style={{ ...cellStyle }}>
              {totalPerProduct.toLocaleString().replace(",", ".")},00 RSD
            </Column>
          </Row>
        )
      })}
    </Section>
    <Text style={{ fontSize: "1.2rem", color: "#ffffff" }}>
      Troškovi dostave iznose 400,00 RSD te ukupna cena iznosi:{" "}
      {total.toLocaleString().replace(",", ".")},00 RSD
    </Text>
    <Text style={{ fontSize: "1.2rem", color: "#ffffff" }}>Hvala na poverenju</Text>
    <Text style={{ fontSize: "1.2rem", color: "#ffffff" }}>Tvoj Montre,</Text>
    <Text style={{ fontSize: "1.2rem", color: "#ffffff" }}>Srdačan pozdrav,</Text>
    <Img
      src="https://www.montre-shop.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMontreLogoTransparent.7998db34.png&w=256&q=75"
      alt="Montre"
      width="180"
      height="120"
    />
  </Container>
)
const cellStyle = {
  fontSize: "1.1rem",
  border: "1px solid #ffffff",
  background: "#0c0502",
  color: "#ffffff",
  width: "25%",
  textWrap: "wrap",
  textAlign: "center" as const,
  padding: "3px 0",
}

import { Column, Container, Heading, Img, Row, Section, Text } from "@react-email/components"
import * as React from "react"

interface EmailTemplateProps {
  firstName: string
  orderNumber: string
}
const products = [
  { title: "Curren Gold Blue", image: "", quantity: 4, price: 3200 },
  { title: "Curren Classic", image: "", quantity: 3, price: 5000 },
  { title: "Curren Oak Green", image: "", quantity: 1, price: 7000 },
]
var total = 400

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  orderNumber,
}) => (
  <Container
    style={{ width: "800px", background: "#0c0502", padding: "50px 30px", borderRadius: "10px" }}>
    <Heading as="h2" style={{ color: "#ffffff" }}>
      Potvrda o narudžbini
    </Heading>
    <Text style={{ fontSize: "1.2rem", color: "#ffffff" }}>
      Dragi {firstName}, tvoja porudžbina {orderNumber} je primljena i biće ti dostavljena u naredna
      3 radna dana.
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
        const totalPerProduct = product.price * product.quantity
        total += totalPerProduct
        return (
          <Row key={idx}>
            <Column style={{ ...cellStyle }}>{product.title}</Column>
            <Column style={{ ...cellStyle }}>{product.quantity} kom</Column>
            <Column style={{ ...cellStyle }}>
              {product.price.toLocaleString().replace(",", ".")},00 RSD
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

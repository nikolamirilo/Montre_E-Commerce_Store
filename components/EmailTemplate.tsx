import { Product } from "@/typescript/interfaces"
import { Column, Container, Img, Link, Row, Section, Text } from "@react-email/components"
import * as React from "react"

interface EmailTemplateProps {
  products: Product[]
  customerInfo: any
  total: number
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  products,
  customerInfo,
  total,
}) => (
  <Container
    style={{ width: "800px", background: "#0c0502", padding: "30px 20px", borderRadius: "10px" }}>
    <Text style={textStyle}>Poštovani {customerInfo.fullName},</Text>
    <Text style={textStyle}>
      Vaša porudžbina je zabeležena i biće Vam dostavljena u naredna 3 radna dana.
    </Text>
    <Text style={textStyle}>U tabeli ispod se nalazi lista proizvoda koje ste poručili.</Text>
    <Section style={{ border: "1px solid #ffffff", width: "700px" }}>
      <Row>
        <Column
          style={{
            ...cellStyle,
            background: "#f59e0b",
            fontWeight: "bold",
          }}>
          Naziv proizvoda
        </Column>
        <Column
          style={{
            ...cellStyle,
            background: "#f59e0b",
            fontWeight: "bold",
          }}>
          Količina
        </Column>
        <Column
          style={{
            ...cellStyle,
            background: "#f59e0b",
            fontWeight: "bold",
          }}>
          Jedinična cena
        </Column>
        <Column
          style={{
            ...cellStyle,
            background: "#f59e0b",
            fontWeight: "bold",
          }}>
          Ukupna cena
        </Column>
      </Row>
      {products.map((product: any, idx: number) => {
        const price = product.isOnDiscount == true ? product.discountedPrice : product.price
        const totalPerProduct = price * product.quantity
        return (
          <Row key={idx}>
            <Column style={cellStyle}>{product.title}</Column>
            <Column style={cellStyle}>{product.quantity} kom</Column>
            <Column style={cellStyle}>{price.toLocaleString().replace(",", ".")},00 RSD</Column>
            <Column style={cellStyle}>
              {totalPerProduct.toLocaleString().replace(",", ".")},00 RSD
            </Column>
          </Row>
        )
      })}
    </Section>
    <Text style={textStyle}>
      Troškovi dostave iznose 400,00 RSD te ukupna cena iznosi:{" "}
      {total.toLocaleString().replace(",", ".")},00 RSD
    </Text>
    <Text style={textStyle}>Informacije za dostavu:</Text>
    <Section>
      <Row>
        <Column style={cellStyle}>Broj telefona:</Column>
        <Column style={cellStyle}>Grad:</Column>
        <Column style={cellStyle}>Adresa:</Column>
        <Column style={cellStyle}>Poštanski broj:</Column>
      </Row>
      <Row>
        <Column style={cellStyle}>{customerInfo.phone}</Column>
        <Column style={cellStyle}>{customerInfo.city}</Column>
        <Column style={cellStyle}>{customerInfo.adress}</Column>
        <Column style={cellStyle}>{customerInfo.zipCode}</Column>
      </Row>
    </Section>
    {customerInfo.note != "" ? (
      <Text style={textStyle}>Napomena kupca: {customerInfo.note}</Text>
    ) : null}
    <Text style={textStyle}>
      Ukoliko neka informacija nije tačna možete nam pisati na naš mejl:{" "}
      <Link href="mailto:satovi.montre@gmail.com" style={{ fontSize: "1.2rem" }}>
        satovi.montre@gmail.com
      </Link>
    </Text>
    <Text style={textStyle}>Hvala na poverenju</Text>
    <Text style={textStyle}>Tvoj Montre,</Text>
    <Text style={textStyle}>Srdačan pozdrav,</Text>
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
const textStyle = {
  fontSize: "1.2rem",
  color: "#ffffff",
}

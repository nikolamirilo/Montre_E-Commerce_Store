import { OrderTemplateProps } from "@/typescript/interfaces"
import { Column, Container, Img, Link, Row, Section, Text } from "@react-email/components"
import * as React from "react"
import { cellStyle, containerStyle, headingCellStyle, textStyle } from "./style"

export const OrderTemplate: React.FC<Readonly<OrderTemplateProps>> = ({
  products,
  customerInfo,
  total,
}) => (
  <Container style={containerStyle}>
    <Text style={textStyle}>Poštovani/a {customerInfo.fullName},</Text>
    <Text style={textStyle}>
      Vaša narudžbina je zabeležena i biće Vam dostavljena u naredna 3 radna dana.
    </Text>
    <Section style={{ border: "1px solid #ffffff", width: "700px" }}>
      <Row>
        <Column style={headingCellStyle}>Naziv proizvoda</Column>
        <Column style={headingCellStyle}>Količina</Column>
        <Column style={headingCellStyle}>Jedinična cena</Column>
        <Column style={headingCellStyle}>Ukupna cena</Column>
      </Row>
      {products?.map((product: any, idx: number) => {
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
        <Column style={headingCellStyle}>Broj telefona:</Column>
        <Column style={headingCellStyle}>Grad:</Column>
        <Column style={headingCellStyle}>Adresa:</Column>
        <Column style={headingCellStyle}>Poštanski broj:</Column>
      </Row>
      <Row>
        <Column style={cellStyle}>{customerInfo.phone}</Column>
        <Column style={cellStyle}>{customerInfo.city}</Column>
        <Column style={cellStyle}>{customerInfo.address}</Column>
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
    <Text style={textStyle}>Hvala na poverenju!</Text>
    <Text style={textStyle}>Vaš Montre,</Text>
    <Img
      src="https://www.montre-shop.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMontreLogoTransparent.7998db34.png&w=256&q=75"
      alt="Montre"
      width="180"
      height="120"
    />
  </Container>
)

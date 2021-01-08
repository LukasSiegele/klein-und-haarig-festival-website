import React, { useEffect, useState } from "react"
import styled from "styled-components"
import FormButton from "../components/buttons/FormButton"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ShopTitle from "../components/shopping/ShopTitle"
import { navigate } from "gatsby"
import addToMailchimp from "gatsby-plugin-mailchimp"

// const products = [
//   {
//     name: "Festival Ticket",
//     price: 70,
//   },
//   {
//     name: "Auto Parkplatz",
//     price: 5,
//   },
// ]

export default function Summary({ location }) {
  const { state = {} } = location
  const {
    sumTickets,
    firstName,
    lastName,
    email,
    phone,
    streetHouseNumber,
    postcode,
    city,
    datenspeicherung,
    vereinsbeitritt,
    newsletter,
  } = state

  const [ticketType, setTicketType] = useState("")
  const [products, setProducts] = useState([])
  const festivalTicket = "ja"
  const [autoTicket, setAutoTicket] = useState("nein")
  const [camperTicket, setCamperTicket] = useState("nein")

  // POST TO — AIRTABLE
  const submit = e => {
    e.preventDefault()

    addToMailchimp(email, {
      FNAME: firstName,
      LNAME: lastName,
      PHONE: phone,
      STREETNUMB: streetHouseNumber,
      POSTCODE: postcode,
      CITY: city,
      DATASAVE: datenspeicherung,
      VEREIN: vereinsbeitritt,
      NEWSLETTER: newsletter,
      TFESTIVAL: festivalTicket,
      TAUTO: autoTicket,
      TCAMPER: camperTicket,
    })
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`)

        if (result !== "success") {
          throw msg
        }
        // alert(msg)
        navigate("/submitted")
      })
      .catch(err => {
        alert(
          "Auf diese Email läuft schon ein Festivalticket! Falls das nicht stimmt oder du nachträglich ein Auto/Camper Ticket kaufen möchtest wende dich bitte an ticket@bunteplatte.de"
        )
      })

    if (newsletter) {
      addToMailchimp(
        email,
        {
          FNAME: firstName,
          LNAME: lastName,
        },
        process.env.GATSBY_MAILCHIMP_API_NEWSLETTER
      )
    }
  }

  useEffect(() => {
    setProducts([])
    if (sumTickets === 70) {
      setProducts(products => [
        ...products,
        {
          ticket: "1x Festival Ticket 70 €",
        },
      ])
    } else if (sumTickets === 75) {
      setProducts(products => [
        ...products,
        {
          ticket: "1x Festival Ticket 70 €",
        },
        {
          ticket: "1x Auto Parkplatz 5 €",
        },
      ])
      setAutoTicket("ja")
    } else if (sumTickets === 80) {
      setProducts(products => [
        ...products,
        {
          ticket: "1x Festival Ticket 70 €",
        },
        {
          ticket: "1x Camper Stellplatz 10 €",
        },
      ])
      setCamperTicket("ja")
    } else if (sumTickets === 85) {
      setProducts(products => [
        ...products,
        {
          ticket: "1x Festival Ticket 70 €",
        },
        {
          ticket: "1x Auto Parkplatz 5 €",
        },
        {
          ticket: "1x Camper Stellplatz 10 €",
        },
      ])
      setAutoTicket("ja")
      setCamperTicket("nein")
    }
  }, [sumTickets])

  return (
    <Layout>
      <SEO title="Summary" />
      <ShopTitle info="Schritt 3/3" title="Schick ab datt Ding" />
      <Container>
        <Wrapper>
          <form onSubmit={submit}>
            <Section>
              <Group>
                <Value>Tickets</Value>
                <InfoGroup>
                  {products.map(product => (
                    <Info>{product.ticket}</Info>
                  ))}
                </InfoGroup>
              </Group>
            </Section>
            <Section>
              <Group>
                <Value>Du</Value>
                <Info>
                  {firstName} {lastName}
                </Info>
              </Group>
              <Group>
                <Value>Mail</Value>
                <Info>{email}</Info>
              </Group>
              <Group>
                <Value>Phone</Value>
                <Info>{phone || "-"}</Info>
              </Group>
              <Group>
                <Value>Adresse</Value>
                <Info>
                  {streetHouseNumber}, {postcode}, {city}
                </Info>
              </Group>
              <Group>
                <Value>Datenspeicherung</Value>
                <Info>{datenspeicherung ? "Ja" : "Nein"}</Info>
              </Group>
              <Group>
                <Value>Vereinsbeitritt</Value>
                <Info>{vereinsbeitritt ? "Ja" : "Nein"}</Info>
              </Group>
              <Group>
                <Value>Newsletter</Value>
                <Info>{newsletter ? "Ja" : "Nein"}</Info>
              </Group>
            </Section>
            <Section>
              <Group>
                <Value>Überweisung an</Value>
                <Info>Bunte Platte e.V</Info>
              </Group>
              <Group>
                <Value>Betrag</Value>
                <Info>{sumTickets} €</Info>
              </Group>
              <Group>
                <Value>IBAN</Value>
                <Info>DE 1001 10001 2787 2983 77</Info>
              </Group>
              <Group>
                <Value>BIC</Value>
                <Info>SOLADES1</Info>
              </Group>
              <Group>
                <Value>Verwendungszweck</Value>
                <Info>
                  {firstName} {lastName} KUH2021
                </Info>
              </Group>
            </Section>
            <Section>
              <Group>
                <Value>Info</Value>
                <Info>
                  Der Betrag muss innerhalb 7 Tage bei uns einegegangen sein,
                  ansonsten verfällt die Reservierung. Die Überweisungsdaten
                  erhälst du zusätzlich in einer Mail, nachdem du auf den
                  folgenden Button geklickt hast.
                </Info>
              </Group>
            </Section>
            <ButtonGroup>
              <FormButton
                typ="submit"
                label="Daten abschicken und Tickets reservieren"
              ></FormButton>
            </ButtonGroup>
          </form>
        </Wrapper>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`

const Wrapper = styled.div`
  max-width: 800px;
  padding: 10px 0 200px 0;
`

const Section = styled.div`
  margin-bottom: 40px;
`

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`

const Value = styled.h4`
  color: rgba(255, 255, 255, 0.5);
  margin-top: 10px;
  justify-self: right;
`

const InfoGroup = styled.h4``

const Info = styled.h4`
  color: white;
  margin-top: 10px;
`

const ButtonGroup = styled.div`
  /* margin-top: 80px; */
  padding: 40px 120px 0;
`

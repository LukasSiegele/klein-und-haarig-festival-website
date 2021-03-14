import React, { useEffect, useState } from "react"
import styled from "styled-components"
import FormButton from "../components/buttons/FormButton"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ShopTitle from "../components/shopping/ShopTitle"
import { navigate } from "gatsby"
import addToMailchimp from "gatsby-plugin-mailchimp"
import Airtable from "airtable"
import useAudienceCount from "../helper/useAudienceCount"
import uniqid from "uniqid"

// test

const base = new Airtable({
  apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
}).base(process.env.GATSBY_AIRTABLE_BASE)

const table = base("Teilnehmer 2021")

export default function Summary({ location }) {
  const { state = {} } = location
  const {
    sumTickets,
    spende,
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
    helferBefore,
    helferWhile,
    helferAfter,
  } = state

  // const [ticketType, setTicketType] = useState("")
  const [products, setProducts] = useState([])
  const festivalTicket = "Ja"
  const [autoTicket, setAutoTicket] = useState("Nein")
  const [camperTicket, setCamperTicket] = useState("Nein")
  const [helfer, setHelfer] = useState("")

  // Audience Count
  const audienceCount = useAudienceCount()
  console.log("hook count: " + audienceCount)
  const audienceLimit = 230

  // Unique ID
  const userID = uniqid()
  console.log("User ID" + userID)

  // POST TO — AIRTABLE
  const submit = e => {
    e.preventDefault()

    if (audienceCount < audienceLimit) {
      addToMailchimp(email, {
        ID: userID,
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
        SPENDE: spende,
        BEFORE: helferBefore,
        WHILE: helferWhile,
        AFTER: helferAfter,
      })
        .then(({ msg, result }) => {
          console.log("msg", `${result}: ${msg}`)

          if (result !== "success") {
            throw msg
          }
          // alert(msg)
          table
            .create([
              {
                fields: {
                  ID: userID,
                  Festival: festivalTicket,
                  Auto: autoTicket,
                  Camper: camperTicket,
                  Spende: spende,
                  Aufbau: helferBefore,
                  Waehrend: helferWhile,
                  Abbau: helferAfter,
                },
              },
            ])
            .then(() => {
              navigate("/submitted")
            })
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
    } else {
      navigate("/voll")
    }
  }

  useEffect(() => {
    setProducts([])
    // Helfer
    if (helferBefore && !helferWhile && !helferAfter) {
      setHelfer("Aufbau")
    } else if (helferBefore && helferWhile && !helferAfter) {
      setHelfer("Aufbau & Während des Festivals")
    } else if (helferBefore && helferWhile && helferAfter) {
      setHelfer("Aufbau, Während des Festivals & Abbau")
    } else if (!helferBefore && helferWhile && !helferAfter) {
      setHelfer("Während des Festivals")
    } else if (!helferBefore && helferWhile && helferAfter) {
      setHelfer("Während des Festivals & Abbau")
    } else if (!helferBefore && !helferWhile && helferAfter) {
      setHelfer("Abbau")
    } else if (helferBefore && !helferWhile && helferAfter) {
      setHelfer("Aufbau & Abbau")
    } else {
      setHelfer("Nein")
    }

    // Ticketsumme
    if (sumTickets === 75) {
      setProducts(products => [
        ...products,
        {
          ticket: "Festival Ticket 75 €*",
        },
      ])
    } else if (sumTickets === 80) {
      setProducts(products => [
        ...products,
        {
          ticket: "Festival Ticket 75 €*",
        },
        {
          ticket: "Auto Parkplatz 5 €",
        },
      ])
      setAutoTicket("Ja")
    } else if (sumTickets === 85) {
      setProducts(products => [
        ...products,
        {
          ticket: "Festival Ticket 75 €*",
        },
        {
          ticket: "Camper Stellplatz 10 €",
        },
      ])
      setCamperTicket("Ja")
    } else if (sumTickets === 90) {
      setProducts(products => [
        ...products,
        {
          ticket: "Festival Ticket 75 €*",
        },
        {
          ticket: "Auto Parkplatz 5 €",
        },
        {
          ticket: "Camper Stellplatz 10 €",
        },
      ])
      setAutoTicket("Ja")
      setCamperTicket("Nein")
    }
  }, [sumTickets])

  return (
    <Layout>
      <SEO title="Summary" />
      <ShopTitle info="Schritt 5/5" title="Schick ab das Ding" />
      <Container>
        <Wrapper>
          <form onSubmit={submit}>
            <Section>
              <Group>
                <Value>Dein(e) Ticket(s)</Value>
                <InfoGroup>
                  {products.map(product => (
                    <Info>{product.ticket}</Info>
                  ))}
                  <InfoSmall>
                    *10 € Probemitgliedschaft, 5 € Spende, 60 € Unkosten
                  </InfoSmall>
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
                <Value>E-Mail</Value>
                <Info>{email}</Info>
              </Group>
              <Group>
                <Value>Telefonnummer</Value>
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
                <Info>{datenspeicherung ? "Passt" : "Nein"}</Info>
              </Group>
              <Group>
                <Value>Vereinsbeitritt</Value>
                <Info>
                  {vereinsbeitritt
                    ? "Probemitgliedschaft ab 1. Juli 2021 für 90 Tage, endet automatisch"
                    : "Nein"}
                </Info>
              </Group>
              <Group>
                <Value>Newsletter</Value>
                <Info>{newsletter ? "Ja" : "Nein"}</Info>
              </Group>
            </Section>
            <Section>
              <Group>
                <Value>Helfer</Value>
                <Info>{helfer}</Info>
              </Group>
            </Section>
            <Section>
              <Group>
                <Value>Überweisungsdaten</Value>
                <Info>Erhältst du in der Bestätigungsmail</Info>
              </Group>
            </Section>
            <Section>
              <Group>
                <Value>Info</Value>
                <Info>
                  Der Betrag muss innerhalb von 7 Tagen bei uns einegegangen
                  sein, ansonsten verfällt die Reservierung. Die
                  Überweisungsdaten erhältst du zusätzlich in einer Mail,
                  nachdem du auf den folgenden Button geklickt hast.
                </Info>
              </Group>
            </Section>
            <Section>
              <Group>
                <Value>Rückzahlungs Disclaimer</Value>
                <Info>
                  Sollte unser Festival nicht stattfinden können, wirst du
                  zwischen einer Teilrückzahlung und einem Übertrag deines
                  Tickets auf das Jahr 2022 wählen können.
                </Info>
              </Group>
            </Section>
            <ButtonGroup>
              <ButtonWrapper>
                <FormButton
                  typ="submit"
                  label="Daten abschicken und Ticket(s) reservieren"
                ></FormButton>
              </ButtonWrapper>
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
  padding: 10px 20px 200px 20px;
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

const InfoSmall = styled.h4`
  margin-top: 10px;
  color: white;
  opacity: 0.5;
  font-size: 0.8rem;
`

const ButtonGroup = styled.div`
  display: grid;
  justify-content: center;
  /* margin-top: 80px; */

  padding: 40px 40px;
`

const ButtonWrapper = styled.div`
  max-width: 500px;
`

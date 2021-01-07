import React, { useEffect, useState } from "react"
import styled from "styled-components"
import FormButton from "../components/buttons/FormButton"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ShopTitle from "../components/shopping/ShopTitle"
import { navigate } from "gatsby"
import addToMailchimp from "gatsby-plugin-mailchimp"

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
        process.env.REACT_APP_MAILCHIMP_API_NEWSLETTER
      )
    }
  }

  useEffect(() => {
    if (sumTickets === 70) {
      setTicketType(
        "1x Festivalticket fuer 70€. Das Ticket ist personalisiert auf dich"
      )
    } else if (sumTickets === 75) {
      setTicketType(
        "1x Festivalticket (70€) und 1x Autoparkplatz (5€) fuer insgesamt 75€. Die Tickets sind personalisiert auf dich"
      )
      setAutoTicket("ja")
    } else if (sumTickets === 80) {
      setTicketType(
        "1x Festivalticket (70€) und 1x Camperstellplatz (10€) fuer insgesamt 80€. Die Tickets sind personalisiert auf dich"
      )
      setCamperTicket("ja")
    } else if (sumTickets === 85) {
      setTicketType(
        "1x Festivalticket (70€), 1x Autoparkplatz (5€) und 1x Camperstellplatz (10€) fuer insagesamt 85€. Die Tickets sind personalisiert auf dich"
      )
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
              <Info>
                Du reservierst {ticketType}, {firstName} {lastName}, und werden
                per Post in die {streetHouseNumber} nach
                {postcode} {city} verschickt, sobald du ueberwiesen hast. Dafuer
                hast du 7 Tage Zeit, ansonsten verfaellt die Reservierung. Die
                Ueberweisungdaten und zukuenftig alle weiteren Infos zum
                Festival 2021 schicken wir an {email}.
              </Info>
              <Info>
                Du bist mit der Datenspeicherung einverstanden und weisst dass
                du fuer den Zeitraum des Festivals unserem Verein Bunte Platte
                e.V beitretest, aus dem du danach automatisch austretest.
              </Info>
              <Info>
                Wir senden dir{" "}
                {newsletter
                  ? "zusätzlich zu den alle paar Monate mal einen Newsletter, der dich an das Festival erinnert."
                  : "keinen Newsletter."}{" "}
              </Info>
            </Section>
            <FormButton typ="submit" label="Ticket(s) reservieren"></FormButton>
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
  background: white;
`

const Wrapper = styled.div`
  height: 800px;
  max-width: 800px;
`

const Section = styled.div`
  margin-bottom: 60px;
`

const Info = styled.p`
  margin-top: 10px;
`

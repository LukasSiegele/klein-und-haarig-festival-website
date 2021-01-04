import React, { useEffect, useState } from "react"
import styled from "styled-components"
import FormButton from "../components/buttons/FormButton"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ShopTitle from "../components/shopping/ShopTitle"
import { navigate } from "gatsby"
import addToMailchimp from "gatsby-plugin-mailchimp"

export default function Summary({ location }) {
  const [ticketType, setTicketType] = useState("")
  const [ticketPrice, setTicketPrice] = useState(0)
  const [festivalTicket, setFestivalTicket] = useState("ja")
  const [autoTicket, setAutoTicket] = useState("nein")
  const [camperTicket, setCamperTicket] = useState("nein")
  const [email, setEmail] = useState(location.state.email)
  const [newsletterText, setNewsletterText] = useState(
    location.state.newsletter
  )

  // POST TO — AIRTABLE
  const submit = e => {
    e.preventDefault()
    const postcodeInt = parseInt(location.state.postcode, 10)

    addToMailchimp(email, {
      FNAME: location.state.firstName,
      LNAME: location.state.lastName,
      PHONE: location.state.phone,
      STREETNUMB: location.state.streetHouseNumber,
      POSTCODE: location.state.postcode,
      CITY: location.state.city,
      DATASAVE: location.state.datenspeicherung,
      VEREIN: location.state.vereinsbeitritt,
      NEWSLETTER: location.state.newsletter,
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

    if (newsletterText) {
      addToMailchimp(
        email,
        {
          FNAME: location.state.firstName,
          LNAME: location.state.lastName,
        },
        process.env.GATSBY_MAILCHIMP_API_NEWSLETTER
      )
    }
  }

  useEffect(() => {
    setTicketPrice(location.state.sumTickets)
    if (ticketPrice === 70) {
      setTicketType(
        "1x Festivalticket fuer 70€. Das Ticket ist personalisiert auf dich"
      )
    } else if (ticketPrice === 75) {
      setTicketType(
        "1x Festivalticket (70€) und 1x Autoparkplatz (5€) fuer insgesamt 75€. Die Tickets sind personalisiert auf dich"
      )
      setAutoTicket("ja")
    } else if (ticketPrice === 80) {
      setTicketType(
        "1x Festivalticket (70€) und 1x Camperstellplatz (10€) fuer insgesamt 80€. Die Tickets sind personalisiert auf dich"
      )
      setCamperTicket("ja")
    } else if (ticketPrice === 85) {
      setTicketType(
        "1x Festivalticket (70€), 1x Autoparkplatz (5€) und 1x Camperstellplatz (10€) fuer insagesamt 85€. Die Tickets sind personalisiert auf dich"
      )
      setAutoTicket("ja")
      setCamperTicket("nein")
    }
  }, [ticketPrice])

  return (
    <Layout>
      <SEO title="Summary" />
      <ShopTitle info="Schritt 3/3" title="Schick ab datt Ding" />
      <Container>
        <Wrapper>
          <form onSubmit={submit}>
            <Section>
              <Info>
                Du reservierst {ticketType}, {location.state.firstName}{" "}
                {location.state.lastName}, und werden per Post in die{" "}
                {location.state.street} {location.state.houseNumber} nach
                {location.state.postCode} {location.state.city} verschickt,
                sobald du ueberwiesen hast. Dafuer hast du 7 Tage Zeit,
                ansonsten verfaellt die Reservierung. Die Ueberweisungdaten und
                zukuenftig alle weiteren Infos zum Festival 2021 schicken wir an{" "}
                {location.state.email}.
              </Info>
              <Info>
                Du bist mit der Datenspeicherung einverstanden und weisst dass
                du fuer den Zeitraum des Festivals unserem Verein Bunte Platte
                e.V beitretest, aus dem du danach automatisch austretest.
              </Info>
              <Info>
                Wir senden dir{" "}
                {newsletterText
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
const SectionTitle = styled.h3``

const Info = styled.p`
  margin-top: 10px;
`

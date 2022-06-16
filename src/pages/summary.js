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

import SubmitButton from "/static/images/Submit-Button.jpg"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import PayPalButton from "../components/PayPalButton"
// test

import {
  Headline,
  SubheaderSmall,
  Note,
  TextSmall,
} from "../components/styles/TextStyles"
import { getTicketID } from "../helper/useTicketRequest"
import airtableLogError from "../helper/airtableLogError"

const base = new Airtable({
  apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
}).base(process.env.GATSBY_AIRTABLE_BASE)

const table = base("Teilnehmer 2022")

export default function Summary({ location }) {
  const paypalCLientID = process.env.GATSBY_PAYPAL_CLIENT_ID_SB
  const [orderID, setOrderID] = useState(false)
  const [ticketID, setTicketID] = useState(false)
  const [paypalDisabled, setPaypalDisabled] = useState(false)

  const { state = {} } = location
  const {
    sumTickets,
    firstName,
    lastName,
    email,
    phone,
    street,
    houseNumber,
    postcode,
    city,
    datenspeicherung,
    vereinsbeitritt,
    newsletter,
    helferBefore,
    helferWhile,
    helferAfter,
    helferSmall,
    helferMedium,
    helferLarge,
    helferEssen,
    helferBar,
    helferEinlass,
    helferSecuri,
    helferAwareness,
    helferKlo,
    helferTech,
    helferClean,
    helferSani,
    helferBuddy,
    helferEhrenamtlich,
    onlyFriends,
  } = state

  // const [ticketType, setTicketType] = useState("")
  const [products, setProducts] = useState([])
  const festivalTicket = "Ja"
  const [autoTicket, setAutoTicket] = useState("Nein")
  const [camperTicket, setCamperTicket] = useState("Nein")
  const [paymentPending, setPaymentPending] = useState(false)

  // Helfer
  const [helfer, setHelfer] = useState("")
  const helferArray = [
    { name: "Foodcourt", value: helferEssen },
    { name: "Bar", value: helferBar },
    { name: "Einlass", value: helferEinlass },

    { name: "Security", value: helferSecuri },

    { name: "Awareness", value: helferAwareness },
    { name: "Hygiene", value: helferKlo },
    { name: "Technik", value: helferTech },
    { name: "Entsorgung", value: helferClean },
    { name: "Sani", value: helferSani },
  ]
  const [whileCategories, setWhileCategories] = useState([])
  const [isWo, setIsWo] = useState(false)
  const [isHelferSection, setIsHelferSection] = useState(false)
  const [isDauer, setIsDauer] = useState()
  const [helferDauer, setHelferDauer] = useState()
  const [isHelperDetails, setIsHelperDetails] = useState()
  const [audienceCount, setAudienceCount] = useState(null)
  const [orderData, setOrderData] = useState(false)

  // Audience Count
  const hookAudienceCount = useAudienceCount()

  useEffect(() => {
    setAudienceCount(hookAudienceCount)
  })
  //console.log("hook count: " + audienceCount)
  const audienceLimit = 200
  console.log("audienceCount is", audienceCount)
  useEffect(() => {
    if (audienceCount > audienceLimit) {
      setPaypalDisabled(true)
    }
  }, [audienceCount, setPaypalDisabled, audienceLimit])

  // Unique ID
  const userID = uniqid()

  // POST TO — AIRTABLE
  const paypalClickHandler = () => {}

  const paypalSuccess = data => {
    setPaymentPending(true)
    setOrderData(data)
    airtableHandler(data)
  }

  const paypalError = err => {
    airtableLogError(null, err, email)
    navigate("/failed")
  }

  const airtableHandler = data => {
    table
      .create([
        {
          fields: {
            Vorname: firstName,
            Nachname: lastName,
            Email: email,

            Festival: festivalTicket === "Ja" ? true : false,
            Camper: camperTicket === "Ja" ? true : false,

            Aufbau: helferBefore,
            Waehrend: helferWhile,
            Abbau: helferAfter,
            Dauer: helferDauer,
            Food: helferEssen,
            Bar: helferBar,
            Einlass: helferEinlass,
            Security: helferSecuri,
            Awareness: helferAwareness,
            Hygiene: helferKlo,
            Technik: helferTech,
            Entsorgung: helferClean,
            Sani: helferSani,
            Buddy: helferBuddy,
            Ehrenamtlich: helferEhrenamtlich,
            Friend: onlyFriends ? true : false,
            OrderID: data.orderID,

            Tel: phone,
            Straße: street,
            HausNr: houseNumber,
            PLZ: parseInt(postcode),
            Stadt: city,
            Datenspeicherung: datenspeicherung,
            Vereinsbeitritt: vereinsbeitritt,
            Newsletter: newsletter,
          },
        },
      ])
      .catch(err => {
        console.log(err)
        airtableLogError(orderID, err, email)
      })
      .then(() => {
        setOrderID(data.orderID)
      })
  }

  useEffect(() => {
    const catchTicketID = async () => {
      const recTicketID = await getTicketID(orderID)

      setTicketID(recTicketID.substring(3, 17))
    }
    if (orderID) {
      try {
        catchTicketID(orderID)
      } catch (err) {
        console.log(err)
        airtableLogError(null, { orderData, err }, email)
      }
    }
  }, [orderID, setTicketID])

  useEffect(() => {
    if (ticketID) {
      mailChimpSubmission()
    }
  }, [ticketID])

  const mailChimpSubmission = () => {
    addToMailchimp(email, {
      TICKETID: ticketID,
      // UID: userID,
      FNAME: firstName,
      LNAME: lastName,
      PHONE: phone,
      STREET: street,
      HOUSENUMB: houseNumber,
      POSTCODE: postcode,
      CITY: city,
      DATASAVE: datenspeicherung,
      VEREIN: vereinsbeitritt,
      NEWSLETTER: newsletter,
      TFESTIVAL: festivalTicket,

      TCAMPER: camperTicket,
      BEFORE: helferBefore,
      WHILE: helferWhile,
      AFTER: helferAfter,
      DAUER: helferDauer,
      ESSEN: helferEssen,
      BAR: helferBar,
      EINLASS: helferEinlass,
      SECURI: helferSecuri,
      AWARE: helferAwareness,
      KLO: helferKlo,
      TECH: helferTech,
      CLEAN: helferClean,
      SANI: helferSani,
      BUDDY: helferBuddy,
      EHREN: helferEhrenamtlich,
      FRIENDS: onlyFriends,
    })
      .then(({ msg, result }) => {
        if (result !== "success") {
          airtableLogError(ticketID, { orderData, msg }, email)
          navigate("/failed", {
            state: {
              ticketID: ticketID,
            },
          })
          throw msg
        }

        navigate("/submitted")
        // alert(msg)
        navigate("/submitted")
      })
      .catch(err => {
        airtableLogError(ticketID, { orderData, err }, email)
        navigate("/failed", {
          state: {
            ticketID: ticketID,
          },
        })
        console.log(err)
        // alert(
        //   "Du hast du Probleme ein Ticket zu buchen? Bitte versuche es noch einmal in einem privaten Tab oder in einem anderen Browser, ohne dabei über die Browsernavigation vor oder zurück zu springen. Pro E-Mail-Adresse kann nur ein Ticket erworben werden."
        // )
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

  // Scan Präferenzen für Währenddessen Helfer Array for true
  useEffect(() => {
    helferArray
      .filter(item => item.value === true)
      .map(filteredHelfer =>
        // console.log("True Helfers: " + filteredHelfer.name)
        {
          setWhileCategories(whileCategories => [
            ...whileCategories,
            filteredHelfer.name,
          ])
        }
      )
  }, [])

  // Helfer Länge
  useEffect(() => {
    if (helferLarge) {
      setHelferDauer("L")
      return setIsDauer("L (3x 6 h)")
      console.log("Dauer: " + isDauer)
    }
    if (helferMedium) {
      setHelferDauer("M")
      return setIsDauer("M (2x 6 h)")
      console.log("Dauer: " + isDauer)
    }
    if (helferSmall) {
      setHelferDauer("S")
      return setIsDauer("S (1x 6 h)")
      console.log("Dauer: " + isDauer)
    } else {
      setHelferDauer("-")
      return setIsDauer("Egal")
    }
  }, [])

  useEffect(() => {
    // Scan Helfer Array for true
    if (helferBefore || helferWhile || helferAfter) {
      return setIsHelferSection(true)
    } else {
      setIsHelferSection(false)
    }
  }, [])

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
    if (sumTickets === 103) {
      setProducts(products => [
        ...products,
        {
          ticket: "Festival Ticket 103 €*",
        },
      ])
    } else if (sumTickets === 123) {
      setProducts(products => [
        ...products,
        {
          ticket: "Festival Ticket 103 €*",
        },
        {
          ticket: "Camper Stellplatz 20 €",
        },
      ])
      setCamperTicket("Ja")
    }
  }, [sumTickets])

  return (
    <Layout>
      <SEO title="Summary" />
      <ShopTitle info="Schritt 4/4" title="Zusammenfassung & Bezahlen" />
      <Container>
        {paymentPending ? (
          <h1>Ticket wird erstellt - bitte bleib auf der Seite!</h1>
        ) : (
          <Wrapper>
            <form>
              {/*onSubmit={submit}*/}
              <Section>
                <Group>
                  <Value>Dein(e) Ticket(s)</Value>
                  <InfoGroup>
                    {products.map(product => (
                      <Info>{product.ticket}</Info>
                    ))}
                    <InfoSmall>
                      *10 € Probemitgliedschaft, 90 € Unkosten, 3 € Paypal
                      Servicegebühr
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
                    {street} {houseNumber}, {postcode}, {city}
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
                      ? "Probemitgliedschaft ab 1. Juli 2022 für 90 Tage, endet automatisch"
                      : "Nein"}
                  </Info>
                </Group>
                <Group>
                  <Value>Newsletter</Value>
                  <Info>{newsletter ? "Ja" : "Nein"}</Info>
                </Group>
              </Section>
              <Helfer>
                <Section>
                  <Group>
                    <Value>Helfer</Value>
                    <Info>{helfer}</Info>
                  </Group>
                  <HelferDetail isHelperDetails={isHelferSection}>
                    <Group>
                      <Value>Dauer</Value>
                      <Info>{isDauer}</Info>
                    </Group>
                    <Wo isWo={helferWhile}>
                      <Group>
                        <Value>Präferenz während</Value>
                        <Info>
                          {whileCategories.length >= 1
                            ? whileCategories.join(", ")
                            : "-"}
                        </Info>
                      </Group>
                    </Wo>
                    <Group>
                      <Value>Helferbuddy</Value>
                      <Info>{helferBuddy == "" ? "-" : helferBuddy}</Info>
                    </Group>
                    <Group>
                      <Value>Ehrenamtlich</Value>
                      <Info>{helferEhrenamtlich ? "Ja" : "Nein"}</Info>
                    </Group>
                  </HelferDetail>
                </Section>
              </Helfer>
              <Section>
                <Group>
                  <Value>Erstattung</Value>
                  <Info>
                    Sollte das Festival nicht stattfinden können, wirst du
                    zwischen einem Übertrag deines Tickets auf das nächste Jahr
                    und einer Teilrückzahlung wählen können. Bitte habe
                    Verständnis, dass wir Servicegebühren und anfallende
                    Fixkosten nicht erstatten können.
                  </Info>
                </Group>
              </Section>
              <Section>
                <Group>
                  <Value>Corona</Value>
                  <Info>
                    Je nach Corona-Maßnahmen im Juli müssen wir einen Test- oder
                    Immunitätsnachweis für die Teilnahme voraussetzen. Dies
                    werden wir rechtzeitig kommunizieren.
                  </Info>
                </Group>
              </Section>
              <Section>
                <Seperator />
                <Group>
                  <Value>Bezahlen</Value>
                  <PayPalGroup>
                    <PayPalScriptProvider
                      options={{
                        "client-id": paypalCLientID,
                        // components: "buttons",
                        currency: "EUR",
                      }}
                    >
                      <PayPalButton
                        // currency={currency}
                        disabled={paypalDisabled}
                        showSpinner={false}
                        amount={sumTickets}
                        currency={"EUR"}
                        onSuccess={paypalSuccess}
                        onError={paypalError}
                        onClick={paypalClickHandler}
                      />
                    </PayPalScriptProvider>
                  </PayPalGroup>
                </Group>
              </Section>
              {/* <PayPalButtons style={{ layout: "horizontal" }} /> */}
            </form>
          </Wrapper>
        )}
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
  max-width: 1000px;
  /* padding: 10px 20px 200px 20px; */
  padding: 60px 40px;
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`

const Section = styled.div`
  margin-bottom: 40px;
`

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
  padding-right: 120px;
  @media (max-width: 1100px) {
    padding-right: 60px;
  }
  @media (max-width: 768px) {
    gap: 0px;
    grid-template-columns: 1fr;
    margin-bottom: 15px;
    padding-right: 0px;
  }
`

const HelferDetail = styled.div`
  display: ${props => (props.isHelperDetails ? "grid" : "none")};
`

const Value = styled(SubheaderSmall)`
  /* color: rgba(255, 255, 255, 0.5); */
  margin-top: 10px;
  justify-self: right;
  @media (max-width: 768px) {
    justify-self: left;
  }
`

const InfoGroup = styled.div``

const Info = styled(Note)`
  /* color: white; */
  margin-top: 13px;
  @media (max-width: 768px) {
    margin-top: 4px;
  }
`

const InfoSmall = styled(Note)`
  margin-top: 10px;
  /* color: white; */
  opacity: 0.5;
  font-size: 0.8rem;
`

const ButtonGroup = styled.div`
  display: grid;
  justify-content: center;
  /* margin-top: 80px; */
  padding: 40px 40px;

  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`

const PayPalGroup = styled.div`
  margin-top: 15px;
`

// Helfer
const Helfer = styled.div`
  /* display: ${props => (props.helferSection ? "grid" : "none")}; */
`

const Wo = styled.div`
  display: ${props => (props.isWo ? "grid" : "none")};
`

const Seperator = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 60px 0;
  width: 100%;
  @media (max-width: 768px) {
    margin: 30px 0;
  }
`

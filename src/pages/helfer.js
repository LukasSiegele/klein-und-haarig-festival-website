import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ShopTitle from "../components/shopping/ShopTitle"
import FormButton from "../components/buttons/FormButton"
import { navigate } from "gatsby"

import { Headline, SubheaderSmall, Note } from "../components/styles/TextStyles"

export default function Helfer({ location }) {
  const { state = {} } = location
  const {
    sumTickets,
    onlyFriends,
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
  } = state

  const [nextPage, setNextPage] = useState("/summary")
  const [hBefore, setHBefore] = useState(false)
  const [hWhile, setHWhile] = useState(false)
  const [hAfter, setHAfter] = useState(false)
  const [buttonLabel, setButtonLabel] = useState("Überspringen")
  const [isWaehrend, setIsWaehrend] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    navigate(nextPage, {
      state: {
        sumTickets: sumTickets,
        onlyFriends: onlyFriends,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        street: street,
        houseNumber: houseNumber,
        postcode: postcode,
        city: city,
        vereinsbeitritt: vereinsbeitritt,
        datenspeicherung: datenspeicherung,
        newsletter: newsletter,
        helferBefore: hBefore,
        helferWhile: hWhile,
        helferAfter: hAfter,
      },
    })
  }

  // Weiter / Überspringen Button
  useEffect(() => {
    if (hBefore === true || hWhile === true || hAfter === true) {
      return setButtonLabel("Weiter")
    } else {
      return setButtonLabel("Überspringen")
    }
  }, [hBefore, hWhile, hAfter])

  // Checken ob ein Haken gesetzt ist, wenn ja -> Helfer Detailseite
  useEffect(() => {
    if (hBefore || hWhile || hAfter) {
      return setNextPage("/helferDetail")
    } else {
      return setNextPage("/summary")
    }
  }, [hBefore, hWhile, hAfter])

  return (
    <Layout>
      <SEO title="Helfer" />
      <ShopTitle info="Schritt 3/4" title="Wir suchen Helfer!" />
      <Container>
        <Wrapper>
          <Left>
            <Header>Wie läuft das ab, wenn ich helfen will?</Header>
            <HelperDescription>
              <ol>
                <li> Wähle eine oder mehrer Kategorien aus</li>
                <li>Zahle ganz normal dein Ticket</li>
                <li>Wir kommen auf dich zu und klären alles weitere ab</li>
                <li>Anschließend werden dich einem Team zuteilen.</li>
                <li>
                  Nach erledigter Schicht bekommst du deinen Anteil erstattet.
                  Da wir aus dem Festival keinen Provit schlagen und ein Verein
                  sind freuen wir uns natürlich über jeden ehrenamtlichen
                  Helfer. :)
                </li>
              </ol>
            </HelperDescription>
          </Left>
          <Right>
            {" "}
            <form onSubmit={handleSubmit}>
              <Label htmlFor="aufbau">Aufbau</Label>
              <CheckboxGroup>
                <label class="b-contain">
                  <input
                    className="checkBox"
                    type="checkbox"
                    name="aufbau"
                    checked={hBefore}
                    onChange={e => {
                      setHBefore(e.target.checked)
                    }}
                  />
                  <div className="b-input"></div>
                </label>
                <CheckboxDecription>
                  Wenn du einen Akkuschrauber halten kannst bist du schonmal
                  qualifiziert. Aber auch kreative Köpfe werden gebraucht.
                </CheckboxDecription>
              </CheckboxGroup>
              <br />
              <Label htmlFor="waehrend">Während des Festivals</Label>
              <CheckboxGroup>
                <label class="b-contain">
                  <input
                    className="checkBox"
                    type="checkbox"
                    name="waehrend"
                    checked={hWhile}
                    onChange={e => {
                      setHWhile(e.target.checked)
                    }}
                  />
                  <div className="b-input"></div>
                </label>
                <CheckboxDecription>
                  Übernimm zusammen mit deinem Bestie eine Schicht an der Bar
                  oder kümmer dich um die vielen hungrigen Mäuler.
                </CheckboxDecription>
              </CheckboxGroup>
              <br />
              <Label htmlFor="abbau">Abbau</Label>
              <CheckboxGroup>
                <label class="b-contain">
                  <input
                    className="checkBox"
                    type="checkbox"
                    name="abbau"
                    checked={hAfter}
                    onChange={e => {
                      setHAfter(e.target.checked)
                    }}
                  />
                  <div className="b-input"></div>
                </label>
                <CheckboxDecription>
                  Nur etwas für Hartgesottene, die nach drei Tagen Festival noch
                  ordentlich mit anpacken können.
                </CheckboxDecription>
              </CheckboxGroup>
              <WeiterWrapper>
                <FormButton typ="submit" label={buttonLabel} />
              </WeiterWrapper>
            </form>
          </Right>
        </Wrapper>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`

const Wrapper = styled.div`
  padding: 120px 40px;
  display: grid;
  grid-template-columns: 1.333fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    padding: 60px 20px;
    grid-template-columns: 1fr;
  }
`

const Left = styled.div`
  max-width: 500px;
`
const Right = styled.div`
  max-width: 500px;
`

const Header = styled(Headline)``

const HelperDescription = styled.h5`
  color: white;
  margin-top: 40px;
`

const Label = styled(SubheaderSmall)`
  /* color: white; */
  margin-top: 20px;
  display: inline-block;
`

const Seperator = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 40px 0 20px 0;
  width: 100%;
`

const WeiterWrapper = styled.div`
  margin-top: 80px;
`

const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: 42px auto;
  gap: 20px;
  padding-top: 15px;
`

const CheckboxDecription = styled(Note)``

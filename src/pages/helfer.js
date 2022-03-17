import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ShopTitle from "../components/shopping/ShopTitle"
import FormButton from "../components/buttons/FormButton"
import { navigate } from "gatsby"

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

  const [hBefore, setHBefore] = useState(false)
  const [hWhile, setHWhile] = useState(false)
  const [hAfter, setHAfter] = useState(false)
  const [buttonLabel, setButtonLabel] = useState("Überspringen")

  const handleSubmit = e => {
    e.preventDefault()
    navigate("/summary", {
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

  useEffect(() => {
    if (hBefore === true || hWhile === true || hAfter === true) {
      return setButtonLabel("Zur Übersicht")
    } else {
      return setButtonLabel("Überspringen")
    }
  }, [hBefore, hWhile, hAfter])

  return (
    <Layout>
      <SEO title="Helfer" />
      <ShopTitle info="Schritt 3/4" title="Wir suchen Helfer!" />
      <Container>
        <Wrapper>
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
                Übernimm zusammen mit deinem Bestie eine Schicht an der Bar oder
                kümmer dich um die vielen hungrigen Mäuler.
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
  max-width: 500px;
  margin: 0 0 160px;
  padding: 0 40px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

const Label = styled.h4`
  color: white;
  margin-top: 20px;
  display: inline-block;
`

const Seperator = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.15);
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

const CheckboxDecription = styled.h4`
  color: rgba(255, 255, 255, 0.5);
`

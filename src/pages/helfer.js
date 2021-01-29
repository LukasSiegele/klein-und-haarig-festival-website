import React, { useState } from "react"
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
  } = state

  const [hBefore, setHBefore] = useState(false)
  const [hWhile, setHWhile] = useState(false)
  const [hAfter, setHAfter] = useState(false)
  const [hNone, setNone] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    navigate("/summary", {
      state: {
        sumTickets: sumTickets,
        spende: spende,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        streetHouseNumber: streetHouseNumber,
        postcode: postcode,
        city: city,
        vereinsbeitritt: vereinsbeitritt,
        datenspeicherung: datenspeicherung,
        newsletter: newsletter,
      },
    })
  }

  return (
    <Layout>
      <SEO title="Helfer" />
      <ShopTitle info="Schritt 4/5" title="Wir suchen Helfer!" />
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
                qualifiziert. Aber auch kreative Köpfe die Schilder malen,
                Kerzen gießen und vieles mehr sind gesucht.
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
                Schmeiß die Bar mit deinem Bestie für 2h oder stopf die
                hungrigen Mäuler am Essensstand.
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
                Nur etwas für die hartgesottenen Raver:innen, die nach 3 Tagen
                Festival noch mit anpacken können. Euch gebührt der größte Ruhm.
              </CheckboxDecription>
            </CheckboxGroup>
            <WeiterWrapper>
              <FormButton typ="submit" label="Zur Übersicht" />
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

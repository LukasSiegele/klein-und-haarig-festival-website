import React, { useState } from "react"
import styled from "styled-components"
import FormButton from "../buttons/FormButton"
import { navigate } from "gatsby"

export default function Form(props) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [streetHouseNumber, setStreetHouseNumber] = useState("")
  const [postcode, setPostcode] = useState()
  const [city, setCity] = useState("")
  const [vereinsbeitritt, setVereinsbeitritt] = useState(false)
  const [datenspeicherung, setDatenspeicherung] = useState(false)
  const [newsletter, setNewsletter] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    navigate("/summary", {
      state: {
        sumTickets: props.sumTickets,
        spende: props.spende,
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
    <Container>
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="firstName">Vorname</Label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            required
            onChange={e => setFirstName(e.target.value)}
          />{" "}
          <br />
          <Label htmlFor="lastName">Nachname</Label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            required
            onChange={e => setLastName(e.target.value)}
          />{" "}
          <Label htmlFor="email">Email</Label>
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />{" "}
          <Label htmlFor="phone">Mobilfunknummer (optional)</Label>
          <input
            type="tel"
            name="phone"
            value={phone}
            optional
            onChange={e => setPhone(e.target.value)}
          />{" "}
          <Seperator />
          <Label htmlFor="streetHouseNumber">Strasse, Hausnummer</Label>
          <input
            type="text"
            name="streetHouseNumber"
            value={streetHouseNumber}
            required
            onChange={e => setStreetHouseNumber(e.target.value)}
          />{" "}
          <Label htmlFor="postcode">Postleitzahl</Label>
          <input
            type="number"
            name="postcode"
            value={postcode}
            required
            onChange={e => setPostcode(e.target.value)}
          />{" "}
          <Label htmlFor="city">Wohnort</Label>
          <input
            type="text"
            name="city"
            value={city}
            required
            onChange={e => setCity(e.target.value)}
          />{" "}
          <Seperator />
          <Label htmlFor="vereinsbeitritt">Vereinsbeitritt</Label>
          <CheckboxGroup>
            <label class="b-contain">
              <input
                className="checkBox"
                type="checkbox"
                name="vereinsbeitritt"
                required
                checked={vereinsbeitritt}
                onChange={e => {
                  setVereinsbeitritt(e.target.checked)
                }}
              />
              <div className="b-input"></div>
            </label>
            <CheckboxDecription>
              Mit dem Ticketkauf trittst du unserem Verein Bunte Platte e.V. für
              die Dauer des Festivals bei. Dadurch können wir eine
              vereinsinterne Veranstaltung machen mit weniger Auflagen. Nach dem
              Festival trittst du automatisch aus.
            </CheckboxDecription>
          </CheckboxGroup>
          <br />
          <Label htmlFor="datenspeicherung">Datenspeicherung</Label>
          <CheckboxGroup>
            <label class="b-contain">
              <input
                className="checkBox"
                type="checkbox"
                name="datenspeicherung"
                required
                checked={datenspeicherung}
                onChange={e => {
                  setDatenspeicherung(e.target.checked)
                }}
              />
              <div className="b-input"></div>
            </label>
            <CheckboxDecription>
              Wir speichern deine Daten bis 3 Monate nach dem Festival, danach
              werden sie gelöscht.
            </CheckboxDecription>
          </CheckboxGroup>
          <br />
          <Label htmlFor="newsletter">Newsletter (optional)</Label>
          <CheckboxGroup>
            <label class="b-contain">
              <input
                className="checkBox"
                type="checkbox"
                name="newsletter"
                optional
                checked={newsletter}
                onChange={e => {
                  setNewsletter(e.target.checked)
                }}
              />
              <div className="b-input"></div>
            </label>
            <CheckboxDecription>
              Alle Infos zum Festival 2021 bekommst du auch ohne Newsletter. Als
              Erinnerung für nächstes Jahr aber sehr zu empfehlen.
            </CheckboxDecription>
          </CheckboxGroup>
          <WeiterWrapper>
            <FormButton typ="submit" label="Weiter" />
          </WeiterWrapper>
        </form>
      </Wrapper>
    </Container>
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
  opacity: 0.4;
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

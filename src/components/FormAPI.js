import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Airtable from "airtable"
import "./Form.css"

const Container = styled.div`
  padding: 50px;
  background-color: white;
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
`

const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base("appTiA4sk98aXslsO")

const table = base("Teilnehmer 2021")

const TicketFormularAPI = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [street, setStreet] = useState("")
  const [houseNumber, setHouseNumber] = useState()
  const [postcode, setPostcode] = useState()
  const [city, setCity] = useState("")
  const [vereinsbeitritt, setVereinsbeitritt] = useState(false)
  const [datenspeicherung, setDatenspeicherung] = useState(false)
  const [newsletter, setNewsletter] = useState(false)

  const [isSent, setIsSent] = useState(false)

  const submit = e => {
    e.preventDefault()
    const houseNumberInt = parseInt(houseNumber, 10)
    const postcodeInt = parseInt(postcode, 10)
    table
      .create([
        {
          fields: {
            Vorname: firstName,
            Nachname: lastName,
            Email: email,
            Straße: street,
            Hausnummer: houseNumberInt,
            Postleitzahl: postcodeInt,
            Ort: city,
            Phone: phone,
            Vereinsbeitritt: vereinsbeitritt,
            Datenspeicherung: datenspeicherung,
            Newsletter: newsletter,
          },
        },
      ])
      .then(() => setIsSent(true))
      .catch(() => alert("There was an error, please try again"))
  }

  const thankYou = (
    <div className="thankYouMessage">
      <h2>Wouhuu!🥳</h2>
      <p>Deine Daten wurden erfolgreich gespeichert.</p>
      <p>
        Wir haben dir die Überweisungsdaten an deine Mail Adresse geschickt. Das
        kann einige Minuten dauern. Falls keine Mail im Posteingang liegt,
        checke erst deinen Spam Ordner und melde dich falls sie nicht auffindbar
        ist einfach bei uns via ticket@kleinundhaarig.com.
      </p>
      <p> Wir freuen uns schon auf dich,</p>
      <p>dein Klein und Haarig Team</p>
    </div>
  )

  const form = (
    <form onSubmit={submit}>
      <h2>Ticket kaufen</h2>
      <label htmlFor="firstName">Vorname</label>
      <input
        type="text"
        name="firstName"
        value={firstName}
        required
        onChange={e => setFirstName(e.target.value)}
      />{" "}
      <label htmlFor="lastName">Nachname</label>
      <input
        type="text"
        name="lastName"
        value={lastName}
        required
        onChange={e => setLastName(e.target.value)}
      />{" "}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={email}
        required
        onChange={e => setEmail(e.target.value)}
      />{" "}
      <label htmlFor="phone">Mobilfunknummer (optional)</label>
      <input
        type="tel"
        name="phone"
        value={phone}
        optional
        onChange={e => setPhone(e.target.value)}
      />{" "}
      <label htmlFor="street">Strasse</label>
      <input
        type="text"
        name="street"
        value={street}
        required
        onChange={e => setStreet(e.target.value)}
      />{" "}
      <label htmlFor="houseNumber">Hausnummer</label>
      <input
        type="number"
        name="houseNumber"
        value={houseNumber}
        required
        onChange={e => setHouseNumber(e.target.value)}
      />{" "}
      <label htmlFor="postcode">Postleitzahl</label>
      <input
        type="number"
        name="postcode"
        value={postcode}
        required
        onChange={e => setPostcode(e.target.value)}
      />{" "}
      <label htmlFor="city">Wohnort</label>
      <input
        type="text"
        name="city"
        value={city}
        required
        onChange={e => setCity(e.target.value)}
      />{" "}
      <label htmlFor="vereinsbeitritt">Vereinsbeitritt</label> <br />
      <input
        className="checkBox"
        type="checkbox"
        name="vereinsbeitritt"
        required
        checked={vereinsbeitritt}
        onChange={e => {
          setVereinsbeitritt(e.target.checked)
        }}
      />{" "}
      <span className="customCheckbox"></span>
      <br />
      <label htmlFor="datenspeicherung">Datenspeicherung</label> <br />
      <input
        className="checkBox"
        type="checkbox"
        name="datenspeicherung"
        required
        checked={datenspeicherung}
        onChange={e => {
          setDatenspeicherung(e.target.checked)
        }}
      />{" "}
      <span className="customCheckbox"></span>
      <br />
      <label htmlFor="newsletter">Newsletter (optional)</label> <br />
      <input
        className="checkBox"
        type="checkbox"
        name="newsletter"
        optional
        checked={newsletter}
        onChange={e => {
          setNewsletter(e.target.checked)
        }}
      />{" "}
      <span className="customCheckbox"></span>
      <br />
      <br />
      <button type="submit">Ticket kaufen</button>
    </form>
  )

  return <Container>{isSent ? thankYou : form}</Container>
}

export default TicketFormularAPI

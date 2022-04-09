import React, { useState, useEffect } from "react"
import styled from "styled-components"
import FormButton from "../buttons/FormButton"
import { navigate } from "gatsby"
import { SubheaderSmall, Note } from "../styles/TextStyles"

import emailUnused from "../../helper/emailUnused"

export default function Form(props) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [street, setStreet] = useState("")
  const [houseNumber, setHouseNumber] = useState("")
  const [postcode, setPostcode] = useState()
  const [city, setCity] = useState("")
  const [vereinsbeitritt, setVereinsbeitritt] = useState(false)
  // const [isEighteen, setIsEighteen] = useState(false)
  const [datenspeicherung, setDatenspeicherung] = useState(false)
  const [newsletter, setNewsletter] = useState(false)

  const [validation, setValidation] = useState(false);
  const [error, setError] = useState(false);

  console.log("Form props: ", props)
  
  const handleSubmit = e => {
    e.preventDefault()
    setValidation("pending");
  }

  


  useEffect(() => {


    console.log("validation effect triggered");

    const validateEmail = async () => {
      const result = await emailUnused(email);
      console.log("result =", result);
      setError(!result);
      setValidation(result);
    }

    if(validation === "pending"){
      try {
        validateEmail()
      } catch (err) {
        console.log(err)
      }
    }else if(validation){
      navigate("/helfer", {
        state: {
          sumTickets: props.sumTickets,
          onlyFriends: props.onlyFriends,
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
        },
      })
    }
  }, [email, validation, setValidation])

  return (
    <Container>
      <Wrapper>
        <Label>Info</Label>
        <InfoText>
          Du bekommst dein Ticket per Post — bitte trage alle Daten korrekt ein.
        </InfoText>
        <Seperator />
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
          <Label htmlFor="email">E-Mail</Label>
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />{" "}
          <Label htmlFor="phone">Telefonnummer (optional)</Label>
          <input
            type="tel"
            name="phone"
            value={phone}
            optional
            onChange={e => setPhone(e.target.value)}
          />{" "}
          <Seperator />
          <Label htmlFor="street">Straße</Label>
          <input
            type="text"
            name="street"
            value={street}
            required
            onChange={e => setStreet(e.target.value)}
          />{" "}
          <Label htmlFor="houseNumber">Hausnummer</Label>
          <input
            type="text"
            name="houseNumber"
            value={houseNumber}
            required
            onChange={e => setHouseNumber(e.target.value)}
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
              Mit dem Kauf eines Tickets trittst du dem Bunte Platte e.V. zur
              Probe bei. Diese Probemitgliedschaft beginnt am 1. Juli 2022 und
              endet nach 90 Tagen automatisch. Du musst nichts weiter tun.
            </CheckboxDecription>
          </CheckboxGroup>
          <br />
          {/* <Label htmlFor="eighteen">18+</Label>
          <CheckboxGroup>
            <label class="b-contain">
              <input
                className="checkBox"
                type="checkbox"
                name="eighteen"
                required
                checked={isEighteen}
                onChange={e => {
                  setIsEighteen(e.target.checked)
                }}
              />
              <div className="b-input"></div>
            </label>
            <CheckboxDecription>Die</CheckboxDecription>
          </CheckboxGroup>
          <br /> */}
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
              Wir speichern deine Daten bis zu 1 Jahr nach dem Festival, danach
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
              Als Erinnerung für kommende Veranstaltungen sehr zu empfehlen.
            </CheckboxDecription>
          </CheckboxGroup>
          
          <WeiterWrapper>
            <FormButton typ="submit" label="Weiter ➞" />
            {error ? <ErrorMsg>Email is already used</ErrorMsg> : null}
          </WeiterWrapper>
          
        </form>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  background: black;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 0 200px;
  padding: 60px 40px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`

const Label = styled(SubheaderSmall)`
  color: white;
  margin-top: 20px;
  display: inline-block;
`

const ErrorMsg = styled(SubheaderSmall)`
  color: red;
  margin-top: 20px;
  display: inline-block;
`

const InfoText = styled(Note)`
  margin-top: 8px;
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

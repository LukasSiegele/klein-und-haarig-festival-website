import React, { useState } from "react"
import styled from "styled-components"
import addToMailchimp from "gatsby-plugin-mailchimp"
import FormButton from "../buttons/FormButton"
import { navigate } from "gatsby"

export default function Newsletter() {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")

  // POST TO MAILCHIMP
  const submit = e => {
    e.preventDefault()

    addToMailchimp(
      email,
      {
        FNAME: firstName,
      },
      process.env.GATSBY_MAILCHIMP_API_NEWSLETTER
    )
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`)

        if (result == "success") {
          navigate("/newsletterAnmeldungErfolgreich")
        } else {
          alert(
            "Wir konnten dich leider nicht zum Newsletter anmelden. Hast du dich mit dieser Mail Adresse vielleicht schon angemeldet? Falls nicht, schreib uns einfach unter info@kleinundhaarig.de und wir finden eine Lösung."
          )
        }
      })
      .catch(err => {
        alert(
          "Wir konnten dich leider nicht zum Newsletter anmelden. Hast du dich mit dieser Mail Adresse vielleicht schon angemeldet? Falls nicht, schreib uns einfach unter info@kleinundhaarig.de und wir finden eine Lösung."
        )
      })
  }

  return (
    <Wrapper>
      <form onSubmit={submit}>
        <ButtonInputGroup>
          <InputGroup>
            {/* <Label htmlFor="vorname">Vorname</Label> */}

            <input
              type="text"
              name="firstName"
              value={firstName}
              style={{ height: "51px" }}
              placeholder="Vorname"
              required
              onChange={e => setFirstName(e.target.value)}
            />

            <input
              type="email"
              name="email"
              value={email}
              style={{ height: "51px" }}
              placeholder="E-Mail"
              required
              onChange={e => setEmail(e.target.value)}
            />
          </InputGroup>

          <ButtonWrapper>
            <FormButton typ="submit" label="Anmelden" />
          </ButtonWrapper>
        </ButtonInputGroup>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* display: grid;
  grid-template-rows: auto; */
`

const NewsletterHeadline = styled.h3`
  color: white;
`

const InputGroup = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  margin-top: 10px;

  @media (max-width: 800px) {
    /* margin-top: -8px; */
    /* grid-template-columns: 1fr; */
  }
`

const ButtonInputGroup = styled.div`
  display: grid;
  grid-template-rows: auto;
`

const Label = styled.h4`
  color: white;
  /* margin-top: 20px; */
  display: inline-block;
`

const ButtonWrapper = styled.div`
  margin-top: 5px;
`

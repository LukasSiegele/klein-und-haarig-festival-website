import React, { useState } from "react"
import styled from "styled-components"
import addToMailchimp from "gatsby-plugin-mailchimp"
import SecondaryButton from "../buttons/SecondaryButton"
import FormButton from "../buttons/FormButton"

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
  }

  return (
    <Wrapper>
      <NewsletterHeadline>Weitere Infos bald im Newsletter</NewsletterHeadline>
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
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`

const ButtonInputGroup = styled.div`
  display: grid;
  grid-template-rows: auto;
`

const Label = styled.h4`
  color: white;
  margin-top: 20px;
  display: inline-block;
`

const ButtonWrapper = styled.div``

import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 400px;
  background-color: white;
`

const TicketFormular = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [isSent, setIsSent] = useState(false)

  const submit = e => {
    e.preventDefault()
    fetch(`https://hooks.zapier.com/hooks/catch/9140864/ocd0pcf/`, {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email }),
    })
      .then(() => setIsSent(true))
      .catch(() => alert("There was an error, please try again"))
  }

  const thankYouMessage = <p>Thank you for your input!</p>

  const form = (
    <form onSubmit={submit}>
      <label htmlFor="firstName">Vorname</label> <br />
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />{" "}
      <br />
      <label htmlFor="lastName">Nachname</label> <br />
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />{" "}
      <br />
      <label htmlFor="email">Email</label> <br />
      <input
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />{" "}
      <br />
      <br />
      <button type="submit">Ticket kaufen</button>
    </form>
  )

  return <Container>{isSent ? thankYouMessage : form}</Container>
}

export default TicketFormular

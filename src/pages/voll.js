import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import FormButton from "../components/buttons/FormButton"

export default function Voll() {
  return (
    <Container>
      <Wrapper>
        <MessageHeader>Ticketverkauf vorrübergehend pausiert</MessageHeader>
        <MessageText>
          Wir haben unser aktuelles Limit an Festivaltickets erreicht und den
          Ticketverkauf vorrübergehend pausiert. Gegebenenfalls wird der Verkauf
          wieder geöffnet. Wann genau erfährst du über unseren{" "}
          <InlineLink href="https://www.instagram.com/kleinundhaarig/">
            Instagram
          </InlineLink>{" "}
          Account.
        </MessageText>
        <MessageText>
          Du willst nachträglich ein Camperticket kaufen? Schreibt uns einfach
          per:{" "}
          <InlineLink href="mailto:info@kleinundhaarig.de">
            info@kleinundhaarig.de
          </InlineLink>
        </MessageText>

        <ButtonGroup>
          <Link to="/">
            <FormButton label="Zurück zur Startseite ➞"></FormButton>
          </Link>
        </ButtonGroup>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  padding: 200px 40px 100px 40px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;
  overflow: hidden;
  color: white;

  @media (max-width: 768px) {
    padding: 100px 0px 50px 0px;
  }
`

const Wrapper = styled.div`
  max-width: 1100px;
  align-self: center;
  text-align: center;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  padding: 0 40px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 20px;
  }
`

const MessageHeader = styled.h2`
  font-family: "GT-Alpina-Extended-Regular";
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`

const MessageText = styled.p`
  max-width: 700px;
  font-weight: 500;
  margin-bottom: 30px;
  color: white;
  opacity: 0.5;
`

const InlineLink = styled.a`
  color: white;
  padding-bottom: 1px;
  border-bottom: 1px solid rgba(255, 255, 255);
`

const ButtonGroup = styled.div`
  max-width: 400px;
  margin-top: 60px;
  @media (max-width: 768px) {
    width: auto;
  }
`

const Home = styled.a`
  margin-top: 100px;
  opacity: 0.5;
`

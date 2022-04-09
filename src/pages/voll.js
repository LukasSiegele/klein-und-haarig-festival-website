import React from "react"
import styled from "styled-components"

export default function Voll() {
  return (
    <Container>
      <Wrapper>
        <MessageHeader>Was Ticketverkauf pausiert bedeutet</MessageHeader>
        <MessageText>
          Wir haben aktuell unser Limit an Festivalticket Reservierungen
          erreicht und den Ticketverkauf vorrübergehend pausiert. Gegebenfalls
          wird der Verkauf wieder geöffnet, nähere Infos erhältst du auf unserem
          Instagram Account.
        </MessageText>
        <MessageText>
          Ihr wollt ein Camperticket nachträglich kaufen? Schreibt uns einfach
          per:
        </MessageText>
        <Kontakt href="mailto:info@kleinundhaarig.de">
          info@kleinundhaarig.de
        </Kontakt>
        <Home href="/">Zurück zur Startseite</Home>
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
`

const Kontakt = styled.a``

const Home = styled.a`
  margin-top: 100px;
  opacity: 0.5;
`

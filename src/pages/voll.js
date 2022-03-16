import React from "react"
import styled from "styled-components"

export default function Voll() {
  return (
    <Container>
      <Wrapper>
        <MessageHeader>
          Was <Liebe> Ticketverkauf pausiert </Liebe> bedeutet
        </MessageHeader>
        <MessageText>
          Wir haben aktuell unser Limit an Festivalticket-Reservierungen für
          dieses Jahr erreicht und den Ticketverkauf vorrübergehend pausiert.{" "}
          <br />
          Am 4. Juni um 17 Uhr wird der Verkauf nochmal geöffnet und alle bis
          dahin nicht bezahlten Reservierungen/Tickets zum Verkauf freigegeben.
        </MessageText>
        <MessageText>
          Ihr wollt ein Auto- oder Camperticket nachträglich kaufen? Schreibt
          uns einfach per:
        </MessageText>
        <Kontakt href="mailto:info@kleinundhaarig.de">
          info@kleinundhaarig.de
        </Kontakt>
        <Home href="/">Home</Home>
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

const Liebe = styled.span`
  font-family: "GT-Alpina-Extended-Regular";
`

const Kontakt = styled.a``

const Home = styled.a`
  margin-top: 200px;
  opacity: 0.5;
`

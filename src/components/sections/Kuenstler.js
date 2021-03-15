import React from "react"
import styled from "styled-components"

export default function Kuenstler() {
  return (
    <Container>
      <Wrapper>
        <MessageHeader>
          Eine Plattform für <Liebe>Nachwuchskuenstler.</Liebe>
        </MessageHeader>
        <MessageText>
          Ob Sound, Kunstinstallation, Performance oder Workshop — wenn du dich
          auf die eine oder andere Art und Weise einbringen willst, schreib uns
          einfach per:
        </MessageText>
        <InfoGroup>
          <div>
            <Kontakt href="mailto:booking@kleinundhaarig.de">
              booking@kleinundhaarig.de
            </Kontakt>
          </div>
          {/* <Oder>oder</Oder> */}
          <div>
            <Kontakt href="mailto:info@kleinundhaarig.de">
              info@kleinundhaarig.de
            </Kontakt>
          </div>
        </InfoGroup>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  padding: 0px 40px 350px 40px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;
  overflow: hidden;
  color: white;

  @media (max-width: 768px) {
    padding: 100px 0px 300px 0px;
  }
`

const Wrapper = styled.div`
  max-width: 1000px;
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
  margin-bottom: 15px;
`

const MessageText = styled.p`
  max-width: 700px;
  font-weight: 500;
  margin-bottom: 60px;
  color: white;
`

const Liebe = styled.span`
  font-family: "GT-Alpina-Fine-Light-Italic";
`

const InfoGroup = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  justify-items: center;
  gap: 15px;
`

const Kontakt = styled.a``

// const Oder = styled.p`
//   text-align: center;
//   opacity: 0.5;
// `

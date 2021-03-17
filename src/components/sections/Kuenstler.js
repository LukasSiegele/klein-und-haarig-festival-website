import React from "react"
import styled from "styled-components"

export default function Kuenstler() {
  return (
    <Container>
      <Wrapper>
        <MessageHeader>
          Eine Plattform für{" "}
          <Liebe>
            Nachwuchskuenstler:
            <Break />
            innen.
          </Liebe>
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
  font-family: "GT-Alpina-Fine-Light-Italic";
`

const Break = styled.span`
  @media (max-width: 700px) {
    display: block;
  }
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

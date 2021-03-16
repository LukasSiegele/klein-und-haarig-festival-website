import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function Footer() {
  return (
    <Wrapper>
      <Content>
        <WrapperLeft>
          <BuntePlatte>Bunte Platte e.V.</BuntePlatte>
          <Description>
            — Miteinander Vielfalt, Offenheit, Toleranz und Freiheit feiern.
            Diese Philosophie von Techno zu seiner Gründungszeit vereint uns und
            treibt uns an.
          </Description>
        </WrapperLeft>
        <WrapperRight>
          <Kontakt>
            <Text>
              <a href="mailto:info@kleinundhaarig.de">Kontakt</a>
            </Text>
          </Kontakt>
          <Imprint>
            <Text>
              <Link to="/imprint">Impressum</Link>
            </Text>
          </Imprint>
          <Datenschutz>
            <Text>
              <Link to="/privacy">Datenschutz</Link>
            </Text>
          </Datenschutz>
          <Text>© 2021</Text>
        </WrapperRight>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: black;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding: 40px 40px 50px;
  display: grid;
  @media (max-width: 768px) {
    padding: 40px 20px 50px;
  }

  a {
    padding-bottom: 0px;
    border-bottom: 0px;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 220px;
  align-content: space-between;
  color: white;
  max-width: 900px;
  justify-self: center;
  @media (max-width: 768px) {
    /* grid-template-columns: auto 1fr; */
    justify-content: space-evenly;
    gap: 120px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr auto;
    justify-content: space-evenly;
    gap: 30px;
  }
`

const BuntePlatte = styled.h5``

const Description = styled.h5`
  color: white;
  margin-top: 30px;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`
const Text = styled.h5``

const WrapperLeft = styled.div`
  * {
    opacity: 0.5;
  }
`

const WrapperRight = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 0.1fr);
  grid-template-columns: auto;
  justify-content: left;
  text-align: right;
  gap: 5px;

  > * {
    opacity: 0.5;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(4, auto);
    grid-template-columns: auto;
    gap: 5px;
  }
`

const Imprint = styled.div``

const Datenschutz = styled.div``

const Kontakt = styled.div``

import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function Footer() {
  return (
    <Wrapper>
      <Content>
        <WrapperLeft>
          <Text>Organisiert vom Bunte Platte e.V.</Text>
          <Description>
            —Miteinander Vielfalt, Offenheit, Toleranz und Freiheit feiern.
            Diese Philosophie von Techno zu seiner Gründungszeit vereint uns und
            treibt uns an.
          </Description>
        </WrapperLeft>
        <WrapperRight>
          <Text>© Copyright 2020</Text>
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
          <Kontakt>
            <Text>
              <a href="mailto:info@kleinundhaarig.de">Kontakt</a>
            </Text>
          </Kontakt>
        </WrapperRight>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: black;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding: 40px 40px 80px;
  display: grid;
  @media (max-width: 768px) {
    padding: 20px 20px 80px;
  }

  a {
    padding-bottom: 0px;
    border-bottom: 0px;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 100px;
  align-content: space-between;
  color: white;
  max-width: 900px;
  justify-self: center;
  @media (max-width: 768px) {
    justify-content: space-evenly;
    gap: 30px;
  }
`

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
  grid-template-columns: repeat(4, auto);
  gap: 10px;
  justify-items: right;

  > * {
    opacity: 0.5;
  }

  @media (max-width: 1000px) {
    grid-template-rows: repeat(3, 0.1fr);
    grid-template-columns: auto;
    justify-items: right;
    gap: 10px;
  }
`

const Imprint = styled.div``

const Datenschutz = styled.div``

const Kontakt = styled.div``

import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function Footer() {
  return (
    <Wrapper>
      <Content>
        <WrapperLeft>
          <BuntePlatte>© Bunte Platte e.V.</BuntePlatte>
          <BuntePlatte>
            — eingetragener Verein zur Förderung elektronischer Musikkultur.
          </BuntePlatte>
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
          <Text>© 2022</Text>
        </WrapperRight>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  bottom: -400px;
  width: 100vw;
  background-color: black;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding: 40px 40px 50px;
  /* display: grid; */

  @media (max-width: 800px) {
    padding: 40px 20px 50px;
  }

  a {
    padding-bottom: 0px;
    border-bottom: 0px;
    color: white;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: white;
  /* max-width: 1440px; */

  justify-self: center;
  @media (max-width: 800px) {
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

const BuntePlatte = styled.h5`
  color: white;
`

const Description = styled.h5`
  color: white;
  margin-top: 20px;
  @media (max-width: 800px) {
    margin-top: 10px;
  }
`
const Text = styled.h5`
  color: white;
`

const WrapperLeft = styled.div`
  justify-self: start;
  max-width: 500px;
  * {
    opacity: 0.5;
  }
`

const WrapperRight = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 0.1fr);
  grid-template-columns: auto;
  justify-self: right;
  justify-content: left;
  text-align: right;
  gap: 5px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(4, auto);
    grid-template-columns: auto;
    gap: 5px;
  }
`

const Imprint = styled.div``

const Datenschutz = styled.div``

const Kontakt = styled.div``

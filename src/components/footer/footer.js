import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function Footer(props) {
  return (
    <Wrapper bgColor={props.bgColor}>
      <Content>
        <WrapperLeft>
          <BuntePlatte>© Bunte Platte e.V.</BuntePlatte>
          <BuntePlatte>
            — gemeinnütziger Verein zur Förderung elektronischer Musikkultur.
          </BuntePlatte>
        </WrapperLeft>
        <WrapperRight>
          {/* <Kontakt>
            <Text>
              <a href="mailto:info@kleinundhaarig.de">Kontakt</a>
            </Text>
          </Kontakt> */}
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
          <AGB>
            <Text>
              <Link to="/agbs">AGBs</Link>
            </Text>
          </AGB>
          <Text>© 2023</Text>
        </WrapperRight>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  bottom: -400px;
  /* width: 100vw; */
  /* background-color: black; */
  color: white;
  background-color: ${props => props.bgColor};
  border-top: 0.5px solid rgba(255, 255, 255, 0.2);
  padding: 40px 40px 150px 40px;
  /* display: grid; */

  @media (max-width: 800px) {
    padding: 40px 40px 100px 40px;
  }

  a {
    padding-bottom: 0px;
    border-bottom: 0px;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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

const BuntePlatte = styled.h5``

const Description = styled.h5`
  margin-top: 20px;
  @media (max-width: 800px) {
    margin-top: 10px;
  }
`
const Text = styled.h5``

const WrapperLeft = styled.div`
  justify-self: start;
  max-width: 500px;
  * {
    /* opacity: 0.8; */
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

const AGB = styled.div``

const Kontakt = styled.div``

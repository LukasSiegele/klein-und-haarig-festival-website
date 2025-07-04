import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { useTranslation } from "gatsby-plugin-react-i18next"

export default function Footer(props) {
  const { t } = useTranslation()
  return (
    <Wrapper bgColor={props.bgColor}>
      <Content>
        <WrapperLeft>
          <BuntePlatte>© Bunte Platte e.V.</BuntePlatte>
          <BuntePlatte>{t("footer.footertext")}</BuntePlatte>
          <AdminLogin>
            <FooterText>
              <Link to="/admin/orders">Admin Login</Link>
            </FooterText>
          </AdminLogin>
        </WrapperLeft>
        <WrapperRight>
          {/* <Kontakt>
            <Text>
              <a href="mailto:info@kleinundhaarig.de">Kontakt</a>
            </Text>
          </Kontakt> */}
          <Imprint>
            <FooterText>
              <Link to="/imprint">Impressum</Link>
            </FooterText>
          </Imprint>
          <Datenschutz>
            <FooterText>
              <Link to="/privacy">Datenschutz</Link>
            </FooterText>
          </Datenschutz>
          <AGB>
            <FooterText>
              <Link to="/agbs">AGBs</Link>
            </FooterText>
          </AGB>
          <FooterText>© 2025</FooterText>
        </WrapperRight>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* bottom: -400px; */
  /* width: 100vw; */
  /* background-color: black; */
  color: white;
  background-color: ${props => props.bgColor};
  border-top: 0.5px solid rgba(255, 255, 255, 0.2);
  padding: 20px 20px 150px 20px;
  /* display: grid; */

  @media (max-width: 800px) {
    padding: 20px 20px 100px 20px;
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

const BuntePlatte = styled.p`
  color: white;
  opacity: 0.7;
  font-size: 0.8em;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;

  @media (max-width: 800px) {
    font-size: 0.65em;
  }
`

const Description = styled.p`
  color: white;
  opacity: 0.7;
  font-size: 0.8em;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  margin-top: 20px;

  @media (max-width: 800px) {
    margin-top: 10px;
    font-size: 0.65em;
  }
`
const FooterText = styled.p`
  color: white;
  font-size: 0.8em;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;

  @media (max-width: 800px) {
    font-size: 0.65em;
  }
`

const WrapperLeft = styled.div`
  justify-self: start;
  max-width: 500px;
  * {
    /* opacity: 0.8; */
  }
`

const WrapperRight = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 0.01fr);
  grid-template-columns: auto;
  justify-self: right;
  justify-content: left;
  text-align: right;
  gap: 0px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(4, auto);
    grid-template-columns: auto;
    gap: 5px;
  }
`

const Imprint = styled.div``

const Datenschutz = styled.div``

const AGB = styled.div``

const AdminLogin = styled.div`
  color: white;
  opacity: 0.3;
  font-size: 1em;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  padding-top: 4px;
`

const Kontakt = styled.div``

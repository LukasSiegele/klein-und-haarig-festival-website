import React, { useEffect } from "react"
import { Headline, SubheaderSmall, Note } from "../styles/TextStyles"
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';
import CookieConsent from "react-cookie-consent"
import ReactGA from "react-ga4"
// import Footer from "../footer/footer"
import styled from "styled-components"
import { Link } from "gatsby"
import "../layout/layout.css"
import { useTranslation } from "react-i18next"

ReactGA.initialize("G-H99FJYXKS1")

export default function Layout({ children }) {
  // Google Analytics
  useEffect(() => {
    ReactGA.send("pageview")
  }, [])

  const {t} = useTranslation()
  return (
    <>
      {/* <GlobalStyle /> */}
      <main>{children}</main>
      <CookieGroup>
        <CookieConsent
          buttonText={t('banner.cta')}
          buttonStyle={{
            color: "black",
            background: "white",
            borderRadius: "3px",
          }}
          style={{
            background: "black",
            padding: "0 40px",
          }}
        >
          <Trans t={t} i18nKey={"banner.text"} as="span">
            Diese Website verwendet Cookies, um dir das beste Erlebnis zu
            bieten. Wenn du weiterhin auf unserer Seite bleibst, stimmst du
            unserer Cookie-Nutzung sowie unserer Datenschutzerklärung zu.
            <InlineLink>
              <Link to="/privacy">Mehr erfahren</Link>
            </InlineLink>
          </Trans>
          <CookieText>


          </CookieText>
        </CookieConsent>
      </CookieGroup>
      {/* <Footer /> */}
    </>
  )
}

const CookieGroup = styled.div``

const CookieText = styled(Note)`
  opacity: 0.5;
  color: white;
  font-weight: 500;
  max-width: 900px;

  /* font-size: 14px; */
`

const InlineLink = styled.a`
  padding-bottom: 2px;
  color: white;
  border-bottom: 1px solid white;
`




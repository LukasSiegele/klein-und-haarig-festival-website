import React, { useEffect } from "react"
import { Headline, SubheaderSmall, Note } from "../styles/TextStyles"

import CookieConsent from "react-cookie-consent"
import ReactGA from "react-ga"

import Footer from "../footer/footer"
import styled from "styled-components"
import { Link } from "gatsby"
import "../layout/layout.css"

ReactGA.initialize("UA-228004106-1")

export default function Layout({ children }) {
  // Google Analytics
  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])

  return (
    <>
      {/* <GlobalStyle /> */}
      <main>{children}</main>
      <CookieGroup>
        <CookieConsent
          buttonText="Ja, passt"
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
          <CookieText>
            Diese Website verwendet Cookies, um dir das beste Erlebnis zu
            bieten. Wenn du weiterhin auf unserer Seite bleibst, stimmst du
            unserer Cookie-Nutzung sowie unserer Datenschutzerklärung zu.{" "}
            <InlineLink>
              {" "}
              <Link to="/privacy">Mehr erfahren</Link>
            </InlineLink>
          </CookieText>{" "}
        </CookieConsent>
      </CookieGroup>
      <Footer />
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

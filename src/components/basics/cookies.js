import React from "react"
// import { GlobalStyle } from "../styles/GlobalStyle"
import "./layout.css"
import CookieConsent from "react-cookie-consent"
import Footer from "../Footer/footer"
import styled from "styled-components"
import { Link } from "gatsby"

export default function Cookies({ children }) {
  return (
    <>
      {/* <GlobalStyle /> */}
      <main>{children}</main>
      <CookieGroup>
        <CookieConsent
          buttonText="Ja, passt."
          buttonStyle={{
            color: "black",
            background: "white",
          }}
          style={{
            background: "black",
            padding: "0 40px",
          }}
        >
          <CookieText>
            Diese Website verwendet Cookies, um dir das beste Erlebnis zu
            bieten. Wenn du weiterhin auf unserer Seite surfst, stimmst du
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

const CookieGroup = styled.div`
  display: grid;
  justify-items: center;
`

const CookieText = styled.h4`
  opacity: 0.5;
  /* font-size: 14px; */
`

const InlineLink = styled.a`
  padding-bottom: 2px;
  border-bottom: 1px solid white;
`

import React from "react"
// import { GlobalStyle } from "../styles/GlobalStyle"
import "./layout.css"
import CookieConsent from "react-cookie-consent"
import Footer from "../Footer/footer"

function Layout({ children }) {
  return (
    <>
      {/* <GlobalStyle /> */}
      <main>{children}</main>
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <Footer />
    </>
  )
}

export default Layout

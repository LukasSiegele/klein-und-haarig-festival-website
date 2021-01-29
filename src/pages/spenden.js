import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import SpendenSection from "../components/sections/SpendenSection"
import ShopTitle from "../components/shopping/ShopTitle"

export default function Spenden({ location }) {
  const { state = {} } = location
  const { sumTickets } = state

  return (
    <Layout>
      <SEO title="Spenden" />
      <ShopTitle
        info="Schritt 2/5"
        title="Wir spenden 5€ deines Festivaltickets an..."
      />
      <SpendenSection summary={sumTickets} />
    </Layout>
  )
}

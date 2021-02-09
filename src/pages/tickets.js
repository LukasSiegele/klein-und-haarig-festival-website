import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import TicketSection from "../components/sections/TicketSection"
import ShopTitle from "../components/shopping/ShopTitle"

export default function Tickets({ location }) {
  const { state = {} } = location
  const { autoParkplatz, camperParkplatz } = state

  console.log(autoParkplatz, camperParkplatz)

  return (
    <Layout>
      <SEO title="Tickets" />
      <ShopTitle info="Schritt 1/5" title="Tickets auswaehlen" />
      <TicketSection
        autoParkplatz={autoParkplatz}
        camperParkplatz={camperParkplatz}
      />
    </Layout>
  )
}

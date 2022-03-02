import React from "react"
import Layout from "../../../basics/layout"
import SEO from "../../../basics/seo"
import ShopTitle from "../ShopTitle"
import TicketSection from "./TicketSection"

export default function Tickets({ location }) {
  const { state = {} } = location
  const { autoParkplatz, camperParkplatz, onlyFriends } = state

  return (
    <Layout>
      <SEO title="Tickets" />
      <ShopTitle info="Schritt 1/4" title="Tickets auswaehlen" />
      <TicketSection
        autoParkplatz={autoParkplatz}
        camperParkplatz={camperParkplatz}
        onlyFriends={onlyFriends}
      />
    </Layout>
  )
}

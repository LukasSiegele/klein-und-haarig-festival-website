import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import TicketSection from "../components/sections/TicketSection"
import ShopTitle from "../components/shopping/ShopTitle"

export default function JaxXuwMQu6TEcd({ location }) {
  const { state = {} } = location
  const { autoParkplatz, camperParkplatz } = {} // state
  const onlyFriends = "-"
  return (
    <Layout>
      <SEO title="Tickets" />
      <ShopTitle info="Schritt 1/4" title="Tickets auswählen" />
      <TicketSection
        autoParkplatz={autoParkplatz}
        camperParkplatz={camperParkplatz}
        onlyFriends={onlyFriends}
      />
    </Layout>
  )
}

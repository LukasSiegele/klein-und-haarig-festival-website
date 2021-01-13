import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import TicketSection from "../components/sections/TicketSection"
import ShopTitle from "../components/shopping/ShopTitle"

export default function Tickets() {
  return (
    <Layout>
      <SEO title="Tickets" />
      <ShopTitle info="Schritt 1/4" title="Tickets auswaehlen" />
      <TicketSection />
    </Layout>
  )
}

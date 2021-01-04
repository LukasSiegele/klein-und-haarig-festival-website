import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Header from "../components/layout/Header"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import TicketSection from "../components/sections/TicketSection"
import TicketDescription from "../components/shopping/TicketDescriptionSection"
import ShopTitle from "../components/shopping/ShopTitle"

export default function Tickets() {
  return (
    <Layout>
      <SEO title="Tickets" />
      <ShopTitle info="Schritt 1/3" title="Tickets auswaehlen" />
      <TicketSection />
      {/* <TicketDescription /> */}
    </Layout>
  )
}

const Content = styled.div``

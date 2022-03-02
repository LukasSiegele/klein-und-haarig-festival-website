import React from "react"
import styled from "styled-components"
import Layout from "../../../basics/layout"
import SEO from "../../../basics/seo"
import ShopTitle from "../ShopTitle"
import Form from "./Form"

export default function Data({ location }) {
  const { state = {} } = location
  const { sumTickets, onlyFriends } = state

  return (
    <Layout>
      <SEO title="Data" />
      <ShopTitle info="Schritt 2/4" title="Ticket personalisieren" />
      <Wrapper>
        <Form sumTickets={sumTickets} onlyFriends={onlyFriends} />
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  /* height: 800px;
  background: blue; */
`

import React from "react"
import styled from "styled-components"
import Form from "../components/form/Form"
import Layout from "../components/layout/layout"
// import SEO from "../components/layout/seo"
import ShopTitle from "../components/shopping/ShopTitle"

export default function Data({ location }) {
  const { state = {} } = location
  const { sumTickets, onlyFriends } = state

  return (
    <Layout>
      {/* <SEO title="Data" /> */}
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

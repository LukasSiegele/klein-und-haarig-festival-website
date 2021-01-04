import React from "react"
import styled from "styled-components"
import Form from "../components/form/Form"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ShopTitle from "../components/shopping/ShopTitle"

export default function Data({ location }) {
  return (
    <Layout>
      <SEO title="Data" />
      <ShopTitle info="Schritt 2/3" title="Daten eingeben" />
      <Wrapper>
        <Form sumTickets={location.state.sumTickets} />
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  /* height: 800px;
  background: blue; */
`

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout/layout"
// import SEO from "../components/layout/seo"
import FormButton from "../components/buttons/FormButton"
import Newsletter from "../components/form/Newsletter"
import { graphql } from "gatsby"

export default function NewsletterPage() {
  return (
    <Layout>
      <Wrapper>
        <Title>KuH Newsletter</Title>
        {/* <Description>Early access to news and infos.</Description> */}
        <Newsletter />
        {/* <ButtonWrapper>
          <Link to="/">
            <FormButton label="Bring me Home" color="black" />
          </Link>
        </ButtonWrapper> */}
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

const Wrapper = styled.div`
  padding: 120px 40px;
  background: black;
`

const Title = styled.h1`
  color: white;
  margin-bottom: 80px;
`
const Description = styled.p`
  margin-top: 40px;
  color: white;
`

const ButtonWrapper = styled.div`
  margin-top: 120px;
  width: 250px;
`

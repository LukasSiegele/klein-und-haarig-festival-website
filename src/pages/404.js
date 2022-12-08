import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout/layout"
// import SEO from "../components/layout/seo"
import FormButton from "../components/buttons/FormButton"

export default function NotFoundPage() {
  return (
    <Layout>
      {/* <SEO title="404: Not found" /> */}
      <Wrapper>
        <Title>404 — Not Found</Title>
        <Description>I like Turtles.</Description>
        <ButtonWrapper>
          <Link to="/">
            <FormButton label="Bring me Home" color="black" />
          </Link>
        </ButtonWrapper>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  padding: 120px 40px;
  background: black;
`

const Title = styled.h1`
  color: white;
`
const Description = styled.h2`
  margin-top: 40px;
  color: white;
`

const ButtonWrapper = styled.div`
  margin-top: 120px;
  width: 250px;
`

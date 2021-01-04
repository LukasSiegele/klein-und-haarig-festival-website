import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Wrapper>
        <Title>404 — Not Found</Title>
        <Description>I like Turtles.</Description>
        <Home to="/">Bring me home.</Home>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  padding: 120px 40px;
`

const Title = styled.h1`
  color: white;
`
const Description = styled.h2`
  margin-top: 40px;
  color: white;
`

const Home = styled(Link)`
  margin-top: 120px;
  display: inline-block;
  padding: 20px;
  background: white;
  color: black;
`

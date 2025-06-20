import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
// import TimetablePdf from "../../../static/pdf/kuh2024-timetable.pdf"

export default function Timetable() {
  return (
    <Layout>
      {/* <SEO title="404: Not found" /> */}
      {/* <Wrapper> */}
      <iframe
        src="/pdf/kuh2024-timetable.pdf"
        width="100%"
        height="900px"
        frameborder="0"
      ></iframe>
      {/* </Wrapper> */}
    </Layout>
  )
}

export const query = graphql`
  query($language: String!) {
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
  padding: 0px 40px;
  background: black;
`

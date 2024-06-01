import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"

// import TimetablePdf from "../../../static/pdf/kuh2024-timetable.pdf"

export default function Timetable() {
  return (
    <Layout>
      {/* <SEO title="404: Not found" /> */}
      {/* <Wrapper> */}
      <iframe
        src="/pdf/kuh2024-timetable.pdf"
        width="100%"
        height="1500px"
        frameborder="0"
      ></iframe>
      {/* </Wrapper> */}
    </Layout>
  )
}

const Wrapper = styled.div`
  padding: 120px 40px;
  background: black;
`

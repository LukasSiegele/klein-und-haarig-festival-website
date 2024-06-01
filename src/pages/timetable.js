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
        src="../../../static/pdf/kuh2024-timetable.pdf"
        style="width:600px; height:500px;"
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

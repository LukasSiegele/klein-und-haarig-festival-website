import React from "react"
import styled from "styled-components"
import Layout from "../basics/layout"
import SEO from "../basics/seo"
import SideNavigation from "../components/SideNavigation"

import HeroSection from "./frontpage/HeroSection"

export default function IndexPage() {
  return (
    <PageGrid>
      <SideNavigation />
      <PageContent>
        <Layout>
          <SEO title="Home" />
          <HeroSection />
        </Layout>
      </PageContent>
    </PageGrid>
  )
}

const PageContent = styled.div``
const PageGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`

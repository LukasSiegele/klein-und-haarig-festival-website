import React from "react"
import styled from "styled-components"
import HeroSection from "../components/sections/HeroSection"
import SideNavigation from "../components/navigation/SideNav"
import Message from "../components/sections/Message"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Header from "../components/layout/Header"
import Ticker from "../components/ticker/Ticker"

import BackgroundTexture from "../../static/images/BackgroundTexture.png"

export default function IndexPage() {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Wrapper>
          <Header />
          <MainGrid>
            <SideNavigation />
            <HeroSection />
          </MainGrid>
          <TickerGroup>
            <Ticker />
          </TickerGroup>
        </Wrapper>
      </Layout>
    </>
  )
}

const Wrapper = styled.div`
  z-index: 1;
  background-image: url(${BackgroundTexture});
`

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const TickerGroup = styled.div`
  position: relative;
`

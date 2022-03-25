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
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <Header />
        <SideNavigation />
        <HeroSection />
        <Message />
        <Ticker />
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  background-image: url(${BackgroundTexture});
`

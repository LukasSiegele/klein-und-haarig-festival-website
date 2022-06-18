import React from "react"
import styled from "styled-components"
import HeroSection from "../components/sections/HeroSection"
import SideNavigation from "../components/navigation/SideNav"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Ticker from "../components/ticker/Ticker"

import { ParallaxProvider } from "react-scroll-parallax"

import BackgroundTexture from "../../static/images/BackgroundTexture.png"
import ImageSection from "../components/sections/ImageSection"
import Message from "../components/sections/Message"
import SideLine from "../components/navigation/SideLine"
import Lineup from "../components/sections/Lineup"

export default function IndexPage() {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <ParallaxProvider>
          <Wrapper>
            <MainGrid>
              <SideNavigation />
              <HeroSection />
            </MainGrid>
            <TickerGroup>
              <Ticker />
            </TickerGroup>
          </Wrapper>

          <MessageSection>
            <SideLine />
            <Message />
          </MessageSection>

          <LineupSection>
            <SideLine />
            <Lineup />
          </LineupSection>

          <ImageSection />
        </ParallaxProvider>
      </Layout>
      <Spacer />
    </>
  )
}

const Wrapper = styled.div`
  z-index: 1;
  background-image: url(${BackgroundTexture});
  position: relative;
  overflow: hidden;
`

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`
const MessageSection = styled.div`
  display: grid;
  background-image: url(${BackgroundTexture});
  grid-template-columns: auto 1fr;
  overflow: hidden;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const LineupSection = styled.div`
  display: grid;
  background-color: #cbc3ff;
  grid-template-columns: auto 1fr;
  overflow: hidden;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const TickerGroup = styled.div`
  position: absolute;
  bottom: 60px;
  z-index: 999;
`

const Spacer = styled.div`
  height: 70px;
  background: black;
  @media (max-width: 800px) {
    height: 60px;
  }
`

// const TicketGroup = styled(Link)`
//   /* animation: TicketButtonAnimation 2s 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1); */
//   opacity: 1;
//   background-image: none;
//   /* width: 320px; */
//   height: 56px;
//   color: white;
//   /* display: grid;
//   justify-items: center; */
//   align-content: center;
//   text-transform: uppercase;
//   font-size: 16px;
//   border: 0px;

//   & > :hover {
//     cursor: pointer;
//   }
// `

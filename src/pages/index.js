import React from "react"
import styled from "styled-components"
import Hero from "../components/sections/Hero"
import SideNavigation from "../components/navigation/SideNavigation"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Ticker from "../components/ticker/Ticker"
import Footer from "../components/footer/footer"

import { ParallaxProvider } from "react-scroll-parallax"

import BackgroundTexture from "../../static/images/BackgroundTexture.png"
import Images from "../components/sections/Images"
import Message from "../components/sections/Message"
import SideLine from "../components/navigation/SideLine"
import Lineup from "../components/sections/Lineup"
import Foerderungen from "../components/sections/Foerderungen"

export default function IndexPage() {
  return (
    <>
      <SEO title="Home" />

      <ParallaxProvider>
        <Wrapper>
          {/* <MainGrid> */}
          <SideNavigation />

          <Content>
            {/* <Wrapper> */}
            <HeroSection>
              <MainGrid>
                <SideLine />
                <Hero />
              </MainGrid>
            </HeroSection>
            {/* <TickerGroup>
              <Ticker />
            </TickerGroup> */}
            {/* </Wrapper> */}

            <MessageSection>
              <MainGrid>
                <SideLine />
                <Message />
              </MainGrid>
            </MessageSection>

            <LineupSection>
              <MainGrid>
                <SideLine />
                <Lineup />
              </MainGrid>
            </LineupSection>

            <ImageSection>
              <MainGrid>
                <SideLine />
                <Images />
              </MainGrid>
            </ImageSection>

            {/* <FoerderungSection> */}
            {/* <HideSideline>
              <SideLine />
            </HideSideline> */}
            <MainGrid>
              <SideLine />
              <Foerderungen />
            </MainGrid>

            <MainGrid>
              <SideLine />
              <Footer />
            </MainGrid>
            {/* </FoerderungSection> */}
          </Content>
          {/* </MainGrid> */}

          <TickerGroup>
            <Ticker />
          </TickerGroup>
          <Layout />
        </Wrapper>
      </ParallaxProvider>
    </>
  )
}

const Wrapper = styled.div`
  overflow: hidden;
`

// const SideNav = styled.div`
//   obsolute
//   overflow: hidden;
// `

const Content = styled.div`
  /* overflow-y: scroll; */
  overflow-x: hidden;
`
const MainGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  overflow: hidden;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const HeroSection = styled.div`
  background-color: #ff7121;
`
const MessageSection = styled.div`
  background-image: url(${BackgroundTexture});
`

const ImageSection = styled.div`
  background-image: black;
`

const LineupSection = styled.div`
  background-color: #cbc3ff;
`

const FoerderungSection = styled.div`
  background-color: white;
`

const HideSideline = styled.div`
  opacity: 0;
`

const TickerGroup = styled.div`
  position: fixed;
  bottom: 0;

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

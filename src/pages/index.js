import React from "react"
import styled from "styled-components"
import Hero from "../components/sections/Hero"
import { graphql } from "gatsby"
import SideNavigation from "../components/navigation/SideNavigation"
import Layout from "../components/layout/layout"
// import SEO from "../components/layout/seo"
import Ticker from "../components/ticker/Ticker"
import Footer from "../components/footer/footer"
import { Link } from "gatsby"

import { ParallaxProvider } from "react-scroll-parallax"
import { TextSmall } from "../components/styles/TextStyles"

import BackgroundTexture from "../../static/images/BackgroundTexture.png"
import Images from "../components/sections/Images"
import Message from "../components/sections/Message"
import SideLine from "../components/navigation/SideLine"
import Lineup from "../components/sections/Lineup"
import Foerderungen from "../components/sections/Foerderungen"
import MobileNavigation from "../components/navigation/MobileNavigation"
import LinkList from "../components/sections/LinkList"

import HeroArtwork from "../../static/images/header-2025.jpg"
import FormButton from "../components/buttons/FormButton"
// import HeroAnimation from "../../static/videos/KuH2023Animation.mp4"

export default function IndexPage() {
  return (
    <>
      {/* <SEO title="Home" /> */}

      <ParallaxProvider>
        <Wrapper>
          {/* <MainGrid> */}
          <SideNavigation bgColor="#000" />

          <Content>
            {/* <Wrapper> */}
            <MobileNavigation bgColor="#000" />
            <LinkButton>
              <Link to="https://pretix.eu/bunteplatte/kuh2025/">
                <FormButton
                  backgroundColor="#fc2546"
                  color="#000"
                  label="Shop"
                />
              </Link>
            </LinkButton>
            <HeroSection>
              <Artwork>
                <MainGrid>
                  <SideLine />
                  <div>
                    <Hero />
                    <Lineup />
                  </div>
                </MainGrid>
              </Artwork>

              {/* <ArtistText> Artwork </ArtistText> */}
            </HeroSection>
            {/* <TickerGroup>
              <Ticker />
            </TickerGroup> */}
            {/* </Wrapper> */}

            {/* <MessageSection>
              <MainGrid>
                <SideLine />
                <Message />
              </MainGrid>
            </MessageSection> */}

            {/* <LineupSection>
              <MainGrid>
                <SideLine />
                <Lineup />
              </MainGrid>
            </LineupSection> */}

            {/* <ImageSection>
              <MainGrid>
                <SideLine />
                <Images />
              </MainGrid>
            </ImageSection> */}

            {/* <FoerderungenSection>
              <MainGrid>
                <SideLine />
                <Foerderungen />
              </MainGrid>
            </FoerderungenSection> */}

            <LinkListSection>
              <MainGrid>
                <SideLine />
                <LinkList />
              </MainGrid>
            </LinkListSection>

            <FooterSection>
              <MainGrid>
                <SideLine />
                <Footer bgColor="black" />
              </MainGrid>
            </FooterSection>
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

const ArtistText = styled(TextSmall)`
  position: absolute;
  mix-blend-mode: difference;
  color: white;
  opacity: 0.55;
  right: 4px;
  /* margin-bottom: 150px; */
  /* background-color: rgba(0, 0, 0, 0.2); */
  /* border-radius: 20px; */
  padding: 3px;
  @media (max-width: 1100px) {
    /* bottom: 80px; */
    right: 4px;
  }
`

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
  /* overflow: hidden; */
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const HeroSection = styled.div`
  position: relative;
  @media (max-width: 800px) {
    padding-top: 75px;
  }
`
const ImageSectionDesktop = styled.div``

const Artwork = styled.div`
  /* height: 100vh; */
  /* width: 300px; */
  position: relative;
  /* top: -800px; */
  /* border: 20px solid white; */
  background-image: url(${HeroArtwork});
  background-size: cover;
  /* background-size: 140%;
  background-position: 5% 79%; */

  @media (max-width: 800px) {
    background-position: 30%;
  }
`

const ArtworkAnimation = styled.video`
  width: 1800px;
  height: 900px;
  position: absolute;
  top: 0;
`

const MessageSection = styled.div`
  /* background-image: url(${BackgroundTexture}); */
  background-color: #000;
  margin-top: 150px;
  @media (max-width: 800px) {
    margin-top: 75px;
  }
  /* background-color: black; */
`

const LineupSection = styled.div`
  /* background-color: #cbc3ff; */
  background-color: #b3dbf1;
  /* background-color: #cbc3ff; */
  z-index: 9;
`

const ImageSection = styled.div`
  /* background-image: black; */
  background-color: #000;
`

const FoerderungenSection = styled.div`
  background-color: #000;
`
const LinkListSection = styled.div`
  background-color: #000;
`

const FooterSection = styled.div`
  background-color: #000;
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

const LinkButton = styled.div`
  margin-bottom: 20px;
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 100;
  width: 200px;

  @media (max-width: 1100px) {
    display: none;
  }
`

export const query = graphql`
  query ($language: String!) {
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

import React from "react"
import styled from "styled-components"
import HeroSection from "../components/sections/HeroSection"
import SideNavigation from "../components/navigation/SideNav"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Header from "../components/layout/Header"
import Ticker from "../components/ticker/Ticker"
import { Link } from "gatsby"

import BackgroundTexture from "../../static/images/BackgroundTexture.png"

import useAudienceCount from "../helper/useAudienceCount"

import TicketButton from "../components/buttons/TicketButton"

export default function IndexPage() {
  // Audience Counts
  const audienceCount = useAudienceCount()
  const maxAudience = 200

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Wrapper>
          <Header />
          <TicketWrapper>
            <TicketGroup
              to={audienceCount < maxAudience ? "/tickets" : "/voll"}
            >
              <TicketButton />
            </TicketGroup>
          </TicketWrapper>
          <MainGrid>
            <SideNavigation />
            <Content>
              <HeroSection />
            </Content>
          </MainGrid>
          <TickerGroup>
            <Ticker />
          </TickerGroup>
        </Wrapper>
      </Layout>
      <Spacer />
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

const Spacer = styled.div`
  height: 70px;
  background: black;
  @media (max-width: 768px) {
    height: 60px;
  }
`

const Content = styled.div``

const TicketWrapper = styled.div`
  z-index: 200;
  position: absolute;
  /* scale: 1.4; */
  top: 40px;
  right: -40px;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  :hover {
    /* transform: translateY(-10px); */
    /* transform: scale(1.03);
    cursor: pointer; */
  }
`

const TicketGroup = styled(Link)`
  /* animation: TicketButtonAnimation 2s 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1); */
  opacity: 1;
  background-image: none;
  width: 320px;
  height: 56px;
  color: white;
  display: grid;
  justify-items: center;
  align-content: center;
  text-transform: uppercase;
  font-size: 16px;
  border: 0px;

  & > :hover {
    cursor: pointer;
  }
`

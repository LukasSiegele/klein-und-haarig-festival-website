import { Link } from "gatsby"
import { navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import FormButton from "../buttons/FormButton"
import Layout from "../layout/layout"
import SEO from "../layout/seo"
import LogoSVG from "../../../static/images/LogoSideNavWhite.svg"
import Stairway from "../../../static/images/TicketareaLogin.jpg"
import Kritzel from "../../../static/images/TicketareaRotesKritzel2.png"
import VipSection1 from "../sections/vip/VipSection1"

import {
  Headline,
  MasterHeadline,
  PageInfo,
  ImageDescription,
} from "../styles/TextStyles"

import Aufbau from "../../../static/images/Aufbau.jpg"

/*
Wir bitten dich um etwas Geduld, diese Seite wird gerade von unsaufgebaut. Bald findest du hier: 
*/
const PersonalTicketSection = props => {
  const userInfo = props.userInfo.fields
  console.log(userInfo)

  const isFestival = true

  const festivalPrice = 100
  const serviceFees = 2

  const [isCamper, setIsCamper] = useState(false)
  const camperPrice = 20

  const [summary, setSummary] = useState(festivalPrice + serviceFees)

  // Camper Count
  const camperPTicketsPage = 1

  return (
    <Layout>
      <SEO title="personal ticket area" />
      <Container>
        <Wrapper>
          <Link to="/">
            <Logo />
          </Link>
          <MainGrid>
            
            <Left>
              <TextWrapper>
                <TitlePersonalStroke> Personal </TitlePersonalStroke>
                <TitleTicketarea>Ticket Area</TitleTicketarea>
                <Description>
                  Hallo {userInfo.Vorname}, <br />
                  wir bitten dich um etwas Geduld. Diese Seite wird gerade von
                  uns aufgebaut. Bald findest du hier:
                </Description>
              </TextWrapper>
              <AccordionWrapper>
                <ul>
                  <li>
                    <AccordionSection>
                      <AccHeader>
                        <SectionTitle>Dein Digitales Ticket</SectionTitle>
                        <ComingSoon>qr code coming soon</ComingSoon>
                      </AccHeader>
                      <AccContent>
                        <AccDescription>
                  Hier schonmal dein/e gekauften Ticket/s. Das offizielle digitale Ticket in Form eines QR Codes wird hier in Kürze angezeigt.
                </AccDescription>
                        <VipSection1 userData={userInfo} />
                      </AccContent>
                    </AccordionSection>
                  </li>

                  <li>
                    <AccordionSection>
                      <AccHeader>
                        <SectionTitle>Deinen Helfer:innen Status</SectionTitle>
                        <ComingSoon>coming soon</ComingSoon>
                      </AccHeader>
                    </AccordionSection>
                  </li>

                  <li>
                    <AccordionSection>
                      <AccHeader>
                        <SectionTitle>Anfahrt & Infos</SectionTitle>
                        <ComingSoon>coming soon</ComingSoon>
                      </AccHeader>
                    </AccordionSection>
                  </li>
                </ul>
              </AccordionWrapper>
            </Left>

            <Right>
              <Kritzelgrafik />
              <ImageWrapper>
                <Image />
                <ImageAuthor>Foto: Dominik Merle</ImageAuthor>
              </ImageWrapper>
            </Right>
          </MainGrid>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default PersonalTicketSection
const Container = styled.div`
  background: black;
  overflow: hidden;
  color: white;
`

const TicketBackground = styled.img`
  width: 126px;
  position: relative;
  left: 0px;
  top: 0px;
  cursor: pointer;
  pointer-events: auto;
  height: 41px;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding-bottom: 120px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding-bottom: 60px;
  }
`

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 120px;
  max-width: 1840px;

  

  // @media (max-width: 1100px) {
  //   // grid-template-columns: 1fr;
  //   gap: -700px;
  //   max-width: 700px;
  // }
`

const Left = styled.div`
  /* padding-top: 120px; */
  padding-left: 120px;
  position: relative;
  @media (max-width: 1100px) {
    padding: 40px 20px;
  }
`

const Right = styled.div`
  /* padding-right: 120px; */
  justify-self: right;
  // overflow: hidden;
position: relative;
  
`


const TextWrapper = styled.div`
  padding: 21px 0;

  @media (max-width: 800px) {
    padding: 0px 20px;
  }
`

const TitlePersonalStroke = styled(MasterHeadline)`
  /* display: inline; */
  text-align: left;
  font-family: "GT-Alpina-Extended-Regular";
  text-transform: none;
  color: black;
  text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff,
    1px 1px 0 #ffffff;
  @media (max-width: 700px) {
    font-size: 70px;
  }
`

const TitleTicketarea = styled(MasterHeadline)`
  display: contents;
  text-align: left;
  font-family: "GT-Alpina-Extended-Regular";
  text-transform: none;
  text-shadow: none;
  @media (max-width: 700px) {
    font-size: 70px;
  }
`

const Description = styled.h3`
  margin-top: 60px;
  max-width: 600px;
`

const AccordionWrapper = styled.div`
  margin: 100px 0 0 20px;
  @media (max-width: 800px) {
    margin: 60px 20px;
  }
`

const AccordionSection = styled.div``

const AccHeader = styled.div`
  /* margin-bottom: 60px; */
  /* border-top: 1px solid white; */
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: start;
  gap: 15px;
  @media (max-width: 800px) {
    /* padding: 0 20px; */
    grid-template-columns: 1fr;
    gap: 0px;
  }
`

const AccContent = styled.div`
  padding: 20px 0;
`

const AccDescription = styled.h5`
  max-width: 600px;
  padding-bottom: 40px;
`

const SectionTitle = styled.h3`
  margin-top: 20px;
  display: inline;
`

const ComingSoon = styled(PageInfo)`
  margin-top: 15px;
  color: #fff991;
`

const ImageWrapper = styled.div`
@media (max-width: 1500px) {
    display: none;
  }
`

const Kritzelgrafik = styled.div`
  width: 501px;
  height: 445px;
  background-image: url(${Kritzel});
  background-size: cover;
  position: absolute;
  left: -250px;
  top: 50px;
  @media (max-width: 1300px) {
    top: -260px;
    left: -350px;
  }
`

const Image = styled.div`
  width: 550px;
  height: 886px;
  background-image: url(${Aufbau});
  background-size: cover;
`

const ImageAuthor = styled(ImageDescription)``

// KuH Logo in TopNav
const Logo = styled.div`
  width: 84px;
  height: 79px;
  background-image: url(${LogoSVG});
  background-size: cover;
  margin: 40px;

  @media (max-width: 800px) {
    margin: 20px;
  }
  :hover {
    cursor: pointer;
  }
`

const Header = styled(Headline)``
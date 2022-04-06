import { Link } from "gatsby"
import { navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import FormButton from "../buttons/FormButton"
import Layout from "../layout/layout" 
import SEO from "../layout/seo"
import LogoSVG from "../../../static/images/LogoSideNavWhite.svg"
import Stairway from "../../../static/images/TicketareaLogin.jpg"
import OwnedTicketCard from "../cards/OwnedTicketCard"

import Background1 from "/static/images/FestivalTicket.jpg"
import Background3 from "/static/images/CamperTicket.jpg"

import {
  Headline,
  PageInfo,
  ImageDescription,
} from "../styles/TextStyles"

/*
Wir bitten dich um etwas Geduld, diese Seite wird gerade von unsaufgebaut. Bald findest du hier: 
*/ 
const PersonalTicketSection = (props) => {

  const userInfo = props.userInfo.fields
  console.log(userInfo)

  const isFestival = true

  const festivalPrice = 100
  const serviceFees = 2

  const [isCamper, setIsCamper] = useState(false)
  const camperPrice = 20

  const [summary, setSummary] = useState(festivalPrice + serviceFees)



  // Camper Count
  const camperPTicketsPage = 1;

  return (
    <Layout>
      <SEO title="personal ticket area" />
      <Container>
        <Wrapper>
          <Link to="/">
            <Logo />
          </Link>
          <ContentWrapper>
            <TextWrapper>
              <TitlePersonalStroke> Personal </TitlePersonalStroke>
              <TitleTicketarea>Ticketarea</TitleTicketarea>
              <Description>
                Hallo {userInfo.Vorname}:
              </Description>
            </TextWrapper>
            <AccordionWrapper>
              <AccordionSection>
                <SectionTitle>01 — Dein Digitales Ticket</SectionTitle>
                <CardWrapper>
          <Card1>
            <OwnedTicketCard
              title="Festival Ticket"
              price={festivalPrice + " €"}
              details="4 Tage Festival
inklusive Camping"
              isSelected={true}
              cardBackground={Background1}
            />
          </Card1>
          <Card2>
            <OwnedTicketCard
              title="Camper Stellplatz"
              price={
                props.camperParkplatz || camperPTicketsPage
                  ? "Ausverkauft"
                  : camperPrice + " €"
              }
              details="Auf dem Gelände
maximale Fahrzeuggröße 6 x 2.5 m"
              isSelected={false}
              tripleLineDetail={true}
              limit={props.camperParkplatz || camperPTicketsPage}
              cardBackground={Background3}
            />
          </Card2>
          {/* <Card3></Card3> */}
        </CardWrapper>
                <ComingSoon>coming soon</ComingSoon>
              </AccordionSection>
              <AccordionSection>
                <SectionTitle>02 — Anfahrt & Infos</SectionTitle>
                <ComingSoon>coming soon</ComingSoon>
              </AccordionSection>
              <AccordionSection>
                <SectionTitle>03 — Dein Helfer Status</SectionTitle>
                <ComingSoon>coming soon</ComingSoon>
              </AccordionSection>
            </AccordionWrapper>
          </ContentWrapper>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default PersonalTicketSection;

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

const ContentWrapper = styled.div``

const TextWrapper = styled.div`
  padding: 21px 0;

  @media (max-width: 800px) {
    padding: 0px 20px;
  }
`

const TitlePersonalStroke = styled.h2`
  /* display: inline; */
  text-align: left;
  font-family: "GT-Alpina-Extended-Regular";
  text-transform: none;
  color: black;
  text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff,
    1px 1px 0 #ffffff;
`

const TitleTicketarea = styled.h2`
  display: contents;
  text-align: left;
  font-family: "GT-Alpina-Extended-Regular";
  text-transform: none;
  text-shadow: none;
`

const Description = styled.h5`
  margin-top: 40px;
  max-width: 600px;
`

const AccordionWrapper = styled.div`
  margin: 120px 0;
  @media (max-width: 800px) {
    margin: 60px 0;
  }
`

const AccordionSection = styled.div`
  margin-top: 60px;
  border-top: 1px solid white;
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: start;
  gap: 15px;
  @media (max-width: 800px) {
    padding: 0 20px;
    grid-template-columns: 1fr;
    gap: 0px;
  }
`

const SectionTitle = styled.h3`
  margin-top: 20px;
  display: inline;
`

const ComingSoon = styled(PageInfo)`
  margin-top: 15px;
  color: #fff991;
`

const ImageWrapper = styled.div``

const Image = styled.div`
  width: 550px;
  height: 886px;
  background-image: url(${Stairway});
  background-size: cover;

  @media (max-width: 1300px) {
    width: 352px;
    height: 548px;
  }
`

const ImageAuthor = styled(ImageDescription)`
  color: black;
`

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

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-items: start;
  gap: 60px;
  width: auto;

  margin-bottom: 40px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    gap: 30px;
  }
`

const Card1 = styled.div`
  animation: TicketCardAnimation 1.3s 0.4s forwards
    cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  visibility: hidden;

  @keyframes TicketCardAnimation {
    0% {
      visibility: visible;
      opacity: 0;
      transform: translateY(20px);
    }

    100% {
      opacity: 1;
      visibility: visible;
      transform: translateY(0px);
    }
  }
`
const Card2 = styled.div`
  animation: TicketCardAnimation 1.3s 0.6s forwards
    cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  visibility: hidden;
`

const Header = styled(Headline)``

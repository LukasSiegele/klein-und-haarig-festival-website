import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// import TicketBackground from "/static/icons/ticket-ausverkauft.svg"

// import useAutoCount from "../../helper/useAutoCount"
// import useCamperCount from "../../helper/useCamperCount"
// import useAudienceCount from "../../helper/useAudienceCount"
// import TicketButton from "../buttons/TicketButton"

import { FrontpageHeadline, FrontpageInfos } from "../styles/TextStyles"
import Newsletter from "../form/Newsletter"
import FormButton from "../buttons/FormButton"
import KUHLogo from "../../../static/images/LogoSideNav.png"

export default function Hero() {
  // Auto Count
  // const autoCount = useAutoCount()

  // Camper Count
  // const camperCount = useCamperCount()

  // Audience Counts
  // const audienceCount = useAudienceCount()
  // const maxAudience = 1

  return (
    <Container>
      <ContentGrid>
        <Column1>
          {/* <TitleLine> */}
          {/* <KleinMask> */}

          <C1Content>
            {/* <MLogoGroup>
              <Link to="/">
                <MLogo />
              </Link>
            </MLogoGroup> */}
            <TitleKlein>Klein und Haarig Festival</TitleKlein>
            {/* </KleinMask> */}

            {/* <UndMask>
              <TitleUndStroke>und </TitleUndStroke>
            </UndMask>
            <HaarigMask>
              <TitleHaarig>Haarig</TitleHaarig>
            </HaarigMask> */}
            {/* </TitleLine> */}
            {/* <DateMask> */}

            <DateGroup>
              <Datum>14 — 17</Datum>
              <Datum>07/2023</Datum>
            </DateGroup>
            {/* </DateMask> */}
            {/* <DateMask> */}

            <PlaceGroup>
              <LinkInline
                href="https://goo.gl/maps/rqgmPhj2zV1KfUXeA"
                target="_blank"
              >
                <IconGroup>
                  <Datum>Bad Wildbad</Datum>
                  <Icon src="/icons/linkout.svg"></Icon>
                </IconGroup>
              </LinkInline>
            </PlaceGroup>
          </C1Content>
          {/* </DateMask> */}
        </Column1>
        <Column2>
          <InfoText>
            Melde dich zu unserem Newsletter an und bekomme so frühzeitig Infos
            zum Ticket Presale und zum Festival 2023.
          </InfoText>

          <Newsletter></Newsletter>
          <InstagramSection>
            <InfoText>Folge uns auf Instagram</InfoText>
            <InstaButton>
              <Link
                to="https://www.instagram.com/kleinundhaarig/"
                target="_blank"
              >
                <FormButton label="@kleinundhaarig" />
              </Link>
            </InstaButton>
          </InstagramSection>
        </Column2>
        {/* <Column2>
          <Link to="https://pretix.eu/bunteplatte/kleinundhaarig">
            <FormButton label="Tickets" />
          </Link>
        </Column2> */}
      </ContentGrid>
      {/* <TicketWrapper to={audienceCount < maxAudience ? "/tickets" : "/voll"}> */}
      {/* <TicketButton /> */}
      {/* </TicketWrapper> */}

      {/* <YearMask>
        <TitleJahr> 2023 </TitleJahr>
      </YearMask> */}
      {/* <ArtistMask>
          <TitleArtist> Artwork: Karla Gondekova </TitleArtist>
        </ArtistMask> */}
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  margin-bottom: 200px;
  /* position: relative; */
  @media (max-width: 1100px) {
    height: auto;
  }
`

const ContentGrid = styled.div`
  /* z-index: 10; */
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(2, 1fr);
  /* padding-top: 12px; */
  @media (max-width: 1100px) {
    height: auto;
    grid-template-columns: repeat(1, 1fr);
    /* grid-template-rows: repeat(3, auto);
    gap: 30px; */
  }
`

const Column1 = styled.div`
  /* display: grid; */
  /* align-content: center; */
  /* background-color: red; */
  /* opacity: 0.4; */
  padding: 25px 20px 0 20px;
  @media (max-width: 800px) {
    padding: 10px 10px 0 10px;
  }
`
const Column2 = styled.div`
  /* background-color: red; */
  /* opacity: 0.2; */
  padding: 25px 20px 0 20px;
  border-left: 1px solid black;
  @media (max-width: 1100px) {
    padding: 120px 20px 0 20px;
    border: 0;
  }
`
// const Column3 = styled.div`
//   /* background-color: red; */
//   /* opacity: 0.4; */
//   border-left: 1px solid black;
//   padding: 5px 10px;
//   @media (max-width: 1100px) {
//     border: 0;
//   }
// `

const Wrapper = styled.div`
  /* overflow: hidden; */
`

const TicketWrapper = styled(Link)`
  z-index: 200;
  position: absolute;
  /* width: 400px; */
  top: 55px;
  right: 160px;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  & > :hover {
    cursor: pointer;
  }

  @media (max-width: 700px) {
    top: 40px;
    right: 150px;
  }
`

// const TitleLine = styled.div`
//   justify-content: left; */
//   z-index: 2;

//   @media (max-width: 768px) {
//     padding: 20px 50px;
//     margin-left: 0px;
//   }

//   @media (max-width: 700px) {
//     padding: 20px 20px;
//     margin-left: 0px;
//   }

//   @media (min-width: 1650px) {
//     padding: 20px 30px;
//     margin-left: 0px;
//   }
// `

const C1Content = styled.div`
  max-width: 400px;
`

const MLogoGroup = styled.div`
  width: 84px;
  height: 79px;
  margin-bottom: 10px;

  @media (min-width: 801px) {
    /* margin-top: -8px; */
    display: none;
  }
`

const MLogo = styled.div`
  max-width: 87%;
  height: 87%;
  background-image: url(${KUHLogo});
  background-size: cover;
`

const KleinMask = styled.div`
  display: inline-block;
  overflow: hidden;
  padding: 10px 0;
  margin-right: 20px;
`

const TitleKlein = styled.h3``

const DateGroup = styled.div`
  margin-top: 45px;
`

const PlaceGroup = styled.div`
  margin-top: 45px;
`

// const TitleKlein = styled.h3`
//   z-index: 20;
//   /* display: block; */
//   text-align: left;
//   font-family: "GT-Alpina-Extended-Regular";
//   text-transform: none;
//   color: #000000;
//   animation: HeroAnimation 1.3s 0.7s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
//   opacity: 0;

//   @keyframes HeroAnimation {
//     0% {
//       opacity: 0;
//       transform: translateY(40px);
//     }

//     100% {
//       opacity: 1;
//       transform: translateY(2px);
//     }
//   }
// `

const UndMask = styled.div`
  overflow: hidden;
  padding: 10px 8px 8px 0;
  margin-top: -24px;
  display: inline-block;
  @media (max-width: 800px) {
    /* margin-top: -8px; */
    display: block;
    margin-right: 16px;
  }
`

const TitleUndStroke = styled.h3`
  animation: HeroAnimation 1.3s 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  text-align: left;
  font-family: "GT-Alpina-Extended-Regular";

  text-transform: none;
  color: #9a9eff;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`

const HaarigMask = styled.div`
  /* display: inline-block; */
  overflow: hidden;
  padding: 10px 0;
  margin-top: -16px;
`

const TitleHaarig = styled.h3`
  text-align: left;
  font-family: "GT-Alpina-Extended-Regular";

  text-transform: none;
  color: #000000;
  text-shadow: none;
  animation: HeroAnimation 1.3s 1.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
`

const TitleJahr = styled.h3`
  animation: HeroAnimation 1.2s 2.3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  z-index: 199;
  position: absolute;
  text-align: right;
  right: 20px;
  bottom: 90px;
  font-family: "GT-Alpina-Extended-Regular";

  text-transform: none;
  color: #000000;
`

// Datum und Ort
// const InfoGroup = styled.div`
//   margin: 60px 0 300px 290px;
//   z-index: 99;

//   @media (max-width: 900px) {
//     margin: 60px 0 300px 100px;
//   }
//   @media (max-width: 768px) {
//     margin: 60px 0 300px 20px;
//   }
// `

// const DateMask = styled.div`
//   margin-top: 50px;
//   overflow: hidden;
// `

const Datum = styled.h3`
  /* animation: HeroAnimation 1.3s 1.4s forwards cubic-bezier(0.2, 0.8, 0.2, 1); */
  /* opacity: 0; */
  color: white;
`

// const PlaceMask = styled.div`
//   /* display: inline-block; */
//   overflow: hidden;
// `

const InfoText = styled.h3`
  color: black;
  padding: 6px 0;
  /* animation: HeroAnimation 1.3s 1.6s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0; */
`

const InstagramSection = styled.div`
  margin-top: 60px;
`

const InstaButton = styled.div`
  margin-top: 10px;
`

const ImageWrapper = styled.div`
  width: 100vh;
  height: 100vw;
  overflow: hidden;
`

// LOGO - KuH
const Logo = styled.img`
  width: 300px;
  animation: TicketButtonAnimation 1.8s 0.6s forwards
    cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  visibility: hidden;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    width: 240px;
  }

  @keyframes TicketButtonAnimation {
    0% {
      visibility: visible;
      opacity: 0;
      transform: translateY(10px);
    }

    100% {
      opacity: 1;
      visibility: visible;
      transform: translateY(0px);
    }
  }
`

const LinkInline = styled.a``

const IconGroup = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  & > :hover {
    cursor: pointer;
  }
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

const Icon = styled.img`
  /* margin-top: -2px; */
  width: 28px;
  height: 28px;
  align-self: center;
  color: white;

  /* animation: HeroAnimation 1.3s 1.6s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0; */

  @media (max-width: 800px) {
    margin-top: 2px;
    width: 16px;
    height: 16px;
  }
`

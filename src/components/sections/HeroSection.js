import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// import TicketBackground from "/static/icons/ticket-ausverkauft.svg"

// import useAutoCount from "../../helper/useAutoCount"
import useCamperCount from "../../helper/useCamperCount"
import useAudienceCount from "../../helper/useAudienceCount"
import TicketButton from "../buttons/TicketButton"

import { FrontpageHeadline, FrontpageInfos } from "../styles/TextStyles"

export default function HeroSection() {
  // Auto Count
  // const autoCount = useAutoCount()

  // Camper Count
  const camperCount = useCamperCount()

  // Audience Counts
  const audienceCount = useAudienceCount()
  const maxAudience = 1

  return (
    <Container>
      <Content3erGrid>
        <Column1>
          <TitleLine>
            <KleinMask>
              <TitleKlein> Klein </TitleKlein>
            </KleinMask>

            <UndMask>
              <TitleUndStroke> und </TitleUndStroke>
            </UndMask>
            <HaarigMask>
              <TitleHaarig>Haarig</TitleHaarig>
            </HaarigMask>
          </TitleLine>
        </Column1>
        <Column2>
          <DateMask>
            <Datum>14 — 17/07/2023</Datum>
          </DateMask>
          <PlaceMask>
            <Place>Bad Wildbad</Place>
          </PlaceMask>
        </Column2>
        <Column3>
          <DateMask>
            <Datum>More Infos soon...</Datum>
          </DateMask>
        </Column3>
      </Content3erGrid>
      <TicketWrapper to={audienceCount < maxAudience ? "/tickets" : "/voll"}>
        {/* <TicketButton /> */}
      </TicketWrapper>

      {/* <YearMask>
        <TitleJahr> 2023 </TitleJahr>
      </YearMask> */}
      {/* <ArtistMask>
          <TitleArtist> Artwork: Karla Gondekova </TitleArtist>
        </ArtistMask> */}

      <InfoGroup></InfoGroup>
    </Container>
  )
}

const Container = styled.div`
  /* width: auto; */
  overflow: hidden;
  /* position: relative; */
  @media (max-width: 768px) {
    height: 650px;
  }
`

const Content3erGrid = styled.div`
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100vh;
  padding-top: 12px;
`

const Column1 = styled.div`
  display: grid;
  /* align-content: center; */
  /* background-color: red; */
  /* opacity: 0.4; */
  padding: 20px;
`
const Column2 = styled.div`
  /* background-color: red; */
  /* opacity: 0.2; */
  padding: 20px;
`
const Column3 = styled.div`
  /* background-color: red; */
  /* opacity: 0.4; */
  padding: 20px;
`

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

const TitleLine = styled.div`
  /* justify-content: left; */
  /* z-index: 2; */

  /* @media (max-width: 768px) {
    padding: 20px 50px;
    margin-left: 0px;
  }

  @media (max-width: 700px) {
    padding: 20px 20px;
    margin-left: 0px;
  }

  @media (min-width: 1650px) {
    padding: 20px 30px;
    margin-left: 0px;
  } */
`

// TITLE - Klein und Haarig

const KleinMask = styled.div`
  display: inline-block;
  overflow: hidden;
  padding: 8px 0;
  margin-right: 20px;
`

const TitleKlein = styled(FrontpageHeadline)`
  z-index: 20;
  /* display: block; */
  text-align: left;
  font-family: "GT-Alpina-Extended-Regular";
  text-transform: none;
  color: #000000;
  animation: HeroAnimation 1.3s 0.7s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;

  @keyframes HeroAnimation {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }

    100% {
      opacity: 1;
      transform: translateY(2px);
    }
  }
`

const UndMask = styled.div`
  overflow: hidden;
  padding: 8px 8px 8px 0;
  margin-top: -24px;
  display: inline-block;
  @media (max-width: 700px) {
    margin-top: -8px;
    margin-right: 16px;
  }
`

const TitleUndStroke = styled(FrontpageHeadline)`
  animation: HeroAnimation 1.3s 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  text-align: left;
  font-family: "GT-Alpina-Extended-Regular";

  text-transform: none;
  color: #f6f4ee;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`

const HaarigMask = styled.div`
  display: inline-block;
  overflow: hidden;
  padding: 8px 0;
  margin-top: -16px;
  @media (max-width: 700px) {
    margin-top: -8px;
  }
`

const TitleHaarig = styled(FrontpageHeadline)`
  text-align: left;
  font-family: "GT-Alpina-Extended-Regular";

  text-transform: none;
  color: #000000;
  text-shadow: none;
  animation: HeroAnimation 1.3s 1.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
`

const YearMask = styled.div`
  display: inline-block;
  overflow: hidden;
  padding: 8px 0;
  @media (max-width: 700px) {
    margin-top: -8px;
  }
`

const TitleJahr = styled(FrontpageHeadline)`
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

const ArtistMask = styled.div`
  display: inline-block;
  overflow: hidden;
  padding: 8px 0;

  @media (max-width: 700px) {
    margin-top: -8px;
  }
`

const TitleArtist = styled.h5`
  position: absolute;
  z-index: 100;
  text-align: left;
  left: -60px;
  bottom: 24%;
  font-family: "GT-Alpina-Extended-Regular";
  font-size: 14px;
  color: #5a5a5a;

  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  writing-mode: lr-tb;

  @media (max-width: 768px) {
    left: -50px;
    bottom: 23%;
    font-size: 10px;
  }

  @media (max-width: 700px) {
  }
`

// Datum und Ort Pills

const InfoGroup = styled.div`
  position: absolute;
  margin: 60px 0 300px 290px;
  z-index: 99;
  /* width: 500px; */

  color: black;

  @media (max-width: 900px) {
    margin: 60px 0 300px 100px;
  }
  @media (max-width: 768px) {
    margin: 60px 0 300px 20px;
  }
`

const DateMask = styled.div`
  /* margin-top: 100px; */
  overflow: hidden;
  padding: 8px 8px 0px 0;
  @media (max-width: 700px) {
    margin-top: -8px;
  }
`

const Datum = styled(FrontpageInfos)`
  animation: HeroAnimation 1.3s 1.4s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  margin-bottom: 8px;
`

const PlaceMask = styled.div`
  display: inline-block;
  overflow: hidden;
  @media (max-width: 700px) {
    margin-top: -8px;
  }
`

const Place = styled(FrontpageInfos)`
  animation: HeroAnimation 1.3s 1.6s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
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

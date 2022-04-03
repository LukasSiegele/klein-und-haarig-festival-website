import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import LeitgrafikImage1 from "../../../public/images/LeitgrafikImage1.png"
import LeitgrafikImage2 from "../../../public/images/LeitgrafikImage2.png"
import LeitgrafikImage3 from "../../../public/images/LeitgrafikImage3.png"
import LeitgrafikImage4 from "../../../public/images/LeitgrafikImage4.png"
import LeitgrafikImage5 from "../../../public/images/LeitgrafikImage5.png"
import LeitgrafikImage6 from "../../../public/images/LeitgrafikImage6.png"
import LeitgrafikImage7 from "../../../public/images/LeitgrafikImage7.png"
import LeitgrafikImage8 from "../../../public/images/LeitgrafikImage8.png"
import LeitgrafikImage9 from "../../../public/images/LeitgrafikImage9.png"

import TicketBackground from "/static/icons/ticket-ausverkauft.svg"

import useAudienceCount from "../../helper/useAudienceCount"
import useAutoCount from "../../helper/useAutoCount"
import useCamperCount from "../../helper/useCamperCount"
import TicketButton from "../buttons/TicketButton"

export default function HeroSection() {
  // Audience Counts
  const audienceCount = useAudienceCount()
  const maxAudience = 200

  // Auto Count
  const autoCount = useAutoCount()

  // Camper Count
  const camperCount = useCamperCount()

  return (
    <Container>
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
        <YearMask>
          <TitleJahr> 2022 </TitleJahr>
        </YearMask>
      </TitleLine>
      <TitleProps> Artwork: Karla Gondekova </TitleProps>
      <InfoGroup>
        <DateMask>
          <Date>Fr 15 - Mo 18 Juli</Date>
        </DateMask>
        <PlaceMask>
          <Place>Bad Wildbad</Place>
        </PlaceMask>
      </InfoGroup>
      <TicketWrapper>
        <TicketGroup
          to={audienceCount < maxAudience ? "/tickets" : "/voll"}
          // to={"/voll"}
        >
          <TicketButton />
          {/* <TicketLabel>
                      {audienceCount < maxAudience
                      ? "Tickets"
                      : "Ticketverkauf pausiert"}
                  </TicketLabel> */}
        </TicketGroup>
      </TicketWrapper>
      <ImageWrapper>
        <LeitgrafikRedLineBlackBrush src={LeitgrafikImage1} />
        <LeitgrafikPurpleBrush src={LeitgrafikImage2} />
        <LeitgrafikBlackLinesRedBrush src={LeitgrafikImage3} />
        <LeitgrafikBlackLinesFace src={LeitgrafikImage4} />
        <LeitgrafikRedLines src={LeitgrafikImage5} />
        <LeitgrafikPurpleSprinkles src={LeitgrafikImage6} />
        <LeitgrafikYellow1 src={LeitgrafikImage7} />
        <LeitgrafikYellow2 src={LeitgrafikImage8} />
        <LeitgrafikYellowBall src={LeitgrafikImage9} />
      </ImageWrapper>
    </Container>
  )
}

const Container = styled.div`
  background-color: none;
  width: auto;
  height: 100vh;
  overflow: hidden;
  position: relative;
  /* display: grid; */
`

const Wrapper = styled.div`
  /* overflow: hidden; */
`

const TitleLine = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  justify-content: left;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 20px 50px;
    margin-left: 0px;
  }

  @media (max-width: 700px) {
    padding: 20px 30px;
    margin-left: 0px;
  }
`

// TITLE - Klein und Haarig

const KleinMask = styled.div`
  display: block;
  overflow: hidden;
  padding: 8px 0;
`

const TitleKlein = styled.h1`
  z-index: 20;
  /* display: block; */
  text-align: left;
  font-family: "GT-Alpina-Extended-Regular";
  font-size: 120px;
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

  @media (max-width: 768px) {
    font-size: 100px;
  }

  @media (max-width: 700px) {
    font-size: 90px;
  }
`

const UndMask = styled.div`
  overflow: hidden;
  padding: 8px 30px 8px 0;
  display: inline-block;
  @media (max-width: 700px) {
    margin-top: -8px;
  }
`

const TitleUndStroke = styled.h1`
  animation: HeroAnimation 1.3s 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  text-align: left;
  font-family: "GT-Alpina-Extended-Regular";
  font-size: 120px;
  text-transform: none;
  color: #f6f4ee;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;

  @media (max-width: 768px) {
    font-size: 100px;
  }

  @media (max-width: 700px) {
    font-size: 90px;
  }
`

const HaarigMask = styled.div`
  display: inline-block;
  overflow: hidden;
  padding: 8px 0;
  @media (max-width: 700px) {
    margin-top: -8px;
  }
`

const TitleHaarig = styled.h1`
  text-align: left;
  font-family: "GT-Alpina-Extended-Regular";
  font-size: 120px;
  text-transform: none;
  color: #000000;
  text-shadow: none;
  animation: HeroAnimation 1.3s 1.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 100px;
  }

  @media (max-width: 700px) {
    font-size: 90px;
  }
`

const YearMask = styled.div`
  display: inline-block;
  overflow: hidden;
  padding: 8px 0;
  @media (max-width: 700px) {
    margin-top: -8px;
  }
`

const TitleJahr = styled.h1`
  animation: HeroAnimation 1.2s 2.3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  z-index: 200;
  position: absolute;
  text-align: right;
  right: 20px;
  bottom: 90px;
  font-family: "GT-Alpina-Extended-Regular";
  font-size: 120px;
  text-transform: none;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 100px;
  }

  @media (max-width: 700px) {
    font-size: 90px;
  }
`
const TitleProps = styled.h5`
  position: absolute;
  text-align: left;
  left: -6%;
  bottom: 25%;
  font-family: "GT-Alpina-Extended-Regular";
  font-size: 14px;
  color: #5a5a5a;

  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  writing-mode: lr-tb;

  @media (max-width: 768px) {
    left: -10%;
    bottom: 22%;
    font-size: 10px;
  }

  @media (max-width: 700px) {
    left: -10%;
    bottom: 22%;
    font-size: 10px;
  }
`

// Datum und Ort Pills

const InfoGroup = styled.div`
  position: absolute;
  align-items: center;
  top: 320px;
  left: 16%;
  width: 500px;
  height: 100vh;
  color: black;

  @media (max-width: 860px) {
    top: 360px;
    left: 38%;
  }

  @media (max-width: 700px) {
    top: 360px;
    left: 38%;
  }
`

const DateMask = styled.div`
  /* display: inline-block; */
  overflow: hidden;
  padding: 8px 0;
  @media (max-width: 700px) {
    margin-top: -8px;
  }
`

const Date = styled.h3`
  animation: HeroAnimation 1.3s 1.4s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  font-family: "GT-Alpina-Extended-Regular";
  /* background-color: white; */
  width: 300px;

  text-align: center;
  border-radius: 64px;
  border: 2px solid #000000;
  padding: 16px;
  margin-bottom: 12px;

  @media (max-width: 860px) {
    width: 200px;
    font-size: 18px;
    border: 1px solid #000000;
  }

  @media (max-width: 700px) {
    width: 180px;
    font-size: 16px;
  }
`

const PlaceMask = styled.div`
  display: inline-block;
  overflow: hidden;
  padding: 8px 0;
  @media (max-width: 700px) {
    margin-top: -8px;
  }
`

const Place = styled.h3`
  animation: HeroAnimation 1.3s 1.6s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  font-family: "GT-Alpina-Extended-Regular";
  /* background-color: white; */
  width: 250px;
  text-align: center;
  border-radius: 64px;
  border: 2px solid #000000;
  padding: 16px;

  @media (max-width: 860px) {
    width: 160px;
    font-size: 18px;
    border: 1px solid #000000;
  }

  @media (max-width: 700px) {
    width: 150px;
    font-size: 16px;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

// LEITGRAFIK - Positionierung einzelner Images
const LeitgrafikRedLineBlackBrush = styled.img`
  position: absolute;
  right: -5%;
  top: 0%;
  width: 27%;
  height: auto;

  @media (max-width: 768px) {
    top: 0%;
    width: 40%;
    height: auto;
  }
`

const LeitgrafikPurpleBrush = styled.img`
  position: absolute;
  bottom: 20%;
  left: 35%;
  width: 16%;
  height: auto;

  @media (max-width: 768px) {
    bottom: 18%;
    left: 8%;
    width: 30%;
    height: auto;
  }
`

const LeitgrafikBlackLinesRedBrush = styled.img`
  position: absolute;
  bottom: 8%;
  left: 15%;
  width: 15%;
  height: auto;

  @media (max-width: 768px) {
    display: none;
    bottom: 18%;
    left: -10%;
    width: 30%;
    height: auto;
  }
`

const LeitgrafikBlackLinesFace = styled.img`
  position: absolute;
  top: 35%;
  left: -2%;
  width: 17%;
  height: auto;

  @media (max-width: 768px) {
    top: 43%;
    left: -5%;
    width: 40%;
    height: auto;
  }
`

const LeitgrafikRedLines = styled.img`
  position: absolute;
  bottom: -5%;
  left: 0%;
  width: 15%;
  height: auto;

  @media (max-width: 768px) {
    top: 90%;
    left: -5%;
    width: 20%;
    height: auto;
  }
`

const LeitgrafikPurpleSprinkles = styled.img`
  position: absolute;
  top: 65%;
  right: 32%;
  width: 30%;
  height: auto;

  @media (max-width: 1000px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    top: 70%;
    right: 32%;
    width: 65%;
    height: auto;
  }
`

const LeitgrafikYellow1 = styled.img`
  position: absolute;
  top: -120px;
  left: 8%;
  width: 300px;
  height: auto;
  z-index: 0;

  @media (max-width: 850px) {
    left: -10%;
  }

  @media (max-width: 700px) {
    width: 240px;
  }
`

const LeitgrafikYellow2 = styled.img`
  position: absolute;
  top: -20px;
  left: 35%;
  width: 380px;
  height: auto;
  z-index: 1;

  @media (max-width: 850px) {
    left: 28%;
    top: 120px;
  }

  @media (max-width: 700px) {
    width: 240px;
    top: 120px;
  }
`

const LeitgrafikYellowBall = styled.img`
  position: absolute;
  bottom: -100px;
  right: 60px;
  width: 500px;
  height: auto;
  z-index: 1;

  @media (max-width: 850px) {
    bottom: -100px;
    right: 0px;
    width: 450px;
  }

  @media (max-width: 700px) {
    bottom: -70px;
    right: 0px;
    width: 400px;
  }
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

const TicketWrapper = styled.div`
  display: none;
  z-index: 200;
  position: fixed;
  scale: 1.4;
  top: 50vh;
  left: 25vw;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  :hover {
    /* transform: translateY(-10px); */
    /* transform: scale(1.03);
    cursor: pointer; */
  }

  @media (max-width: 700px) {
    left: 10vw;
  }
`

const TicketGroup = styled(Link)`
  animation: TicketButtonAnimation 2s 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
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

  @keyframes TicketButtonAnimation {
    0% {
      visibility: visible;
      opacity: 0;
      transform: translateY(0px);
    }

    100% {
      opacity: 1;
      visibility: visible;
      transform: translateY(0px);
    }
  }
`
const TicketLabel = styled.h3`
  text-align: center;
  @media (max-width: 700px) {
    font-size: 18px;
  }
`

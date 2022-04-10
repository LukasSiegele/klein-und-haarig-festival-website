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
  const maxAudience = 200

  return (
    <Container>
      <TicketWrapper to={audienceCount < maxAudience ? "/tickets" : "/voll"}>
        <TicketButton />
      </TicketWrapper>
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
        <ArtistMask>
          <TitleArtist> Artwork: Karla Gondekova </TitleArtist>
        </ArtistMask>
      </TitleLine>
      <InfoGroup>
        <DateMask>
          <Datum>Fr 15 - Mo 18 Juli</Datum>
        </DateMask>
        <PlaceMask>
          <Place>Bad Wildbad</Place>
        </PlaceMask>
      </InfoGroup>

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
  @media (max-width: 768px) {
    height: 650px;
  }
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
  padding-top: 12px;
  padding-left: 20px;
  justify-content: left;
  z-index: 2;

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
  display: block;
  overflow: hidden;
  padding: 8px 0;
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

  /* @media (min-width: 319px) {
    font-size: 70px;
  }

  @media (min-width: 420px) {
    font-size: 100px;
  }

  @media (min-width: 1023px) {
    font-size: 130px;
  }

  @media (min-width: 1365px) {
    font-size: 140px;
  }

  @media (min-width: 1650px) {
    font-size: 160px;
  } */
`

const UndMask = styled.div`
  overflow: hidden;
  padding: 8px 8px 8px 0;
  margin-right: 32px;
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

  /* @media (min-width: 319px) {
    font-size: 70px;
  }

  @media (min-width: 420px) {
    font-size: 100px;
  }

  @media (min-width: 1023px) {
    font-size: 130px;
  }

  @media (min-width: 1365px) {
    font-size: 140px;
  }

  @media (min-width: 1650px) {
    font-size: 160px;
  } */
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

  /* @media (min-width: 319px) {
    font-size: 70px;
  }

  @media (min-width: 420px) {
    font-size: 100px;
  }

  @media (min-width: 1023px) {
    font-size: 130px;
  }

  @media (min-width: 1365px) {
    font-size: 140px;
  }

  @media (min-width: 1650px) {
    font-size: 160px;
  } */
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

  /* @media (min-width: 319px) {
    font-size: 70px;
  }

  @media (min-width: 420px) {
    font-size: 100px;
  }

  @media (min-width: 1023px) {
    font-size: 130px;
  }

  @media (min-width: 1365px) {
    font-size: 140px;
  }

  @media (min-width: 1650px) {
    font-size: 160px;
  } */
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

  /* @media (min-width: 319px) {
    top: 43%;
    left: 7%;
  }

  @media (min-width: 370px) {
    top: 850px;
    left: 7%;
  }

  @media (min-width: 400px) {
    top: 45%;
    left: 7%;
  }

  @media (min-width: 530px) {
    top: 40%;
    left: 7%;
  }

  @media (min-width: 580px) {
    top: 400px;
    left: 7%;
  }

  @media (min-width: 800px) {
    top: 40%;
    left: 5%;
  }

  @media (min-width: 900px) {
    top: 40%;
    left: 5%;
  }

  @media (min-width: 1023px) {
    top: 40%;
    left: 38%;
  }

  @media (min-width: 1365px) {
    top: 450px;
    left: 38%;
  }

  @media (min-width: 1650px) {
    top: 45%;
    left: 38%;
  }

  // @media (min-width: 1365px) {
  //   bottom: 38%;
  //   left: 38%;
  // }

  // @media (min-width: 1650px) {
  //   width: 700px;
  //   bottom: 430px;
  //   left: 40%;
  // } */
`

const DateMask = styled.div`
  /* display: inline-block; */
  overflow: hidden;
  padding: 8px 0;
  @media (max-width: 700px) {
    margin-top: -8px;
  }
`

const Datum = styled(FrontpageInfos)`
  animation: HeroAnimation 1.3s 1.4s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;

  /* background-color: white; */
  /* width: 203px; */
  width: auto;
  text-align: center;
  border-radius: 64px;
  border: 2px solid black;
  padding: 16px 24px;
  margin-bottom: 8px;

  @media (max-width: 700px) {
    padding: 8px 16px;
    border: 1px solid #000000;
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

const Place = styled(FrontpageInfos)`
  animation: HeroAnimation 1.3s 1.6s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  width: auto;
  font-family: "GT-Alpina-Extended-Regular";
  /* background-color: white; */
  /* width: 250px; */
  text-align: center;
  border-radius: 64px;
  border: 2px solid #000000;
  padding: 16px 24px;
  @media (max-width: 700px) {
    padding: 8px 16px;
    border: 1px solid #000000;
  }
`

const ImageWrapper = styled.div`
  width: 100vh;
  height: 100vw;
  overflow: hidden;
`

// LEITGRAFIK - Positionierung einzelner Images
const LeitgrafikRedLineBlackBrush = styled.img`
  position: absolute;
  right: -5%;
  top: 100px;
  width: 27%;
  height: auto;

  @media (max-width: 768px) {
    top: 300px;
    width: 40%;
    height: auto;
  }

  @media (min-width: 1620px) {
    top: -50px;
    width: 30%;
    height: auto;
  }
`

const LeitgrafikPurpleBrush = styled.img`
  position: absolute;
  bottom: 20%;
  left: 35%;
  width: 16%;
  height: auto;

  @media (min-width: 320px) {
    display: none;
  }

  @media (max-width: 1364px) {
    bottom: 15%;
    left: 15%;
    width: 15%;
    height: auto;
  }

  @media (min-width: 1620px) {
    bottom: 22%;
    left: 23%;
    width: 11%;
    height: auto;
  }
`

const LeitgrafikBlackLinesRedBrush = styled.img`
  position: absolute;
  bottom: -80px;
  left: 15%;
  width: 200px;
  height: auto;

  @media (max-width: 818px) {
    display: none;
  }

  @media (min-width: 819px) {
    bottom: 50px;
    left: 16%;
    width: 200px;
  }

  @media (min-width: 1366px) {
    bottom: 60px;
    width: 240px;
  }

  @media (min-width: 1640px) {
    bottom: 50px;
    left: 18%;
    width: 300px;
  }
`

const LeitgrafikBlackLinesFace = styled.img`
  position: absolute;
  top: 300px;
  left: -2%;
  width: 280px;

  @media (max-width: 919px) {
    visibility: hidden;
  }

  /* @media (min-width: 920px) {
    visibility: visible;
    top: 300px;
    left: -5%;
    width: 240px;
  }

  @media (min-width: 1365px) {
    visibility: visible;
    top: 350px;
    left: -2%;
    width: 320px;
  }

  @media (min-width: 1640px) {
    visibility: visible;
    top: 500px;
    left: -2%;
    width: 440px;
  } */
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

  @media (min-width: 1620px) {
    bottom: -5%;
    left: 0%;
    width: 20%;
    height: auto;
  }
`

const LeitgrafikPurpleSprinkles = styled.img`
  position: absolute;
  bottom: -100px;
  right: 400px;
  width: 400px;
  height: auto;

  @media (max-width: 500px) {
    visibility: hidden;
    /* bottom: 0px; */
  }

  /* @media (max-width: 1000px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    top: 70%;
    right: 32%;
    width: 65%;
    height: auto;
  }

  @media (min-width: 1650px) {
    top: 55%;
    right: 22%;
    width: 45%;
  } */
`

const LeitgrafikYellow1 = styled.img`
  position: absolute;
  top: -120px;
  left: 8%;
  width: 300px;
  height: auto;
  z-index: 0;

  @media (min-width: 319px) {
    bottom: 230px;
    width: 240px;
  }

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
  width: 300px;
  bottom: -30px;
  height: auto;
  z-index: 1;

  @media (max-width: 374px) {
    position: fixed;
    bottom: -20px;
    right: 20px;
    width: 200px;
  }

  @media (min-width: 375px) {
    bottom: -60px;
    right: 20px;
    width: 350px;
  }

  @media (min-width: 410px) {
    bottom: -30px;
    right: 40px;
    width: 350px;
  }

  @media (min-width: 850px) {
    bottom: -100px;
    right: 0px;
    width: 450px;
  }

  @media (min-width: 1020px) {
    bottom: -110px;
    right: 40px;
    width: 550px;
  }

  @media (min-width: 1620px) {
    bottom: -140px;
    right: 30px;
    width: 650px;
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

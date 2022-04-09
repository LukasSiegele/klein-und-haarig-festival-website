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

import { MasterHeadline } from "../styles/TextStyles"

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
        <ArtistMask>
          <TitleArtist> Artwork: Karla Gondekova </TitleArtist>
        </ArtistMask>
      </TitleLine>
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

  @media (min-width: 1650px) {
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

const TitleKlein = styled(MasterHeadline)`
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

  @media (min-width: 319px) {
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

const TitleUndStroke = styled(MasterHeadline)`
  animation: HeroAnimation 1.3s 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  text-align: left;
  font-family: "GT-Alpina-Extended-Regular";

  text-transform: none;
  color: #f6f4ee;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;

    @media (min-width: 319px) {
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

const TitleHaarig = styled(MasterHeadline)`
  text-align: left;
  font-family: "GT-Alpina-Extended-Regular";

  text-transform: none;
  color: #000000;
  text-shadow: none;
  animation: HeroAnimation 1.3s 1.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;

  
  @media (min-width: 319px) {
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

const TitleJahr = styled(MasterHeadline)`
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

  @media (min-width: 319px) {
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
  }
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
  bottom: 200px;
  left: 16%;
  width: 500px;
  color: black;

  @media (min-width: 319px) {
    bottom: 230px;
    left: 7%;
  }

  @media (min-width: 414px) {
    bottom: 300px;
    left: 7%;
  }

  @media (min-width: 530px) {
    bottom: 200px;
    left: 7%;
  }

  @media (min-width: 800px) {
    bottom: 450px;
    left: 5%;
  }

  @media (min-width: 900px) {
      bottom: 450px;
      left: 5%;
    }

  @media (min-width: 1023px) {
    bottom: 350px;
    left: 38%;
  }

  @media (min-width: 1365px) {
    bottom: 350px;
    left: 38%;
  }

  @media (min-width: 1650px) {
    bottom: 350px;
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
  // }
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

  @media (max-width: 700px) {
    width: 180px;
    font-size: 16px;
  }

    @media (max-width: 860px) {
    width: 200px;
    font-size: 18px;
    border: 1px solid #000000;
  }

  @media (min-width: 1650px) {
    width: 340px;
    font-size: 32px;
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

  @media (min-width: 1650px) {
    width: 280px;
    font-size: 32px;
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
  top: 0%;
  width: 27%;
  height: auto;

  @media (max-width: 768px) {
    top: 0%;
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

  @media (max-width: 568px) {
    display: none;
  }

  @media (min-width: 768px) {
    bottom: 50px;
    left: 16%;
    width: 240px;
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
  width: 240px;

  @media (max-width: 380px) {
    display: none;
  }

  @media (max-width: 800px) {
    top: 300px;
    left: -5%;
    width: 240px;
  }

  @media (max-width: 896px) {
    top: 300px;
    left: -5%;
    width: 240px;
  }


  @media (min-width: 1365px) {
    top: 350px;
    left: -2%;
    width: 320px;
  }

  @media (min-width: 1640px) {
    top: 500px;
    left: -2%;
    width: 440px;
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

  @media (min-width: 1620px) {
    bottom: -5%;
    left: 0%;
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
  }
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

const TicketWrapper = styled.div`
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

  @media (min-width: 1200px) {
    top: 5vh;
    left: 62vw;
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

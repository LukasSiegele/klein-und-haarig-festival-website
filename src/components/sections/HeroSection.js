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
        <TitleKlein> Klein </TitleKlein>
        <TitleUndStroke>
          {" "}
          und <TitleHaarig>Haarig </TitleHaarig>{" "}
        </TitleUndStroke>
      </TitleLine>
      <InfoGroup>
        <Date>Fr 15 - Mo 18 Juli</Date>
        <Place>Bad Wildbad</Place>
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
      </ImageWrapper>
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
    </Container>
  )
}

const Container = styled.div`
  overflow: hidden;
  background-color: none;
  width: 100vw;
  height: 100vh;
`

const TitleLine = styled.div`
  margin-left: 167px;
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

const TitleKlein = styled.h1`
  display: block;
  text-align: left;
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

const TitleUndStroke = styled.h1`
  display: inline;
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

const TitleHaarig = styled.h1`
  display: contents;
  text-align: left;
  font-family: "GT-Alpina-Extended-Regular";
  font-size: 120px;
  text-transform: none;
  color: #000000;
  text-shadow: none;

  @media (max-width: 768px) {
    font-size: 100px;
  }

  @media (max-width: 700px) {
    font-size: 90px;
  }
`

const InfoGroup = styled.div`
  padding-top: 20px;
  padding-left: 20%;
  position: absolute;
  align-items: center;
  left: 167px;
  top: 340px;
  width: 500px;
  height: 100vh;
  color: black;

  @media (max-width: 768px) {
    left: 0px;
  }

  @media (max-width: 700px) {
    left: 0px;
  }
`

const Date = styled.h3`
  font-family: "GT-Alpina-Extended-Regular";
  width: 280px;
  font-size: 24px;
  text-align: center;
  border-radius: 64px;
  border: 2px solid #000000;
  padding: 16px;
  margin-bottom: 12px;

  @media (max-width: 768px) {
  width: 200px;
  font-size: 18px;
  }

  @media (max-width: 700px) {
    width: 180px;
    font-size: 16px;
  }
`

const Place = styled.h3`
  font-family: "GT-Alpina-Extended-Regular";
  width: 220px;
  font-size: 24px;
  text-align: center;
  border-radius: 64px;
  border: 2px solid #000000;
  padding: 16px;

  @media (max-width: 768px) {
    width: 150px;
    font-size: 18px;
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
  top: 5%;
  width: 25%;
  height: auto;

  @media (max-width: 768px) {
    top: 10%;
    width: 50%;
    height: auto;
  }
`

const LeitgrafikPurpleBrush = styled.img`
  position: absolute;
  top: 60%;
  left: 40%;
  width: 17%;
  height: auto;

  @media (max-width: 768px) {
    top: 70%;
    width: 35%;
    height: auto;
  }
`

const LeitgrafikBlackLinesRedBrush = styled.img`
position: absolute;
top: -12%;
left: 55%;
width: 17%;
height: auto;

@media (max-width: 768px) {
  top: -9%;
  left: 55%;
  width: 35%;
  height: auto;
}
`

const LeitgrafikBlackLinesFace = styled.img`
position: absolute;
top: 35%;
left: 10%;
width: 20%;
height: auto;

@media (max-width: 768px) {
  top: 55%;
  left: -5%;
  width: 40%;
  height: auto;
}
`

const LeitgrafikRedLines = styled.img`
position: absolute;
top: 90%;
left: 10%;
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
left: 55%;
width: 30%;
height: auto;

@media (max-width: 768px) {
  top: 70%;
  left: 55%;
  width: 65%;
  height: auto;
}
`

const LeitgrafikYellow1 = styled.img`
position: absolute;
top: -15%;
left: 8%;
width: 25%;
height: auto;
z-index: 1;

@media (max-width: 768px) {
}
`

const LeitgrafikYellow2 = styled.img`
position: absolute;
top: -10%;
left: 35%;
width: 25%;
height: auto;

@media (max-width: 768px) {
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
  position: fixed;
  top: 10%;
  right: 10%;
  scale: 1.2;
  transform: translate(-50%, -50%);
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  :hover {
    /* transform: translateY(-10px); */
    /* transform: scale(1.03);
    cursor: pointer; */
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

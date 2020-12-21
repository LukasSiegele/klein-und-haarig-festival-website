import React from "react"
import styled from "styled-components"

import HeroImage from "../images/KUH-HeroBackground-4.png"
import FlussImage from "../images/Fluss.png"
import Blob from "./Blob"

const textOffsetY = "-0.52em"
const textOffsetMobile = "-0.3em"

const HeroContainer = styled.div`
  background: url(${HeroImage}), #000;

  background: url(${HeroImage}),
    radial-gradient(
      circle at bottom,
      rgba(238, 163, 43, 0.7) 0%,
      rgba(240, 94, 40, 1) 35%,
      rgba(215, 65, 9, 1) 100%
    );

  background: url(${HeroImage}),
    radial-gradient(
      circle at bottom,
      rgba(251, 119, 22, 1) 0%,
      rgba(211, 11, 11, 1) 35%,
      rgba(165, 2, 2, 1) 100%
    );
  background: url(${HeroImage}),
    radial-gradient(
      circle at bottom,
      rgba(3, 250, 129, 1) 0%,
      rgba(107, 35, 178, 1) 45%,
      rgba(0, 0, 0, 1) 100%
    );
  background: url(${HeroImage}),
    radial-gradient(
      circle at bottom,
      rgba(255, 157, 226, 1) 0%,
      rgba(255, 96, 61, 1) 35%,
      rgba(58, 3, 30, 1) 100%
    );
  background: url(${HeroImage}),
    radial-gradient(
      circle at bottom,
      rgba(255, 157, 226, 0.7) 0%,
      rgba(149, 62, 247, 0.7) 35%,
      rgba(255, 255, 255, 0.7) 100%
    ),
    rgba(255, 255, 255, 1);
  /*background: url(${HeroImage}), radial-gradient(circle at bottom, rgba(255,157,226,1) 0%, rgba(255,96,61,1) 35%, rgba(149,62,247,1) 100%);*/

  background: #73aa85;
  background: radial-gradient(
    circle at 70% 100px,
    rgba(170, 250, 59, 1) 0%,
    rgba(241, 250, 59, 1) 15%,
    /* rgba(115, 170, 133, 1) 15% rgba(170, 156, 115, 1) 15% */
      rgba(242, 204, 140, 1) 20%
  );
  background: rgba(242, 204, 140, 1);

  background-size: cover;
  background-position: center;
  /* height: 800px; */
  width: 100%;
  position: relative;
  overflow: hidden;

  /* @media (max-width: 640px) {
    height: 750px;
  } */
`

const HeroTextGroup = styled.div`
  /* max-width: 1260px; */
  padding: 120px 40px;

  @media (max-width: 700px) {
    max-width: 100%;
    padding: 90px 20px;
  }
`

const TextMask = styled.div`
  overflow: hidden;
  padding: 2px 0;
  margin-top: ${textOffsetY};
  display: inline-block;
  @media (max-width: 700px) {
    margin-top: ${textOffsetMobile};
  }
`

const TitleLine1 = styled.h1`
  animation: HeroAnimation 1.3s 0.4s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
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

const TitleLine12 = styled.h1`
  margin-top: 0px;
  top: 5%;
  animation: HeroAnimation 1.3s 0.7s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`

const TextMask2 = styled.div`
  overflow: hidden;
  padding: 2px 0;
  margin-top: ${textOffsetY};
  display: inline-block;
  @media (max-width: 700px) {
    margin-top: ${textOffsetMobile};
  }
`

const TextMask22 = styled.div`
  overflow: hidden;
  padding: 2px 0;
  margin-top: ${textOffsetY};
  display: inline-block;
  @media (max-width: 700px) {
    margin-top: ${textOffsetMobile};
  }
`

const TitleLine2 = styled.h1`
  margin-left: 60px;
  animation: HeroAnimation 1.3s 0.9s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  @media (max-width: 700px) {
    margin-left: 0px;
  }
`

const TitleLine22 = styled.h1`
  animation: HeroAnimation 1.3s 1.1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  @media (max-width: 700px) {
    margin-left: 0px;
  }
`

const TextMaskYear = styled.div`
  overflow: hidden;
  padding: 2px 0;
  margin-top: ${textOffsetY};

  float: right;
  margin-left: auto;
  margin-right: 25%;
  margin-bottom: 100px;

  @media (max-width: 700px) {
    margin-top: ${textOffsetMobile};
  }
`

const Year = styled.h1`
  animation: HeroAnimation 1.3s 1.3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;

  @media (max-width: 700px) {
    float: left;
  }
`

const DetailWrapper = styled.div`
  clear: both;
  margin-bottom: 100px;
  margin-top: 100px;
  margin-left: 20vw;
`

const TextMaskDetail = styled.div`
  overflow: hidden;
  padding: 2px 0;
  margin-top: ${textOffsetY};
  @media (max-width: 700px) {
    margin-top: ${textOffsetMobile};
  }
`

const HeroTitleDetail1 = styled.h3`
  animation: HeroAnimation 1.2s 2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  @media (max-width: 700px) {
    margin: 0px 0;
  }
`
const HeroTitleDetail2 = styled.h3`
  margin-top: 10px;
  animation: HeroAnimation 1.2s 2.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  @media (max-width: 700px) {
    margin: 0px 0;
  }
`

const Hero = () => (
  <HeroContainer>
    <Blob></Blob>
    <HeroTextGroup>
      <TextMask>
        <TitleLine1>Klein&nbsp;</TitleLine1>
      </TextMask>
      <TextMask>
        <TitleLine12>und</TitleLine12>
      </TextMask>
      <br />
      <TextMask2>
        <TitleLine2>Haarig&nbsp;</TitleLine2>
      </TextMask2>
      <TextMask22>
        <TitleLine22>Festival</TitleLine22>
      </TextMask22>
      <TextMaskYear>
        <Year>2021</Year>
      </TextMaskYear>
      <DetailWrapper>
        <TextMaskDetail>
          <HeroTitleDetail1>9—11 Juli</HeroTitleDetail1>
        </TextMaskDetail>
        <TextMaskDetail>
          <HeroTitleDetail2>Bad Wildbad</HeroTitleDetail2>
        </TextMaskDetail>
      </DetailWrapper>
    </HeroTextGroup>
  </HeroContainer>
)

export default Hero

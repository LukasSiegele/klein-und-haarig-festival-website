import React from "react"
import styled from "styled-components"
import Blob from "../blob/Blob"
import { themes } from "../styles/ColorStyles"

export default function HeroSection() {
  return (
    <HeroContainer>
      <Blob />
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
}

const textOffsetY = "-0.52em"
const textOffsetMobile = "-0.3em"

const HeroContainer = styled.div`
  background: ${themes.acid.backgroundColor};

  background-size: cover;
  background-position: center;
  width: 100%;
  position: relative;
  overflow: hidden;
`

const HeroTextGroup = styled.div`
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

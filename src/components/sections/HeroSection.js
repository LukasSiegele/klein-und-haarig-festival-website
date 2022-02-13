import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LeitgrafikImage from "/static/images/Leitgrafik.jpg"
import TicketBackground from "/static/icons/ticket-ausverkauft.svg"

import useAudienceCount from "../../helper/useAudienceCount"
import useAutoCount from "../../helper/useAutoCount"
import useCamperCount from "../../helper/useCamperCount"
import Newsletter from "../form/Newsletter"

export default function HeroSection() {
  // Audience Cuunt
  const audienceCount = useAudienceCount()
  const maxAudience = 359

  // Auto Count
  const autoCount = useAutoCount()

  // Camper Count
  const camperCount = useCamperCount()

  return (
    <Container>
      <Wrapper>
        <TitleLine>
          <Title>Klein und Haarig</Title>
        </TitleLine>

        <InfoGroup>
          <DateGroup>
            <DateGhost />
            <Date>Fr 15. — Mo 18. Juli 2022</Date>
          </DateGroup>
          <PlaceGroup>
            <Place>Bad Wildbad</Place>
            <PlaceGhost />
          </PlaceGroup>
          <NewsletterGroup>
            <Newsletter />
            {/* <NewsletterLink>
            Weitere Infos bald im <NLLink>Newsletter</NLLink>
          </NewsletterLink> */}
          </NewsletterGroup>
        </InfoGroup>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  /* background-color: blue; */
  /* height: 910px; */
  /* overflow: hidden; */
  max-width: 2300px;
  margin: 0 auto;
`

const Wrapper = styled.div`
  display: grid;
  /* grid-template-rows: auto 400px; */

  /* @media (max-width: 768px) {
    grid-template-rows: auto 700px;
  }

  @media (max-width: 700px) {
    grid-template-rows: auto 600px;
  } */
`
// const NLLink = styled.a`
//   border-bottom: 2px solid white;

//   :hover {
//     cursor: pointer;
//     color: grey;
//     border-bottom: 2px solid white;
//   }
// `

const TitleLine = styled.div`
  padding: 20px 90px;
  display: grid;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px 50px;
  }

  @media (max-width: 700px) {
    padding: 20px 20px;
  }
`

const Title = styled.h1`
  text-align: center;

  /* animation: TextAnimation 1.3s 0.5s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  visibility: hidden; */

  @keyframes TextAnimation {
    0% {
      visibility: visible;
      opacity: 0;
    }

    100% {
      opacity: 1;
      visibility: visible;
    }
  }
`

const ImageLine = styled.div`
  display: grid;
  grid-template-columns: 90px auto;

  @media (max-width: 768px) {
    grid-template-columns: 50px auto 50px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 30px auto 30px;
  }
`

const Left = styled.div`
  position: relative;
  display: grid;
  align-items: center;
`

const InfoGroup = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 50px;
  margin: 100px 75px;
  color: white;

  @media (max-width: 950px) {
    gap: 50px;
    margin: 100px 20px 0;
  }

  /* animation: TextAnimation 1.3s 0.5s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  visibility: hidden; */
  /* transform-origin: top left;
  align-self: center; */
`

const DateGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    gap: 0px;
    text-align: center;
  }
`

const Date = styled.h3`
  background: white;
  color: black;
  padding: 15px 30px;
  justify-self: start;
  align-self: center;
  @media (max-width: 950px) {
    justify-self: center;
  }
`
const DateGhost = styled.div``

const Icon = styled.img`
  /* width: 24px;
  height: 24px; */
`

const PlaceGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    gap: 0px;
    text-align: center;
  }
`

const Place = styled.h3`
  background: white;
  color: black;
  padding: 15px 30px;
  justify-self: end;
  align-self: center;
  @media (max-width: 950px) {
    justify-self: center;
  }
`

const PlaceGhost = styled.div``

const NewsletterGroup = styled.div`
  position: relative;
  display: grid;
  justify-self: center;
  color: white;
  margin-top: 150px;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    justify-self: center;
  }
`

const NewsletterLink = styled.h3``

const ImageWrapper = styled.div`
  /* background-color: yellow; */
  /* border-radius: 20px; */
  display: grid;
  align-items: center;
  justify-items: center;
  background-image: url(${LeitgrafikImage});
  background-size: cover;

  @media (max-width: 700px) {
    background-position-x: -80px;
  }

  animation: ImageAnimation 1.8s 1.8s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  transform: scale(1.51);

  @keyframes ImageAnimation {
    0% {
      transform: scale(1.51);
    }

    100% {
      transform: scale(1);
    }
  }
`

const LogoGroup = styled.div`
  display: grid;
  justify-items: center;
  margin-bottom: 40px;
`

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
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  :hover {
    /* transform: translateY(-10px); */
    transform: scale(1.03);
  }
`

const TicketGroup = styled(Link)`
  animation: TicketButtonAnimation 2s 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  visibility: hidden;
  background-image: url(${TicketBackground});
  width: 215px;
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
      transform: translateY(10px);
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

const Right = styled.div``

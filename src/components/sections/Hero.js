import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import HeroAnimation from "../../../static/videos/KuH2023Animation.mp4"
import Artwork from "../../../static/images/HeroArtwork2024.jpg"
import Image1 from "../../../static/images/CN2_32A.png"

import {
  FrontpageHeadline,
  FrontpageInfos,
  TextSmall,
} from "../styles/TextStyles"
import Newsletter from "../form/Newsletter"
import FormButton from "../buttons/FormButton"
import KUHLogo from "../../../static/images/LogoSideNav.png"

export default function Hero() {
  return (
    <Container>
      <ContentContainer>
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
                <Datum> 29.05. — 01.06.2025 </Datum>
                {/* <Datum>06/2024</Datum> */}
              </DateGroup>

              {/* </DateMask> */}
              {/* <DateMask> */}

              <PlaceGroup>
                <LinkInline
                  href="https://goo.gl/maps/bag7SAmH1RZ6YNLZ6"
                  target="_blank"
                >
                  <IconGroup>
                    <Datum>Bad Wildbad</Datum>
                    <Icon src="/icons/linkout.svg"></Icon>
                  </IconGroup>
                </LinkInline>
              </PlaceGroup>

              {/* <NewsletterGroup>
              <InfoText>
                Melde dich zu unserem Newsletter an und bekomme so frühzeitig
                Infos zum Ticket Presale und zum Festival 2024.
              </InfoText>

              <Newsletter></Newsletter>
              <InstagramSection>
                <InfoText>Folge uns auf Instagram</InfoText>
                <InstaButton>
                  <Link
                    to="https://www.instagram.com/kleinundhaarig/"
                    target="_blank"
                  >
                    <FormButton
                      label="@kleinundhaarig"
                      backgroundColor="white"
                      color="black"
                    />
                  </Link>
                </InstaButton>
              </InstagramSection>
            </NewsletterGroup> */}
            </C1Content>

            {/* </DateMask> */}
          </Column1>
          {/* <Column2></Column2> */}
          <Column2>
            {/* <Link to="https://pretix.eu/bunteplatte/kuh2024/" target="_blank">
              <FormButton
                label="Tickets"
                backgroundColor="#d2e403"
                color="black"
              />
            </Link> */}

            <LinkButton>
              <Link to="https://pretix.eu/bunteplatte/kuh2025/">
                <FormButton
                  fontFamily="Ginto"
                  backgroundColor="#000000"
                  color="#CCBBFF"
                  label="Sold out"
                />
              </Link>
            </LinkButton>
          </Column2>
        </ContentGrid>

        {/* <AnimationContainer>
          <ArtworkAnimation autoPlay loop muted>
            <source src={HeroAnimation} type="video/mp4"></source>
          </ArtworkAnimation>
        </AnimationContainer> */}
      </ContentContainer>
      {/* <TicketButton /> */}

      {/* <YearMask>
        <TitleJahr> 2023 </TitleJahr>
      </YearMask> */}
      {/* <ArtistMask>
          <TitleArtist> Artwork: Karla Gondekova </TitleArtist>
        </ArtistMask> */}
    </Container>
  )
}

const LinkButton = styled.div`
  margin-bottom: 20px;
`

const Strike = styled.span`
  text-decoration: line-through wavy #ff4200;
`

const Container = styled.div`
  /* position: relative; */
  /* overflow: hidden; */

  margin-bottom: 0px;
  position: relative;
  background-image: url(${Image1});
  background-size: cover;
  /* height: 100vh; */

  border-bottom: 1px solid black;
  @media (max-width: 1100px) {
    height: auto;
    border-bottom: none;
  }
`

const ContentContainer = styled.div`
  /* position: absolute; */
  display: grid;
`

const ContentGrid = styled.div`
  /* z-index: 10; */
  display: grid;
  height: 94vh;
  /* display: flex; */
  grid-template-columns: auto 1fr;
  padding-top: 20px;

  @media (max-width: 1100px) {
    /* position: absolute; */
    /* z-index: 9; */

    grid-template-columns: auto;
    /* height: auto; */
    grid-template-rows: auto 1fr;
    /* grid-template-rows: repeat(3, auto);
    gap: 30px; */
  }
`

const Column1 = styled.div`
  /* display: grid; */
  /* align-content: center; */
  /* background-color: red; */
  /* opacity: 0.4; */
  /* grid-area: 1 / 1 / 1 / 2; */
  /* z-index: 2; */
  padding: 25px 20px 100px 20px;
  @media (max-width: 800px) {
    padding: 10px 10px 0 10px;
    /* grid-area: revert; */
    /* position: absolute; */
    grid-template-columns: none;
    /* grid-area: 1 / 1 / 2 / 1; */
  }
`
const Column2 = styled.div`
  justify-self: end;
  width: 400px;
  /* position: fixed; */
  /* right: 0; */
  /* top: 0; */
  /* padding: 25px 40px 100px 40px; */
  /* background-color: blue; */
  /* opacity: 0.2; */
  /* grid-area: 1 / 2 / 1 / 3; */
  z-index: 999;

  padding: 25px 20px 0 20px;
  /* border-left: 1px solid black; */
  @media (max-width: 1100px) {
    grid-template-columns: none;
    width: 100%;
    justify-self: start;
    /* grid-area: 2 / 1 / 3 / 1; */
    /* grid-area: revert; */
    /* grid-area: 2 / 1 / 3 / 2; */
    /* position: absolute; */
    /* margin-top: 120px; */
    /* max-width: 360px; */
    /* padding: 20px 20px 0 20px;
    border: 0; */
    padding: 120px 10px 0 10px;
  }
`

const AnimationContainer = styled.div`
  /* overflow: hidden; */
  grid-area: 1 / 1 / 4 / 3;
  @media (max-width: 800px) {
    /* grid-area: revert; */
    /* position: relative; */
  }
`

const NewsletterGroup = styled.div`
  margin-top: 120px;
`

const ArtworkAnimation = styled.video`
  /* position: absolute; */
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  z-index: -9;
  @media (max-width: 1100px) {
    width: auto;
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
  /* max-width: 400p; */
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

const TitleKlein = styled.h3`
  color: white;
  text-shadow: 0px 0px 40px black;
`

const DateGroup = styled.div`
  margin-top: 45px;
`

const PlaceGroup = styled.div`
  margin-top: 10px;
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
  color: red;
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
  text-shadow: 0px 0px 40px black;
`

// const PlaceMask = styled.div`
//   /* display: inline-block; */
//   overflow: hidden;
// `

const InfoText = styled.h3`
  color: white;
  text-shadow: 0px 0px 40px black;
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

// const ImageWrapper = styled.div`
//   width: 100vh;
//   height: 100vw;
//   overflow: hidden;
// `

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
  width: 22px;
  height: 22px;
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

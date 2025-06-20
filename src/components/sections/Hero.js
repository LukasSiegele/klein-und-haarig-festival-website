import React, { useEffect, useState } from "react"
import styled from "styled-components" 
import Lineup from "./Lineup"

import {
  FrontpageHeadline,
  FrontpageInfos,
  TextSmall,
} from "../styles/TextStyles"
import Newsletter from "../form/Newsletter"
import FormButton from "../buttons/FormButton"

export default function Hero() {
  return (
    <Container> 
      <ContentContainer>
        {/* <TitleKlein> */}

        {/* </TitleKlein> */}
        <DatumPlace>
          <KuH src="/icons/Kleinundhaarig.svg"></KuH>
          <Lineup />
          {/* <Datum> Thank you for joining us for the 2025 edition in </Datum>
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
          </PlaceGroup> */}
        </DatumPlace>
        <ButtonGroup>
          {/* <LinkButton>
          <a href="https://pretix.eu/bunteplatte/kuh2025/" target="_blank" rel="noopener noreferrer">
          <FormButton backgroundColor="#fc2546" color="#000" label="Tickets" />
          </a>

          </LinkButton> */}
        </ButtonGroup>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: auto;
  justify-items: center;

  gap: 0;
  margin-bottom: 0px;
  /* position: relative; */

  background-size: cover;

  /* border-bottom: 10px solid black; */
`

const DatumPlace = styled.div`
  margin-top: 12px;
  display: grid;
  padding: 16px;
  justify-items: center;
`

const KuH = styled.img`
  width: 350px;
  margin-top: 40px;

  @media (max-width: 1100px) {
    width: 275px;
    margin-top: 40px;
  }

  @media (max-width: 800px) {
    width: 225px;
  }
  
  @media (max-width: 500px) {
    width: 200px;
  }
  @media (max-width: 300px) {
    width: 150px;
  }
`

const ContentContainer = styled.div`
  /* position: absolute; */
  /* display: grid; */
  width: 500px;
  justify-items: center;
  @media (max-width: 1100px) {
    width: auto;
  }
`

const ButtonGroup = styled.div`
  display: grid;
`

const LinkButton = styled.div`
  justify-self: center;
  width: 150px;
  margin-top: 32px;

  @media (min-width: 1100px) {
    display: none;
  }
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding-top: 20px;
`

const PlaceGroup = styled.div`
  margin-top: 10px;
`

const Datum = styled.h3`
  /* animation: HeroAnimation 1.3s 1.4s forwards cubic-bezier(0.2, 0.8, 0.2, 1); */
  /* opacity: 0; */
  color: black;
  text-align: center;
  /* text-shadow: 0px 0px 40px black; */
`

const LinkInline = styled.a``

const IconGroup = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
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
  color: black;

  /* animation: HeroAnimation 1.3s 1.6s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0; */

  @media (max-width: 800px) {
    margin-top: 2px;
    width: 16px;
    height: 16px;
  }
`

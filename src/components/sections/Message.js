import React from "react"
import styled from "styled-components"
import FaceGrafik from "../../../static/images/Face.png"

import {
  // PageHeader,
  TextSmall,
  // ImageDescription,
  HeadlineRegular,
  HeadlineRegular2,
} from "../styles/TextStyles"

export default function Message() {
  return (
    <Wrapper>
      <Container>
        <MainText>
          Klein und Haarig — 4 Tage Festival in einem idyllischen Tal im
          Schwarzwald, die die elektronische Musikkultur in all ihren Farben und
          Facetten erfahrbar machen.
        </MainText>
        <SecondaryGroup>
          <Icon src="/icons/StarYellow.svg"></Icon>
          <SecondaryText>
            Organisiert von Freunden, dem Bunte Platte e.V. <br /> <br />
            Wir wollen einen nicht kommerziellen Raum schaffen, in dem Menschen
            zusammenkommen und mit ihnen Vielfalt, Offenheit, Toleranz und
            Freiheit feiern.
          </SecondaryText>
        </SecondaryGroup>
      </Container>
      <Face />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 60px 60px 60px 60px;
  @media (max-width: 768px) {
    padding: 60px 20px 60px 20px;
  }
  position: relative;
`

const Container = styled.div`
  width: 100%;
  display: grid;
  position: relative;
  z-index: 99;
  grid-template-rows: 1fr auto;
  gap: 200px;
  align-items: end;
  background-color: none;
  /* overflow: hidden; */
  color: white;

  @media (max-width: 768px) {
    gap: 100px;
  }
`

const MainText = styled(HeadlineRegular)`
  color: black;
  max-width: 970px;
`

const SecondaryGroup = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  /* margin-top: 80px; */
`

const SecondaryText = styled(TextSmall)`
  font-family: "GT-Alpina-Extended-Regular";
  /* font-size: 17px; */
  color: black;
  max-width: 450px;
  @media (max-width: 500px) {
    max-width: 100%;
  }
`

const Icon = styled.img`
  margin-top: 1px;
  width: 16px;
  height: 16px;
`

const Face = styled.div`
  background-image: url(${FaceGrafik});
  width: 450px;
  height: 476px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  bottom: -5px;
  right: 10%;
  transform: rotate(180deg);
  @media (max-width: 1200px) {
    right: -1%;
  }
  @media (max-width: 1100px) {
    width: 367px;
    height: 387px;
    bottom: -40px;
  }
`

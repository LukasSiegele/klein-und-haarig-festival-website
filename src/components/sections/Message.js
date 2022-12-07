import React from "react"
import styled from "styled-components"

import BackgroundTexture from "../../../static/images/BackgroundTexture.png"

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
        <FirstGrid>
          <Column1>
            <MainText>
              Klein und Haarig — 4 Tage Festival in einem idyllischen Tal im
              Schwarzwald, die die elektronische Musikkultur in all ihren Farben
              und Facetten erfahrbar machen.
            </MainText>
          </Column1>
          <Column2 />
        </FirstGrid>

        <SecondGrid>
          <Column1 />
          <Column2>
            <SecondaryGroup>
              <Icon src="/icons/StarBlack.svg"></Icon>
              <SecondaryText>
                Organisiert von Freunden, dem Bunte Platte e.V. <br /> <br />
                Wir wollen einen nicht kommerziellen Raum schaffen, in dem
                Menschen zusammenkommen und mit ihnen Vielfalt, Offenheit,
                Toleranz und Freiheit feiern.
              </SecondaryText>
            </SecondaryGroup>
          </Column2>
          {/* <Column3 /> */}
        </SecondGrid>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* background-image: url(${BackgroundTexture}); */
  /* background-color: #79837c; */
  padding: 0px 20px 0 20px;
  margin-bottom: 200px;

  @media (max-width: 800px) {
    padding: 0px 10px 0 10px;
  }
  position: relative;
`

const Container = styled.div`
  width: 100%;
  display: grid;
  position: relative;
  z-index: 99;
  grid-template-rows: 1fr auto;
  gap: 80px;
  align-items: end;
  background-color: none;
  /* overflow: hidden; */
  color: white;

  @media (max-width: 800px) {
    gap: 60px;
  }
`

const MainText = styled(HeadlineRegular)`
  color: black;
  /* max-width: 970px; */
`

const SecondaryGroup = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  border-left: 1px solid black;
  padding-left: 10px;

  /* margin-top: 20px; */
`

const FirstGrid = styled.div`
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

const SecondGrid = styled.div`
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const Column1 = styled.div`
  display: grid;

  @media (max-width: 800px) {
    border: none;
  }
`
const Column2 = styled.div``
// const Column3 = styled.div`
//   padding: 20px;
// `

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
  margin-top: 2px;
  width: 16px;
  height: 16px;
`

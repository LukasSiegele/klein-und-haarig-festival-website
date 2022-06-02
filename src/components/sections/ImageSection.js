import React from "react"
import { Parallax } from "react-scroll-parallax"
import styled from "styled-components"
import Stairway from "../../../static/images/image-01.jpg"
import Smoke from "../../../static/images/image-02.jpg"
import Night from "../../../static/images/image-03.jpg"

import { PageHeader, TextSmall } from "../styles/TextStyles"

export default function ImageSection() {
  return (
    <Container>
      <Content>
        <Row1>
          <ListWrapper1>
            <ListItem>Freitag</ListItem>
            <ListItem>Samstag</ListItem>
            <ListItem>Sonntag</ListItem>
            <NeuGroup>
              <ListItem>Montag</ListItem>
              <Icon src="/icons/Star.svg"></Icon>
            </NeuGroup>
          </ListWrapper1>
          <ImageWrapper1>
            <Parallax speed={10}>
              <Image01></Image01>
            </Parallax>
          </ImageWrapper1>
        </Row1>
        <Row2>
          <ImageWrapper2>
            <Parallax speed={22}>
              <Image02></Image02>
            </Parallax>
          </ImageWrapper2>
          <ListWrapper2>
            <ListItem>Wald Stage</ListItem>
            <ListItem>Fluss Stage</ListItem>
            <NeuGroup>
              <ListItem>Ambient Stage</ListItem>
              <Icon src="/icons/Star.svg"></Icon>
            </NeuGroup>
          </ListWrapper2>
        </Row2>
        <Row3>
          <ImageWrapper3>
            <Parallax speed={7}>
              <Image03></Image03>
            </Parallax>
          </ImageWrapper3>
        </Row3>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  background-color: black;
  max-width: 1700px;
  overflow: hidden;
  position: relative;
  padding: 300px 0 100px 0;
  /* @media (max-width: 768px) {
    padding: 150px 0;
  } */
`

const Content = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 100px;
  @media (max-width: 768px) {
    gap: 300px;
  }
`

const Row1 = styled.div`
  display: grid;
  grid-template-columns: 1;
  justify-items: right;
  padding-right: 20%;
  @media (max-width: 768px) {
    margin-right: 0%;
    justify-items: center;
  }
`

const ImageWrapper1 = styled.div`
  @media (max-width: 768px) {
    height: 420px;
    width: 90%;
  }
`

const Image01 = styled.div`
  background-image: url(${Stairway});
  width: 445px;
  height: 667px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 768px) {
    background-size: cover;
  }
`

const Row2 = styled.div`
  display: grid;
  grid-template-columns: 1;
  justify-items: left;
  padding-left: 20%;
  @media (max-width: 768px) {
    padding-left: 18%;
    /* justify-items: center; */
  }
`

const ImageWrapper2 = styled.div``

const Image02 = styled.div`
  background-image: url(${Smoke});
  width: 284px;
  height: 437px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const Row3 = styled.div`
  display: grid;
  grid-template-columns: 1;
  justify-items: right;
  @media (max-width: 768px) {
    justify-items: center;
  }
`

const ImageWrapper3 = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Image03 = styled.div`
  background-image: url(${Night});
  width: 648px;
  height: 432px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const ListWrapper1 = styled.div`
  position: absolute;
  top: 150px; ;
`
const ListWrapper2 = styled.div``

const ListItem = styled(PageHeader)`
  color: white;
`

const NeuGroup = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
`
const Neu = styled(TextSmall)`
  margin-top: 4px;
  color: #fff991;
`

const Icon = styled.img`
  margin: 4px 16px 0px 0px;
  width: 16px;
  height: 16px;
  color: red;
`

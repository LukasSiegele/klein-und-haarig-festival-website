import React from "react"
import { Parallax } from "react-scroll-parallax"
import styled from "styled-components"
import Stairway from "../../../static/images/image-01.jpg"
import Smoke from "../../../static/images/image-02.jpg"
import Night from "../../../static/images/image-03.jpg"
import Discowald from "../../../static/images/image-025.jpg"

import { PageHeader, TextSmall, ImageDescription } from "../styles/TextStyles"

export default function ImageSection() {
  return (
    <Container>
      <Content>
        <Row1>
          <ImageWrapper1>
            <ListWrapper1>
              <ListItem>Freitag</ListItem>
              <ListItem>Samstag</ListItem>
              <ListItem>Sonntag</ListItem>
              <NeuGroup>
                <ListItem>Montag</ListItem>
                <Up>
                  <Icon src="/icons/Star.svg"></Icon>
                  <Neu>neu</Neu>
                </Up>
              </NeuGroup>
            </ListWrapper1>
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
            <ListItem>Lichtung</ListItem>
            <ListItem>Am Bach</ListItem>
          </ListWrapper2>
        </Row2>

        <Row25>
          <ImageWrapper25>
            <Parallax speed={14}>
              <Image025></Image025>
            </Parallax>
            <ListWrapper25>
              <NeuGroup>
                <ListItem>Kunstinstallationen</ListItem>
                <Up>
                  <Icon src="/icons/Star.svg"></Icon>
                  <Neu>neu</Neu>
                </Up>
              </NeuGroup>
              <NeuGroup>
                <ListItem>Workshops</ListItem>
                <Up>
                  <Icon src="/icons/Star.svg"></Icon>
                  <Neu>neu</Neu>
                </Up>
              </NeuGroup>
              <NeuGroup>
                <ListItem>Vorträge</ListItem>
                <Up>
                  <Icon src="/icons/Star.svg"></Icon>
                  <Neu>neu</Neu>
                </Up>
              </NeuGroup>
            </ListWrapper25>
          </ImageWrapper25>
        </Row25>

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
  padding: 300px 0 200px 0;
  @media (max-width: 768px) {
    padding: 300 0 50px 0;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 100px;
  @media (max-width: 768px) {
    gap: 200px;
  }
`

const Row1 = styled.div`
  display: grid;
  grid-template-columns: 1;
  justify-items: right;
  padding-right: 20%;

  @media (max-width: 768px) {
    margin-right: 0%;
    justify-items: left;
  }
`

const ImageWrapper1 = styled.div`
  position: relative;

  @media (max-width: 768px) {
    height: 420px;
    width: 90%;
  }
`

const Image01 = styled.div`
  background-image: url(${Stairway});
  width: 550px;
  height: 824px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    background-size: cover;
    width: 445px;
    height: 667px;
  }

  @media (max-width: 500px) {
    width: 355px;
    height: 532px;
  }
`

const Row2 = styled.div`
  display: grid;
  grid-template-columns: 1;
  justify-items: left;
  padding-left: 20%;

  @media (max-width: 768px) {
    padding-left: 12%;
    /* justify-items: center; */
  }
`

const ImageWrapper2 = styled.div``

const Image02 = styled.div`
  background-image: url(${Smoke});
  width: 350px;
  height: 540px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    width: 284px;
    height: 437px;
  }
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
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Image03 = styled.div`
  background-image: url(${Night});

  width: 900px;
  height: 600px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    width: 648px;
    height: 432px;
  }
`

const ListWrapper1 = styled.div`
  position: absolute;
  top: -150px;
  right: 0;
  @media (max-width: 768px) {
    padding-right: 20px;
  }
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

const Up = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3px;
`

const Neu = styled(ImageDescription)`
  font-family: "Inter";
  color: #cbc3ff;
  text-transform: uppercase;
`

const Icon = styled.img`
  margin-top: 8px;
  width: 16px;
  height: 16px;
  color: red;
`

const Row25 = styled.div`
  display: grid;
  grid-template-columns: 1;
  justify-items: right;
  padding-right: 22%;

  @media (max-width: 768px) {
    padding-right: 0%;
    /* justify-items: center; */
  }
`

const ImageWrapper25 = styled.div`
  position: relative;
`

const Image025 = styled.div`
  background-image: url(${Discowald});
  width: 320px;
  height: 427px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    /* width: 284px;
    height: 437px; */
  }
`

const ListWrapper25 = styled.div`
  position: absolute;
  left: -240px;
  bottom: 25px;

  @media (max-width: 768px) {
    left: -40px;
  }
`

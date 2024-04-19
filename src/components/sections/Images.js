import React from "react"
import { Parallax } from "react-scroll-parallax"
import styled from "styled-components"
import Stairway from "../../../static/images/image-01.jpg"
import Smoke from "../../../static/images/Main2.jpg"
import Night from "../../../static/images/Main4.jpg"
import Discowald from "../../../static/images/image-025.jpg"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import {
  PageHeader,
  TextSmall,
  ImageDescription,
  HeadlineRegular,
} from "../styles/TextStyles"

export default function Images() {
  const { t } = useTranslation()
  return (
    <Container>
      <Content>
        <Row1>
          <ImageWrapper1>
            <ListWrapper1>
              <ListHeader>
                {t("pages.home.images.sections.first.label")}
              </ListHeader>
              <ListItem>{t("pages.home.images.sections.first.day1")}</ListItem>
              <ListItem>{t("pages.home.images.sections.first.day2")}</ListItem>
              <ListItem>{t("pages.home.images.sections.first.day3")}</ListItem>
              <ListItem>{t("pages.home.images.sections.first.day4")}</ListItem>
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
            <ListHeader>
              {t("pages.home.images.sections.second.label")}
            </ListHeader>
            <NeuGroup>
              <ListItem>
                {t("pages.home.images.sections.second.item1")}
              </ListItem>
              <Up>
                <Icon src="/icons/banner-star.svg"></Icon>
                <Neu>{t("pages.home.images.sections.second.sound1")}</Neu>
              </Up>
            </NeuGroup>

            <NeuGroup>
              <ListItem>
                {t("pages.home.images.sections.second.item2")}
              </ListItem>
              <Up>
                <Icon src="/icons/banner-star.svg"></Icon>
                <Neu>{t("pages.home.images.sections.second.sound2")}</Neu>
              </Up>
            </NeuGroup>
          </ListWrapper2>
        </Row2>

        <Row25>
          <ImageWrapper25>
            <Parallax speed={14}>
              <Image025></Image025>
            </Parallax>
            <ListWrapper25>
              <ListHeader>
                {t("pages.home.images.sections.third.label")}
              </ListHeader>

              <ListItem>{t("pages.home.images.sections.third.item1")}</ListItem>

              <ListItem>{t("pages.home.images.sections.third.item2")}</ListItem>

              <ListItem>{t("pages.home.images.sections.third.item3")}</ListItem>
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

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

const Container = styled.div`
  /* max-width: 1700px; */
  overflow: hidden;
  position: relative;
  margin-top: 100px;
  padding: 300px 0 0;
  @media (max-width: 768px) {
    padding: 300px 0 50px 0;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 0px;
  @media (max-width: 768px) {
    gap: 75px;
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
  width: 455px;
  height: 702px;
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
  top: -260px;
  right: 0;
  @media (max-width: 768px) {
    top: -170px;
    padding-right: 20px;
  }
`
const ListWrapper2 = styled.div``

const ListHeader = styled(TextSmall)`
  /* font-family: "Inter";
  font-weight: 600; */
  font-family: "GT-Alpina-Extended-Regular";

  color: rgba(255, 255, 255, 0.55);
  /* color: #a19089; */
  /* color: #ff965b; */
  /* text-transform: uppercase; */
  margin-bottom: 8px;
`

const ListItem = styled(HeadlineRegular)`
  /* mix-blend-mode: exclusion; */
  font-family: "Ginto";
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
  /* font-family: "Inter"; */
  color: white;
  /* text-transform: uppercase; */
`

const Icon = styled.img`
  margin-top: 10px;
  width: 10px;
  height: 10px;
  color: red;
`

const Row25 = styled.div`
  display: grid;
  grid-template-columns: 1;
  justify-items: right;
  padding-right: 12%;
  position: static;

  @media (max-width: 768px) {
    padding-right: 0%;
    position: relative;
    /* justify-items: center; */
  }
`

const ImageWrapper25 = styled.div`
  position: relative;
  @media (max-width: 768px) {
    position: static;
  }
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
  left: -540px;
  bottom: -10px;

  @media (max-width: 768px) {
    left: 15px;
  }
`

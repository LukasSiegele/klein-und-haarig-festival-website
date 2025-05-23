import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import Footer from "../components/footer/footer"
import SideNavigation from "../components/navigation/SideNavigation"
import SideLine from "../components/navigation/SideLine"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

import { SubheaderSmall, StyledText } from "../components/styles/TextStyles"

import AwarenessImage from "../../static/images/Awareness.png"
import MobileNavigation from "../components/navigation/MobileNavigation"
import FormButton from "../components/buttons/FormButton"

export default function Awareness() {
  const { t } = useTranslation()
  return (
    <Layout>
      <Wrapper>
        <MobileNavigation isAwareness="awareness" bgColor="black" />

        <SideNavigation isAwareness="awareness" bgColor="black" />
        <Content>
          <MainGrid>
            <SideLine />
            <ContentSection>
              <ImageSectionMobile>
                <AwarenessBild />
              </ImageSectionMobile>
              <ScrollContainer>
                <TextSection>
                  <HeaderSection>
                    <AwarenessHeadline>
                      {t("pages.awareness.headline")}
                    </AwarenessHeadline>
                  </HeaderSection>

                  <AwarenessSection>
                    <AwarenessLabel>
                      {t("pages.awareness.sections.conception.label")}
                    </AwarenessLabel>
                    <AwarenessText>
                      {t("pages.awareness.sections.conception.text")}
                    </AwarenessText>
                  </AwarenessSection>
                  <AwarenessSection>
                    <AwarenessLabel>
                      {t("pages.awareness.sections.accessibility.label")}
                    </AwarenessLabel>
                    <AwarenessText>
                      {t("pages.awareness.sections.accessibility.text")}
                    </AwarenessText>
                  </AwarenessSection>
                </TextSection>
                <Footer bgColor="black " />
              </ScrollContainer>

              <ImageSectionDesktop>
                <AwarenessBild />
              </ImageSectionDesktop>
            </ContentSection>
          </MainGrid>
        </Content>
      </Wrapper>
    </Layout>
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

const Wrapper = styled.div`
  overflow: hidden;
  background-color: red;
`

const Content = styled.div`
  background-color: black;
  display: grid;
  grid-template-columns: auto;
`
const MainGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  overflow: hidden;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const ContentSection = styled.div`
  background-color: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

const ScrollContainer = styled.div`
  overflow-x: hidden;
  background-color: black;
  height: 100vh;
  overflow-y: hidden;
  overflow-y: scroll;
  /* :hover {
    overflow-y: scroll;
  } */
  @media (max-width: 1100px) {
    height: auto;
  }
`

const TextSection = styled.div`
  padding: 25px 10px 0 10px;

  @media (max-width: 1100px) {
    padding: 10px 10px 0 10px;
  }
`

const HeaderSection = styled.div`
  height: 20vh;
  @media (max-width: 1100px) {
    height: auto;
    margin-bottom: 200px;
  }
`

const AwarenessSection = styled.div`
  margin-bottom: 60px;
`

const AwarenessHeadline = styled.h3`
  color: white;
  display: inline-block;
  max-width: 800px;
  text-indent: 60px;
  white-space: pre-wrap;
`

const AwarenessLabel = styled.h3`
  color: white;
  margin-bottom: 16px;
  display: inline-block;
  max-width: 800px;
`

const AwarenessText = styled.p`
  color: white;
  /* font-family: "GT-Alpina-Extended-Regular"; */
  font-weight: 500;
  margin-bottom: 20px;
  opacity: 0.75;
  max-width: 800px;
  white-space: pre-wrap;
`

const DetailLabel = styled(SubheaderSmall)`
  color: white;
  font-family: "GT-Alpina-Extended-Regular";
  margin-top: 32px;
  margin-bottom: 6px;
  opacity: 0.75;
`

const LinkInline = styled.a`
  color: white;
  padding-bottom: 1px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
`

const ImageSectionDesktop = styled.div`
  background-color: #9a9eff;
  height: 100vh;
  @media (max-width: 1100px) {
    display: none;
  }
`

const ImageSectionMobile = styled.div`
  background-color: #ff965b;
  height: 70vh;
  @media (min-width: 1101px) {
    display: none;
  }
`

const AwarenessBild = styled.div`
  height: 100vh;
  /* width: 300px; */
  /* border: 20px solid white; */
  background-image: url(${AwarenessImage});
  background-size: cover;
  @media (max-width: 1100px) {
    max-width: 100%;
    max-height: 100%;
    height: inherit !important;
  }
  /* @media (max-width: 1300px) {
    width: 352px;
    height: 548px;
  } */
`

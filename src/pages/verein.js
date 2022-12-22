import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
// import SEO from "../components/layout/seo"
import Footer from "../components/footer/footer"
import SideNavigation from "../components/navigation/SideNavigation"
import SideLine from "../components/navigation/SideLine"
import { Link } from "gatsby"

import { SubheaderSmall, Text } from "../components/styles/TextStyles"

import Volunteer1 from "../../static/images/VolunteerRight.jpg"
import Volunteer2 from "../../static/images/VolunteerMiddle.jpg"
import MobileNavigation from "../components/navigation/MobileNavigation"
import FormButton from "../components/buttons/FormButton"

export default function Verein() {
  return (
    <Layout>
      {/* <SEO title="Info" /> */}
      <Wrapper>
        <MobileNavigation isVerein="true" bgColor="white" />
        <SideNavigation isVerein="true" bgColor="white" />

        <Content>
          <MainGrid>
            <SideLine />
            <ContentContainer>
              <ContentSection>
                <ImageSectionMobile>
                  <VolunteerBild1 />
                </ImageSectionMobile>
                <TextSection>
                  <HeaderSection>
                    <InfoHeadline>
                      {" "}
                      Hi, wir sind der Bunte Platte e.V. <br /> Ein
                      gemeinnütziger Verein aus Freunden und Freundesfreunden,
                      die das KuH ehrenamtlich organisieren.
                    </InfoHeadline>
                  </HeaderSection>

                  <InfoSection>
                    <InfoLabel>Etwas zu uns...</InfoLabel>
                    <InfoText>
                      Wir sind ein gemeinnütziger Verein mit Sitz in München,
                      der schon seit 5 Jahren das Klein und Haarig auf die Beine
                      stellt. Anfangs mit 40 Gästen zu Dritt, während Corona nur
                      als musikalisches Zaltlager und seit zwei Jahren als
                      eingetragener Verein mit 8 Mitgliedern und 350 Gästen.
                      Dabei haben wir uns auf die Fahne geschrieben, dass wir
                      die elektronische Musikkultur in all ihren bunten,
                      herrlich weirden und progressiven Facetten erfahrbahr
                      machen wollen. Nicht das immer gleichbleibende Konzept,
                      sondern das Neue und unentdeckte treibt uns an. Das in
                      Einklang mit der Natur zu organisieren und mit Euch zu am
                      Ende zu feiern ist das Größte für uns.
                    </InfoText>
                  </InfoSection>
                </TextSection>
                <ImageSectionDesktop>
                  <FirstImageGroup>
                    <VolunteerBild1 />
                  </FirstImageGroup>
                  <SecondImageGroup>
                    <VolunteerBild2 />
                  </SecondImageGroup>
                </ImageSectionDesktop>
              </ContentSection>
              <FooterSection>
                <Footer bgColor="black" />
              </FooterSection>
            </ContentContainer>
          </MainGrid>
        </Content>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  background-color: white;
`

const Content = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: auto;
`
const MainGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  /* overflow: hidden; */
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const ContentContainer = styled.div``

const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

const TextSection = styled.div`
  /* overflow-x: hidden; */

  /* height: 100vh; */
  padding: 25px 10px 0 10px;
  border-right: 1px solid black;
  /* overflow-y: hidden; */
  /* :hover {
    overflow-y: scroll;
  } */
  @media (max-width: 1100px) {
    height: auto;
  }
  @media (max-width: 1100px) {
    padding: 10px 10px 0 10px;
  }
`

const HeaderSection = styled.div`
  height: 85vh;
  @media (max-width: 1100px) {
    height: auto;
    margin-bottom: 200px;
  }
`

const AnmeldeGroup = styled.div`
  max-width: 450px;
  opacity: 0.3;
  @media (max-width: 1100px) {
    margin-bottom: 100px;
  }
`

const InfoSection = styled.div`
  margin-bottom: 100px;
`

const InfoHeadline = styled.h3`
  color: black;
  display: inline-block;
  max-width: 800px;
  text-indent: 60px;
  margin-bottom: 200px; ;
`

const InfoLabel = styled.h3`
  color: black;
  margin-bottom: 24px;
  display: inline-block;
  max-width: 800px;
`

const InfoText = styled.p`
  color: black;
  margin-bottom: 20px;
  opacity: 0.8;
  max-width: 800px;
`

const DetailLabel = styled(SubheaderSmall)`
  color: black;
  font-family: "GT-Alpina-Extended-Regular";
  margin-top: 32px;
  margin-bottom: 6px;
  opacity: 0.7;
`

const LinkInline = styled.a`
  color: black;
  padding-bottom: 1px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
`

const ImageSectionDesktop = styled.div`
  /* height: 100vh; */
  display: grid;
  grid-template-rows: auto auto;
  @media (max-width: 1100px) {
    display: none;
  }
`

const ImageSectionMobile = styled.div`
  height: 70vh;
  @media (min-width: 1101px) {
    display: none;
  }
`

const FirstImageGroup = styled.div`
  height: 100vh;
  display: grid;
`

const VolunteerBild1 = styled.div`
  height: 90%;
  width: 80%;
  justify-self: end;
  align-self: center;
  /* width: 300px; */
  /* border: 20px solid white; */
  background-image: url(${Volunteer1});
  background-size: cover;
  @media (max-width: 1100px) {
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    height: inherit !important;
  }
  /* @media (max-width: 1300px) {
    width: 352px;
    height: 548px;
  } */
`

const SecondImageGroup = styled.div`
  margin-left: 20px;
`

const VolunteerBild2 = styled.div`
  height: 300px;
  width: 465px;
  background-image: url(${Volunteer2});
  background-size: cover;
`

const List = styled.div`
  margin-top: 16px;
`

const ListItem = styled.p`
  padding: 8px 0 8px 16px;
  max-width: 800px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  &:first-child {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`

const List1 = styled.div``
const List2 = styled.div``
const List3 = styled.div``

const FooterSection = styled.div`
  background-color: #9a9eff;
`

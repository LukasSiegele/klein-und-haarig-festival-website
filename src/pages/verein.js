import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
// import SEO from "../components/layout/seo"
import Footer from "../components/footer/footer"
import SideNavigation from "../components/navigation/SideNavigation"
import SideLine from "../components/navigation/SideLine"
import { Link } from "gatsby"

import { SubheaderSmall, Text } from "../components/styles/TextStyles"

import Verein1 from "../../static/images/Verein1.jpg"
import MobileNavigation from "../components/navigation/MobileNavigation"
import FormButton from "../components/buttons/FormButton"

import Einzugsermaechtigung from "../../static/pdf/Einzugsermaechtigung_BuntePlatte_2023.pdf"

export default function Verein() {
  return (
    <Layout>
      {/* <SEO title="Info" /> */}
      <Wrapper>
        <MobileNavigation isVerein="verein" bgColor="white" />

        <SideNavigation isVerein="verein" bgColor="white" />
        <Content>
          <MainGrid>
            <SideLine />
            <ContentSection>
              <ImageSectionMobile>
                <VereinBild />
              </ImageSectionMobile>
              <ScrollContainer>
                <TextSection>
                  <HeaderSection>
                    <InfoHeadline>
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
                      sondern das Neue und Unentdeckte treibt uns an. Das in
                      Einklang mit der Natur zu organisieren und mit Euch in
                      einem familiären Umfeld am Ende zu feiern macht das Klein
                      und Haarig aus.
                    </InfoText>
                  </InfoSection>
                  <InfoSection>
                    <InfoLabel>1 — Verein beitreten</InfoLabel>
                    <InfoText>
                      Wenn du nicht mit anpacken möchtest oder kannst, du uns
                      aber unterstützen willst, bist du hier genau richtig.
                      Unterstütze das Klein und Haarig mit einer frei wählbaren
                      jährlichen Zahlung, indem du uns die folgende
                      Einzugsermächtigung ausgefüllt zuschickst.
                    </InfoText>
                    {/* <Link href="mailto:info@bunteplatte.de?subject=Mitglied werden&body=Hallo Bunte Platte Crew, %0A %0A ich möchte Mitlgied im Bunte Platte e.V. werden. Könnt ihr mir das Mitgliedsformular zusenden auf dem alle weiteren Infos stehen? %0A %0A Liebe Grüße">
                      <FormButton label="Mitglied werden" />
                    </Link> */}
                    <Link href="/pdf/Einzugsermaechtigung_BuntePlatte_2023.pdf">
                      <FormButton label="Mitglied werden" />
                    </Link>

                    {/* <a href="mailto:info@kleinundhaarig.de">Kontakt</a> */}
                  </InfoSection>
                  <InfoSection>
                    <InfoLabel>2 — Finanzspritze</InfoLabel>
                    <InfoText>
                      Du willst nicht direkt Mitlgied werden und uns einfach
                      einmalig finanziell unterstützen? <br />
                      Hier unsere Bankdaten, wir freuen uns über jeden Betrag.
                    </InfoText>
                    <List>
                      <ListItem>
                        <List1>Name</List1>
                        <List2>Bunte Platte e.V.</List2>
                      </ListItem>
                      <ListItem>
                        <List1>IBAN</List1>
                        <List2>DE47 5003 1000 1082 4300 04</List2>
                      </ListItem>
                      <ListItem>
                        <List1>BIC</List1>
                        <List2>TRODDEF1</List2>
                      </ListItem>
                      <ListItem>
                        <List1>Bank</List1>
                        <List2>Triodos Bank N.V. Deutschland</List2>
                      </ListItem>
                    </List>
                  </InfoSection>
                </TextSection>
                <Footer bgColor="black " />
              </ScrollContainer>

              <ImageSectionDesktop>
                <VereinBild />
              </ImageSectionDesktop>
            </ContentSection>
          </MainGrid>
        </Content>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  overflow: hidden;
  background-color: red;
`

const Content = styled.div`
  background-color: white;
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
  background-color: white;
  height: 100vh;
  overflow-y: hidden;
  :hover {
    overflow-y: scroll;
  }
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
  height: 85vh;
  @media (max-width: 1100px) {
    height: auto;
    margin-bottom: 200px;
  }
`

const InfoSection = styled.div`
  margin-bottom: 60px;
`

const InfoHeadline = styled.h3`
  color: black;
  display: inline-block;
  max-width: 800px;
  text-indent: 60px;
`

const InfoLabel = styled.h3`
  color: black;
  margin-bottom: 16px;
  display: inline-block;
  max-width: 800px;
`

const InfoText = styled.p`
  color: black;
  font-family: "GT-Alpina-Extended-Regular";
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
  background-color: #9a9eff;
  height: 100vh;
  @media (max-width: 1100px) {
    display: none;
  }
`

const ImageSectionMobile = styled.div`
  background-color: green;
  height: 70vh;
  @media (min-width: 1101px) {
    display: none;
  }
`

const VereinBild = styled.div`
  height: 100vh;
  /* width: 300px; */
  /* border: 20px solid white; */
  background-image: url(${Verein1});
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

const List = styled.div`
  margin-top: 16px;
`

const ListItem = styled.p`
  padding: 8px 0 8px 16px;
  max-width: 800px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 12px;
  &:first-child {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`

const List1 = styled.div``
const List2 = styled.div``
const List3 = styled.div``

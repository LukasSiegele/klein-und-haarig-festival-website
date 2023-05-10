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

export default function Verein() {
  return (
    <Layout>
      {/* <SEO title="Info" /> */}
      <Wrapper>
        <MobileNavigation isVerein="verein" bgColor="black" />

        <SideNavigation isVerein="verein" bgColor="black" />
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
                    <InfoLabel>Zu uns</InfoLabel>
                    <InfoText>
                      Wir sind ein gemeinnütziger Verein mit Sitz in München.
                      Bereits seit 5 Jahren stellen wir das Klein und Haarig
                      Festival auf die Beine. Anfangs zu Dritt mit 40 Gästen,
                      während Corona als musikalisches Zeltlager und seit 2020
                      als eingetragener Verein mit mittlerweile 14 Mitgliedern
                      und 350 Gästen. Wir haben uns auf die Fahne geschrieben,
                      die elektronische Musikkultur in all ihren bunten,
                      herrlich weirden und progressiven Facetten erfahrbar zu
                      machen. Nicht ein stetiges Konzept, sondern das Neue und
                      Unentdeckte treibt uns dabei an. <br />
                      <br />
                      Das KuH im Einklang mit der Natur zu organisieren und es
                      mit Euch zu feiern ist das Größte für uns. <br />
                      <br />
                      Dabei sind wir immer auf der Suche nach Gleichgesinnten,
                      die unser Team oder das Festival unterstützen wollen und
                      können. Dafür gibt es zwei Möglichkeiten:
                      <br />
                      <br />
                    </InfoText>
                  </InfoSection>
                  <InfoSection>
                    <InfoLabel>1 — Verein beitreten</InfoLabel>
                    <InfoText>
                      Wenn du aktiv Aufgaben oder Verantwortung im Bunte Platte
                      e.V. oder bei der Organisation des Klein und Haarig
                      Festivals übernehmen möchtest, kontaktiere uns am Besten
                      direkt per Mail. Wir freuen uns über jede Anfrage. Wenn du
                      nicht mit anpacken möchtest oder kannst, uns aber dennoch
                      unterstützen willst, kannst du dies mit einer jährlichen
                      Zahlung in Form einer Fördermitgliedschaft tun. Kreuze
                      dazu auf dem folgenden Aufnahmeantrag eine der zur Auswahl
                      stehenden Beträge an und schicke uns ihn ausgefüllt und
                      unterschrieben zu.
                    </InfoText>
                    {/* <Link href="mailto:info@bunteplatte.de?subject=Mitglied werden&body=Hallo Bunte Platte Crew, %0A %0A ich möchte Mitlgied im Bunte Platte e.V. werden. Könnt ihr mir das Mitgliedsformular zusenden auf dem alle weiteren Infos stehen? %0A %0A Liebe Grüße">
                      <FormButton label="Mitglied werden" />
                    </Link> */}
                    <Link href="/pdf/230109_Aufnahmeantrag_Foerdermitgliedschaft_BuntePlatte.pdf">
                      <FormButton
                        backgroundColor="#F89248"
                        label="Mitglied werden"
                      />
                    </Link>

                    {/* <a href="mailto:info@kleinundhaarig.de">Kontakt</a> */}
                  </InfoSection>
                  <InfoSection>
                    <InfoLabel>2 — Finanzspritze</InfoLabel>
                    <InfoText>
                      Du möchtest nicht direkt Mitglied werden und uns einmalig
                      finanziell unterstützen? Hier unsere Bankdaten, wir freuen
                      uns über jeden Betrag.
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
  color: white;
  display: inline-block;
  max-width: 800px;
  text-indent: 60px;
`

const InfoLabel = styled.h3`
  color: white;
  margin-bottom: 16px;
  display: inline-block;
  max-width: 800px;
`

const InfoText = styled.p`
  color: white;
  font-family: "GT-Alpina-Extended-Regular";
  margin-bottom: 20px;
  opacity: 0.75;
  max-width: 800px;
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
  color: rgba(255, 255, 255, 0.75);
  padding: 8px 0 8px 16px;
  max-width: 800px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 12px;
  &:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
`

const List1 = styled.div``
const List2 = styled.div``
const List3 = styled.div``

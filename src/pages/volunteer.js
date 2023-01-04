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

export default function Volunteer() {
  return (
    <Layout>
      {/* <SEO title="Info" /> */}
      <Wrapper>
        <MobileNavigation isVolunteer="true" bgColor="white" />
        <SideNavigation isVolunteer="true" bgColor="white" />

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
                      Ohne Helfer:innen kein KuH. So einfach. Und das wissen wir
                      zu schätzen. Werde Teil des Klein und Haarig Teams 2023!
                    </InfoHeadline>
                    <AnmeldeGroup>
                      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeZzevc8gkaU-hsCyR4e4VGQ0Susik5qbPUT9DvR-77vqy3Ww/viewform?usp=sf_link">
                        <FormButton label="Volunteer werden"></FormButton>
                      </Link>
                      {/* <InfoText>
                        Bald findest du hier den Link zur Volunteer Anmeldung.
                      </InfoText> */}
                    </AnmeldeGroup>
                  </HeaderSection>

                  <InfoSection>
                    <InfoLabel>Wie funktioniert das?</InfoLabel>
                    <InfoText>
                      Klicke oben auf "Volunteer werden", fülle das Formular aus
                      und kaufe dir ganz normal ein Festival Ticket. Wähle frei
                      wie lange (S, M, L), wann (Aufbau, Während, Abbau) und wie
                      (Einlass, Food, Security, usw.) du uns helfen möchtest. Du
                      kannst uns dabei auch deinen Wunsch-Buddy mitteilen. Wir
                      geben unser Bestes deine Präferenzen zu erfüllen.
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>Welche Aufgabenbereiche gibt es?</InfoLabel>
                    <List>
                      <ListItem>Aufbau</ListItem>
                      <ListItem>Abbau</ListItem>
                      <ListItem>Einlass</ListItem>
                      <ListItem>Security</ListItem>
                      <ListItem>Sauberkeit</ListItem>
                      <ListItem>Technik</ListItem>
                      <ListItem>Bar</ListItem>
                      <ListItem>Verpflegung</ListItem>
                    </List>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>Wie werde ich vergütet?</InfoLabel>
                    <InfoText>
                      Das Klein und Haarig Festival wird vom gemeinnützigen
                      Bunte Platte e.V. organisiert. Das gesamte Team arbeitet
                      ehrenamtlich, alle Einnahmen kommen ausschließlich dem
                      Projekt zugute. Als Volunteer unterstützt du das Festival
                      ebenfalls ehrenamtlich. Du bekommst einen Einblick, wie
                      ein Festival entsteht und funktioniert. Du lernst das Team
                      und die vielen anderen Leute kennen, die das Festival zu
                      dem machen, was es ist. Trotzdem wollen wir dich für deine
                      Unterstützung belohnen. Du erhälst nach getaner Arbeit
                      eine Vergütung, deren Höhe sich nach der Anzahl deiner
                      Schichten richtet (siehe unten). Während dem Auf- und
                      Abbau wirst du zudem mit Essen und Getränken versorgt.
                    </InfoText>
                    <List>
                      <ListItem>
                        <List1>S</List1>
                        <List2>min. 1x 6 h</List2>
                        <List3>40 €</List3>
                      </ListItem>
                      <ListItem>
                        <List1>M</List1>
                        <List2>min. 2 x 6 h</List2>
                        <List3>80 €</List3>
                      </ListItem>
                      <ListItem>
                        <List1>L</List1>
                        <List2>min. 3 x 6 h</List2>
                        <List3>120 €</List3>
                      </ListItem>
                    </List>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                      Brauche ich als Volunteer ein Festival Ticket??
                    </InfoLabel>
                    <InfoText>
                      Ja, auch als Volunteer benötigst du ein Ticket. Nach dem
                      Ausfüllen des Volunteer Formulars erhältst du einen Link
                      zu unserem Ticketshop. Wenn du schon ein Ticket hast,
                      kannst du dich natürlich trotzdem noch als Volunteer
                      registrieren.
                    </InfoText>
                  </InfoSection>
                  <InfoSection>
                    <InfoLabel>
                      Ich verspäte mich oder kann doch nicht helfen...
                    </InfoLabel>
                    <InfoText>
                      Bitte gib uns zeitnah Bescheid wenn du deine Schicht nicht
                      antreten kannst oder du zu spät kommst. Wir legen Wert auf
                      Zuverlässigkeit, da sonst die Arbeit bei jemand Anderen
                      hängenbleibt.
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>Wann werde ich zugeteilt?</InfoLabel>
                    <InfoText>
                      Wir geben dir mit genügend Vorlauf vor dem Festival
                      Bescheid, damit auch du planen kannst. Bei Fragen kannst
                      du dich nach deiner Anmeldung jederzeit bei unserer
                      Volunteer-Zentrale melden.
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>Muss ich sonst noch was wissen?</InfoLabel>
                    <InfoText>
                      Bei aller Ernsthaftigkeit ein Festival zu erschaffen heißt
                      Volunteer sein nicht nur arbeiten. Gerade beim Auf und
                      Abbau fühlt es sich eher wie ein Pfadfinder Camp an. Wir
                      würden uns sehr freuen dich nächstes Jahr mit an Bord zu
                      haben. <br /> Dein KuH Team
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
  /* max-width: 450px; */
  /* opacity: 0.3; */
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
  margin-bottom: 16px;
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
  height: 100%;
  width: 100%;
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
  /* margin-left: 20px; */
`

const VolunteerBild2 = styled.div`
  height: 380px;
  width: 100%;
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

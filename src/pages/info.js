import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
// import SEO from "../components/layout/seo"
import Footer from "../components/footer/footer"
import SideNavigation from "../components/navigation/SideNavigation"
import SideLine from "../components/navigation/SideLine"
import { Link } from "gatsby"
import { useTranslation, Trans } from "gatsby-plugin-react-i18next"

import { SubheaderSmall, Text } from "../components/styles/TextStyles"
import { graphql } from "gatsby"
import Info1 from "../../static/images/InfoBild1.jpg"
import MobileNavigation from "../components/navigation/MobileNavigation"

export default function Info() {
  const { t } = useTranslation()

  return (
    <Layout>
      {/* <SEO title="Info" /> */}
      <Wrapper>
        <MobileNavigation isInfo="info" bgColor="black" />
        <SideNavigation isInfo="info" bgColor="black" />
        <Content>
          <MainGrid>
            <SideLine />
            <ContentSection>
              <ImageSectionMobile>
                <InfoBild1 />
              </ImageSectionMobile>
              <ScrollContainer>
                <TextSection>
                  <HeaderSection>
                    <InfoHeadline>{t("pages.infos.headline")}</InfoHeadline>
                  </HeaderSection>

                  {/* <InfoSection>
                    <InfoLabelImportant>Temperatur Warnung</InfoLabelImportant>
                    <InfoTextImportant>
                      Bitte sei vorbereitet! Die Nächte auf dem Gelände können
                      kalt werden.
                    </InfoTextImportant>
                  </InfoSection> */}

                  {/* <InfoSection>
                    <InfoLabelImportant>Straßensperrung</InfoLabelImportant>
                    <InfoTextImportant>
                      Achtung an alle Autoanreisenden aus Ulm und München: Die
                      A8 wird vom 13. Juli 22 Uhr bis 17. Juli 5 Uhr zwischen
                      Ulm-West und Mühlhausen (Richtung Stuttgart/Karlsruhe)
                      gesperrt. Bitte rechne mit Verspätungen. Folge immer den
                      ausgeschilderten Umleitungen - verlasse dich nicht auf
                      (Google) Maps oder dein Navi! Trotzdem gute Fahrt!
                    </InfoTextImportant>
                  </InfoSection> */}

                  {/* <InfoSection>
                    <InfoLabel>Ablauf</InfoLabel>
                    <InfoText>
                      Das Festival findet vom 14. bis zum 17. Juli statt. Du
                      kannst am Freitag ab 12 Uhr einchecken. Für Volunteers
                      steht unser Tor natürlich schon früher offen.
                      Musikalisches Ende wird vorraussichtlich Montag 16 Uhr
                      sein. Nähere Infos folgen.
                    </InfoText>
                  </InfoSection> */}

                  {/* <InfoSection>
                    <InfoLabel>Tickets & Ticketswap</InfoLabel>
                    <InfoText>
                      Tickets sind über unseren{" "}
                      <LinkInline
                        href="https://pretix.eu/bunteplatte/kleinundhaarig/"
                        target="_blank"
                      >
                        pretix.eu Ticketshop
                      </LinkInline>{" "}
                      oder bei unserem Partner{" "}
                      <LinkInline
                        href="https://www.ticketswap.com/listing/klein-und-haarig-festival-2023/9508967/c851a7a229"
                        target="_blank"
                      >
                        Ticketswap
                      </LinkInline>{" "}
                      erhältlich. Bei Letzterem kannst du dein Ticket
                      weiterverkaufen, falls du nicht am Festival teilnehmen
                      kannst. Weitere Stornierungsoptionen findest du in unseren{" "}
                      <LinkInline to={"/agbs"} target="_blank">
                        AGBs.
                      </LinkInline>
                    </InfoText>
                  </InfoSection> */}

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.disclaimer.label")}
                    </InfoLabel>
                    <InfoText>
                      <Trans
                        t={t}
                        i18nKey={"pages.infos.sections.disclaimer.text"}
                      ></Trans>
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.first.label")}
                    </InfoLabel>
                    <InfoText>
                      <Trans t={t} i18nKey={"pages.infos.sections.first.text"}>
                        <LinkInline
                          href={t("pages.infos.sections.first.link.href")}
                          target="_blank"
                        >
                          {t("pages.infos.sections.first.link.text")}
                        </LinkInline>
                      </Trans>
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.storno.label")}
                    </InfoLabel>
                    <InfoText>
                      <Trans
                        t={t}
                        i18nKey={"pages.infos.sections.storno.text"}
                      ></Trans>
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>{t("pages.infos.sections.car.label")}</InfoLabel>
                    <InfoText>{t("pages.infos.sections.car.text")}</InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.publictransport.label")}
                    </InfoLabel>
                    <InfoText>
                      <Trans
                        t={t}
                        i18nKey={"pages.infos.sections.publictransport.text"}
                      >
                        Die nächstgelegene Bahnstation ist Bad Wildbad Bahnhof.
                        Von dort bringt dich die
                        <LinkInline
                          href={t(
                            "pages.infos.sections.publictransport.link.href"
                          )}
                          target="_blank"
                        >
                          Buslinie 7780.
                        </LinkInline>
                        ca. alle 30 min direkt vor das Gelände — Haltestelle
                        "Bad Wildbad, Zeltplatz"
                      </Trans>
                    </InfoText>
                  </InfoSection>

                  {/* <InfoSection>
                    <InfoLabel>
                      Mitfahrgelegenheiten (Whatsapp Gruppen)
                    </InfoLabel>

                    <List>
                      <ListItem>
                        <LinkInline
                          href="https://chat.whatsapp.com/I1aMzOjdu4BL8nOP91n2za"
                          target="_blank"
                        >
                          Berlin
                        </LinkInline>{" "}
                      </ListItem>
                      <ListItem>
                        <LinkInline
                          href="https://chat.whatsapp.com/DWTTwYPmPfWGmuwOzfiIa3"
                          target="_blank"
                        >
                          Leipzig
                        </LinkInline>{" "}
                      </ListItem>
                      <ListItem>
                        {" "}
                        <LinkInline
                          href="https://chat.whatsapp.com/KqatInu5niS71TUu3JNCf5"
                          target="_blank"
                        >
                          München
                        </LinkInline>{" "}
                      </ListItem>
                      <ListItem>
                        {" "}
                        <LinkInline
                          href="https://chat.whatsapp.com/KumquIM5XBiHLzZSVP7dI0"
                          target="_blank"
                        >
                          NRW
                        </LinkInline>{" "}
                      </ListItem>
                      <ListItem>
                        {" "}
                        <LinkInline
                          href="https://chat.whatsapp.com/GUiamTvtyTUBj7yfOPAl5p"
                          target="_blank"
                        >
                          Stuttgart
                        </LinkInline>{" "}
                      </ListItem>
                      <ListItem>
                        {" "}
                        <LinkInline
                          href="https://chat.whatsapp.com/KHEAktqDyKMG1piHRqe6ZV"
                          target="_blank"
                        >
                          Ulm
                        </LinkInline>{" "}
                      </ListItem>
                      <ListItem>
                        {" "}
                        <LinkInline
                          href="https://chat.whatsapp.com/HsToHcs5D9JIDlgmtbVlyf"
                          target="_blank"
                        >
                          Wien
                        </LinkInline>{" "}
                      </ListItem>
                    </List>
                  </InfoSection> */}

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.conduct.label")}
                    </InfoLabel>
                    <InfoText>
                      {t("pages.infos.sections.conduct.text")}
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.waste.label")}
                    </InfoLabel>
                    <InfoText>{t("pages.infos.sections.waste.text")}</InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.camp.label")}
                    </InfoLabel>
                    <InfoText>{t("pages.infos.sections.camp.text")}</InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.fire.label")}
                    </InfoLabel>
                    <InfoText>{t("pages.infos.sections.fire.text")}</InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.food.label")}
                    </InfoLabel>
                    <InfoText>{t("pages.infos.sections.food.text")}</InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.drinks.label")}
                    </InfoLabel>
                    <InfoText>{t("pages.infos.sections.drinks.text")}</InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>{t("pages.infos.sections.wc.label")}</InfoLabel>
                    <InfoText>{t("pages.infos.sections.wc.text")}</InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.eleventh.label")}
                    </InfoLabel>
                    <InfoText>
                      {t("pages.infos.sections.eleventh.text")}
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.twelth.label")}
                    </InfoLabel>
                    <InfoText>{t("pages.infos.sections.twelth.text")}</InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.thirteenth.label")}
                    </InfoLabel>
                    <InfoText>
                      {t("pages.infos.sections.thirteenth.text")}
                    </InfoText>
                  </InfoSection>
                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.fourteenth.label")}
                    </InfoLabel>
                    <InfoText>
                      {t("pages.infos.sections.fourteenth.text")}
                    </InfoText>
                  </InfoSection>
                </TextSection>
                <Footer bgColor="black " />
              </ScrollContainer>

              <ImageSectionDesktop>
                <InfoBild1 />
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
  white-space: pre-wrap;
`
const InfoLabelImportant = styled.h3`
  color: red;
  margin-bottom: 16px;
  display: inline-block;
  max-width: 800px;
`

const InfoTextImportant = styled.p`
  color: red;
  font-family: "GT-Alpina-Extended-Regular";
  margin-bottom: 20px;
  opacity: 0.9;
  max-width: 800px;
`

const DetailLabel = styled(SubheaderSmall)`
  color: white;
  font-family: "GT-Alpina-Extended-Regular";
  margin-top: 32px;
  margin-bottom: 6px;
  opacity: 0.7;
`

const LinkInline = styled.a`
  color: white;
  padding-bottom: 1px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
`

const ImageSectionDesktop = styled.div`
  background-color: #a19089;
  height: 100vh;
  @media (max-width: 1100px) {
    display: none;
  }
`

const ImageSectionMobile = styled.div`
  background-color: #a19089;
  height: 70vh;
  @media (min-width: 1101px) {
    display: none;
  }
`

const InfoBild1 = styled.div`
  height: 100vh;
  /* width: 300px; */
  /* border: 20px solid white; */
  background-image: url(${Info1});
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
  color: rgba(255, 255, 255, 0.8);
  padding: 8px 0 8px 16px;
  max-width: 800px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  /* display: grid;
  grid-template-columns: repeat(1, auto); */
  /* gap: 12px; */
  &:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
`

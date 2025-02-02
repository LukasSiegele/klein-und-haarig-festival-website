import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
// import SEO from "../components/layout/seo"
import Footer from "../components/footer/footer"
import SideNavigation from "../components/navigation/SideNavigation"
import SideLine from "../components/navigation/SideLine"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

import { SubheaderSmall, Text } from "../components/styles/TextStyles"

import Verein1 from "../../static/images/Verein1.jpg"
import MobileNavigation from "../components/navigation/MobileNavigation"
import FormButton from "../components/buttons/FormButton"

export default function Verein() {
  const { t } = useTranslation()
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
                      {t("pages.organization.headline")}
                    </InfoHeadline>
                  </HeaderSection>

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.organization.sections.first.label")}
                    </InfoLabel>
                    <InfoText>
                      {t("pages.organization.sections.first.text")}
                    </InfoText>
                  </InfoSection>
                  <InfoSection>
                    <InfoLabel>
                      {t("pages.organization.sections.second.label")}
                    </InfoLabel>
                    <InfoText>
                      {t("pages.organization.sections.second.text")}
                    </InfoText>
                    {/* <Link href="mailto:info@bunteplatte.de?subject=Mitglied werden&body=Hallo Bunte Platte Crew, %0A %0A ich möchte Mitlgied im Bunte Platte e.V. werden. Könnt ihr mir das Mitgliedsformular zusenden auf dem alle weiteren Infos stehen? %0A %0A Liebe Grüße">
                      <FormButton label="Mitglied werden" />
                    </Link> */}
                    <Link href="/pdf/230109_Aufnahmeantrag_Foerdermitgliedschaft_BuntePlatte.pdf">
                      <FormButton
                        color="black"
                        backgroundColor="#FC2546"
                        label={t("pages.organization.sections.becomeMemberCTA")}
                      />
                    </Link>

                    {/* <a href="mailto:info@kleinundhaarig.de">Kontakt</a> */}
                  </InfoSection>
                  <InfoSection>
                    <InfoLabel>
                      {t("pages.organization.sections.third.label")}
                    </InfoLabel>
                    <InfoText>
                      {t("pages.organization.sections.third.text")}
                    </InfoText>
                    <List>
                      <ListItem>
                        <List1>
                          {t(
                            "pages.organization.sections.bankDetails.name.label"
                          )}
                        </List1>
                        <List2>
                          {t(
                            "pages.organization.sections.bankDetails.name.value"
                          )}
                        </List2>
                      </ListItem>
                      <ListItem>
                        <List1>
                          {t(
                            "pages.organization.sections.bankDetails.iban.label"
                          )}
                        </List1>
                        <List2>
                          {t(
                            "pages.organization.sections.bankDetails.iban.value"
                          )}
                        </List2>
                      </ListItem>
                      <ListItem>
                        <List1>
                          {t(
                            "pages.organization.sections.bankDetails.bic.label"
                          )}
                        </List1>
                        <List2>
                          {t(
                            "pages.organization.sections.bankDetails.bic.value"
                          )}
                        </List2>
                      </ListItem>
                      <ListItem>
                        <List1>
                          {t(
                            "pages.organization.sections.bankDetails.bank.label"
                          )}
                        </List1>
                        <List2>
                          {t(
                            "pages.organization.sections.bankDetails.bank.value"
                          )}
                        </List2>
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
  white-space: pre-wrap;
`

const InfoLabel = styled.h3`
  color: white;
  margin-bottom: 16px;
  display: inline-block;
  max-width: 800px;
`

const InfoText = styled.p`
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

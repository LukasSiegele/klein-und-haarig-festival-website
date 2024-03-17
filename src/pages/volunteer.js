import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
// import SEO from "../components/layout/seo"
import Footer from "../components/footer/footer"
import SideNavigation from "../components/navigation/SideNavigation"
import SideLine from "../components/navigation/SideLine"
import { Link } from "gatsby"
import {graphql} from 'gatsby';

import { SubheaderSmall, Text } from "../components/styles/TextStyles"
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Volunteer1 from "../../static/images/VolunteerRight.jpg"
import Volunteer2 from "../../static/images/VolunteerMiddle.jpg"
import MobileNavigation from "../components/navigation/MobileNavigation"
import FormButton from "../components/buttons/FormButton"

export default function Volunteer() {
  const {t} = useTranslation();
  return (
    <Layout>
      {/* <SEO title="Info" /> */}
      <Wrapper>
        <MobileNavigation isVolunteer="true" bgColor="black" />
        <SideNavigation isVolunteer="true" bgColor="black" />

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
                      {t('pages.volunteer.headline')}
                    </InfoHeadline>
                    <AnmeldeGroup>
                      {/* <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeZzevc8gkaU-hsCyR4e4VGQ0Susik5qbPUT9DvR-77vqy3Ww/viewform?usp=sf_link">
                        <FormButton
                          backgroundColor="#6A79FF"
                          label="Volunteer werden"
                        ></FormButton>
                      </Link> */}
                      {/* <InfoText>
                        Bald findest du hier den Link zur Volunteer Anmeldung.
                      </InfoText> */}
                    </AnmeldeGroup>
                  </HeaderSection>

                  <InfoSection>
                    <InfoLabel>{t('pages.volunteer.sections.first.label')}</InfoLabel>
                    <InfoText>
                    {t('pages.volunteer.sections.first.text')}
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>{t('pages.volunteer.sections.second.label')}</InfoLabel>
                    <List>
                      <ListItem>{t('pages.volunteer.sections.second.list.item1')}</ListItem>
                      <ListItem>{t('pages.volunteer.sections.second.list.item2')}</ListItem>
                      <ListItem>{t('pages.volunteer.sections.second.list.item3')}</ListItem>
                      <ListItem>{t('pages.volunteer.sections.second.list.item4')}</ListItem>
                      <ListItem>{t('pages.volunteer.sections.second.list.item5')}</ListItem>
                      <ListItem>{t('pages.volunteer.sections.second.list.item6')}</ListItem>
                      <ListItem>{t('pages.volunteer.sections.second.list.item7')}</ListItem>
                      <ListItem>{t('pages.volunteer.sections.second.list.item8')}</ListItem>
                      <ListItem>{t('pages.volunteer.sections.second.list.item9')}</ListItem>
                      <ListItem>{t('pages.volunteer.sections.second.list.item10')}</ListItem>
                    </List>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>{t('pages.volunteer.sections.third.label')}</InfoLabel>
                    <InfoText>
                    {t('pages.volunteer.sections.third.text')}
                    </InfoText>
                    <List>
                      <ListItem>
                        <List1>{t('pages.volunteer.sections.third.sizes.s.label')}</List1>
                        <List2>{t('pages.volunteer.sections.third.sizes.s.time')}</List2>
                        <List3>{t('pages.volunteer.sections.third.sizes.s.amount')}</List3>
                      </ListItem>
                      <ListItem>
                        <List1>{t('pages.volunteer.sections.third.sizes.m.label')}</List1>
                        <List2>{t('pages.volunteer.sections.third.sizes.m.time')}</List2>
                        <List3>{t('pages.volunteer.sections.third.sizes.m.amount')}</List3>
                      </ListItem>
                      <ListItem>
                        <List1>{t('pages.volunteer.sections.third.sizes.l.label')}</List1>
                        <List2>{t('pages.volunteer.sections.third.sizes.l.time')}</List2>
                        <List3>{t('pages.volunteer.sections.third.sizes.l.amount')}</List3>
                      </ListItem>
                    </List>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                    {t('pages.volunteer.sections.fourth.label')}
                    </InfoLabel>
                    <InfoText>
                    {t('pages.volunteer.sections.fourth.text')}
                    </InfoText>
                  </InfoSection>
                  <InfoSection>
                    <InfoLabel>
                    {t('pages.volunteer.sections.fifth.label')}
                    </InfoLabel>
                    <InfoText>
                    {t('pages.volunteer.sections.fifth.text')}
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>{t('pages.volunteer.sections.sixth.label')}</InfoLabel>
                    <InfoText>
                    {t('pages.volunteer.sections.sixth.text')}
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


export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  background-color: black;
`

const Content = styled.div`
  background-color: black;
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
  /* border-right: 1px solid black; */
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
  color: white;
  display: inline-block;
  max-width: 800px;
  text-indent: 60px;
  margin-bottom: 200px; ;
`

const InfoLabel = styled.h3`
  color: white;
  margin-bottom: 16px;
  display: inline-block;
  max-width: 800px;
`

const InfoText = styled.p`
  color: white;
  margin-bottom: 20px;
  opacity: 0.75;
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
  overflow: hidden;
`

const VolunteerBild1 = styled.div`
  height: 110%;
  width: 110%;
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
  overflow: hidden;
  position: relative;
`

const VolunteerBild2 = styled.div`
  height: 380px;
  width: 110%;
  position: absolute;
  top: -10px;
  left: -10px;
  background-image: url(${Volunteer2});
  background-size: cover;
`

const List = styled.div`
  margin-top: 16px;
`

const ListItem = styled.p`
  color: rgba(255, 255, 255, 0.8);
  padding: 8px 0 8px 16px;
  max-width: 800px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  &:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
`

const List1 = styled.div``
const List2 = styled.div``
const List3 = styled.div``

const FooterSection = styled.div`
  background-color: #9a9eff;
`

import React from "react"
import styled from "styled-components"
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import BackgroundTexture from "../../../static/images/BackgroundTexture.png"
import {
  // PageHeader,
  TextSmall,
  // ImageDescription,
  HeadlineRegular,
  HeadlineRegular2,
} from "../styles/TextStyles"

export default function Message() {
  const {t} = useTranslation()

  return (
    <Wrapper>
      <Container>
        <FirstGrid>
          <Column1>
            <MainText>
              {t('pages.home.message.mainText')}
            </MainText>
          </Column1>
          <Column2 />
        </FirstGrid>

        <SecondGrid>
          <Column1 />
          <Column2>
            <SecondaryGroup>
              <Icon src="/icons/StarBlack.svg"></Icon>
              <SecondaryText>
              {t('pages.home.message.secondaryText')}
              </SecondaryText>
            </SecondaryGroup>
          </Column2>
          {/* <Column3 /> */}
        </SecondGrid>
      </Container>
    </Wrapper>
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
  /* background-image: url(${BackgroundTexture}); */
  /* background-color: #79837c; */
  padding: 0px 20px 0 20px;
  margin: 100px 0 200px 0;

  @media (max-width: 800px) {
    padding: 0px 10px 0 10px;
  }
  position: relative;
`

const Container = styled.div`
  width: 100%;
  display: grid;
  position: relative;
  z-index: 99;
  grid-template-rows: 1fr auto;
  gap: 80px;
  align-items: end;
  background-color: none;
  /* overflow: hidden; */
  color: white;

  @media (max-width: 800px) {
    gap: 60px;
  }
`

const MainText = styled(HeadlineRegular)`
  color: white;
  white-space: pre-wrap;
  /* max-width: 970px; */
`

const SecondaryGroup = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  padding-left: 10px;

  /* margin-top: 20px; */
`

const FirstGrid = styled.div`
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

const SecondGrid = styled.div`
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const Column1 = styled.div`
  display: grid;

  @media (max-width: 800px) {
    border: none;
  }
`
const Column2 = styled.div``
// const Column3 = styled.div`
//   padding: 20px;
// `

const SecondaryText = styled(TextSmall)`
  font-family: "GT-Alpina-Extended-Regular";
  /* font-size: 17px; */
  color: white;
  white-space: pre-wrap;
  max-width: 450px;
  @media (max-width: 500px) {
    max-width: 100%;
  }
`

const Icon = styled.img`
  margin-top: 2px;
  width: 16px;
  height: 16px;
`

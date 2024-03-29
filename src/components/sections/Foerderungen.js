import React from "react"
import styled from "styled-components"
import FaceGrafik from "../../../static/images/Face.png"
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import {
  // PageHeader,
  TextSmall,
  // ImageDescription,
  HeadlineRegular,
  HeadlineRegular2,
} from "../styles/TextStyles"

export default function Foerderungen() {
  const {t} = useTranslation()
  return (
    <Wrapper>
      <Content>
        <Headline>{t('pages.home.supportedBy')}</Headline>
        <LogoLineGroup>
          <LogoGroup>
            <Logo src="/icons/neustartKultur.png"></Logo>
            <Logo src="/icons/bkm.png"></Logo>
            <Logo src="/icons/initiativeMusik.png"></Logo>
          </LogoGroup>
        </LogoLineGroup>
        {/* <LineGroup>
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </LineGroup> */}
      </Content>
      {/* <Face /> */}
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

const LogoLineGroup = styled.div`
  /* position: relative; */
`
const LineGroup = styled.div`
  /* top: 200px; */
`

const Line = styled.div`
  height: 10px;
  background-color: red;
  margin-bottom: 3px;
`

const Wrapper = styled.div`
  padding: 200px 40px 80px 40px;
  /* display: grid; */
  /* justify-content: center; */
  /* background: white; */
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`

const Content = styled.div`
  /* max-width: 800px; */
  /* display: grid; */
  justify-content: center;
`

const Headline = styled(TextSmall)`
  font-family: "GT-Alpina-Extended-Regular";
  color: white;
  margin-bottom: 32px;
  text-align: center;
`

const LogoGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 64px;
  background-color: white;
  border-radius: 400px;
  /* border: 10px solid #48b9f8; */
  padding: 40px;
  @media (max-width: 768px) {
    padding: 30px;
    gap: 32px;
    grid-template-columns: 1fr;
  }
`

const Logo = styled.img`
  height: 120px;
  background-color: white;

  @media (max-width: 768px) {
    height: 100px;
  }
`

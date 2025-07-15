import React, { useState, useEffect, useMemo } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Hero from "../components/sections/Hero"
import SideNavigation from "../components/navigation/SideNavigation"
import Layout from "../components/layout/layout"
import Ticker from "../components/ticker/Ticker"
import Footer from "../components/footer/footer"
import { Link } from "gatsby"

import SideLine from "../components/navigation/SideLine"
import Lineup from "../components/sections/Lineup"
import MobileNavigation from "../components/navigation/MobileNavigation"
import LinkList from "../components/sections/LinkList"

import HeroArtwork from "../../static/images/header-2025.jpg"
import FormButton from "../components/buttons/FormButton"

import ScratchGallery from '../components/scratch-card/ScratchGallery';

import ScratchCard from "../components/scratch-card/ScratchCard"

const interleaveAndPick = (dayArr, nightArr, count) => {
  if (!dayArr || !nightArr) return [];

  const shuffledDay = [...dayArr].sort(() => 0.5 - Math.random());
  const shuffledNight = [...nightArr].sort(() => 0.5 - Math.random());
  
  const result = [];
  let dayIndex = 0;
  let nightIndex = 0;

  while (result.length < count && (dayIndex < shuffledDay.length || nightIndex < shuffledNight.length)) {
    if (dayIndex < shuffledDay.length) {
      result.push(shuffledDay[dayIndex++]);
    }
    if (result.length < count && nightIndex < shuffledNight.length) {
      result.push(shuffledNight[nightIndex++]);
    }
  }
  return result;
};

// This Head is for SEO, it gives us the main Google headline that pops up on searches
export const Head = () => (
  <>
    <title>Klein und Haarig Festival</title>
    <meta name="description" content="🌲 09.07. — 12.07.26 🌲 Independent and off-centre music experience in nature" />
  </>
)

export default function IndexPage({ data }) {

  const allDayImageUrls = useMemo(() => 
    data.dayImages.nodes.map(node => node.publicURL), 
    [data.dayImages.nodes]
  );
  const allNightImageUrls = useMemo(() => 
    data.nightImages.nodes.map(node => node.publicURL), 
    [data.nightImages.nodes]
  );
  
  const [currentImages, setCurrentImages] = useState([]);

  const handleShuffle = () => {
    setCurrentImages(interleaveAndPick(allNightImageUrls, allDayImageUrls, 5));
  };

  useEffect(() => {
    handleShuffle();
  }, [allNightImageUrls, allDayImageUrls]);

  return (
    <>
    <Layout>
      <Wrapper>
        <SideNavigation bgColor="#000" />
        <Content>
          <MobileNavigation bgColor="#000" />
            <HeroSection>
              <MainGrid>    
                <ScratchGallerySection>
                  <ScratchGallery images={currentImages} onShuffle={handleShuffle}/>
                </ScratchGallerySection>
                <PhotosTextGroup>
                    <CreditTextLink href="https://www.instagram.com/lucyrosenixon/" target="_blank">
                      <PhotosCreditText>Photos by Lucy Nixon ↗</PhotosCreditText>
                    </CreditTextLink>
                </PhotosTextGroup>
              </MainGrid>
            </HeroSection>

            <LinkListSection>
              <Artwork>
                <LinkListContainer>
                  <Lineup />
                  <CreditTextGroup>
                    <CreditTextLink href="https://www.instagram.com/anja.lekavski/" target="_blank">
                      <CreditText>Artwork by Anja Lekavski ↗</CreditText>
                    </CreditTextLink>
                    <CreditTextLink href="https://www.instagram.com/raoulgottschling/" target="_blank">
                      <CreditText>Font by Raoul Gottschling ↗</CreditText>
                    </CreditTextLink>
                </CreditTextGroup>
                </LinkListContainer>
              </Artwork>
            </LinkListSection>

            <FooterSection>
              <MainGrid>
                <SideLine />
                <Footer bgColor="black" />
              </MainGrid>
            </FooterSection>
          </Content>
        </Wrapper>
      </Layout>
    </>
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
    dayImages: allFile(
      filter: {
        sourceInstanceName: {eq: "festivalImagesDay"}, 
        extension: {regex: "/(jpg)|(jpeg)|(png)/"}
      }
    ) {
      nodes {
        publicURL
      }
    }
    nightImages: allFile(
      filter: {
        sourceInstanceName: {eq: "festivalImagesNight"}, 
        extension: {regex: "/(jpg)|(jpeg)|(png)/"}
      }
    ) {
      nodes {
        publicURL
      }
    }
  }
`

const Wrapper = styled.div`
  overflow: hidden;
`

const Content = styled.div`
  /* overflow-y: scroll; */
  overflow-x: hidden;
`
const MainGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const LinkListContainer = styled.div`
  display: grid;
  grid-template-columns: flex;
  padding-left: 133px;

  @media (max-width: 800px) {
    grid-template-columns: flex;
    padding-left: 0px;
  }
`

const HeroSection = styled.div`
  position: relative;
  @media (max-width: 800px) {
    padding-top: 75px;
  }
`
const ImageSectionDesktop = styled.div``

const Artwork = styled.div`
  /* height: 100vh; */
  /* width: 300px; */
  position: relative;
  /* top: -800px; */
  /* border: 20px solid white; */
  background-image: url(${HeroArtwork});
  background-size: cover;
  /* background-size: 140%;
  background-position: 5% 79%; */

  @media (max-width: 800px) {
    background-position: 30%;
  }
`

const ArtworkAnimation = styled.video`
  width: 1800px;
  height: 900px;
  position: absolute;
  top: 0;
`

const LineupSection = styled.div`
  background-color: #b3dbf1;
  z-index: 9;
`

const ImageSection = styled.div`
  /* background-image: black; */
  background-color: #000;
`

const FoerderungenSection = styled.div`
  background-color: #000;
`
const LinkListSection = styled.div`
  background-color: #000;
`

const FooterSection = styled.div`
  background-color: #000;
`

const HideSideline = styled.div`
  opacity: 0;
`

const TickerGroup = styled.div`
  position: fixed;
  bottom: 0;

  z-index: 999;
`

const Spacer = styled.div`
  height: 70px;
  background: black;
  @media (max-width: 800px) {
    height: 60px;
  }
`

const LinkButton = styled.div`
  margin-bottom: 20px;
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 100;
  width: 200px;

  @media (max-width: 1100px) {
    display: none;
  }
`

const LinkInline = styled.a`
  /* display: inline; */

  & > :hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  :hover {
    /* transform: scale(1.02); */
    /* cursor: pointer; */
    /* transition: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1); */
  }
`

const PhotosTextGroup = styled.div`
  width: 100%;
  position: absolute;
  bottom: 32px;
  z-index: 99;
  align-items: center;
  justify-content: center;
  padding-left: 133px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 800px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

const CreditTextGroup = styled.div`
  width: 100%;
  height: 32px;
  position: relative;
  bottom: 6px;
  z-index: 99;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 800px) {
    padding-left: 16px;
    padding-right: 16px;
    height: 40px;
    gap: 4px 8px;
  }

  @media (max-width: 484px) {
    padding-left: 16px;
    padding-right: 16px;
    height: 80px;
    gap: 8px; 
  }
`


const CreditTextLink = styled.a`
  margin-bottom: -12px;

  & > :hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  :hover {
    /* transform: scale(1.02); */
    /* cursor: pointer; */
    /* transition: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1); */
  }
`

const CreditText = styled.div`
  display: inline-block;
  color: #f0f263;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 8px;
  padding-left: 8px;
  font-family: Inter;
  font-size: 0.7em;
  font-weight: 500;
  margin-bottom: 12px;
  position: relative;
  // text-shadow: 0px 0px 16px rgba(0, 0, 0, 1);

  @media (max-width: 800px) {
    font-size: 0.6em;
  }
`

const PhotosCreditText = styled.div`
  display: inline-block;
  color: #f0f263;
  font-family: Inter;
  font-size: 0.7em;
  font-weight: 500;
  margin-bottom: 0px;
  position: relative;
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.8);

  @media (max-width: 800px) {
    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.8);
    font-size: 0.6em;
  }
`

const ScratchGallerySection = styled.div`
  padding: 0px;
  color: transparent;
  background-color: transparent;
`;
import React from "react"
import styled from "styled-components"
import FaceGrafik from "../../../static/images/Face.png"

import {
  // PageHeader,
  TextSmall,
  // ImageDescription,
  HeadlineRegular,
  HeadlineRegular2,
} from "../styles/TextStyles"

export default function Foerderungen() {
  return (
    <Wrapper>
      <Content>
        <Headline>Gefördert durch</Headline>
        <LogoGroup>
          <Logo src="/icons/neustartKultur.png"></Logo>
          <Logo src="/icons/bkm.png"></Logo>
          <Logo src="/icons/initiativeMusik.png"></Logo>
        </LogoGroup>
      </Content>
      {/* <Face /> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 120px 40px;
  display: grid;
  justify-content: center;
  background: white;
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`

const Content = styled.div`
  max-width: 800px;
  display: grid;
  justify-content: center;
  /* overflow: hidden; */
`

const Headline = styled(TextSmall)`
  font-family: "GT-Alpina-Extended-Regular";
  color: rgba(0, 0, 0, 0.75);
  margin-bottom: 64px;
  text-align: center;
`

const LogoGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 64px;
`

const Logo = styled.img`
  height: 120px;
  background-color: white;
`

const Face = styled.div`
  background-image: url(${FaceGrafik});
  width: 450px;
  height: 476px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  bottom: -5px;
  right: 10%;
  transform: rotate(180deg);
  @media (max-width: 1200px) {
    right: -1%;
  }
  @media (max-width: 1100px) {
    width: 367px;
    height: 387px;
    bottom: -40px;
  }
`

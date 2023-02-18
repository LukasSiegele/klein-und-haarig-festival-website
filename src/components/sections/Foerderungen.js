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
  padding: 120px 40px;
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
  color: black;
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
  border: 10px solid black;
  padding: 40px;
  @media (max-width: 768px) {
    /* padding: 30px; */
    /* grid-template-columns: 1fr; */
  }
`

const Logo = styled.img`
  height: 120px;
  background-color: white;
`

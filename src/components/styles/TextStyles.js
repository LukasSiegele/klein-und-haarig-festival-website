import styled from "styled-components"
import { themes } from "./ColorStyles"

// Big Headlines
export const BigHeadline = styled.h1`
  font-size: 3.2rem;
`

export const FrontpageHeadline = styled.h1`
  font-size: 80px;

  @media (max-width: 768px) {
    font-size: 70px;
  }

  @media (max-width: 700px) {
    font-size: 50px;
  }
`

export const FrontpageInfos = styled.h3`
  font-family: "GT-Alpina-Extended-Regular";
  @media (max-width: 700px) {
    font-size: 0.9em;
    line-height: 1.35em;
  }
`

export const MasterHeadline = styled.h1`
  font-size: 120px;

  @media (max-width: 768px) {
    font-size: 100px;
  }

  @media (max-width: 700px) {
    font-size: 90px;
  }
`
export const H2 = styled.h2`
  font-weight: bold;
  font-size: 40px;

  @media (max-width: 450px) {
    font-size: 28px;
  }
`
export const H3 = styled.h3`
  font-weight: bold;
  font-size: 30px;

  @media (max-width: 450px) {
    font-size: 24px;
  }
`

// Große Headlines
export const Headline = styled.h2`
  font-family: "GT-Alpina-Extended-Bold";
  color: white;

  /* @media (max-width: 450px) {
    font-size: 28px;
  } */
`
export const HeadlineRegular = styled.h2`
  font-family: "GT-Alpina-Extended-Regular";
  color: white;

  @media (max-width: 800px) {
    font-size: 28px;
  }
`
export const HeadlineRegular2 = styled.h2`
  font-family: "GT-Alpina-Extended-Regular";
  color: white;

  @media (max-width: 800px) {
    font-size: 35px;
  }
`

// Texte
export const Text = styled.p``

// Kleine Hinweistexte
export const Note = styled.h5`
  color: white;
`

// Headlines in Info Texts
export const SubheaderBig = styled.h3`
  font-size: 40px;
  font-family: "GT-Alpina-Extended-Bold";
  color: white;
`

export const SubheaderSmall = styled.h4`
  font-family: "GT-Alpina-Extended-Bold";
  color: white;
`

export const SubheaderSuperSmall = styled.h5`
  font-family: "GT-Alpina-Extended-Bold";
  color: white;
`

// Text

// Infotexte
export const TextSmall = styled.p`
  color: white;
  font-size: 0.85em; ;
`

// Bildbeschreibungen
export const ImageDescription = styled.p`
  font-family: "GT-Alpina-Extended-Regular";
  font-size: 0.6em;
  /* opacity: 0.6; */
  margin-top: 8px;
`

export const TickerText = styled.p`
  font-family: "GT-Alpina-Extended-Regular";
  font-size: 17px;
  /* color: black; */
`

// Shop Title
export const PageHeader = styled.h3`
  font-family: "GT-Alpina-Extended-Regular";
  font-size: 35px;
  font-weight: 100;
  color: black;
  @media (max-width: 800px) {
    font-size: 28px;
  }
`

export const PageInfo = styled.h4`
  color: black;
  text-transform: uppercase;
  font-size: 0.8em;
  @media (max-width: 800px) {
    font-size: 0.7em;
  }
`

export const HeaderText = styled.h3`
  font-size: 16px;
  text-transform: uppercase;
`

// export const BodyIntro = styled.p`
//   font-weight: 500;
//   font-size: 24px;
//   line-height: 140%;
// `
// export const BodyMain = styled.p`
//   font-weight: 500;
//   font-size: 20px;
//   line-height: 140%;
// `
// export const MediumText = styled.p`
//   font-weight: normal;
//   font-size: 17px;
//   line-height: 140%;
// `
// export const Caption = styled.p`
//   font-weight: normal;
//   font-size: 17px;
//   line-height: 130%;
// `

// export const SmallText = styled.p`
//   font-weight: 600;
//   font-size: 13px;
//   line-height: 130%;
//   text-transform: uppercase;
// `

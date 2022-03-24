import styled from "styled-components"
import { themes } from "./ColorStyles"

// Big Headlines
export const BigHeadline = styled.h1`
  font-size: 3.2rem;
`

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 60px;

  @media (max-width: 450px) {
    font-size: 34px;
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

// Texte
export const Text = styled.p``

// Kleine Hinweistexte
export const Note = styled.h5`
  color: rgba(255, 255, 255, 0.6);
`

// Headlines in Info Texts
export const SubheaderSmall = styled.h4`
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
`

// Shop Title
export const PageHeader = styled.h3`
  font-family: "GT-Alpina-Extended-Regular";
  font-size: 35px;
  font-weight: 100;
  color: black;
`

export const PageInfo = styled.h4`
  font-size: 1rem;
  color: black;
  text-transform: uppercase;
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

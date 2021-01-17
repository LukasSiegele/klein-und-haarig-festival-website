import styled from "styled-components"
import { themes } from "./ColorStyles"

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

export const PageHeader = styled.h3`
  font-family: GT-Alpina-Fine-Thin;
  font-size: 35px;
  font-weight: 100;
  color: white;
`

export const PageInfo = styled.h4`
  font-size: 20px;
  /* color: ${themes.acid.secondaryColor}; */
  color: white;
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

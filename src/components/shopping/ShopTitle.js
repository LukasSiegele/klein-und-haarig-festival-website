import React from "react"
import styled from "styled-components"
import { PageHeader, PageInfo } from "../styles/TextStyles"
import LogoSVG from "../../../static/images/LogoSideNav.svg"
import { Link } from "gatsby"
import Zeplin from "../../../static/images/SuccessZeppelin.png"

import BackgroundTexture from "../../../static/images/BackgroundTexture.png"

export default function ShopTitle(props) {
  return (
    <Wrapper>
      <Link to="/">
        <Logo />
      </Link>
      <Content>
        <Info>{props.info}</Info>
        <Title>{props.title}</Title>
        <ZeplinGrafik />
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-image: url(${BackgroundTexture});
  padding: 40px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  position: relative;
  @media (max-width: 800px) {
    padding: 20px;
  }
`

// KuH Logo in TopNav
const Logo = styled.div`
  width: 84px;
  height: 79px;
  margin-right: 40px;
  background-image: url(${LogoSVG});
  background-size: cover;
  align-self: center;
  @media (max-width: 800px) {
    margin-right: 20px;
  }
  :hover {
    cursor: pointer;
  }
`

const Content = styled.div`
  display: grid;
  justify-items: start;
  margin-top: 8px;
`

const ZeplinGrafik = styled.div`
  width: 372px;
  height: 308px;
  background-image: url(${Zeplin});
  background-size: cover;
  position: fixed;
  left: 20px;
  top: 100px;
  z-index: 100;
`

const Info = styled(PageInfo)`
  margin-bottom: 4px;
`
const Title = styled(PageHeader)``

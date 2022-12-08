import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import NavBackground from "../../../static/images/SideNavBackground.png"

import LogoSideNav from "../../../static/images/LogoSideNav-Black.png"

import { TextSmall } from "../styles/TextStyles"

export default function SideNavigation(props) {
  return (
    <Desktop>
      <SideNavWrapper bgColor={props.bgColor}>
        <SideNavLogoWrapper>
          <Link to="/">
            <SideNavLogo />
          </Link>
        </SideNavLogoWrapper>
        <SideNavLinkGroup>
          {/* <Link to={"/info"}>
          <ListItem>Info</ListItem>
        </Link>
        <Link to={"/info"}>
          <ListItem>Info</ListItem>
        </Link>
        <Link to={"/info"}>
          <ListItem>Info</ListItem>
        </Link> */}
          <Link to={"/info"}>
            <a>
              <ListItem>Info</ListItem>
            </a>
          </Link>
        </SideNavLinkGroup>
      </SideNavWrapper>
    </Desktop>
  )
}

// Fixed SideNav on Frontpage
const MobileView = styled.div`
  /* display: none; */
`

const Desktop = styled.div`
  /* display: none; */
`

const SideNavWrapper = styled.div`
  position: fixed;
  display: grid;
  justify-items: center;
  grid-template-rows: auto auto;

  /* background-color: ${props => props.bgColor}; */

  height: 100vh;
  z-index: 100;
  border-right: 1px solid;
  width: 133px;

  animation: SideBarAnimation 1.3s 0.4s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;

  @keyframes SideBarAnimation {
    0% {
      opacity: 0;
      transform: translateX(-200px);
    }

    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`

const SideNavLogoWrapper = styled.div`
  padding: 15px;
  /* mix-blend-mode: difference !important; */
`

// KuH Logo in SideNav
const SideNavLogo = styled.div`
  width: 64px;
  height: 62px;
  background-image: url(${LogoSideNav});

  background-size: cover;
  :hover {
    cursor: pointer;
  }
`

const SideNavLinkGroup = styled.div`
  /* display: grid; */
  text-align: center;
  filter: invert(1) !important;
  mix-blend-mode: difference !important;
`

const ListItem = styled(TextSmall)`
  color: #999;
  font-family: "GT-Alpina-Extended-Regular";

  &:hover {
    cursor: pointer;
  }
`

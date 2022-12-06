import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import NavBackground from "../../../static/images/SideNavBackground.png"

import LogoSideNav from "../../../static/images/LogoSideNav-White.png"

import { TextSmall } from "../styles/TextStyles"

export default function SideNavigation() {
  return (
    <SideNavWrapper>
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
          <ListItem>Info</ListItem>
        </Link>
      </SideNavLinkGroup>
    </SideNavWrapper>
  )
}

// Fixed SideNav on Frontpage
const SideNavWrapper = styled.div`
  position: fixed;
  display: grid;
  justify-items: center;
  grid-template-rows: auto auto;

  /* background-image: url(${NavBackground}); */

  height: 100vh;
  z-index: 100;
  /* border-right: 1px solid; */
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
`

// KuH Logo in SideNav
const SideNavLogo = styled.div`
  width: 64px;
  height: 62px;
  background-image: url(${LogoSideNav});
  mix-blend-mode: color-dodge;

  background-size: cover;
  :hover {
    cursor: pointer;
  }
`

const SideNavLinkGroup = styled.div`
  /* display: grid; */
  text-align: center;
`

const ListItem = styled(TextSmall)``
